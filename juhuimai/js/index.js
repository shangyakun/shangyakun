/**
 * Created by Administrator on 2016/9/20.
 */
$(function(){
	$('.chooseposition').find('i').click(function(){
		$('.chooseposition').hide();
		$('.moceng').hide();
		return false;
	})
   
    /*轮播图*/
   var $bannerImgLi = $('.banner-box li');
   var timer = null;
   var iIndex = 0;
   var $btnLi = $('.btn-list li');
	timer = setInterval(function(){
		iIndex++;
		if(iIndex == $bannerImgLi.length){
			iIndex = 0;
		}
		$btnLi.removeClass('active')
		$btnLi.eq(iIndex).addClass('active')
		$bannerImgLi.animate({opacity:0},function(){
			$(this).css('display','none')
		});
		$bannerImgLi.eq(iIndex).css('display','block').stop(true).animate({opacity:1});
	},3000)
	$btnLi.click(function(){
		var iIndex = $(this).index();
		$bannerImgLi.animate({opacity:0},function(){
			$(this).css('display','none')
		});
		$btnLi.removeClass('active');
		$(this).addClass('active')
		$bannerImgLi.eq(iIndex).css('display','block').stop(true).animate({opacity:1});
	})
	$btnLi.mouseenter(function(){
		clearInterval(timer)
	})
	$btnLi.mouseleave(function(){
		timer = setInterval(function(){
		iIndex++;
		if(iIndex == $bannerImgLi.length){
			iIndex = 0;
		}
		$btnLi.removeClass('active')
		$btnLi.eq(iIndex).addClass('active')
		$bannerImgLi.animate({opacity:0},function(){
			$(this).css('display','none')
		});
		$bannerImgLi.eq(iIndex).css('display','block').stop(true).animate({opacity:1});
	},3000)
	})
	
	/*名酒选项卡*/
	var i=0;
	var $alcoholLi = $('.titlebox li')
	$alcoholLi.mouseenter(function(){
		var index = $(this).index();
		$alcoholLi.removeClass('on');
		$(this).addClass('on');
		$('.logowrap').css({display:"none"});
		$('.logowrap').eq(index).css({display:'block'})
		$('.slider').animate({left:index*105},400);
		$('.direcationbtn-box').css({display:'none'})
		if(index == 0){
		$('.direcationbtn-box').css({display:'block'})
		}
	})
	$('.logoFirst img').mouseenter(function(){
		$(this).stop(true).animate({left:-100})
	})
	$('.logoFirst img').mouseleave(function(){
		$(this).stop(true).animate({left:0})
	})
	$('.left').click(function(){
		oBtn = true;
		i--;
		if(i<0){
			oBtn = false;
			i = 0;
		}
		if(oBtn){
			$('.logobox-bg').animate({left:-$Width*i})
		}
	})
	$('.right').click(function(){
		oBtn = true
		i++;
		if(i>=2){
			oBtn = false;
			i = 1;
		}
		if(oBtn){
			$('.logobox-bg').animate({left:-$Width*i})
		}
	})
	/*热门店铺*/
	var iSpeed = 5;
	var otimer1 = null;
	$('.brand-wall').find('img').mouseenter(function(){
	
	})
	
	/*疯狂抢购选项卡*/
	$('.tab-nav li').mouseenter(function(){
		var index = $(this).index();
		$('.tab-nav li').removeClass('active');
		$(this).addClass('active');
		$(".tab-panel").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*------一楼tab选项卡------*/
	/*楼层调数据*/
	//$('.iphone').html('');
	var num = 0;
	$.get("js/liebiao.txt",function(data){
		console.log(data);
		$('.iphone').html("");	
		var $arr = eval(data);
		$.each($arr, function(i,v){
			if(v.title=='iphone'){
			var panelList = $('<div>').addClass('panel-list');
			var GoodsWarp = $('<div>').addClass('goodswarp');
			var imgWarp = $('<a>').attr({'href':'javascript:;'});
			var img = $('<img>').attr({"src":v.middle,"syk":v.id});
			var GoodsTitle = $('<p>').addClass('goods-title');
			var goodsNmae = $('<a>').attr({'href':'javascript:;'}).html(v.name);
			var updatePrice = $('<p>').addClass('update-price');
			    updatePrice.html(v.upprice);
			var datePrice = $('<p>').addClass('date-price');
				datePrice.html(v.price)
			var addCart = $('<a>').attr({'href':'javascript:;'}).addClass('addCart');
				addCart.appendTo(GoodsWarp);
				img.appendTo(imgWarp);
				goodsNmae.appendTo(GoodsTitle);
				imgWarp.appendTo(GoodsWarp);
				GoodsTitle.appendTo(GoodsWarp);
				updatePrice.appendTo(GoodsWarp);
				datePrice.appendTo(GoodsWarp);
				GoodsWarp.appendTo(panelList)
				$('.iphone').append(panelList);	
				
			}
		})
	})
	
	$('.iphone').on('click','a img',function(){
		var oId = $(this).attr("syk");
		window.location.href = "index4-xiangqingye.html?="+oId;
	});
	$('.iphone').on('click','.addCart',function(){
		var oId = $(this).parent().parent().find('img').attr("syk");
		var Num=$.cookie(oId)?$.cookie(oId):0;
		$.cookie(oId,Number(Num)+1);
		num+=1;
		$('.reserveCar').find('span').html(num);
		var $Img = $(this).parent().parent().find('img');
		//console.log($Img)
		//console.log($Img.offset().left);
		var $newImg = $Img.clone();
		var x = $Img.offset().left;
		var y = $Img.offset().top;
		var tt = $('.reserveCar').offset().top;
		var r = $('.reserveCar').offset().left;
		$($newImg).appendTo('body');
		$newImg.css({'position':'absolute','top':y,'left':x,'right':'auto','zIndex':999,'borderRadius':'50%'});
		$newImg.animate({width:50,height:50,left:r-20,top:tt},500,function(){
			$newImg.hide();
		})
		return false;
	});
	$.get("js/liebiao.txt",function(data){
		//console.log(data);
		$('.sun').html("");	
		var $arr = eval(data);
		$.each($arr, function(i,v){
			if(v.title=='sunglass'){
			var panelList = $('<div>').addClass('panel-list');
			var GoodsWarp = $('<div>').addClass('goodswarp');
			var imgWarp = $('<a>').attr({'href':'javascript:;'});
			var img = $('<img>').attr({"src":v.middle,"syk":v.id});
			var GoodsTitle = $('<p>').addClass('goods-title');
			var goodsNmae = $('<a>').attr({'href':'javascript:;'}).html(v.name);
			var updatePrice = $('<p>').addClass('update-price');
			    updatePrice.html(v.upprice);
			var datePrice = $('<p>').addClass('date-price');
				datePrice.html(v.price)
			var addCart = $('<a>').attr({'href':'javascript:;'}).addClass('addCart');
				addCart.appendTo(GoodsWarp);
				img.appendTo(imgWarp);
				goodsNmae.appendTo(GoodsTitle);
				imgWarp.appendTo(GoodsWarp);
				GoodsTitle.appendTo(GoodsWarp);
				updatePrice.appendTo(GoodsWarp);
				datePrice.appendTo(GoodsWarp);
				GoodsWarp.appendTo(panelList)
				$('.sun').append(panelList);
			}

		});
	})
	$('.sun').on('click','a img',function(){
		var oId = $(this).attr("syk");
		window.location.href = "index4-xiangqingye.html?="+oId;
	});
	$('.sun').on('click','.addCart',function(){
		var oId = $(this).parent().parent().find('img').attr("syk");
		$.cookie(oId,1);
		num+=1;
		$('.reserveCar').find('span').html(num);
		var $Img = $(this).parent().parent().find('img');
		//console.log($Img)
		//console.log($Img.offset().left);
		var $newImg = $Img.clone();
		var x = $Img.offset().left;
		var y = $Img.offset().top;
		var tt = $('.reserveCar').offset().top;
		var r = $('.reserveCar').offset().left;
		$($newImg).appendTo('body');
		$newImg.css({'position':'absolute','top':y,'left':x,'right':'auto','zIndex':999,'borderRadius':'50%'});
		$newImg.animate({width:50,height:50,left:r-20,top:tt},500,function(){
			$newImg.hide();
		})
		return false;
	});
	$.get("js/liebiao.txt",function(data){
		//console.log(data);
		$('.cloes').html("");	
		var $arr = eval(data);
		$.each($arr, function(i,v){
			if(v.title=='cloes'){
			var panelList = $('<div>').addClass('panel-list');
			var GoodsWarp = $('<div>').addClass('goodswarp');
			var imgWarp = $('<a>').attr({'href':'javascript:;'});
			var img = $('<img>').attr({"src":v.middle,"syk":v.id});
			var GoodsTitle = $('<p>').addClass('goods-title');
			var goodsNmae = $('<a>').attr({'href':'javascript:;'}).html(v.name);
			var updatePrice = $('<p>').addClass('update-price');
			    updatePrice.html(v.upprice);
			var datePrice = $('<p>').addClass('date-price');
				datePrice.html(v.price)
			var addCart = $('<a>').attr({'href':'javascript:;'}).addClass('addCart');
				addCart.appendTo(GoodsWarp);
				img.appendTo(imgWarp);
				goodsNmae.appendTo(GoodsTitle);
				imgWarp.appendTo(GoodsWarp);
				GoodsTitle.appendTo(GoodsWarp);
				updatePrice.appendTo(GoodsWarp);
				datePrice.appendTo(GoodsWarp);
				GoodsWarp.appendTo(panelList)
				$('.cloes').append(panelList);	
			}

		})
	})
	$('.cloes').on('click','a img',function(){
		var oId = $(this).attr("syk");
		window.location.href = "index4-xiangqingye.html?="+oId;
	});
	$('.cloes').on('click','.addCart',function(){
		var oId = $(this).parent().parent().find('img').attr("syk");
		$.cookie(oId,9);
		num+=1;
		$('.reserveCar').find('span').html(num);
		var $Img = $(this).parent().parent().find('img');
		//console.log($Img)
		//console.log($Img.offset().left);
		var $newImg = $Img.clone();
		var x = $Img.offset().left;
		var y = $Img.offset().top;
		var tt = $('.reserveCar').offset().top;
		var r = $('.reserveCar').offset().left;
		$($newImg).appendTo('body');
		$newImg.css({'position':'absolute','top':y,'left':x,'right':'auto','zIndex':999,'borderRadius':'50%'});
		$newImg.animate({width:50,height:50,left:r-20,top:tt},500,function(){
			$newImg.hide();
		})
		return false;
	});
	$.get("js/liebiao.txt",function(data){
		$('.fuilt').html("");	
		var $arr = eval(data);
		$.each($arr, function(i,v){
			if(v.title=='fuilt'){
			var panelList = $('<div>').addClass('panel-list');
			var GoodsWarp = $('<div>').addClass('goodswarp');
			var imgWarp = $('<a>').attr({'href':'javascript:;'});
			var img = $('<img>').attr({"src":v.middle,"syk":v.id});
			var GoodsTitle = $('<p>').addClass('goods-title');
			var goodsNmae = $('<a>').attr({'href':'javascript:;'}).html(v.name);
			var updatePrice = $('<p>').addClass('update-price');
			    updatePrice.html(v.upprice);
			var datePrice = $('<p>').addClass('date-price');
				datePrice.html(v.price)
			var addCart = $('<a>').attr({'href':'javascript:;'}).addClass('addCart');
				addCart.appendTo(GoodsWarp);
				img.appendTo(imgWarp);
				goodsNmae.appendTo(GoodsTitle);
				imgWarp.appendTo(GoodsWarp);
				GoodsTitle.appendTo(GoodsWarp);
				updatePrice.appendTo(GoodsWarp);
				datePrice.appendTo(GoodsWarp);
				GoodsWarp.appendTo(panelList)
				$('.fuilt').append(panelList);	
			}

		})
	})
	$('.fuilt').on('click','a img',function(){
		var oId = $(this).attr("syk");
		window.location.href = "index4-xiangqingye.html?="+oId;
	});
	$('.fuilt').on('click','.addCart',function(){
		var oId = $(this).parent().parent().find('img').attr("syk");
		var num=$.cookie(oId)?$.cookie(oId):0;
		$.cookie(oId,Number(num)+1);
		num+=1;
		$('.reserveCar').find('span').html(num);
		var $Img = $(this).parent().parent().find('img');
		//console.log($Img)
		//console.log($Img.offset().left);
		var $newImg = $Img.clone();
		var x = $Img.offset().left;
		var y = $Img.offset().top;
		var tt = $('.reserveCar').offset().top;
		var r = $('.reserveCar').offset().left;
		$($newImg).appendTo('body');
		$newImg.css({'position':'absolute','top':y,'left':x,'right':'auto','zIndex':999,'borderRadius':'50%'});
		$newImg.animate({width:50,height:50,left:r-20,top:tt},500,function(){
			$newImg.hide()
		})
		return false;
	});
	$('#shopcar').on('click','i',function(){
		num-=1;
		if(num<=0){
			num = 0;
		}
		$('.reserveCar').find('span').html(num);
	})
	
	
	
	
	
	
	
	
	
	
	
	var $1fLi = $('.tabsLi1');
	$1fLi.mouseenter(function(){
		var index = $(this).index();
		$1fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-one').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*二楼*/
	var $2fLi = $('.tabsLi2');
	$2fLi.mouseenter(function(){
		var index = $(this).index();
		$2fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-two').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*三楼*/
	var $3fLi = $('.tabsLi3');
	$3fLi.mouseenter(function(){
		var index = $(this).index();
		$3fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-three').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*四楼*/
	var $4fLi = $('.tabsLi4');
	$4fLi.mouseenter(function(){
		var index = $(this).index();
		$4fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-four').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*五楼*/
	var $5fLi = $('.tabsLi5');
	$5fLi.mouseenter(function(){
		var index = $(this).index();
		$5fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-five').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*六楼*/
	var $6fLi = $('.tabsLi6');
	$6fLi.mouseenter(function(){
		var index = $(this).index();
		$6fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-six').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*七楼*/
	var $7fLi = $('.tabsLi7');
	$7fLi.mouseenter(function(){
		var index = $(this).index();
		$7fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-seven').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*八楼*/
	var $8fLi = $('.tabsLi8');
	$8fLi.mouseenter(function(){
		var index = $(this).index();
		$8fLi.removeClass('selected');
		$(this).addClass('selected');
		$('.style-eight').find( ".tab-panel2").css({display:'none'}).eq(index).css({display:'block'})
	})
	/*楼层脚走动图*/
	var btn2 = true;
	var index1 = 0;
	var $footLiWidth = $('.yyy li').width();
	$('.footImg-box').mouseenter(function(){
		$(this).find(".direcation_btn").css({display:'block'})
	})
	$('.footImg-box').mouseleave(function(){
		$(this).find(".direcation_btn").css({display:'none'})
	})
	$('.left-btn').click(function(){
		btn2 = true;
		index1--;
		if(index1<0){
			index1 = 0;
			btn2 = false;
		}
		if(btn2){
			$('.yyy').animate({left:-$footLiWidth*index1})
		}
		
	})
	$('.right-btn').click(function(){
		btn2 = true;
		index1++;
		if(index1>3){
			index1 = 3;
			btn2 = false;
		}
		if(btn2){
			$('.yyy').animate({left:-$footLiWidth*index1})
		}
		
	})
	
	/*楼层*/
	
	
	var $top0 = $('.floor').eq(0).offset().top;
	var $top1 = $('.floor').eq(1).offset().top;
	var $top2 = $('.floor').eq(2).offset().top;
	var $top3 = $('.floor').eq(3).offset().top;
	var $top4 = $('.floor').eq(4).offset().top;
	var $top5 = $('.floor').eq(5).offset().top;
	var $top6 = $('.floor').eq(6).offset().top;
	var $top7 = $('.floor').eq(7).offset().top;
	
	
	$(window).scroll(function(){
			if($(window).scrollTop()>=$top0-250){		
			$('.left-toFloor').show(500);
			$('.left-toFloor a').removeClass('active').eq(0).addClass('active');
			}else{
				$('.left-toFloor').hide(500);
			}
			if($(window).scrollTop()>$top1-250){
				$('.left-toFloor a').removeClass('active').eq(1).addClass('active');
			}
			if($(window).scrollTop()>$top2-250){
				$('.left-toFloor a').removeClass('active').eq(2).addClass('active');
			}
			if($(window).scrollTop()>$top3-250){
				$('.left-toFloor a').removeClass('active').eq(3).addClass('active');
			}
			if($(window).scrollTop()>$top4-250){
				$('.left-toFloor a').removeClass('active').eq(4).addClass('active');
			}
			if($(window).scrollTop()>$top5-250){
				$('.left-toFloor a').removeClass('active').eq(5).addClass('active');
			}
			if($(window).scrollTop()>$top6-250){
				$('.left-toFloor a').removeClass('active').eq(6).addClass('active');
			}
			if($(window).scrollTop()>$top7-250){
				$('.left-toFloor a').removeClass('active').eq(7).addClass('active');
			}
			
	})
	var arr1 = [$top0,$top1,$top2,$top3,$top4,$top5,$top6,$top7]
	$('.left-toFloor a').click(function(){
		var index = $(this).index();
		$('body').animate({scrollTop:arr1[index]},500);
	})
})

