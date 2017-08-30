<template>
	<div class="navBox">
		<Scroller
			class="scroll"
			:lock-y='true'
	        @touchstart.native.stop=""
	        @touchmove.native.stop=""
	        @touchend.native.stop=""
	        @mousedown.native.stop=""
	        @mousemove.native.stop=""
	        @mouseup.native.stop=""
			>
			<div class="wy-nav">
				<tab active-color="#fff" :line-width="0">
			  		<tab-item v-for='(item,key) in navlist' active-class="active" :key="key">{{item.name}}</tab-item>
				</tab>
			</div>
			
		</Scroller>	
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { Scroller ,Tab, TabItem} from 'vux'
	export default {
	name:'navlist',
	data(){
		return {
			animate:false,
		}
	},
	  components: {
	    Scroller,
	    Tab,
	    TabItem
	  },
	computed:{
		...mapState({
			navlist:state=>state.navlist
		})
	}
}
</script>

<style>
	.scroll{
		background: #f33;
		height:44px;

	}
	.scroll li{
		height:100%;
		float: left;
	}
	.wy-nav{
		width:600px;
		height:100%;
		position: relative;
	}
	.navBox{
		padding:0 15px;
		background: #f33;
		position:relative;
	}
	.navBox:after{
		content: '>';
		display: block;
		position: absolute;
		right: 0;
		top:0;
		background:none;
		width: 40px;
		text-align: center;
		line-height: 40px;
		transform-origin: centenr;
		transform:rotate(90deg);
		font-size: 34px;
		color: #fff;
		background: #f33;
	}
	.scroll .vux-tab .vux-tab-item{
		background: #f33;
		font-size:16px ;
		color:rgba(255,255,255,.8);
	}
	.scroll .vux-tab .active{
		font-size:18px ;
	}
</style>