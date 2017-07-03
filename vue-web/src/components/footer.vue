<template>
	<nav class="nav">
		<ul class="nav-list">
			<li><router-link to='/'>首页</router-link></li>
			<li><router-link to='/find'>发现</router-link></li>
			<li><router-link to='/list'>列表</router-link></li>
			<li><a href="javascript:;" @click="$router.push('login')">我的</a></li>
		</ul>
	</nav>
	
</template>

<script>

	export default {
		name:'footer'
	}
	
</script>

<style>
	.nav{
		position: fixed;
		bottom: 0;
		left: 0;
		height:50px;
		width:100%;
		z-index: 9999;
		background: #dd2626;		
	}
	.nav-list{
		height: 100%;
		width: 100%;
		display:flex;
 	    justify-content: center;
	    align-items: center;
	}
	.nav-list li{
		flex:1;
		height: 100%;
		text-align: center;
		line-height: 50px;
	}
	a{
		color:#fff;
		display: block;
		font-size: 20px;
	}
</style>