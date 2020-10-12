<template>
	<view style="overflow: hidden;padding-bottom: 130rpx;">
		<Top :title='title'/>
		<view class="father" :style="{'margin-top':dem.top+'px'}">
			<view class="title">
				<text>佣金提现</text>
				<text>余额提现</text>
				<text>结算明细</text>
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
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			Top
		},
		data() {
			return {
				dem:{
					top:0
				},
				title:'结算月报'
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
