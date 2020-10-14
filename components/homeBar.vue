<template>
	<view class='father'>
		<view class="item">
			<image src="../static/home.png" mode=""></image>
			<view>首页</view>
		</view>
		<view class="item">
			<image src="../static/shop.png" mode=""></image>
			<view>购物导航</view>
		</view>
		<view class="item">
			<image src="../static/vip.png" mode=""></image>
			<view>vip特区</view>
		</view>
		<view class="item">
			<image src="../static/home-user.png" mode=""></image>
			<view>我的</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.father{
	position: fixed;
	bottom: 0;
	width: 750rpx;
	height: 150rpx;
	box-sizing: border-box;
	z-index: 200;
	padding: 29rpx;
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	font-size: 22rpx;
	color: #808080;
	.item{
		image{
			width: 37rpx;
			height: 35rpx;
		}
		view:first-child{
			color: #39b54a;
		}
	}
}
</style>
