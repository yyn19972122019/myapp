<template>
	<view>
	  <navTop :title='title'></navTop>
	  <!-- 分享 -->
	  <Pay share='true' v-if='share' @changeDate='changeDate'></Pay>
	  <!-- 购买 -->
	   <Pay shop='true' v-if='Buy' @changeDate='changeDate'></Pay>
	  <view class="father" :style="{'top':dem.top+'px'}">
	  <view class="banner">
	  	<image src="../../static/banner.png" mode=""></image>
		<view class="banner_title">
			<image src="../../static/hot.png" mode=""></image>
		</view>
	  </view>
	  <view class="banner_detail">
	  	四川红心猕猴桃新鲜包邮水果包邮当季奇异果猕猴桃整箱应季猕猴桃
	  </view>
	  <view class="tuwen">
	  	图文详情
	  </view>
	  <view class="woge">
	  	还是我哥经常说的那句话<text>新鲜摘果</text>
	  </view>
	  <view class="me">
	  	<text>自己家种的</text>
		<text>更甜更放心</text>
	  </view>
	  <view class="hot_m">
	  	<image src="../../static/hot-m.png" mode=""></image>
	  </view>
	  <view class="botbar">
	  	<view class="icon">
	  		<view class="item">
	  			<image src="../../static/house.png" mode=""></image>
				<view>首页</view>
	  		</view>
			<view class="item">
				<image src="../../static/message.png" mode=""></image>
				<view>客服</view>
			</view>
			<view class="item">
				<image src="../../static/gou.png" mode=""></image>
				<view>购物车</view>
			</view>
	  	</view>
		<view class="sub">
			<view @click="shares()">立即分享</view>
			<view @click="buy()">立即购买</view>
		</view>
	  </view>
	</view>
</view>
</template>

<script>
import navTop from '../../components/navTop.vue'
import Pay from '@/components/orderPay.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			navTop,
			Pay
		},
		data() {
			return {
				title:'商品详情',
				dem:{
					top:0
				},
				share:false,
				Buy:false
			};
		},
		methods:{
			shares(){
				this.share = true
			},
			buy(){
			 this.Buy = true
			},
			changeDate(type){
				this.share = type
				this.Buy = type
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>

