import Vue from 'vue'
import Vuex from 'vuex'
import VueJsonp from 'vue-jsonp'
import mutations from './mutations'
import * as types from './mutation-types'
Vue.use(Vuex);
Vue.use(VueJsonp);
export default new Vuex.Store({
	state:{
		bannerList:[],
		newsList:[],
		refreshData:[],
		infiniteData:[],
		navlist:[
			{
				name:'推荐',
			},
			{
				name:'新闻'
			},
			{
				name:'娱乐'
			},
			{
				name:'体育'
			},
			{
				name:'图片'
			},
			{
				name:'财经'
			},
			{
				name:'军事'
			},
		]
	},
	actions:{
		GET_LIST({commit}){
			Vue.jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-10.html').then((response)=>{
				if(response.code==200){
					let bannerList = response.focus.filter(item=>{
						return item.addata==null;
					}).map(item=>{
						return {
							title:item.title,
							url:item.link,
							imgurl:item.picInfo[0].url
						}
					})
					commit(types.GET_LISTS,bannerList)
				}
				
			})
		}
	},
	mutations
});

