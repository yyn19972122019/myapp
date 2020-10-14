<template>
	<view>
		<Top></Top>
		<view class="father" :style="{'top':dem.top+'px'}">
			<view class="topbar">
				<image src="../../static/homebanner.png" mode="" class='twobanner'></image>
				<view class="bar">
					<text>商城精选</text>
				</view>
				<view class="bar">
					<text>自营商品</text>
				</view>
				<view class="bar">
					<text>限时抢购</text>
				</view>
				<view class="bar">
					<text>居家百货</text>
					<view class='gun'></view>
				</view>
				<view class="bar">
					<text>新疆特产</text>
				</view>
				<view class="bar">
					<text>母婴</text>
					<image src="../../static/down.png" mode=""></image>
				</view>
			</view>
		<view class="content">
			<view class="list">
				<view class="item">
					<image src="../../static/homes_one.png" mode=""></image>
					<view>淘宝</view>
				</view>
				<view class="item">
					<image src="../../static/homes_two.png" mode=""></image>
					<view>充值中心</view>
				</view>
				<view class="item">
					<image src="../../static/homes_three.png" mode=""></image>
					<view>商城特供</view>
				</view>
				<view class="item">
					<image src="../../static/homes_four.png" mode=""></image>
					<view>新疆特产</view>
				</view>
				<view class="item">
					<image src="../../static/homes_five.png" mode=""></image>
					<view>限时秒杀</view>
				</view>
				<view class="item">
					<image src="../../static/homes_six.png" mode=""></image>
					<view>升级VIP</view>
				</view>
				<view class="item">
					<image src="../../static/homes_seven.png" mode=""></image>
					<view>促销专区</view>
				</view>
				<view class="item">
					<image src="../../static/homes_enghit.png" mode=""></image>
					<view>更多...</view>
				</view>
			</view>
				<view class="tegong">
					<view class="title">
						<text></text>
						<text>优生活特供</text>
						<text></text>
					</view>
					<view class="putao">
						<view class="pt_item">
							<view class="pt_toast">
								<view>新疆吐鲁番葡萄干</view>
								<view><text>会员:</text><text>￥98</text></view>
								<view>原价￥128</view>
							</view>
							<view class="pt_img">
								<image src="../../static/Toast_one.png" mode=""></image>
							</view>
						</view>
						<view class="pt_item">
							<view class="pt_toast">
								<view>新疆吐鲁番葡萄干</view>
								<view><text>会员:</text><text>￥98</text></view>
								<view>原价￥128</view>
							</view>
							<view class="pt_img">
								<image src="../../static/Toast_two.png" mode=""></image>
							</view>
						</view>
						<view class="pt_item">
							<view class="pt_toast">
								<view>新疆吐鲁番葡萄干</view>
								<view><text>会员:</text><text>￥98</text></view>
								<view>原价￥128</view>
							</view>
							<view class="pt_img">
								<image src="../../static/Toast_three.png" mode=""></image>
							</view>
						</view>
						<view class="pt_item">
							<view class="pt_toast">
								<view>新疆吐鲁番葡萄干</view>
								<view><text>会员:</text><text>￥98</text></view>
								<view>原价￥128</view>
							</view>
							<view class="pt_img">
								<image src="../../static/Toast_four.png" mode=""></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			
	<Bar></Bar>
		<view class="detail">
			<view class="detail_title">
				<image src="../../static/miaosha.png" mode=""></image>
				<view class="more">
					更多
					<image src="../../static/right.png" mode=""></image>
				</view>
			</view>
			<view class="time">
				<view class="time_item">
					<view>10:00</view>
					<view>已开抢</view>
				</view>
				<view class="time_item">
					<view>10:00</view>
					<view>已开抢</view>
				</view>
				<view class="time_item">
					<image src="../../static/time_qianggou.png" mode=""></image>
				</view>
				<view class="time_item">
					<view>10:00</view>
					<view>已开抢</view>
				</view>
				<view class="time_item">
					<view>10:00</view>
					<view>已开抢</view>
				</view>
			</view>
			<view class="shops">
				<view class="shops_item">
					<image src="../../static/shops_one.png" mode=""></image>
					<view class="item_detail">
						<view class="item_title">
							反季双面羊绒大衣女2019新款韩版中长款赫本风小个子羊毛呢外套潮
						</view>
						<view class="item_price">
							<view>￥<text>198</text><text>￥128</text></view>
							<view>马上抢</view>
						</view>
					</view>
				</view>
				<view class="shops_item">
					<image src="../../static/shops_one.png" mode=""></image>
					<view class="item_detail">
						<view class="item_title">
							反季双面羊绒大衣女2019新款韩版中长款赫本风小个子羊毛呢外套潮
						</view>
						<view class="item_price">
							<view>￥<text>198</text><text>￥128</text></view>
							<view>马上抢</view>
						</view>
					</view>
				</view>
				<view class="shops_item">
					<image src="../../static/shops_one.png" mode=""></image>
					<view class="item_detail">
						<view class="item_title">
							反季双面羊绒大衣女2019新款韩版中长款赫本风小个子羊毛呢外套潮
						</view>
						<view class="item_price">
							<view>￥<text>198</text><text>￥128</text></view>
							<view>马上抢</view>
						</view>
					</view>
				</view>
				<view class="shops_item">
					<image src="../../static/shops_one.png" mode=""></image>
					<view class="item_detail">
						<view class="item_title">
							反季双面羊绒大衣女2019新款韩版中长款赫本风小个子羊毛呢外套潮
						</view>
						<view class="item_price">
							<view>￥<text>198</text><text>￥128</text></view>
							<view>马上抢</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</view>
</template>

<script>
import Top from '@/components/homeTop.vue'
import Bar from '@/components/homeBar.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			Top,
			Bar
		},
		data() {
			return {
				dem:{top:0}
			};
		}
	}
</script>

<style lang="scss" scoped>
@import  './index.scss'
</style>
