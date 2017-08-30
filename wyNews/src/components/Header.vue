<template>
	<div id='header' @click="add">
		<div class="icon_personal"></div>
		<div class="logo"></div>
		<div class="rlogo">
			<a href="javascript:;">
				<div class="icon_download"></div>
			</a>
			<a href="javascript:;">
				<div class="icon_email"></div>
			</a>
		</div>
	</div>
</template>
<script>
	export default  {
		name:'header',
		methods:{
			add(){
				this.$store.dispatch('GET_LIST')
			}
		}
	}
	
	//http://3g.163.com/touch/jsonp/sy/recommend/0-10.html?hasad=1&offset=0&size=10&callback=syrec0  首页进入数据接口
	//http://3g.163.com/touch/jsonp/sy/recommend/0-9.html?hasad=1&loc=&miss=58&refresh=A&offset=0&size=10&callback=syrec1 刷新接口
	//http://3g.163.com/touch/jsonp/sy/recommend/10-10.html?hasad=1&miss=58&refresh=B01&offset=0&size=10&callback=syrec2 加载
</script>

<style lang="scss" scoped="" type="text/css">
	$r:25;
	#header{
		box-sizing: border-box;
		height:44px;
		width:100%;
		padding:0 12rem/$r;
		display:-webkit-flex;
		display:flex;
		justify-content: space-between;
		align-items: center;
		font-size:14px;
		background:#fff;
	}
	.icon_personal{
		height:20px;
		width:20px;
		background: url(http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/icon-personal-v2.png) no-repeat center center;
		background-size:contain;
	}
	.logo{
		height: 25px;
		width: 120px;
		background:url(http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/logo_2017_v1.png) no-repeat center center;
		background-size:contain;		
	}
	.icon_download{
		width:25px;
		height:25px;
		background: url(http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/download_2017.png) no-repeat center center;
		background-size:contain;
	}
	.icon_email{
		width:25px;
		height:25px;
		background: url(http://img2.cache.netease.com/f2e/wap/touch_index_2016/trunk/images/icon-email-v2.png) no-repeat center center;
		background-size:contain;
	}
	.rlogo{
		width:80px;
	}
	.rlogo a{
		float:left;
		margin-left:15px
	}
</style>