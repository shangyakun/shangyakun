$(function(){
	var tag = false;
	$('.pwditen').show();
	var index = 0;
	$('.tab-item').click(function(){
		 index = $(this).index();
		$('.tab-item').removeClass('active');
		$(this).addClass('active');
		if(index==0){
			$('.text').eq(0).attr({'placeholder':"手机"});
			$('.text').eq(3).attr({'placeholder':"手机验证码"});
		}
		
		if(index==1){
			$('.text').eq(0).attr({'placeholder':"email"});
			$('.text').eq(3).attr({'placeholder':"邮箱验证码"});
		}
	})

			$('.text').eq(0).attr({'placeholder':"手机"});
			$('.text').eq(3).attr({'placeholder':"手机验证码"});
			$('#mobile_phone').blur(function(){
			var reg = /^1[34578]\d{9}$/;
			var str = $('#mobile_phone').val();
			if(reg.test(str)==true){
				$('.label').eq(0).css({color:'#009d2d'});
				$('.label').eq(0).html("* 可以注册");
				tag = true;
			}else{
				$('.label').eq(0).html("- 手机号码不是一个有效号码");
				tag = false;
			}
		})
	
	$('#password').blur(function(){
		var reg = /^\w{6,17}$/;
		var str = $('#password').val();
			if(reg.test(str) != true ){
				$('.pwditen').hide();
				$('.pwd-notice').show();
				$('.label').eq(1).html("- 密码只能用数字、字母及下划线");
				tag = false;
			if(str.length>16){
				$('.label').eq(1).html("- 密码长度不能超过16位");
				tag = false;
			}
		}
		if(str.length==0||str.length<6){
			$('#password-notice').html("- 登录密码不能少于 6 个字符。");
			tag = false;
		}
	})
	$("#conform_password").blur(function(){
		if($('#password').val() == $("#conform_password").val()){
				$('.label').eq(3).css({color:'#009d2d'});
				$('.label').eq(3).html("* 可以注册");
				tag = true;
			}else{
				$('.label').eq(3).html("- 两次输入密码不一致");
				tag = false;
			}
			if($("#conform_password").val() == ''){
				$('.label').eq(3).html("- 密码不能为空");
				tag = false;
			}
		})
	$('#password').bind('input',function(){
		var str = $('#password').val();
		var reg = /^\w{6,17}$/;
		var reg2 = /^([a-z]{6,17})|([A-Z]{6,17})|([0-9]{6,17})$/;
		var reg3 = /^[0-9_]{1,17}$/;
		var reg4 = /^[a-z_]{1,17}&/;
		var reg5 = /^[A-Z_]{1,17}&/;
		$('.pwditen').show();
		$('.pwd-notice').hide();
		if(reg.test(str)==true){	
			$('#d-z-q').find('td').eq(0).css({color:'red'})
		}
		if(reg3.test(str)==true&&reg4.test(str)==true||reg3.test(str)==true&&reg5.test(str)==true||reg5.test(str)==true&&reg4.test(str)==true){
			$('#d-z-q').find('td').eq(1).css({color:'green'})
		}
	})
	$('#zphone').click(function(){
		function count(){
		 var arr=new Array(0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","J","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
		 var str="";
		for(var i=0;i<4;i++){
		    var num=parseInt(Math.random()*62);
		    str+=arr[num];
		}
		   return str;
		}
		var n= count();
		$('#mobile_code').val(n);
	})	
		
	
	
	

	
	/*提交*/
	$('#btn_submit').click(function(){
			var $Val1 = $('#mobile_phone').val();
			var $Val2 = $('#password').val();
			if(tag){
				$.cookie('name',$Val1);
				$.cookie('password',$Val2);
				location.href = "index2-entry.html";
			}
			
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		var process_request = "正在处理您的请求...";
		var username_chana = "- 用户名不能有中文。";
		var msg_uname_length = "- 用户名不能超过 20 个字符。";
		var username_empty = "- 用户名不能为空。";
		var username_shorter = "- 用户名长度不能少于 3 个字符。";
		var username_invalid = "- 用户名只能是由字母数字以及下划线组成。";
		var password_empty = "- 登录密码不能为空。";
		var password_shorter = "- 登录密码不能少于 6 个字符。";
		var confirm_password_invalid = "- 两次输入密码不一致";
		var email_empty = "- Email 为空";
		var email_invalid = "- Email 不是合法的地址";
		var agreement = "- 您没有接受协议";
		var msn_invalid = "- msn地址不是一个有效的邮件地址";
		var qq_invalid = "- QQ号码不是一个有效的号码";
		var home_phone_invalid = "- 家庭电话不是一个有效号码";
		var office_phone_invalid = "- 办公电话不是一个有效号码";
		var mobile_phone_invalid = "- 手机号码不是一个有效号码";
		var msg_un_blank = "- 用户名不能为空";
		var msg_un_chine = "- 用户名不能为中文";
		var msg_un_length = "- 用户名不得超过14个字符";
		var msg_un_format = "- 用户名含有非法字符";
		var msg_un_registered = "- 用户名已经存在,请重新输入";
		var msg_can_rg = "* 可以注册";
		var msg_email_blank = "- 邮件地址不能为空";
		var msg_email_registered = "- 邮箱已存在";
		var msg_email_format = "- 邮件地址不合法";
		var msg_mobile_phone_blank = "- 手机号码不能为空";
		var msg_mobile_phone_registered = "- 手机号码已存在";
		var msg_mobile_phone_format = "- 手机号码不是一个有效号码";
		var msg_blank = "- 不能为空";
		var no_select_question = "- 您没有完成密码提示问题的操作";
		var passwd_balnk = "* 密码中不能包含空格";
		var msg_email_code_blank = "- 邮箱验证码不能为空";
		var msg_mobile_phone_code_blank = "- 手机验证码不能为空";
		var msg_captcha_blank = "- 验证码不能为空";
		var msg_register_type_blank = "- 注册类型不能为空";
		var username_exist = "用户名 %s 已经存在";

})
