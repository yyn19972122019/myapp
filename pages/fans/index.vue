<template>
	<view>
		<Top></Top>
		<view class="title">
			我的粉丝: 02 
			<text>|</text>
			我的邀请人: 爱上优生活
			<text>(VNVP4T)</text>
		</view>
		<view class="content">
			<view class="items">
				<view class="left">
					<image src="../../static/user.png"></image>
					<view class="detail">
					楚河
					<view class="huiyuan">
						普通会员
					</view>
					</view>
				</view>
				<view class="left">
					<view class="detail">
					粉丝数0
					<view class="huiyuan">
						邀请人:邓大哥
					</view>
					</view>
					<image src="../../static/youhui-right.png" style="width: 12rpx;
			height: 24rpx;
			margin-left: 16rpx;"></image>
				</view>
			</view>
			<view class="items">
				<view class="left">
					<image src="../../static/user.png"></image>
					<view class="detail">
					白开水
					<view class="huiyuan">
						普通会员
					</view>
					</view>
				</view>
				<view class="left">
					<view class="detail">
					粉丝数0
					<view class="huiyuan">
						邀请人:邓大哥
					</view>
					</view>
					<image src="../../static/youhui-right.png" style="width: 12rpx;
			height: 24rpx;
			margin-left: 16rpx;"></image>
				</view>
			</view>
		</view>
		<view class="btm">
			<text></text>
			到底了
			<text></text>
		</view>
		<view class="submit">
			专属粉丝:  02
		</view>
	</view>
</template>

<script>
import Top from '../../components/originTop.vue'
	export default {
		components:{
			Top
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
