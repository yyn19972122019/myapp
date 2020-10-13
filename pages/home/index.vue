<template>
	<view>
		<Top></Top>
		<view class="father" :style="{'top':dem.top+'px'}">
			<view class="topbar">
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
						<image src="../../static/list_one.png" mode=""></image>
						<view>清洁用品</view>
					</view>
					<view class="item">
						<image src="../../static/list_two.png" mode=""></image>
						<view>收纳储物</view>
					</view>
					<view class="item">
						<image src="../../static/list_three.png" mode=""></image>
						<view>餐厨用品</view>
					</view>
					<view class="item">
						<image src="../../static/list_four.png" mode=""></image>
						<view>床上用品</view>
					</view>
					<view class="item">
						<image src="../../static/list_five.png" mode=""></image>
						<view>居家杂货</view>
					</view>
					<view class="item">
						<image src="../../static/list_six.png" mode=""></image>
						<view>办公用品</view>
					</view>
					<view class="item">
						<image src="../../static/list_seven.png" mode=""></image>
						<view>家居饰品</view>
					</view>
					<view class="item">
						<image src="../../static/list_enghit.png" mode=""></image>
						<view>绿植花卉</view>
					</view>
				</view>
			<view class="chose">
				<view class="chose_item">
					<text class='greens'>综合</text>
					<image src="../../static/chose.png" mode=""></image>
				</view>
				<view class="chose_item">
					<text>销量</text>
					<view>
						<image src="../../static/chose_up.png" mode=""></image>
						<image src="../../static/chose_down.png" mode="" class='blc'></image>
					</view>
				</view>
				<view class="chose_item">
					<text>销量</text>
					<view>
						<image src="../../static/chose_up.png" mode=""></image>
						<image src="../../static/chose_down.png" mode="" class='blc'></image>
					</view>
				</view>
				<view class="chose_item">
					<text>销量</text>
					<view>
						<image src="../../static/shaixuan.png" mode="" style='width: 30rpx;height: 30rpx;'></image>
					</view>
				</view>
			</view>
			</view>
		</view>
	</view>
</template>

<script>
import Top from '@/components/homeTop.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			Top
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
