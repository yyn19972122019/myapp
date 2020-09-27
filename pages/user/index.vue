<template>
	<view>
		<navTop :title='title'/>
		<view class="content">
			<view class="items">
				<view>
					头像
				</view>
				<view>
					<image src="../../static/user.png"></image>
				</view>
			</view>
			<view class="items">
				<view>
					用户名
				</view>
				<view>
					邓广暄
				</view>
			</view>
			<view class="items">
				<view>
					性别
				</view>
				<view>
					男
					<image src="../../static/youhui-right.png" id="jiantou"></image>
				</view>
			</view>
			<view class="items">
				<view>
					手机号
				</view>
				<view>
					186011611591
					<image src="../../static/youhui-right.png" id="jiantou"></image>
				</view>
			</view>
			<view class="items">
				<view>
					微信号
				</view>
				<view>
					reclan
					<image src="../../static/youhui-right.png" id="jiantou"></image>
				</view>
			</view>
			<view class="items">
				<view>
					淘宝授权
					<text>访问淘宝页面无需输入账号密码</text>
				</view>
				<view>
					<image src="../../static/open.png"></image>
				</view>
			</view>
			<view class="items">
				<view>
					关于我们
				</view>
				<view>
					V1.0
					<image src="../../static/youhui-right.png" id="jiantou"></image>
				</view>
			</view>
			<view class="items">
				<view>
					清理缓存
				</view>
				<view>
					<image src="../../static/youhui-right.png" id="jiantou"></image>
				</view>
			</view>
		</view>
		<view class="submit">
			保存
		</view>
	</view>
</template>

<script>
import navTop from '../../components/navTop.vue'
	export default {
		components:{
			navTop
		},
		data() {
			return {
				title:'个人信息'
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
