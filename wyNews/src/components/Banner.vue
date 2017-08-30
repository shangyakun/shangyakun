<template>
	<div>
		<!--<section class="box">
			<swiper  class="swiper-wrapper imglist">
				<swiper-slide class="swiper-slide imgwrap" :key="index" v-for='(banner,index) in banners'>
					<a href="javscript:;">
						<img :src="banner.imgurl"/>
					</a>
				</swiper-slide>
			</swiper >
			<div class="swiper-pagination swiper-pagination-bullets"></div>
		</section>-->
      </swiper>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import { swiper,swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'banner',
		component:{
			swiper, 
			swiperSlide
		},
		computed:{
			...mapState({
				banners:state=>state.bannerList
			})
		},
		mounted(){
			this.$store.dispatch('GET_LIST');
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
$r:20;
	.box{
		width:100%;
		overflow: hidden;
	}
	.imglist{
		width:100%;
		height:162rem/$r;
	}
	.swiper-wrapper{
		width:100%;
	}
	.imgwrap{
		height:162rem/$r;
		width:100%;
	}
	.imgwrap a{
		display: block;
		height:100%;
		width:100%;
	}
	.imgwrap img{
		height:100%;
	}
</style>