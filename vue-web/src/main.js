import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
require('./css/index.css')
new Vue({
	el:'#app',
	router,
	store,
	components:{
		App
	},
	template:'<App/>'
});

	/*var win = window;
	var doc = document;
	function setFontSize() {
	　　var winWidth = document.body.clientWidth;
	 
	　　// 750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
	　　var size = (winWidth / 750) * 100;
	　　doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
	};
	//这里我们给个定时器来实现页面加载完毕再进行字体设置
	setTimeout(function() {
	　　//初始化
	　　setFontSize();
	}, 100);*/

    (function(){
    	var html = document.documentElement;
    	var hWidth = html.getBoundingClientRect().width;
		html.style.fontSize = hWidth/15 + "px";
    })()
		


document.addEventListener('touchstart',function(ev){
	ev.preventDefault();
})





























