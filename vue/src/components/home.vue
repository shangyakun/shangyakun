<template>
	<div class="main fix">
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
	
</template>

<script>
import AppFooter from './footer.vue'
export default {
	name:'home',
	components:{
		AppFooter
	}
}
</script>

<style>
	.main{
		background: #eee;
		width: 100%;
		height: 100%;
/*		padding-top:46px;
		padding-bottom:50px;*/
	}
	
</style>