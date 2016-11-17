/**
 * Created by Administrator on 2016/9/14.
 */
$(function(){
    //header网站导航的显示与隐藏。。。
    var $navrighLi = $('.nav-right').find('li')
    var timer = null;

    $navrighLi.eq(2).mouseenter(function(){
        $('.j-categorys').css({display:'block'}).animate({opacity:1,height:258},400);
    })
    $navrighLi.eq(2).mouseleave(function(){
            $('.j-categorys').animate({opacity:0,height:0},400,function(){
                $('.j-categorys').css({display:'none',opacity:0,height:0})
        })

    })
    //购物车的显示与隐藏
    $('.change-background').mouseenter(function(){
        $('.change-background div').css({display:'block'}).animate({display:'block',opacity:1,height:249},400);
    })
    $('.change-background').mouseleave(function(){
        $('.change-background div').animate({opacity:0,height:0},400,function(){
            $('.change-background div').css({display:'none',opacity:0,height:0});
        });
    })
    //主导航以及logo，搜索跨域
    //*电商导航的事件
    var $mainNavLi = $('.main-nav li');
    $mainNavLi.mouseenter(function(){
        $(this).find('.sublistbox').css({display:'block'}).stop().animate({opacity:1,height:230},250)
    })
    $mainNavLi.mouseleave(function(){
        $(this).find('.sublistbox').stop().animate({opacity:0,height:0},250,function(){
            $(this).find('.sublistbox').css({display:'none'})
        });
    })



    //解决方案中按钮事件以及解决方案中的图片列表的更换位置记录等。。。
    var now = null;
    $('.decase').mouseenter(function(){
        setInterval(function(){
            $('.direcation-btn').css('display','block');
        },230)


    })
    $('.decase').mouseleave(function(){
        $('.direcation-btn').css('display','none');

    })
    //点击改变ul的left
    var $caselistW = $('.case-list').width() ;//280
    var iIndex1 = 0;
    var oBtn = true;
    //设置ul宽度
    $('.case ul').css({width:$caselistW*9,left:0});//2520px
    $('#left').on('click',function(){
        iIndex1--;
        oBtn = true;
        if(iIndex1<0){
            oBtn = false;
            iIndex1 = 0;
        }
        if(oBtn){
            console.log(iIndex1);
            $('.case ul').animate({left:-$caselistW*4*iIndex1},500);
        }
    })
    $('#right').on('click',function (){
        iIndex1++;
        oBtn = true;
        if(iIndex1>2){
            oBtn = false;
            iIndex1 = 2;
        }
        if(oBtn){

            $('.case ul').animate({left:-$caselistW*4*iIndex1},500);
        }
    })
    //form框
    $('#search-content').bind('input propertychange', function() {
        if ($(this).val() !== '') {

            /*$.ajax({
             url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&req=2&csor=1',
             jsonp: 'cb',
             dataType: 'jsonp',
             data: {
             wd: $(this).val()
             },
             success: function (data) {
             var sHtml = '';
             data.s.forEach(function (v, k) {
             sHtml += '<li><a href="javascript:;">' + v + '</a></li>';
             });
             $('#search-list').html(sHtml);
             }
             });*/
            /*$.getJSON(
             'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&p=3&req=2&csor=1&cb=?',
             {wd: $(this).val()},
             function (data) {
             var sHtml = '';
             data.s.forEach(function (v, k) {
             sHtml += '<li><a href="javascript:;">' + v + '</a></li>';
             });
             $('#search-list').html(sHtml);
             }
             );*/
        }


    });
    //吸顶菜单
    $(document).scroll(function(){
        if($(document).scrollTop()>40){
            $('.head-fix').css({position:'fixed',left:0,top:0,opacity:0.96})
        }
        if($(document).scrollTop()<=40){
            $('.head-fix').css({position:'relative'})
        }
    })











    //膜层的显示与隐藏
    $('.btn').click(function(){
        if($('.search-content').val() == ''){
            $('.moceng').css({display:'block'});
            $('.key').css({display:'block'});
        }
    })
    $('.key a').click(function(){
        $('.moceng').css({display:'none'});
        $('.key').css({display:'none'});
    })
//二级菜单的显示与隐藏
    var timer = null;
    $('.pullDownlist li').mouseenter(function(){
        var iIndex = $(this).index();
        $('.pullDownlist li').removeClass('active');
        $(this).addClass('active');
        $('.muban-shop').css({display:'block'});
        $('.muban-shop1').css({display:'none'}).eq(iIndex).css({display:'block'});
    })
    $('.banner-left').mouseleave(function(){
        timer = setTimeout(function(){
            $('.muban-shop').css({display:'none'})
            $('.pullDownlist li').removeClass('active');
        },80)
    })
    $('.muban-shop').mouseenter(function(){
        clearTimeout(timer);
    })
    $('.muban-shop').mouseleave(function(){
        $('.pullDownlist li').removeClass('active');
        $('.muban-shop').css({display:'none'});
    })

//轮播图


    /*
        *克隆前后两个li，分别插到前边和后变
     */
    var n = null;
    var $btn = true;
    var iNow = 1;
    var _time = null;
    var clone1 = $('.clone').eq(0).clone();
    $('.clone').eq(1).after(clone1);
    var clone2 = $('.clone').eq(1).clone();
    $('.clone').eq(0).before(clone2);
    var iLen = $('.slide_ul li').length;
    var $cloneLiW = $('.clone').width();
    var $slideUlW = $('.clone').width()*$('.slide_ul li').length;
    $('.slide_ul').css({width:$slideUlW});
    //设置slide_ul的left
    $('.slide_ul').css({left:-$cloneLiW});
    //自动更换图片
    _timer = setInterval(function(){
     iNow++;

         starMove();
        if(iNow == iLen - 1){
            n = 0;
        }else{
            n = iNow - 1;
        }
        $('.decation-btn a').removeClass('cur');
        $('.decation-btn a').eq(n).addClass('cur');

     },3000)
//点击左右按钮改变ul的left值更换图片
    $('#btn-right').click(function(){
        if($btn){
            $btn = false;
            iNow++;

            starMove();
            if(iNow == iLen - 1){
                n = 0;
            }else{
                n = iNow - 1;
            }
            $('.decation-btn a').removeClass('cur');
            $('.decation-btn a').eq(n).addClass('cur');

        }

    })
    //点击左右按钮改变ul的left值更换图片
    $('#btn-left').click(function(){
        if($btn){
            $btn = false;
            iNow--;
            n = iNow - 1;
            $('.slide_ul').animate({left:-$cloneLiW*iNow},800,function(){
                $btn = true;
                if($('.slide_ul').get(0).offsetLeft == 0){
                    $('.slide_ul').css({left:-$cloneLiW*(iLen-2)});
                    iNow = iLen-2
                }
            });
            $('.decation-btn a').removeClass('cur');
            $('.decation-btn a').eq(n).addClass('cur');
        }

    })
    //下方的按钮，鼠标滑如事件
    $('.decation-btn a').mouseenter(function(){
        clearInterval(_timer);
        iNow = $(this).index()+1;
        $('.decation-btn a').removeClass('cur');
        $(this).addClass('cur');
        starMove();
    })
    //离开开启定时器
    $('.decation-btn a').mouseleave(function(){
        _timer = setInterval(function(){
            iNow++;
            n = iNow - 1;
            starMove();
            if(iNow == iLen - 1){
                iNow = 1;
                n = 0;
            }
            $('.decation-btn a').removeClass('cur');
            $('.decation-btn a').eq(n).addClass('cur');

        },3000)
    })
//鼠标移入关闭定时器
    $('.banner-box').mouseenter(function(){
        clearInterval(_timer);
    })
    $('.banner-box').mouseleave(function(){
        _timer = setInterval(function(){
            iNow++;

            starMove();
            if(iNow == iLen - 1){
                n = 0;
            }else{
                n = iNow - 1;
            }
            $('.decation-btn a').removeClass('cur');
            $('.decation-btn a').eq(n).addClass('cur');

        },3000)
    })
    //封装函数。定时器以及点击右侧按钮更换图片代码中相同的部分
    function starMove(){
        $('.slide_ul').animate({left:-$cloneLiW*iNow},800,function(){
            $btn = true;
            if($('.slide_ul').get(0).offsetLeft == -$cloneLiW*(iLen-1)){
                $('.slide_ul').css({left:-$cloneLiW});
                iNow = 1;
            }
        });
    }
    //轮播图下边的图片的事件
    $('.f1-in').mouseenter(function(){
        $(this).find('img').stop().animate({left:-10});
        $(this).find('p').css({display:'block'})
    })
    $('.f1-in').mouseleave(function(){
        $(this).find('img').stop().animate({left:0});
        $(this).find('p').css({display:'none'})
    })
    //电商系统

    $('.items-li').mouseenter(function(){

        $(this).find('.picture-attente').stop(true).animate({height:'20'},100);
    })
    $('.items-li').mouseleave(function(){
        $(this).find('.picture-attente').stop(true).animate({height:0},100);
    })
    //4楼
    var oOBtn = true;
    $('.body1 li').mouseenter(function(e){
        $(this).find('img').stop().animate({marginTop:'-10%',marginLeft:'-10%',width:'120%',height:'120%'},200);
        var x      = e.pageX;
        var y      = e.pageY;
        var left   = Math.abs($(this).offset().left - x);
        var right  = Math.abs($(this).offset().left+$(this).width() - x);
        var top    = Math.abs($(this).offset().top - y);
        var bottom = Math.abs($(this).offset().top+$(this).height() - y);
        if(left<bottom && left<right && left<top){
            $(this).find('a').css({top:0,left:'-100%'}).stop().animate({left:0},200)
        }
        if(top<bottom && top<right && top<left){
            $(this).find('a').css({top:'-100%',left:0}).stop().animate({top:0},200)
        }
        if(right<bottom && right<left && right<top){
            $(this).find('a').css({top:0,left:'100%'}).stop().animate({left:0},200)
        }
        if(bottom<left&&bottom<right&&bottom<top){
            $(this).find('a').css({top:'100%',left:0}).stop().animate({top:0},200)
        }

    })
    $('.body1 li').mouseleave(function(e){

        $(this).find('img').stop().animate({marginTop:0,marginLeft:0,width:'100%',height:'100%'},200);

        var x      = e.pageX;
        var y      = e.pageY;
        var left   = Math.abs($(this).offset().left - x);
        var right  = Math.abs($(this).offset().left+$(this).width() - x);
        var top    = Math.abs($(this).offset().top - y);
        var bottom = Math.abs($(this).offset().top+$(this).height() - y);
        if(left<bottom && left<right && left<top){
            $(this).find('a').stop().animate({left:'-100%',top:0},200)
        }
        if(top<bottom && top<right && top<left){
            $(this).find('a').stop().animate({left:0,top:'-100%'},200)
        }
        if(right<bottom && right<left && right<top){
            $(this).find('a').stop().animate({left:'100%',top:0},200)
        }
        if(bottom<left&&bottom<right&&bottom<top){
            $(this).find('a').stop().animate({left:0,top:'100%'},200)
        }
    })
    //侧边栏事件
     var timer1 = null;
    $('.j-icon').mouseenter(function(){
        var iIndex = $(this).index();
        $('.j-box').css({display:'none'})
        $('.j-box').eq(iIndex).css({display:'block'})
    })
    $('.suspension').mouseleave(function(){
        timer1 = setTimeout(function(){
            $('.j-box').css({display:'none'})
        },100)
    })
    $('.j-box').mouseenter(function(){
        clearTimeout(timer1);
    })
    $('.j-box').mouseleave(function(){
        $('.j-box').css({display:'none'})
    })
    $(document).scroll(function(){
        if($(document).scrollTop()>100){
            $('.backtop').css({display:'block'})
        }else{
            $('.backtop').css({display:'none'})
        }
        $('.backtop').click(function(){
            $(window).scrollTop = 0;
        })
    })

})



























