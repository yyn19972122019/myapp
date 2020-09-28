<template>
	<view>
		<Top :title='title'></Top>
		<view class="title">
			<text>积分明细</text>
			<text>当前积分:398</text>
		</view>
		<view class="content">
			<view class="item">
				<view class="list_item">
					<text>日期:</text>
					<text>2019/09/10</text>
				</view>
				<view class="list_item">
					<text>积分增减:</text>
					<text>+5</text>
				</view>
				<view class="list_item">
					<text>操作:</text>
					<text>登录</text>
				</view>
				<view class="list_item">
					<text>备注:</text>
					<text>登录,台湾省,IP:39.12.211.89</text>
				</view>
			</view>
			<view class="item">
				<view class="list_item">
					<text>日期:</text>
					<text>2019/09/10</text>
				</view>
				<view class="list_item">
					<text>积分增减:</text>
					<text>+5</text>
				</view>
				<view class="list_item">
					<text>操作:</text>
					<text>登录</text>
				</view>
				<view class="list_item">
					<text>备注:</text>
					<text>登录,台湾省,IP:39.12.211.89</text>
				</view>
			</view>
			<view class="item">
				<view class="list_item">
					<text>日期:</text>
					<text>2019/09/10</text>
				</view>
				<view class="list_item">
					<text>积分增减:</text>
					<text>+5</text>
				</view>
				<view class="list_item">
					<text>操作:</text>
					<text>登录</text>
				</view>
				<view class="list_item">
					<text>备注:</text>
					<text>登录,台湾省,IP:39.12.211.89</text>
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
				title:'我的积分'
			};
		}
	}
</script>

<style lang="scss" scoped>
.title{
	background-color: #ffe6e6;
	margin-bottom: 20rpx;
	overflow: hidden;
	padding: 0 33rpx;
	line-height: 77rpx;
	color: #ff0000;
	text:first-child{
		float: left;
	}
	text:last-child{
		float: right;
	}
}
.content{
	position: relative;
	.item{
		color:#4d4d4d;
		box-sizing: border-box;
		margin:0 auto;
		width: 700rpx;
		padding: 15rpx 29rpx;
		border: 1rpx solid #FF0000;
		border-radius: 16rpx;
		background-color: #FFFFFF;
		position: relative;
		z-index: 60;
		margin-bottom: 20rpx;
		.list_item{
			line-height: 56rpx;
			text:first-child{
				float: left;
				color: #000000;
			}
			text:last-child{
				float: right;
			}
		}
		.list_item::after{
			 content: "";
			 display: block;
			 height: 0;
			 clear: both;
			 visibility: hidden;
		}
	}
}
</style>

