<template>
	<view class="prohibition">
		<view class="demo" :style="'height:' +  demo.height + 'px;' +'padding-top:' +  demo.top + 'px;' + 'line-height:' + demo.height + 'px;'+'padding-bottom:10rpx;'+'color:'+mycolor+';'+'background:'+mybackground+';'">
			<view class="left">
				<image src="../static/top-left.png" mode=""></image>
				<text>关闭</text>
			</view>
			<text>{{title}}</text>
			<text style="margin-left: 100rpx;" v-if="mode && mingxi">明细</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title', 'mode', 'mingxi'],
		data() {
			return {
				demo: {
					top: 0,
					height:0,
				},
				mycolor: '',
				mybackground: ''
			}
		},
		created() {
			this.demo.top = this.StatusBar
			this.demo.height = this.CustomBar
			if (this.mode) {
				this.mycolor = '#ffff'
				this.mybackground = '#fbb03b'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.demo {
		position: fixed;
		width: 750rpx;
		display: flex;
		align-items: center;
		// padding-top: 20rpx;
		// justify-content:space-between;
		background-color: #FFFFFF;
		font-size: 26rpx;
		z-index: 999;
		box-sizing: border-box;
		.left {
			margin-right: 170rpx;
			image {
				width: 16rpx;
				height: 32rpx;
				margin: 0 20rpx;
				vertical-align: text-bottom;
			}
		}
	}
</style>