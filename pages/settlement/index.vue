<template>
	<view style="overflow: hidden;padding-bottom: 130rpx;">
		<Top :title='title'/>
		<view class="father" :style="{'margin-top':dem.top+'px'}">
			<selects :t_list='t_list'></selects>
			<view class="content">
				<view class="items">
					<text>日期:</text>
					<text>2019/09/10</text>
				</view>
				<view class="items">
					<text>类别:</text>
					<text>结算</text>
				</view>
				<view class="items">
					<text>性别/账号:</text>
					<text>张铭一/zhangmingyi@163.com</text>
				</view>
				<view class="items">
					<text>金额/手续费(￥):</text>
					<text>598.00/5.98</text>
				</view>
			</view>
			<view class="content">
				<view class="items">
					<text>日期:</text>
					<text>2019/09/10</text>
				</view>
				<view class="items">
					<text>类别:</text>
					<text>结算</text>
				</view>
				<view class="items">
					<text>性别/账号:</text>
					<text>张铭一/zhangmingyi@163.com</text>
				</view>
				<view class="items">
					<text>金额/手续费(￥):</text>
					<text>598.00/5.98</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import Top from '../../components/navTop.vue'
import selects from '../../components/Selectionbar.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			Top,
			selects
		},
		data() {
			return {
				dem:{
					top:0
				},
				title:'结算月报',
				t_list:[
					{title:'佣金提现',id:0},
					{title:'余额提现',id:1},
					{title:'结算明细',id:2},
				],
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
