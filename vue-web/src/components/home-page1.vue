<template>
	<div>
		<div class="text-box">
			<input @focus="$router.push('search')" class="tex" type="text" placeholder="输入关键字搜索" />
		</div>
		<div class="left-bar">
			<a href="javascript:;" class="item" v-for="i in list" @touchmove='con'>
				<div class="item-img">
					<img src="../img/TB.jpg" alt="新款上市 Adidas" />
				</div>
				<div class="itme-info">
					<div class="item-title">
						<h3>{{i.title}}</h3>
					</div>
					<div class="item-price">
						<i>
							{{i.price}}
							<span>.00</span>
							<span>
								{{i.sales}}
							</span>
						</i>
					</div>
				</div>
			</a>

		</div>
		<div class="right-bar">
			<a href="javascript:;" class="item" v-for="i in list">
				<div class="item-img">
					<img src="../img/TB.jpg" alt="新款上市 Adidas" />
				</div>
				<div class="itme-info">
					<div class="item-title">
						<h3>{{i.title}}</h3>
					</div>
					<div class="item-price">
						<i>
							{{i.price}}
							<span>.00</span>
							<span>
								{{i.sales}}
							</span>
						</i>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import { mapState,mapActions } from 'vuex'
	export default {
	name:'home',
	methods:{
		con:function(){
			console.log(132)
		}
	},
	computed:mapState({
		list:state=>state.list
	}),
	mounted: function () {
    	this.$store.dispatch('GET_LIST')
  	}

}
</script>

<style>
	.text-box{
		background: #DD2626;
		font-size: .4rem;
		line-height: 44px;
		width: 100%;
		height:44px;
		text-align: center;
		position: fixed;
		top:0;
		left: 0;
	}
	.text-box .tex{
		border: 1px solid #ccc;
		color: #DEDEDE;
		height:1.1rem;
		line-height:1.1rem;
		width:80%;
		padding-left: 10px;
	}
	.left-bar{
		width:50%;
		float: left;
		box-sizing: border-box;
		padding-right: 0.2rem;
	}
	.right-bar{
		width:50%;
		float: left;
		box-sizing: border-box;
		padding-left: 0.2rem;
	}
	.item{
		overflow: hidden;
		margin-top:3px;
	}
	.item-img{
		width:7.4rem;
		height:7.4rem;
	}
	.item-img>img{
		width: 100%;
		height: 100%;
	}
	.itme-info{
		padding: 5px;
	}
	.itme-info .item-title h3{
		font-size: .24rem;
		line-height: .72rem;
		color:#333;
		height: .72rem;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.item-price{
		height:14px;
		line-height: 14px;
		font-size: 14px;
		margin-top: 4px;
		margin-right: 10px;
		color: #dd2727;
		font-weight: 700;
	}
	.item-price span{
		font-size: .24rem;
	}
	.item-price span:nth-of-type(2){
	font-size: 12px;
    color: #999;
    height: 14px;
    line-height: 14px;
    margin-left: 9px;
    font-weight: 400;
	}
</style>