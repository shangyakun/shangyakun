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
	
	
	/*脚部轮播图的执行*/
	var b = true;
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
	/*列表图片划入*/

	
	$('.list-pic').on('mouseenter','.goods-content',function(){
		$(this).css({overflow:'visible',zIndex:90});
	});
	
	$('.list-pic').on('mouseleave','.goods-content',function(){
		$(this).css({overflow:'hidden',zIndex:11});
	});
		
	/*列表页调数据*/
	var num = 0;
	$.get('js/liebiao.txt',function(data){
		var $arr = eval(data);
		$('.list-pic').html('');
		$.each($arr, function(i,v){
			var liItem = $('<li>').addClass('li-item');
			var goodsContent = $('<div>').addClass('goods-content');
			var titlePic = $('<span>').addClass('title-pic').html("精品");
			var goodsPic = $('<div>').addClass('goods-pic');
			var imgWarp = $('<a>').attr({'href':'javascript:;'});
			var newImg = $('<img>').attr({"src":v.middle,"syk":v.id});
			var goodsInfo = $('<div>').addClass('goodsinfo');
			var goodsName = $('<div>').addClass('goods-name');
			var Name = $('<a>').attr({'href':'javascript:;'}).html(v.name);
			var goodsPrice = $("<div>").addClass('goods-price');
			var salePrice =$('<em>').addClass('salePrice').html(v.price);
			var markPrice =  $('<em>').addClass('markPrice').html(v.upprice);
			var saleStat = $("<div>").addClass('sale-stat');
			var newUl = $('<ul>').append('<li><a href="javascript:;">2</a><p>商品销量<p></li><li><a href="javascript:;">0</a><p>用户评论<p></li><li><a href="javascript:;">452</a><p>关注人气<p></li>');
			var newStore = $('<div>').addClass('store');
			var colletBtn = $('<a>').attr({'href':'javascript:;'}).addClass('collet-btn');
			var compareBtn = $('<a>').attr({'href':'javascript:;'}).addClass('compare-btn shop-compare');
			var addCart = $('<div>').addClass('addcart');
			var newA = $('<a>').attr({'href':'javascript:;'}).html('加入购物车');
			newA.appendTo(addCart)
			compareBtn.appendTo(newStore)
			colletBtn.appendTo(newStore)
			Name.appendTo(goodsName);
			newUl.appendTo(saleStat);
			titlePic.appendTo(goodsContent);
			salePrice.appendTo(goodsPrice);
			markPrice.appendTo(goodsPrice);
			goodsPic.appendTo(goodsContent);
			newImg.appendTo(imgWarp);
			imgWarp.appendTo(goodsPic);
			goodsName.appendTo(goodsInfo);
			goodsPrice.appendTo(goodsInfo);
			saleStat.appendTo(goodsInfo);
			newStore.appendTo(goodsInfo);
			addCart.appendTo(goodsInfo);
			goodsInfo.appendTo(goodsContent);
			goodsContent.appendTo(liItem);
			liItem.appendTo($('.list-pic'));
			newImg.click(function(){
				var oId = newImg.attr("syk");
				location.href = "index4-xiangqingye.html?="+oId;
			})
			newA.click(function(){
				var oId = newImg.attr("syk");
				var Num=$.cookie(oId)?$.cookie(oId):0;
				$.cookie(oId,Number(Num)+1);
				num+=1;
				$('.reserveCar').find('span').html(num);
				var newImg2 = newImg.clone();
				var x = newImg.offset().left;
				var y =newImg.offset().top;
				var tt = $('.reserveCar').offset().top;
				var r = $('.reserveCar').offset().left;
				newImg2.css({'left':x,'top':y,'borderRadius':'50%','position':'absolute','zIndex':500});
				newImg2.appendTo('body');
				newImg2.animate({width:50,height:50},500,function(){
					newImg2.animate({left:r-20,top:tt},function(){
						newImg2.hide();
					})
				});
			})
		})
	})	
		
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
