$(function(){
	$('.fast-pic').animate({left:0},700);
	$('.uc-box').animate({right:0},700);
	$('#oForm').on('submit',function(){	
		
		if($(':checked')){
			$.cookie("username",$('.text').val(),{ expires: 7 });
			$.cookie("password",$('#password').val(),{ expires: 7 })
		}
	})
	$('.text').val($.cookie('username'));
	$('#password').val($.cookie('password'));
})
