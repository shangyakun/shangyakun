// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
	el:'#app',
  store,
  template: '<App/>',
  components: { 
  	App 
  }
});



(function(){

	var html = document.documentElement;
	
	var hWidth = html.getBoundingClientRect().width;
	
	hWidth = hWidth > 640 ? 640 : hWidth;
	
	html.style.fontSize = ((hWidth/15).toFixed(2)) + "px";
			
})();