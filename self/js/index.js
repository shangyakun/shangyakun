window.onload = function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'vertical',
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
		  }, 
		  onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		  } 
	    
	  })
	var isplay = false;
	$("#music").click(function(){
		if(isplay){
			$("#music-main")[0].pause();
			$(".control-after").css({animation:'none',background:'../image/music_pause'})
		}else{
			$("#music-main")[0].play();
			$(".control-after").css({animation:'rotate2d 1.2s linear infinite',background:'../image/music_off'})
		}
		isplay = ! isplay;
		
	})
}
