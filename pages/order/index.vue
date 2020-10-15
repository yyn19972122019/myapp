<template>
	<view>
	<navTop :title='title' :isHeight="false" ></navTop>
	<pay pay='true' @changeDate='changeDate' v-if="pay"></pay>
	<!-- 优惠券 -->
	<pay Discount='true' @changeDate='changeDate' v-if="Discount"></pay>
	<view class="father" :style="{'top':dem.top+'px'}">
		<view class="title bac">
			<view class="push">
				<view>
					<image src="../../static/plus.png" class="lefts"></image>
					<text>添加收货地址</text>
				</view>
				<view>
					<image src="../../static/right.png" class="rights"></image>
				</view>
			</view>
		</view>
		<view class="content bac">
			<image src="../../static/tao.png"></image>
			<view class="test">
				<view class="test_t">
					四川红心猕猴挑新鲜包邮水果包邮当季奇异果猕猴桃整箱应季猕猴桃
				</view>
				<view class="num">
					<text>x1</text>
				</view>
				<view class="Specifications">
					规格: 12个装
				</view>
				<view class="sprice">
					￥198
				</view>
			</view>
		</view>
		<view class="bac Discount" @click="Dis">
			<view>
				优惠券
			</view>
			<view class="nones">
				暂无可用
				<image src="../../static/youhui-right.png"></image>
			</view>
		</view>
		<view class="bac totail">
			<view class="totos">
				<text>商品总价</text>
				<text>￥198</text>
			</view>
			<view class="totos" style="border: none;color:#B3B3B3;">
				<text>运费</text>
				<text style="color:#B3B3B3;">￥0.00</text>
			</view>
		</view>
		<view class="bac Discount">
			<view>
				支付方式
			</view>
			<view class="nones">
				<image src="../../static/youhui-right.png"></image>
			</view>
		</view>
		<view class="bottom_bar bac">
			<view class="pay">
				实付款:<text>￥198(包邮)</text>
			</view>
			<view class="submit" @click="buy">
				去付款
				<image src="../../static/pay-right.png"></image>
			</view>
		</view>
	</view>
</view>
</template>

<script>
import  navTop from '@/components/navTop.vue'
import Bar from "@/components/sundeheng-custom.vue"
import Pay from '../../components/orderPay.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			navTop,
			Bar,
			Pay
		},
		data() {
			return {
				dem:{
					top:0
				},
				title:'确认订单',
				pay:false,
				Discount:false
			};
		},
		methods:{
			buy(){
				this.pay = true
			},
			Dis(){
				this.Discount = true
			},
			changeDate(){
				this.pay = false
				this.Discount = false
			}
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
