$(function(){
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
    
    
    /*选项卡*/
    $('.box-title').find('li').mouseenter(function(){
    	var index = $(this).index();
    	$('.box-title').find('li').removeClass('active');
    	$(this).addClass('active');
    	$('.show').hide().eq(index).show();
    })
    
    var n = 0;
  	$.get("js/liebiao.txt",function(date){
		var $arr = eval(date);
		var n1 = 0;
		$.each($arr,function(n,art){
			if($.cookie(art.id)){
				var carContent = $('<div>').addClass('carContent clearfix');
				var check = $('<div>').addClass('check').html('<input type="checkbox" checked="checked"/>');
				check.appendTo(carContent);
				var productXinxi = $('<div>').addClass('product-xinxi');
				var newDl = $('<dl>');
				newDl.appendTo(productXinxi);
				var productPic = $('<dt>').addClass('productPic clearfix').html("<a href='javascript:;'><img src="+art.small+"></a>");
				var newDd = $('<dd>').html("<a href='javascript:;'>"+art.name+"</a>");
				productPic.appendTo(newDl);
				newDd.appendTo(newDl);
				productXinxi.appendTo(carContent);
				var productNum = $('<div>').addClass('product-Num');
				var newNum = $('<div>').attr({'id':'num'});
				var reduce = $('<a>').attr({'href':'javascript:;'}).addClass('reduce').html('-').appendTo(newNum);
				var newInput = $('<input>').attr({"type":'text','value':$.cookie(art.id)}).appendTo(newNum);
				var Plus = $('<a>').attr({'href':'javascript:;'}).addClass('plus').html('+').appendTo(newNum);
				newNum.appendTo(productNum);
				productNum.appendTo(carContent);
				var prodectMyPrice = $('<div>').addClass('prodect-myPrice');
				var newSpan1 = $('<span>').html(art.price).appendTo(prodectMyPrice);
				prodectMyPrice.appendTo(carContent);
				var Heji = $('<div>').addClass('heji');
				var newSpan2 = $('<span>').html(newSpan1.html()*$.cookie(art.id)).appendTo(Heji);
				Heji.appendTo(carContent);
				var Delet = $('<div>').addClass('delet');
				var Cancel = $('<a>').attr({'href':'javascript:;'}).html('删除');
				Cancel.appendTo(Delet);
				Delet.appendTo(carContent);
				carContent.appendTo($('.shopcarWarp'));
					var i = newInput.val();
					var newprice = i*newSpan1.html();
					n1+=newprice
				reduce.click(function(){
					i--;
					if(i <= 1){
						i=1;
						newInput.val(1);
						newSpan2.html(art.price);
						$('.yingfu').find('span').html(newSpan2.html());
					}else{					
						newInput.val(i);
						newSpan2.html(i*art.price);
						n1=n1-art.price;
						$('.yingfu').find('span').html(newSpan2.html());
					}
					
					return false
				})
				Plus.click(function(){
					i++
					newInput.val(i);
					newSpan2.html(i*art.price);
					$('.yingfu').find('span').html(newSpan2.html());
					
					return false
				})
				
				Cancel.click(function(){
					$.removeCookie(art.id);
					$(this).parent().parent().remove();
					location.href='';
					return false;
				})
				$('.jiesuan').find('p').click(function(){
					$.removeCookie(art.id);
    				$('.shopcarWarp').html('');
    				$('.yingfu').find('span').html(0);
    			})
			}
			$('.yingfu').find('span').html(n1);
		})
	}) 
})
