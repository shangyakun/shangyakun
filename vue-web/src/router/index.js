import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Find from '../components/find.vue'
import List from '../components/list.vue'
import User from '../components/user.vue'
import Search from '../components/search.vue'
import HomePage1 from '../components/home-page1.vue'
import Login from '../components/login.vue'
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
					path:'/find',
					component:Find
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
			path:'/user',
			component:User
		},
		{
			path:'/login',
			component:Login
		}

	]
		

})













































