<template>
	<div>
		    <el-header style=" position: relative; font-size: 12px">
		    <span style="float: left;">{{list}}</span>
		  	<el-col :span="12" class="tuichu">
        <el-dropdown trigger="click" style="float: right;">
        <span class="el-dropdown-link">
        <img src="//elm.cangdu.org/img/default.jpg" alt="">
        </span>
         <el-dropdown-menu style="margin-top:-10px;">
          <el-dropdown-item><router-link tag="div" to="/paging">首页</router-link></el-dropdown-item>
         <template>
         <el-button  @click="open">退出</el-button>
         </template>
         </el-dropdown-menu>
        </el-dropdown>
</el-col>
		</el-header>
	
	</div>
</template>

<script>
	
	export default{
		props:[
			"list",
			
		],
		  methods: {
		 open() {
        this.$alert('你确定退出账户吗？', '退出登录', {
          confirmButtonText: '确定',
          callback: action => {
						setTimeout(()=>{
							this.$router.push("/")
						},1000)
          }
        });
      }
    }
	
		
	}
</script>

<style>
	 .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	  
	}
	.tuichu{
			position: absolute;
			left: 700px;
			top: 10px;
	}
</style>
