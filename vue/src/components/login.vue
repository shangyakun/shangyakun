<template>
	<div>
		<div class="head">
			我的账户
		</div>
		<div id="login-form">
			<div class="field">
				<div class="label">账户</div>
				<div class="field-control">
					<input v-model="username" type="text" name="username" id="username" autocomplete="off" placeholder="邮箱/手机号/会员名" />
				</div>
			</div>
			<div class="field">
				<div class="label">登陆密码</div>
				<div class="field-control">
					<input type="password" v-model="password" name="username" id="username" placeholder="请输入密码" />
				</div>
			</div>
		</div> 
		<div id="submit">
			<button class="submit" @click="sub">登录</button>
		</div>
		<div class="other-link">
			<a href="javscript:;" class="ft-left">
				免费注册
			</a>
			<a href="javascript:;" id="forget" class="ft-right">
				忘记密码
			</a>
		</div>
		<div class="ft-ecnter">
			<a href="javascript:;">
				短信校验码登录
			</a>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'login',
		data (){
			return {
				username:'',
				password:''
			}
		},
		computed:{
			filter:function(){
				if(this.username == ''){
					alert(1)
				}
			}
		},
		methods:{
			/*filter1:function(){
			if(this.username == ''){
				this.filter();
				}
			},*/
			sub:function(){
				if(this.user||this.password == ''){
					return false;
				}else{
					var obj = {
						user:this.username,
						pass:this.password
					};
					this.$store.dispatch('GET_STOKEN',obj)
				}
			}
		}
	}
	
</script>

<style>
	.head{
		height:1.8rem;
		text-align: center;
		color:#000;
		background: #f7f7f8;
		border-bottom: 1px solid #c8c8c8;
		width:100%;
		font-size:.7rem;
		line-height: 1.8rem;
	}
	#login-form{
		margin-top:.75rem;
		font-size:.6rem;
	}
	#login-form .field {
		box-sizing:border-box ;
		padding:.6rem .5rem;
		color:#6c6c6c;
		display: -webkit-flex;
		display: flex;
		background: #FFFFFF;
		text-align: left;
		border-bottom:1px solid #ddd;
	}
	.label{
		width:3rem;
	}
	.field-control{
		flex: 1;
	}
	.field-control input{
		font-size: 100%;
		width:100%;
		border: 0;
		color:#000;
		outline: none;
	}
	#submit {
		margin:.75rem .5rem 0;
	}
	#submit .submit {
		background: #ff0036;
		width:100%;
		height:2rem;
		text-align: center;
		line-height:2rem;
		outline: none;
		border: none;
		border: 1px solid #f40;
		color: #d4d4d4;
		font-size:.65rem;
		border-radius:5px;
	}
	.other-link {
		margin:.75rem .6rem;
		color:#6C6C6C;
		overflow: hidden;
		
	}
	.other-link a{
		color:#ff0036;
		font-size:.65rem;
	}
	.other-link a:active{
		text-decoration: underline;
		background-color: none;
	}
	.other-link .ft-left {
		float:left;	
	}
	.other-link .ft-right{
		float:right;
	}
	.ft-ecnter{
		text-align: center;
		margin-top:1rem;
	}
	.ft-ecnter a{
		margin-top: .75rem;
		padding: .35rem;
		text-align: center;
		border-radius:5px;
		border:1px solid #f40;
		color:#ff0036;
		font-size:15px;
	}
</style>