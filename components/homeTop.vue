<template>
	<view class="prohibition">
		<view class="demo" :style="'height:' +  demo.height + 'px;' +'padding-top:' +  demo.top + 'px;' + 'line-height:' + demo.height + 'px;'+'padding-bottom:15rpx;'">
			<view class="left">
				<image src="../static/youshenglogo.png" mode=""></image>
			</view>
			<view class="center">
				<image src="../static/city.png" mode=""></image>
				<text>新爱搭单</text>
				<image src="../static/down.png" mode=""></image>
			</view>
			<view class="right">
				<image src="../static/fans.png"></image>
				<input value="搜索" />
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				demo: {
					top: 0,
					height:0,
				},
			}
		},
		created() {
			this.demo.top = this.StatusBar
			this.demo.height = this.CustomBar
		}
	}
</script>

<style lang="scss" scoped>
	.demo {
		color: #FFFFFF;
		position: fixed;
		width: 750rpx;
		display: flex;
		align-items:center;
		justify-content: space-between;
		background-color: #fbb03b;
		font-size: 26rpx;
		z-index: 999;
		box-sizing: border-box;
		padding-left: 16rpx;
		padding-right: 190rpx;
		.left{
			image{
				width: 123rpx;
				height: 50rpx;
				vertical-align: middle;
			}
		}
		.center{
			line-height: 30rpx;
			flex: 1;
			image{
				width: 20rpx;
				height: 24rpx;
				vertical-align: bottom;
			}
			image:last-child{
				width:36rpx;
				height: 24rpx;
			}
			text{
				margin: 0 10rpx;
			}
		}
		.right{
			width: 40%;
			image{
				position: absolute;
				top: 10rpx;
				left: 10rpx;
				width: 27rpx;
				height: 27rpx;
			}
			position: relative;
			input{
				color:#b3b3b3;
				box-sizing: border-box;
				padding:0 15rpx;
				padding-left: 47rpx;
				width: 100%;
				line-height: 64rpx;
				background-color: #FFFFFF;
				border-radius:20rpx;
			}
			}
	}
</style>