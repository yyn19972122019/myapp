<template>
	<view style="overflow: hidden;padding-bottom: 130rpx;">
		<Top :title='title'></Top>
		<selects :t_list='t_list' :top='dem.top' gun='true' bac='true'></selects>
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
import selects from '../../components/Selectionbar.vue'
	export default {
	created(){
		this.dem.top = this.CustomBar
	},
	components:{
		Top,
		selects
	},
	data() {
		return {
			dem:{
				top:0
			},
			title:'消息',
			t_list:[
				{title:'普通佣金',id:0},
				{title:'优选佣金',id:1},
				{title:'售后扣除',id:2},
				{title:'活动奖励',id:3},
			],
		};
	},
	methods:{
	}
	}
</script>

<style lang="scss" scoped>
@import  './index.scss'
</style>
