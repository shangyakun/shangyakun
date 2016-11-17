$(function(){
	$('.fast-pic').animate({left:0},700);
	$('.uc-box').animate({right:0},700);
	/*$('#oForm').on('submit',function(){	
		
		if($(':checked')){
			$.cookie("username",$('.text').val(),{ expires: 7 });
			$.cookie("password",$('#password').val(),{ expires: 7 })
		}
	})*/
//	$('.text').val($.cookie('username'));
//	$('#password').val($.cookie('password'));
	var $name = $.cookie("name");
	var $pass = $.cookie("password")
	var $tag = 1;
	$('#loginsubmit').click(function(){
		var $val1 = $('#username').val();
		var $val2 = $('#password').val();
		//console.log($val1!=$.cookie("name"))
		if($val1==$name&&$val2==$pass){
			location.href = 'index.html';
			$.cookie('pd','1');
		}
		if($.cookie("name")!=''){
			if($val1!=$.cookie("name")){
				alert('用户名不正确');
			}
			if($val2!=$.cookie("password")){
				alert('密码不正确，请重试。');
			}
		}
	})	
})
