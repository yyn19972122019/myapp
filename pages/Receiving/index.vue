<template>
	<view class="father">
		<navTop :title='title'></navTop>
		<view class="content">
			<view class="item bac">
				<view class="name">
					收货人
				</view>
				<input type="text" value="请填写收货人姓名"  />
			</view>
			<view class="item bac">
				<view class="name">
					手机号
				</view>
				<input type="text" value="请填写您的手机号"  />
			</view>
			<view class="item bac">
				<view class="name">
					选择地区
				</view>
				<input type="text" value="省-市-区"  />
				<image src="../../static/youhui-right.png" mode=""></image>
			</view>
			<view class="item bac" style="height:236rpx;align-items:flex-start;margin-bottom: 11rpx;">
				<view class="name">
					详细地址
				</view>
				<textarea value="" placeholder="如道路丶 门牌号 丶 小区 丶 楼栋号单元室等"  style="width: 530rpx;
			flex: 1;
			color: #999999;"/>
			</view>
			<view class="home bac">
				<text>设置为默认地址</text>
				<image src="../../static/btnClose.png"></image>
			</view>
			<view class="submit">
				保存
			</view>
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
				title:'添加收货地址'
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
