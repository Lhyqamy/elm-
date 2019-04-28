<template>
	<div id="box1">
		<Header :list="list"></Header>
		 <el-table
    ref="singleTable"
    :data="data"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="registe_time"
      label="日期"
      width="200">
    </el-table-column>
    <el-table-column
      property="username"
      label="姓名"
      width="200">
    </el-table-column>
    <el-table-column
      property="city"
      label="地址">
    </el-table-column>
  </el-table>
    <div class="block">
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="currentPage1"
    :page-size="100"
  background
  layout="total,prev, pager, next"
  :total="1000"></el-pagination>
   </div>

	</div>
</template>

<script>
	import Header from "./header"
	import axios from "axios"
	 export default {
      data() {
        return {
          data: [
// 	{
//             date: '2016-05-02',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1518 弄'
//           }, {
//             date: '2016-05-04',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1517 弄'
//           }, {
//             date: '2016-05-01',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1519 弄'
//           }, {
//             date: '2016-05-03',
//             name: '王小虎',
//             address: '上海市普陀区金沙江路 1516 弄'
//           }
],
		  currentRow: null,
		  list:"",
		   currentPage1: 1,
			 num:0
        }
      },
	  components:{
		  Header
	  },
	  created() {
	  	  this.list=this.$route.params.headername
	  },
		 mounted(){
			  axios.get(`https://elm.cangdu.org/v1/users/list?offset=${this.num}&limit=20`).then((res)=>{
			     // console.log(res.data)
			     this.data=res.data
			     console.log(this.data)
			 })
		 },
	    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
	    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }, 
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
				this.num=val-1
				 axios.get(`https://elm.cangdu.org/v1/users/list?offset=${this.num*20}&limit=20`).then((res)=>{
				    // console.log(res.data)
				    this.data=res.data
				    console.log(this.data)
				})
      }
    }
    }
</script>

<style>
	#box1{
		background: white;
		width: 100%;
	     height: 100%;
	}
</style>
