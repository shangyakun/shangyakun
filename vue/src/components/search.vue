<template>
	<div>
		<div class="searchbox">
			<div class="back" @click="$router.push('/')">
				<i></i>
			</div>
			<form method="post">
				<input @blur="blur" 
					class="search" 
					type="search" 
					v-model="msg" 
					placeholder="阿迪达斯 跑步鞋" />
			</form>
		</div>
		<div class="search-content">
			<div class="search-item">
				<div class="hot-search fix">
					<i>&aelig;</i>
					<span>热门搜索</span>
				</div>
				<div class="search-item-list">
					<span>衬衫</span>
				</div>
				<div class="search-item-list">
					<span>T恤</span>
				</div>
				<div class="search-item-list">
					<span>连衣裙</span>
				</div>
				<div class="search-item-list">
					<span>短袖T恤</span>
				</div>
				<div class="search-item-list">
					<span>牛仔裤</span>
				</div>
				<div class="search-item-list">
					<span>手机</span>
				</div>
				<div class="search-item-list">
					<span>短袖T恤</span>
				</div>
				<div class="search-item-list">
					<span>牛仔裤</span>
				</div>
				<div class="search-item-list">
					<span>短袖T恤</span>
				</div>
				<div class="search-item-list">
					<span>牛仔裤</span>
				</div>
				<div class="search-item-list">
					<span>手机</span>
				</div>
				<div class="search-item-list">
					<span>短袖T恤</span>
				</div>
				<div class="search-item-list">
					<span>牛仔裤</span>
				</div>
			</div>	
		</div>
	</div>
	
</template>

<script>
	import { mapState,mapActions } from 'vuex'
	export default{
		name:'search',
/*		props:{
			value:{
				type:Number,
				default:''
			}
		},*/
		data (){
			return {
				msg:''
			}
		},
		methods:{
			blur:function(){
    			this.$store.dispatch('GET_USER',this.msg);
			}
		},
		/*mounted: function () {
		 	//主动触发
    		this.$store.dispatch('GET_USER',{user:this.msg});
  		}*/
		
	}
</script>

<style>
	.searchbox {
		background-color: rgba(0,0,0,.85);
	    position: relative;
	    box-shadow: 0 2px 2px rgba(0,0,0,.1);
	    height: 44px;
	    width: 100%;
	}
	.back {
		height:44px;
		color:rgba(255,255,255,.7);
		font-size: 1.2rem;
		width:1.4rem;
		position: absolute;
		top:0px;
		left:5px;
	}
	.back i{
		height:100%;
		width:100%;
		background: url(../img/back.png) no-repeat center;
		display: inline-block;
		background-size: 40%;
	}
	.searchbox form {
		position: relative;
	    margin-left: 37px;
	    margin-right: 10px;
	    padding: 5px 0 5px 6px;
	    box-sizing: border-box;
	    height: 100%;
	}
	.searchbox .search {
	    padding-left: 25px;
	    float: left;
	    width: 100%;
	    background: #FFF;
	    vertical-align: middle;
	    height: 100%;
	    box-shadow: none;
	    border: none;
	    outline: 0;
	    color: #333;
	    font-size: 14px;
	}
	.search-content {
		position: absolute;
		top:44px;
		bottom:0;
		width:100%;
		padding:0.2rem;
		box-sizing: border-box;
		font-size: 14px;
	}
	.search-item{
		padding:8px;
		min-height:60px;
		color: #999999;
		border: 0;
		overflow: hidden;
	}
	.hot-search {
		font-size: 12px;
	}
	.hot-search i{
		height: 16px;
		width:16px;
		float: left;
		font-size: 12px;
	}
	.hot-search span {
		float: left;
		height: 18px;
		line-height: 16px;
		font-size: 16px;
	}
	.search-item-list {
		float: left;
		margin:10px 10px 0 0;
		padding:1px 5px;
		border: 1px solid #999;
		border-radius: 2px;
	}
	.search-item-list span {
		text-align: center;
	}
</style>