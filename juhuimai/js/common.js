/*二级菜单*/
$(function(){
	/*更改用户名*/
	if($.cookie('pd')==1){
		$('.yonghu').attr({'href':'javascript:;'}).html($.cookie('name'));
		$('.zc').attr({'href':'javascript:;'}).html('[退出]');
		$('.zc').click(function(){
			$.removeCookie('pd');
			$.cookie('pd','2');
			location.href='';
		})
	}
	if($.cookie('pd')==2){
		$('.yonghu').attr({'href':'index2-entry.html'}).html('请登录');
		$('.zc').attr({'href':'index3-register.html'}).html('免费注册');
	}
	
	
	/*------调用左侧选项卡的内容--------*/
	var $goodsList = $('.list');
	var Otimer = null;
	//console.log($goodsList);
	$goodsList.mouseenter(function(){	
		var $index = $(this).index();
		$goodsList.removeClass('hover');
		$(this).addClass('hover');
		$(this).find('.goodsMap').css({display:'block'});
		$(this).find('.map-left').html("");
		$.get("js/tab.txt",function(data){
			var arr = eval(data);
			$.each(arr[$index],function(i,k) {
				for(var i in k){
					var $newDiv = $('<div></div>');
					var $newCat = $('<div>');
					var $newCatA = $('<a>').attr({'href':'javascript:;'});
					$newCatA.html(i);
					$newCatA.appendTo($newCat);
					$newCat.appendTo($newDiv);
					$newCat.addClass('cat');
					$newDiv.addClass('list1 clearfix');
					var $link1 = $('<div>');
						$link1.addClass('link1');
					for(var j = 0;j<k[i].length;j++){						
						var $link1A = $('<a href="javascript:;"></a>');
						$link1A.html(k[i][j]);
						$link1A.appendTo($link1);
						$link1A.click(function(){
							location.href= 'index5-list_page.html';
						})
					}
					$link1.appendTo($newDiv);	
					$newDiv.appendTo('.map-left');
				}
			})
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
    
	//大选项卡
		$(this).mouseleave(function(){
			$(this).find('.goodsMap').css({display:'none'})
		})
	})
	$('.all_cat').mouseleave(function(){
		$goodsList.removeClass('hover');
		oTimer = setTimeout(function(){
			$('.goodsMap').css('display','none')
		},100)
	})
	$('.goodsMap').mouseenter(function(){
		clearTimeout(Otimer);
	})
	/*banner右侧的tab切换*/
	var $tabLI = $('.tabs li');	
	var i = 0;
	var $Width = $(".logobox-bg ul").width();
	var oBtn = true;
	$tabLI.click(function(){
		var index = $(this).index();
		$tabLI.removeClass('active');
		$(this).addClass('active');
		$('.tabs-hide').css({display:'none'});
		$('.tabs-hide').eq(index).css({display:'block'})
	})
	

/*回到顶部*/
	$('.back-top a').mouseenter(function(){
		$(this).animate({top:-45},200);
		$(this).click(function(){
			$('body').stop().animate({scrollTop:0},500)
		})
	})
	$('.back-top a').mouseleave(function(){
		$(this).stop().animate({top:0},200);
	})
	var timer0 = null;
	//1.
	$('.headimg').mouseenter(function(){
		$('.right-head').find('.dropdown').show();
	})
	
	$('.headimg').mouseleave(function(){
		timer0 = setTimeout(function(){
			$('.right-head').find('.dropdown').hide();
		},100)
		
	})
	$('.right-head').find('.dropdown').mouseenter(function(){
		clearTimeout(timer0);
	})
	$('.right-head').find('.dropdown').mouseleave(function(){
		$('.right-head').find('.dropdown').hide();
	})
	//2.
	$('.btn').mouseenter(function(){
		$('.inline-sale').find('.dropdown').show();
	})
	
	$('.btn').mouseleave(function(){
		timer0 = setTimeout(function(){
			$('.inline-sale').find('.dropdown').hide();
		},100)
	})
	$('.inline-sale').find('.dropdown').mouseenter(function(){
		clearTimeout(timer0);
	})
	$('.inline-sale').find('.dropdown').mouseleave(function(){
		$('.inline-sale').find('.dropdown').hide();
	})
	//3.
	$('.diaocha').mouseenter(function(){
		$(this).stop().animate({top:-45},200);
	})
	$('.diaocha').mouseleave(function(){
		$(this).stop().animate({top:0},200);
	})
	//4.
	$('.dianpu').stop().mouseenter(function(){
		$(this).stop().animate({top:-45},200);
	})
	$('.dianpu').mouseleave(function(){
		$(this).stop().animate({top:0},200);
	})
	//5.
	$('.shoucang').mouseenter(function(){
		$(this).stop().animate({top:-45},200);
	})
	$('.shoucang').mouseleave(function(){
		$(this).stop().animate({top:0},200);
	})
	//6.
	$('.code').mouseenter(function(){
		$(this).stop().animate({top:-49},200);
		$('.wechat').find('.dropdown').show();
	})
	$('.code').mouseleave(function(){
		$(this).stop().animate({top:0},200);
		timer0 = setTimeout(function(){
			$('.wechat').find('.dropdown').hide();
		},100)	
	})
	//7.
	$('.reserve').mouseenter(function(){
		$('.reserve').find('.dropdown').show();
	})
	$('.reserve').mouseleave(function(){
		timer0 = setTimeout(function(){
			$('.reserve').find('.dropdown').hide();
		},100)
	})
	$('.reserve').find('.dropdown').mouseenter(function(){
		clearTimeout(timer0);
	})
	$('.reserve').find('.dropdown').mouseleave(function(){
		$('.reserve').find('.dropdown').hide();
	})
	$('.wechat').find('.dropdown').mouseenter(function(){
		clearTimeout(timer0);
	})
	$('.wechat').find('.dropdown').mouseleave(function(){
		$('.wechat').find('.dropdown').hide();
	})
	
	$('.reserve').mouseenter(function(){
		$('#shopcar').html('');
		$.get('js/liebiao.txt',function(data){
			var $arr = eval(data);
			$.each($arr,function(i,v){
				if($.cookie(v.id)){
				$('.sho').hide();
				$('.shopcontent').show();
				var carList = $('<li>').addClass('car-list');
				var newA = $('<a>').attr({'href':'javascript:;'});
				var newImg = $('<img>').attr({'src':v.small});
				newImg.appendTo(newA);
				var newH4 = $('<h4>').html(v.name).appendTo(newA);
				var newSpan = $('<span>').html(v.price+"<strong>×</strong>"+$.cookie(v.id)).appendTo(newA) ;
				newA.appendTo(carList);
				var newI = $('<i>×</i>').appendTo(carList)
				carList.appendTo($('#shopcar'));
				newI.click(function(){
						$.removeCookie(v.id);
						$(this).parent().remove();
						return false;
					})
				}
			})
		})
	})
	
})