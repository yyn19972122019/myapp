<template>
	<view style="overflow: hidden;padding-bottom: 130rpx;">
		<Top :title='title'></Top>
		<view class="title" :style="{'margin-top':dem.top+'px'}">
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
					超级秒杀,倒技时1小时开抢啦!
				</view>
				<view class="detail_m">
					<image src="../../static/tao.png" mode=""></image>
				<view class="m_one">
					<text>四川红心猕猴桃新鲜包邮水果包邮当季奇异果猕猴桃整箱应季猕猴桃</text>
					
				<view class="m_two">
															<text>共一件商品            <text id="two">合计：<text>￥198</text></text></text>
				</view>
				<view class="m_two">
				<text id="there">原价:298</text>
				<text id="four">今日15:00开抢</text>
				</view>
				</view>
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
			<view class="detail_zhezhao">
			</view>
			<image src="../../static/huodong.png" mode="" class="huodong"></image>
			<view class="detail_t">
				超级秒杀,倒技时1小时开抢啦!
			</view>
			<view class="detail_m">
				<image src="../../static/tao.png" mode=""></image>
			<view class="m_one">
				<text>四川红心猕猴桃新鲜包邮水果包邮当季奇异果猕猴桃整箱应季猕猴桃</text>
				
			<view class="m_two">
														<text>共一件商品            <text id="two">合计：<text>￥198</text></text></text>
			</view>
			<view class="m_two">
			<text id="there">原价:298</text>
			<text id="four">今日15:00开抢</text>
			</view>
			</view>
			</view>
			<view class="detail_d">
				恭喜您成功邀请楚河加入 【优生活】大家庭,快带上小伙伴开启优生活创业之旅吧！
			</view>
		</view>
	</view>
	</view>
</template>

<script>
import Top from '../../components/navTop.vue'
	export default {
		created(){
			this.dem.top = this.CustomBar
		},
		components:{
			Top
		},
		data() {
			return {
				dem:{
					top:0
				},
				title:'消息'
			};
		}
	}
</script>

<style lang="scss" scoped>
@import  './index.scss'
</style>
