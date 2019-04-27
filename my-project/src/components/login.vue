<template>
	<div id="box">
		<h1>
			  elm后台管理系统
		  </h1>
      <div class="connier" >
		  <el-input v-model="input" placeholder="请输入账号"></el-input>
	      <el-input placeholder="请输入密码" v-model="input1" show-password></el-input>
		<el-button type="primary" @click="subim()" id="button">登录</el-button>
		<p>
			温馨提示：<br>
			未登录过的新用户，自动注册<br>
			注册过的用户可凭账号密码登录
		</p>
	  </div>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		 data() {
    return {
      input: '',
      input1: '',
    }
  },
     mounted() {
		 
		
	},
	methods:{
		 subim(){
			 let data={user_name:this.input,password:this.input1}
		      console.log(data)
			 axios.post("https://elm.cangdu.org/admin/login",data).then((res)=>{
					  console.log(res.data)
					  if(res.data.status==1){
						   this.$router.push("/elm")
					  }
					 
				 })
				
				
				 }		
		}
	
	}
	
</script>

<style lang="scss">
	html,body,#box{
		width: 100%;
		height: 100%;
		background: #2C3E50;
			h1{
		     position: absolute;
			 top: 25%;
			 left: 40%;
			
		color: white;
	}
		.connier{
			#button{
				width: 80%;
				margin-top:25px; 
			}
			input{
				margin-top:25px; 
			}
			p{  
				font-size: 12px;
				color: red;
				text-align: center;
			}
		    width:400px;
    height: 260px;
    position: absolute;
    top: 50%;
    left: 43%;
    margin-top: -105px;
    margin-left: -160px;
    padding: 25px;
	
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
	
	}
	}
	
	
</style>
