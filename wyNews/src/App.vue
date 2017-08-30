<template>
  <div id="app">
  	<app-header></app-header>
  	<div class="line"></div>
  	<nav-list></nav-list>
  	<app-banner></app-banner>	
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import NavList from './components/NavList.vue'
import AppBanner from './components/Banner.vue'
export default {
  name: 'app',
	components:{
		AppHeader,
		NavList,
		AppBanner
	}
}
</script>

<style>
#app{
	height:100%;
	width:100%;
	box-sizing: border-box;
}
.line{
	width:100%;
	border-bottom:1px solid #d51c1c;
}
</style>
