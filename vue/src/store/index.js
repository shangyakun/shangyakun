import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { SET_LIST } from './mutation'
/*axios.get('./src/store/index.txt').then((response) => {
		console.log(response)
	},(err) => {
		console.log(err)
	});*/
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		list:[],
		TorF:true,
		user:'',
		token:[]
	},
	actions:{
		GET_LIST:function({commit}){
			axios.get('./src/store/index.txt').then(function(response){
				/* console.log(response.data);
			    console.log(response.status);
			    console.log(response.statusText);
			    console.log(response.headers);
			    console.log(response.config);*/
				commit('SET_LIST',{list:response.data});
			}).catch(function(erro){
				console.log(erro)
			})
		},
		GET_USER:function({commit},user){
			commit('SET_USER',user);
			console.log(user)
		},
		GET_STOKEN:function({commit},obj){
			commit('SET_TOKEN',obj);
		}
	},
	mutations:{
		SET_LIST:(state,{list}) => {
			state.list = list;
		},
		SET_USER:(state,user) => {
			state.user = user;
			console.log(state.user);
		},
		SET_TOKEN:(state,obj) => {
			state.token.push(obj);
			if(!window.localStorage){
				alert('浏览器不支持localStorage');
			} else{
				var localStorage = window.localStorage;
				var str = JSON.stringify(state.token);
				localStorage.setItem('user',str);
				console.log(localStorage)
			}
			
		}
	}
})




































