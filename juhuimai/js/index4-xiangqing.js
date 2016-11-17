$(function(){

	$('.all_cat').css({background:'#fff'})
	var oTimer = null;
	$('.all_cat').hide();
	$('.allGoods').mouseenter(function(){
		$('.all_cat').show();
	})
	$('.allGoods').mouseleave(function(){
		oTimer = setTimeout(function(){
			$('.all_cat').hide();
		},100)
	})
	$('.all_cat').mouseenter(function(){
		clearTimeout(oTimer);
	})
	$('.all_cat').mouseleave(function(){
		$('.all_cat').hide();
	})
	/*商品详情*/
	$('.ran-price').mouseenter(function(){
		$(this).find('.hove').show();
	})
	$('.ran-price').mouseleave(function(){
		$(this).find('.hove').hide();
	})
	$('.hove').find('li').click(function(){
		$('.ran-price').find('span').html($(this).html())
	})
	/*地址选择*/
    var $menuLI = $('.menu-1');
    $menuLI.mouseenter(function(){
        $(this).find('.city-box').show();
    })
    $menuLI.mouseleave(function(){
        $(this).find('.city-box').hide();
    })

    $('.choose-city').find('span').click(function(){
        $('.location-city').html($(this).html());
    })

    /*个人中心headerright*/
    $('.menu-item').mouseenter(function(){
        $(this).find('.sn-menu-box').show();
    })
    $('.menu-item').mouseleave(function(){
        $(this).find('.sn-menu-box').hide();
    })

	var $searchLi = $('.searchtype li'); 
	$searchLi.click(function(){
		$searchLi.removeClass('active');
		$(this).addClass('active')
	})
    $('.text').focus(function(){
        $(this).val('');
    })
    $('.text').blur(function(){
        $(this).val('请输入关键字');
    })
    
	/*增加商品数量*/
	var i = 0;
	$('.btn-reduce').click(function(){
		i--;
		if(i<=0){
			i=0;
		}
		$('#number').val(i);
	})	
	$('.btn-add').click(function(){
		i++;
		$('#number').val(i);
	})
	/*列表 手机*/
	$('.better-box').find('li').mouseenter(function(){
		$(this).find('.rain-product-info').stop().animate({bottom:0},200)
	})
	$('.better-box').find('li').mouseleave(function(){
		$(this).find('.rain-product-info').stop().animate({bottom:-25},200)
	})
	var index = 0;
	var $width = $('.better-box').find('li').width();
	$('#leftbtn').click(function(){
		index--;
		if(index<=0){
			index = 0;
		}
		$('.better-box').find('ul').animate({left:-index*$width});
	})
	$('#rightbtn').click(function(){
		index++;
		if(index>=4){
			index = 4;
		}
		$('.better-box').find('ul').animate({left:-index*$width});
	})
	/*left手机轮播*/
	var num = 0;
	var timer1 = null;
    var imgHieght = $('.img-box').find('li').height();
    var obtn = true;
   
    	setInterval(function(){
    	 if(obtn){	
		num++;
			$('.img-box').find('ul').animate({top:-num*imgHieght},500,function(){
				if(num == 5){
					obtn = !obtn;
				}
			})	
			}
		},1500)
    
   
    	setInterval(function(){
    	if(obtn==false){
		num--;
			$('.img-box').find('ul').animate({top:-num*imgHieght},500,function(){
				if(num == 0){
					obtn = !obtn;
				}
			})	
		}	
	},1500)
    
	/*holder-nav*/
	var iTop = $('.nav-holder').offset().top;
	$(document).scroll(function(){
		if($(document).scrollTop() >= iTop){
			$('.nav-holder').css({position:'fixed',top:0,"z-index":"150"});
		}else{
			$('.nav-holder').css({position:'relative'});
		}
	
	})
		/*楼层*/
	var top1 = $('.detail-list').offset().top;
	var top2 = $('.img-wrapper').offset().top;
	var top3 = $('.pingjia').offset().top;
	var top4 = $('.qingdan').offset().top;
	var top5 = $('.baozhang').offset().top;
	var top6 = $('.wenti').offset().top;
		$('.hold-tofloor').find('li').click(function(){
			var index = $(this).index();
			$('.hold-tofloor').find('li').removeClass('active');
			$(this).addClass('active');
			if(index == 0){
				$('body').animate({scrollTop:top1},200)
			}
			if(index == 1){
				$('body').animate({scrollTop:top2},200)
			}
			if(index == 2){
				$('body').animate({scrollTop:top3},200)
			}
			if(index == 3){
				$('body').animate({scrollTop:top4},200)
			}
			if(index == 4){
				$('body').animate({scrollTop:top5},200)
			}
			if(index == 5){
				$('body').animate({scrollTop:top6},200)
			}
		})
	

	var oId = location.href.split("=")[1];
	var Small = $(".gallery").find("li");
	var Large = $(".fdjImg");
	var oSpan = $('<span>').addClass('fdj');
	var zLarge = $(".fdj-large");
	var oBtn = $(".tobuy2");
	//console.log(oId);
	$.get("js/liebiao.txt",function(data){
		var $arr = eval(data);
		$.each($arr,function(n,art){
			if(art.id==oId){
				Small.html("<img src="+art.small+" />");
				Large.html("<img src="+art.large+" />");
				zLarge.html("<img src="+art.zlarge+" class='large-Img' />");
				$('.jiage').html(art.price);
				$('.market-price').find('span').html(art.upprice);
				$('#name').find('h1').html(art.name);
			}
		})
		oSpan.appendTo(Large)
	})
	
	oBtn.click(function(){
		var num=$.cookie(oId)?$.cookie(oId):0;
		$.cookie(oId,Number(num)+1);
		location.href = "index6-shopCar.html";
	})
	/*放大镜*/
	$('.preview-box').mouseenter(function(e){
		$('.fdj').css('display','block');
		$('.fdj-large').css('display','block');
	})
	$('.preview-box').mouseleave(function(e){
		$('.fdj').css('display','none');
		$('.fdj-large').css('display','none');
	})
	$(document).mousemove(function(e){
		var x= e.pageX-$('.fdjImg').offset().left-($('.fdj').width())/2;
		var y = e.pageY-$('.fdjImg').offset().top-($('.fdj').height())/2;
		if(x<0){
			x=0;
		}else if(x>$('.fdjImg').width()-$('.fdj').width()){
			x = $('.fdjImg').width()-$('.fdj').width();
		}
		if(y<0){
			y=0;
		}else if(y>$('.fdjImg').height()-$('.fdj').height()){
			y = $('.fdjImg').height()-$('.fdj').height();
		}
		$('.fdj').css({left:x});
		$('.fdj').css({top:y});
		var left = x/($('.fdjImg').width()-$('.fdj').width());
		var top = y/($('.fdjImg').height()-$('.fdj').height());
		var x2 = left*($('.fdj-large').width()-$('.large-Img').width());
		var y2 = top*($('.fdj-large').height()-$('.large-Img').height())
		$('.large-Img').css({left:x2});
		$('.large-Img').css({top:y2});
		
		
	})
	
})
