<template>
	<view>
		<Top></Top>
		<view class="father" :style="{'top':dem.top+'px'}">
			<view class="topbar">
				<view class="bar" v-for="(item,i) in top_list" :key='i' @click="choose(i)">
					<text>{{item.title}}</text>
					<view class='gun' v-if="choseIndex == i"></view>
				</view>
				<image src="../../static/down.png" mode=""></image>
			</view>
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
		<view class="content">
			<view class="chose">
				<view class="chose_item">
					<text class='greens'>综合</text>
					<image src="../../static/chose.png" mode=""></image>
					<view class="gun_one">
						
					</view>
				</view>
				<view class="chose_item">
					<text>销量</text>
					<view class="hit">
						<image src="../../static/chose_up.png" mode=""></image>
						<image src="../../static/chose_down.png" mode="" class='blc'></image>
					</view>
					<view class="gun_one">
						
					</view>
				</view>
				<view class="chose_item">
					<text>价格</text>
					<view class='hit'>
						<image src="../../static/chose_up.png" mode=""></image>
						<image src="../../static/chose_down.png" mode="" class='blc'></image>
					</view>
					<view class="gun_one">
						
					</view>
				</view>
				<view class="chose_item">
					<text>筛选</text>
					<view>
						<image src="../../static/shaixuan.png" mode="" style='width: 30rpx;height: 30rpx;'></image>
					</view>
				</view>
			</view>
			<view class="shops">
				<view class="shop_detail">
											<image src="../../static/shop_detail.png" mode="" ></image>
				<view class="toast">
				飞利浦电动牙刷皮卡丘礼盒成人声波震动牙刷小美刷
				</view>
				<view class="total">
					<text>原价:￥128</text>
					<text>￥76.9</text>
				</view>
				</view>
				<view class="shop_detail">
											<image src="../../static/shop_deatils.png" mode="" ></image>
				<view class="toast">
				飞利浦电动牙刷皮卡丘礼盒成人声波震动牙刷小美刷
				</view>
				<view class="total">
					<text>原价:￥128</text>
					<text>￥76.9</text>
				</view>
				</view>
			</view>
		</view>
	</view>
	<Bar></Bar>
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
				dem:{top:0},
				top_list:[
					{title:'商城精选'},
					{title:'自营商品'},
					{title:'限时抢购'},
					{title:'居家百货'},
					{title:'新疆特产'},
					{title:'母婴'},
				],
				choseIndex:0
			};
		},
		methods:{
			choose(i){
				this.choseIndex = i
			}
		}
	}
</script>

<style lang="scss" scoped>
@import  './index.scss'
</style>
