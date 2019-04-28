<template>
	<div id="box1">
		<Header :list="list"></Header>
		<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
		 property="id"
      label="订单ID"
      style="width: 33%">
    </el-table-column>
    <el-table-column
		 property="total_amount"
      label="总价格"
      style="width: 33%">
     
    </el-table-column> 
	<el-table-column
	 property="status_bar.title"
      label="订单状态"
      style="width: 33%">
      
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
          tableData: [],
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
			axios.get(`https://elm.cangdu.org/bos/orders?offset=${this.num}&limit=20&restaurant_id=undefined`).then((res)=>{
				console.log(res.data)
				this.tableData=res.data
			})
		},
	   methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
	    handleSizeChange(val) {
	    console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
	    console.log(`当前页: ${val}`);
			this.num=val-1
			axios.get(`https://elm.cangdu.org/bos/orders?offset=${this.num*20}&limit=20&restaurant_id=undefined`).then((res)=>{
				console.log(res.data)
				this.tableData=res.data
			})
	  }
    }
    }
</script>

<style >
	#box1{
		 background: white;
		width: 100%;
	     height: 100%;
	}
</style>
