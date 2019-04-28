<template>
	<div id="box">
		<el-container style=" height: 100%; border: 1px solid #eee; background: white;">
			<el-aside width="300px" style="background-color: #545c64; ">
				<el-menu
					default-active="1"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
				>
					<!-- //首页 -->
					<router-link tag="div" to="/elm/">
						<el-menu-item index="1">
							<i class="el-icon-menu"></i>
							<span slot="title">首页</span>
						</el-menu-item>
					</router-link>

					<el-submenu index="2">
						<!-- //数据管理 -->
						<template slot="title">
							<i class="el-icon-document"></i>
							数据管理
						</template>
						<el-menu-item-group>
							<router-link
								tag="div"
								:to="{ name: 'users', params: { headername: list } }"
							>
								<el-menu-item index="1-1">用户列表</el-menu-item>
							</router-link>
							<router-link
								tag="div"
								:to="{ name: 'natureofcode', params: { headername: food } }"
							>
								<el-menu-item index="1-2">商家列表</el-menu-item>
							</router-link>
							<router-link
								tag="div"
								:to="{ name: 'foods', params: { headername: shipin } }"
							>
								<el-menu-item index="1-3">食品列表</el-menu-item>
							</router-link>
							<router-link
								tag="div"
								:to="{ name: 'orderID', params: { headername: orderID } }"
							>
								<el-menu-item index="1-4">订单列表</el-menu-item>
							</router-link>
							<router-link
								tag="div"
								:to="{ name: 'listing', params: { headername: listing } }"
							>
								<el-menu-item index="1-5">管理员列表</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="3">
						<!-- // 添加数据 -->
						<template slot="title">
							<i class="el-icon-plus"></i>
							添加数据
						</template>
						<el-menu-item-group>
							<router-link tag="div" to="/paging">
								<el-menu-item index="1-1">添加商鋪</el-menu-item>
							</router-link>
							<router-link
								tag="div"
								:to="{ name: 'addfoods', params: { headername: addfoods } }">
								<el-menu-item index="1-2">添加食品</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<!--  //图标 -->
						<template slot="title">
							<i class="el-icon-star-on"></i>
							图标
						</template>
						<el-menu-item-group>
							<router-link tag="div" to="/paging">
								<el-menu-item index="1-1">用户分布</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<!-- //编辑 -->
						<template slot="title">
							<i class="el-icon-edit"></i>
							编辑
						</template>
						<el-menu-item-group>
							<router-link tag="div" to="/paging">
								<el-menu-item index="1-1">文本编辑</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="6">
						<!-- //设置 -->
						<template slot="title">
							<i class="el-icon-setting"></i>
							设置
						</template>
						<el-menu-item-group>
							<router-link tag="div" to="/paging">
								<el-menu-item index="1-1">管理员设置</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="7">
						<!-- 	//说明 -->
						<template slot="title">
							<i class="el-icon-warning-outline"></i>
							说明
						</template>
						<el-menu-item-group>
							<router-link tag="div" to="/paging">
								<el-menu-item index="1-1">说明</el-menu-item>
							</router-link>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<!-- 右边部分 -->
			<el-container><router-view /></el-container>
		</el-container>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			list: '首页/数据管理/用户列表 ',
			food: '首页/数据管理/商家列表',
			shipin: '首页/数据管理/食品列表',
			orderID: '首页/数据管理/订单列表',
			listing: '首页/数据管理/管理员列表',
			addfoods: '首页/添加数据/添加食品'
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
	// 		mounted(){
	//   axios.get('https://elm.cangdu.org/v1/users/list?offset=0&limit=20').then((res)=>{
	//     // console.log(res.data)
	//     this.tableDate=res.data
	//     console.log(this.tableDate)
	// })
	// }
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
}
#box {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	background: white;
}
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}

.el-aside {
	height: 1250px;
	background: #545c64;
	color: #333;
}
</style>
