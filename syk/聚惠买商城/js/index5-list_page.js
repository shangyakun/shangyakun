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
    /*左侧女装馆点击显示*/
   var btn2 = true;
	$('.item').click(function(){
		if(btn2){
			$(this).find('ul').show();
			$(this).find('span').css({backgroundPosition:'-11px -246px'});
		}else{
			$(this).find('ul').hide();
			$(this).find('span').css({backgroundPosition:'6px -246px'})
		}
		btn2=!btn2;
		
	})
	
	/*列表图片划入*/
	var b = true;
	$('.goods-content').mouseenter(function(){
		$(this).css({overflow:'visible',zIndex:999})
	})
	$('.goods-content').mouseleave(function(){
		$(this).css({overflow:'hidden',zIndex:11})
	})
	/*脚部轮播图的执行*/
	var $width = $('.cc li').width();
	var timer5 = null;
	var num4 = 0;
	$('.cc').html($('.cc').html()+$('.cc').html());
	$('.cc').css({width:184*10});
	/*timer5 = setInterval(function(){
		num4++;
		$('.cc').animate({left:-184*num4},function(){
			if(num4 >= 5){
				$('.cc').css({left:0});
				num4=0
			}
		});
	},2000)*/
	$('#guess-backward').click(function(){
		if(b){
			b = false;
			num4++;
			$('.cc').animate({left:-184*num4},500,function(){
			b = true;
			if(num4 >= 5){
				$('.cc').css({left:0});
				num4=0
			}
			});
		}
		
	})
	$('#guess-forward').click(function(){
		console.log(0)
		if(b){
			b = false;
			num4--;
			if(num4 <= 0){
				num4 = 5;
				$('.cc').css({left:-184*num4})
			}
			$('.cc').animate({left:-184*num4},500,function(){
			b = true;
			if(num4 <= 0){
				$('.cc').css({left:-184*num4});
				num4=5
			}
			});
		}
	})
})
