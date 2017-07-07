<template>
	<div>
		<section class="box">
			<swiper  class="swiper-wrapper imglist">
				<swiper-slide class="swiper-slide imgwrap" :key="index" v-for='(banner,index) in banners'>
					<a href="javscript:;">
						<img :src="banner"/>
					</a>
				</swiper-slide>
			</swiper >
			<div class="swiper-pagination swiper-pagination-bullets"></div>
		</section>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper' 
	export default{
		name:'info',
		components: {  
            swiper,  
            swiperSlide  
        },  
		data (){
			return {
				banners:[
					'//img.alicdn.com/bao/uploaded/i2/TB1SM.2QFXXXXXxXFXXXXXXXXXX_!!0-item_pic.jpg_640x640q50.jpg',
					'//img.alicdn.com/bao/uploaded/i2/1808940384/TB27YdXorxmpuFjSZJiXXXauVXa_!!1808940384.jpg_760x760Q50s50.jpg_.webp',
					'//img.alicdn.com/bao/uploaded/i4/1808940384/TB2uGkvl3xlpuFjSszbXXcSVpXa_!!1808940384.jpg_760x760Q50s50.jpg_.webp',
					'//img.alicdn.com/bao/uploaded/i1/1808940384/TB2y8gVod0opuFjSZFxXXaDNVXa_!!1808940384.jpg_760x760Q50s50.jpg_.webp'
				],
				swiperOption:{
					initialSlide:1,
					loop:true,
					pagination: '.swiper-pagination'
				}
			}
		},
/*		 //定义这个sweiper对象  
        computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        }, */
	}
</script>

<style>
	.box{
		width:100%;
		overflow: hidden;
	}
	.imglist{
		width:100%;
		height:15rem;
	}
	.imgwrap{
		height:100%;
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