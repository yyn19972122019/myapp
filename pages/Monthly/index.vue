<template>
	<view class="father">
		<Top :title='title'></Top>
		<view class="title">
			<view class="first">
				<text>佣金提现</text>
				<view></view>
			</view>
			<view >
				<text>余额提现</text>
				<view></view>
			</view>
			<view>
				<text>结算明细</text>
				<view></view>
			</view>
		</view>
		<view class="content">
			<view class="item">
				真实姓名
				<input type="text" value="请输入简体汉字" />
			</view>
			<view class="item">
				支付宝号
				<input type="text" value="请输入邮箱丶手机号格式账号" />
			</view>
			<view class="items">
				<view>提现金额</view>
				<view class="sencond"><text>￥</text><input type="text" value="最小提现金额5元" /></view>
				<view>
					<view class="first">手续费：     ￥1</view>
					<view class="last"><text>可提现0</text><text style="color: #Cfbb03b;">全部提现</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import Top from '../../components/navTop.vue'
	export default {
		components:{
			Top
		},
		data() {
			return {
				title:'结算月报'
			};
		}
	}
</script>

<style lang="scss" scoped>
	.father{
		background-color: #FFFFFF;
	}
.title{
	padding: 20rpx;
	line-height: 80rpx;
	background-color: #FFFFFF;
	display: flex;
	margin-bottom: 12rpx;
	view{
		margin-right: 50rpx;
	}
	.first{
		width: 120rpx;
		text{
			color: #39b54a;
		}
		view{
		  width: 100%;
		  height: 6rpx;
		  background-color: #39b54a;
		}
	}
}
.content{
	font-size: 30rpx;
	width: 660rpx;
	margin: 0 auto;
	background-color: #F2F2F2;
	padding: 23rpx;
	.item{
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		padding: 0 30rpx;
		line-height: 100rpx;
		margin-bottom: 12rpx;
		input{
			margin-left: 20rpx;
			color: #cccccc;
		}
	}
	.items{
	 padding:25rpx;
	 overflow: hidden;
	 background-color: #FFFFFF;
	 view:first-child{
		 padding-bottom: 37rpx;
	 }
	 .sencond{
		 display: flex;
		 align-items: center;
		 border-bottom: 1rpx solid #CCCCCC;
		 padding-bottom: 15rpx;
		 margin-bottom: 12rpx;
		 text{
			 font-size: 48rpx;
			 font-weight: 550;
		 }
		 input{
			 margin-left: 16rpx;
			 color: #cccccc;
		 }
	 }
	 view:last-child{
		 .first{
			 float: left;
		 }
		 .last{
			float: right;
			text:first-child{
				color: #CCCCCC;
				margin-right: 10rpx;
			}
			
		 }
	 }
	}
}
</style>