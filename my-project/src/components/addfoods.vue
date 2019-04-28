<template>
	<div id="box1">
		<Header :list="list"></Header>
		
	</div>
</template>

<script>
	import Header from "./header"
	export default {
	 data() {
	   return {
	     list:"",
	   }
	 },
	  components:{
	 		  Header
	 },
	  created() {
	 	  this.list=this.$route.params.headername
	 },
	 }
</script>

<style>
	#box1{
		 background: white;
		width: 100%;
	     height: 100%;
	}
</style>
