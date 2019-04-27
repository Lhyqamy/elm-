<template>
	<div id="box1">
		<Header :list="list"></Header>
		<el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="姓名"
      style="width: 10%">
      <template slot-scope="scope">
        <i class="el-icon-arrow-right"></i>
        <span style="margin-left: 10px">{{}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="注册日期"
      style="width: 10%">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
        <p></p>
          </div>
        </el-popover>
      </template>
    </el-table-column> 
	<el-table-column
      label="地址"
      style="width: 10%">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
        <p></p>
          </div>
        </el-popover>
      </template>
    </el-table-column>
	
	<el-table-column
      label="权限"
      style="width: 10%">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
        <p></p>
          </div>
        </el-popover>
      </template>
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
	 export default {
      data() {
        return {
          tableData: [ 
		  ],
		  list:"",
		    currentPage1: 5,
        }
      },
	  components:{
		  Header
	  },
	  created() {
	  	  this.list=this.$route.params.headername
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
	  }
    }
    }
</script>

<style>
	#box1{
		
		width: 100%;
	     height: 100%;
	}
</style>
