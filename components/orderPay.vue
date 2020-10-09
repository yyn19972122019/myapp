<template>
	<view class="father">
	  <view class="content">
	  	<view class="close">
	  		<image src="../static/close.png" mode=""></image>
	  	</view>
		<view class="title">
			请选择支付方式
		</view>
		<view class="detail">
			<view class="item">
				<view>
					<image src="../static/weixin.png" mode=""></image>
					微信支付
				</view>
			</view>
			<view class="item">
				<view>
					<image src="../static/zhifubao.png" mode=""></image>
					支付宝
				</view>
				<image src="../static/red-gou.png" mode="" ></image>
			</view>
		</view>
	  </view>
	</view>
</template>

<script>
	export default {
	    props:['one','two'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.father{
	position:fixed;
	width: 100%;
	height:100%;
	background: rgba(0,0,0,.4);
	z-index: 200;
	.content{
		box-sizing: border-box;
		position: absolute;
		padding: 26rpx;
		bottom: 100rpx;
		width: 100%;
		background-color: #FFFFFF;
		height: 520rpx;
		.close{
			line-height: 65rpx;
			overflow: hidden;
			image{
				float: right;
				width: 34rpx;
				height: 34rpx;
			}
		}
		.title{
			text-align: center;
			font-size: 36rpx;
			color: #000000;
			padding-bottom: 40rpx;
		}
		.item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 100rpx;
				border-bottom: 5rpx solid #F2F2F2;
				image{
					width: 53rpx;
					height: 53rpx;
					margin-right: 15rpx;
					vertical-align: middle;
				}
		}
	}
}
</style>
