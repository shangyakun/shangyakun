<template>
	<div class="find">
		<div class="head-list">
			<router-link :to="{ path: '/find/info'}" active-class="active">基本信息</router-link>
			<router-link to='/find/item' active-class="active">商品详情</router-link>
			<router-link to='/find/assess' active-class="active">评价2890</router-link>
		</div>
		<router-view></router-view>
		<div class="item-footer">
			<div class="support cell">
				<a href="javscript:;"></a>	
			</div>
			<div class="toshop cell"></div>
			<div class="addfav cell"></div>
			<button class="cart cell">加入购物车</button>
			<button class="buy cell">立即购买</button>
		</div>
	</div>
</template>

<script>
	export default {
		name:'find'
	}
</script>

<style>
	.find{
		height:100%;
		width:100%;
		background:#ECECEC;
		padding-bottom:50px;
		box-sizing: border-box;
	}
	.head-list{
		display:flex;
 	    justify-content:space-around;
	    align-items: center;
	}
	.head-list a{
		height:46px;
	    line-height: 46px;
		flex:1;
		text-align: center;
		height:100%;
		color:#333333;
		display: block;
		font-size: .5rem;
		border-top:2px solid transparent;
	}
	.head-list a.active{
		border-top-color: #c40000;
		color:#c40000;
	}
	.item-footer{
		display: flex;
		justify-content:space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		width:100%;
		height:50px;
		z-index: 555;
		border-top:1px solid #e5e5e5;
		box-sizing: border-box;
	}
	.item-footer .cell{
		height:49px;
		text-align: center;
		width:0;
		flex: 1;
		flex-basis: 0;
		display: block;
		position: relative;
		padding:0 important;
	}
	.item-footer .support,
	.item-footer .addfav,
	.item-footer .toshop{
		max-width: 50px;
		min-width: 26px;
		border-right:rgba(0,0,0,.5);
	}
	.item-footer>button{
		border: none;
		flex: 1;
		font-size:15px;
		color:#fff;
		
	}
	.item-footer .cart{
		background: #ff9500;
	}
	.item-footer .buy{
		background: #dd2727;
	}
</style>