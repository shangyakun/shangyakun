import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Find from '../components/find.vue'
import List from '../components/list.vue'
import Search from '../components/search.vue'
import HomePage1 from '../components/home-page1.vue'
import Login from '../components/login.vue'
import Item from '../components/item.vue'
import Info from '../components/info.vue'
import Assess from '../components/assess.vue'
Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			component:Home,
			children:[
				{
					path:'',
					component:HomePage1
				},
				{
					path:'/list',
					component:List
				}
			]
		},
		{
			path:'/search',
			component:Search
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/find',
			component:Find,
			children:[
				{
					path:'/find/info',
					component:Info
				},
				{
					path:'/find/item',
					component:Item
				},
				{
					path:'/find/assess',
					component:Assess
				}
			]
		}

	]
		

})













































