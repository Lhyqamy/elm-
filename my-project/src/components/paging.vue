<template>
	<div id="box1">
		<el-header style=" width: 100%; position: relative; font-size: 12px">
			<span style="float: left;">首页</span>
			<el-col :span="12" class="tuichu">
				<el-dropdown trigger="click" style="float: right;">
					<span class="el-dropdown-link">
						<img src="//elm.cangdu.org/img/default.jpg" alt="" />
					</span>
					<el-dropdown-menu style="margin-top:-10px;">
						<el-dropdown-item>
							<router-link tag="div" to="/paging">首页</router-link>
						</el-dropdown-item>
					 <template>
                      <el-button  @click="open">退出</el-button>
                      </template>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-header>
		<div class="tu">数据管理</div>
		<div class="tu-1">
			<span class="span1">当日数据：</span>
			<span class="span2">
				<font size="5">34</font>
				新增用户
			</span>
			<span class="span2">
				<font size="5">4</font>
				新增订单
			</span>
			<span class="span2">
				<font size="5">43</font>
				新增管理员
			</span>
		</div>
		<div class="tu-2">
			<span class="span1">总数据：</span>
			<span class="span2">
				<font size="5">22</font>
				注册用户
			</span>
			<span class="span2">
				<font size="5">22</font>
				订单
			</span>
			<span class="span2">
				<font size="5">22</font>
				管理员
			</span>
		</div>

		<div
			id="chartmain"
			style="width:900px; height: 450px;margin-top:50px;margin-left:50px"
		></div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {};
	},
	mounted() {
		this.on();
	},
	methods: {
		open() {
			this.$alert('你确定退出账户吗？', '退出登录', {
				confirmButtonText: '确定',
				callback: action => {
					setTimeout(() => {
						this.$router.push('/');
					}, 1000);
				}
			});
		},
		on() {
			let aaa = this.$echarts.init(document.getElementById('chartmain'));
			aaa.setOption({
				title: {
					text: '走势图'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['新注册用户', '新增订单', '新增管理员']
				},
				toolbox: {
					show: true,
					feature: {
						dataZoom: {
							yAxisIndex: 'none'
						},
						dataView: { readOnly: false },
						magicType: { type: ['line', 'bar'] },
						restore: {},
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: [
						'2019-04-22',
						'2019-04-23',
						'2019-04-24',
						'2019-04-25',
						'2019-04-26',
						'2019-04-27',
						'2019-04-28'
					]
				},
				yAxis: {
					type: 'value',
					min: 0,
					max: 200,
					interval: 50,
					axisLabel: {
						formatter: '{value}'
					}
				},
				series: [
					{
						name: '新注册用户',
						type: 'line',
						data: [199, 113, 77, 50, 38, 13, 0, 5],
						markPoint: {
							data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
						}
					},
					{
						name: '新增订单',
						type: 'line',
						data: [15, 3, 2, 30, 3, 21, 2, 17],
						markPoint: {
							data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
						}
					},
					{
						name: '新增管理员',
						type: 'line',
						data: [124, 129, 123, 124, 127, 13, 22],
						markPoint: {
							data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
						}
					}
				]
			});
		}
	}
};
</script>

<style scoped lang="scss">
#box1 {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	background: white;
}
.el-dropdown {
	vertical-align: top;
}
.el-dropdown + .el-dropdown {
	margin-left: 15px;
}
.el-icon-arrow-down {
	font-size: 12px;
}
img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}
.tuichu {
	position: absolute;
	right: 20px;
	top: 10px;
}

.tu {
	width: 100%;
	height: 60px;
	line-height: 60px;
	font-size: 30px;
	text-align: center;
}
.tu-1 {
	margin-left: 20px;
	width: 100%;
	span {
		display: inline-block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: red;
		margin-left: 20px;
		border-radius: 7px;
	}
	.span1 {
		display: inline-block;
		font-size: 25px;
		font-weight: 700;
		color: white;
		background: #ff9800;
	}
	.span2 {
		display: inline-block;
		background: #e5e9f2;
	}
}
.tu-2 {
	margin-top: 20px;
	margin-left: 20px;
	width: 100%;
	span {
		display: inline-block;
		width: 250px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: red;
		margin-left: 20px;
		border-radius: 7px;
	}
	.span1 {
		font-size: 25px;
		font-weight: 700;
		color: white;
		background: #20a0ff;
	}
	.span2 {
		background: #e5e9f2;
	}
}
</style>
