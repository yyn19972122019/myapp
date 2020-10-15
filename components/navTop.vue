<template>
	<view class="prohibition">
		<view class="demo" :style="'height:' +  demo.height + 'px;' +'padding-top:' +  demo.top + 'px;' + 'line-height:' + demo.height + 'px;'+'padding-bottom:10rpx;'+'color:'+mycolor+';'+'background:'+mybackground+';'">
			<view class="left">
				<image src="../static/top-left.png" mode="" @tap="back"></image>
				<text @click="backhome">关闭</text>
			</view>
			<view class="right" :style="{'justify-content':mode && mingxi?'space-around':''}">
				<text>{{title}}</text>
				<text  v-if="mode && mingxi">明细</text>
			</view>
			
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
			console.log(this.StatusBar)
			if (this.mode) {
				this.mycolor = '#ffff'
				this.mybackground = '#fbb03b'
			}
		},
		methods:{
			back(){
				uni.navigateBack(1)
			},
			backhome(){
				uni.navigateTo({url:'/pages/homeTwo/index'})
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
		background-color: #FFFFFF;
		font-size: 26rpx;
		z-index: 999;
		box-sizing: border-box;
		.left {
			display: flex;
			align-items: center;
			image {
				width: 16rpx;
				height: 32rpx;
				margin: 0 20rpx;
			}
		}
		.right{
			text-align: center;
			display: flex;
			align-items: center;
			// justify-content:space-around;
			flex: 1;
			padding: 0 200rpx;
		}
			
	}
</style>