<template>
	<view style="overflow: hidden;padding-bottom: 130rpx;">
		<navTop :title='title'/>
		<view class="father" :style="{'margin-top':dem.top+'px'}">
			<view class="title">
				<text>全部</text>
				<text>待付款</text>
				<text>待评论</text>
				<text>待发货</text>
				<text>待收货</text>
			</view>
			<view class="content">
				<view class="cttitle">
					<text>团黄旗舰店</text>
					<image src="../../static/right.png"></image>
					<text>交易成功</text>
				</view>
				<view class="detail">
					<image src="../../static/tao.png"></image>
					<view class="list_right">
						<view>
						 四川红心猕猴桃新鲜包邮水果包邮当季奇异果猕猴桃整箱应季猕猴桃
						</view>
						<view class="price">
							共1件商品 合计:<text>￥198</text>
						</view>
						<view class="lists">
							<text>删除订单</text>
							<text>查看物流</text>
							<text>追加评论</text>
						</view>
					</view>
				</view>
			</view>
			<view class="content">
					<view class="cttitle">
						<text>团黄旗舰店</text>
						<image src="../../static/right.png"></image>
						<text>交易成功</text>
					</view>
					<view class="detail">
						<image src="../../static/tao.png"></image>
						<view class="list_right">
							<view>
							 四川红心猕猴桃新鲜包邮水果包邮当季奇异果猕猴桃整箱应季猕猴桃
							</view>
							<view class="price">
								共1件商品 合计:<text>￥198</text>
							</view>
							<view class="lists">
								<text>删除订单</text>
								<text>查看物流</text>
								<text>追加评论</text>
							</view>
						</view>
					</view>
				</view>
		</view>
		</view>
	</view>
</template>

<script>
import navTop from '../../components/navTop.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			navTop 
		},
		data() {
			return {
				dem:{
					top:0
				},
				title:'我的订单'
			};
		}
	}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
