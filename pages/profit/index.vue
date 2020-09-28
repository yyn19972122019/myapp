<template>
	<view class="father">
		<Top :title='title' mode='true'></Top>
		<view class="title">
			<view class="item_one">
				<view>
					可提现(元)<text>0</text>
				</view>
				<view>
					<image src="../../static/tixian.png"></image>
				</view>
			</view>
			<view class="item_two">
				<view>
					<text>累计到账(元)</text>
					<text>已提现(元)</text>
					<text>未结算(元)</text>
				</view>
				<view>
					<text>0</text>
					<text>0</text>
					<text>0</text>
				</view>
			</view>
		</view>
		<view class="More">
			<view>昨日日报</view>
			<view><image src="../../static/more.png"></image>查看更多</view>
		</view>
		<view class="content">
			<view class="first">
				<view>预估收益(元)</view>
				<view id='one'>0</view>
			</view>
			<view class="item">
				<view class="items_one">
					<view>预估普通订金佣金</view>
					<view>0</view>
				</view>
				<view class="items_two">
					<view>预估优选订单佣金</view>
					<view>0</view>
				</view>
			</view>
			<view class="item">
				<view class="items_one">
					<view>预估优选佣金(活动商品)</view>
					<view>0</view>
				</view>
				<view class="items_two">
					<view>预计活动奖励</view>
					<view>0</view>
				</view>
			</view>
			<view class="item">
				<view class="items_one">
					<view>专属粉丝新增</view>
					<view>0</view>
				</view>
				<view class="items_two">
					<view>普通粉丝新增</view>
					<view>0</view>
				</view>
			</view>
		</view>
		<view class="More">
			<view>本月月报</view>
			<view><image src="../../static/more.png"></image>查看更多</view>
		</view>
		<view class="content">
			<view class="first">
				<view>预估收益(元)</view>
				<view id='one'>0</view>
			</view>
			<view class="item">
				<view class="items_one">
					<view>预估普通订金佣金</view>
					<view>0</view>
				</view>
				<view class="items_two">
					<view>预估优选订单佣金</view>
					<view>0</view>
				</view>
			</view>
			<view class="item">
				<view class="items_one">
					<view>预估优选佣金(活动商品)</view>
					<view>0</view>
				</view>
				<view class="items_two">
					<view>预计活动奖励</view>
					<view>0</view>
				</view>
			</view>
			<view class="item">
				<view class="items_one">
					<view>专属粉丝新增</view>
					<view>0</view>
				</view>
				<view class="items_two">
					<view>普通粉丝新增</view>
					<view>0</view>
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
				title:'收益记录'
			};
		}
	}
</script>

<style lang="scss" scoped>
.father{
	font-size: 24rpx;
}
.title{
	height: 283rpx;
	background-color: #fbb03b;
	overflow: hidden;
	color: #FFFFFF;
	.item_one{
		padding: 0 50rpx;
		padding-right: 0;
		padding-bottom:42rpx;
		height: 110rpx;
		line-height: 110rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		view:first-child{
			text{
				margin-left:26rpx;
				font-size: 70rpx;
			}
		}
		image{
			vertical-align: middle;
			width: 227rpx;
			height: 64rpx;
		}
	}
	.item_two{
		view{
		text-align: center;
		display: flex;
		justify-content: space-around;
		align-items: center;	
		}
		padding: 0 50rpx;
		view:last-child{
			font-size: 48rpx;
		}
	}
}
.More{
	padding: 39rpx;
	overflow: hidden;
	view:first-child{
		font-size: 32rpx;
		color: #000000;
		float: left;
	}
	view:last-child{
		float: right;
		color: #fbb03b;
		font-size: 32rpx;
		image{
			width:23rpx;
			height:26rpx;
			margin-right: 10rpx;
			vertical-align: middle;
		}
	}
}
.content{
	color: #999999;
	background-color: #FFFFFF;
	padding: 22rpx 40rpx;
	padding-right: 170rpx;
	margin-bottom: 12rpx;
	.first{
		
		#one{
			font-size: 34rpx;
			color: #000000;
		}
	}
	.item{
		margin-bottom:33rpx;
		overflow: hidden;
		.items_one{
			float: left;
			view:last-child{
				font-size: 30rpx;
				color: #000000;
			}
		}
		.items_two{
			float: right;
			width: 40%;
			view:last-child{
				font-size: 30rpx;
				color: #000000;
			}
		}
		#one{
			font-size: 34rpx;
			color: #000000;
		}
	}
}
</style>
