<template>
	<view>
		<Top :title='title'></Top>
		<view class="title">
			<view class="first">
				<text>普通佣金</text>
				<view></view>
			</view>
			<view class="mt_gun">
				<text class='gun'></text>
			</view>
			<view >
				<text>优选佣金</text>
				<view></view>
			</view>
			<view class="mt_gun">
				<text class='gun'></text>
			</view>
			<view>
				<text>售后扣除</text>
				<view></view>
			</view>
			<view class="mt_gun">
				<text class='gun'></text>
			</view>
			<view>
				<text>活动奖励</text>
				<view></view>
			</view>
		</view>
		<view class="clock">
			<img src="../../static/clock.png" />
			<text>07/20  16:50</text>
		</view>
		<view class="content">
			<view class="detail">
				<view class="detail_t">
					邀请成功!
				</view>
				<view class="detail_d">
					恭喜您成功邀请楚河加入 【优生活】大家庭,快带上小伙伴开启优生活创业之旅吧！
				</view>
			</view>
		</view>
		<view class="clock">
			<img src="../../static/clock.png" />
			<text>07/20  16:50</text>
		</view>
		<view class="content">
			<view class="detail">
				<view class="detail_t">
					邀请成功!
				</view>
				<view class="detail_d">
					恭喜您成功邀请楚河加入 【优生活】大家庭,快带上小伙伴开启优生活创业之旅吧！
				</view>
			</view>
		</view>
		<view class="clock">
			<img src="../../static/clock.png" />
			<text>07/20  16:50</text>
		</view>
		<view class="content">
			<view class="detail">
				<view class="detail_t">
					欢迎注册
				</view>
				<view class="detail_d">
				欢迎注册【优生活】会员, 免费使用优生活购买和分享都可以货地高额返佣,VIP可获得更多专属尊贵权益。快开启省钱赚钱模式吧!
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
				title:'消息'
			};
		}
	}
</script>

<style lang="scss" scoped>
@import  './index.scss'
</style>
