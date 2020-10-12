<template>
<view style="overflow: hidden;padding-bottom: 130rpx;">
		<Top :title='title'></Top>
		<view class="title" :style="{'margin-top':dem.top+'px'}">
			<text>优惠券明细</text>
			<text>优惠券:3个</text>
		</view>
		<view class="content">
			<view>
				<image src="../../static/nouse.png" class="nouse"></image>
			</view>
			<view>
				<image src="../../static/uses.png" class="uses"></image>
			</view>
			<view class="item">
				<view class="list_item">
					<text>日期</text>
					<text>2019/09/10</text>
				</view>
				<view class="list_item">
					<text>面额</text>
					<text>100</text>
				</view>
				<view class="list_item">
					<text>操作</text>
					<text>购物</text>
				</view>
				<view class="list_item">
					<text>劵号</text>
					<text>Q028938757498</text>
				</view>
				<view class="list_item">
					<text>平台/品类</text>
					<text>全平台/全品类</text>
				</view>
				<view class="list_item">
					<text>使用期限</text>
					<text>2019/09/10至2019/10/10</text>
				</view>
			</view>
			<view class="item useborder">
				<view class="list_item">
					<text>日期</text>
					<text>2019/09/10</text>
				</view>
				<view class="list_item">
					<text>面额</text>
					<text>100</text>
				</view>
				<view class="list_item">
					<text>操作</text>
					<text>购物</text>
				</view>
				<view class="list_item">
					<text>劵号</text>
					<text>Q028938757498</text>
				</view>
				<view class="list_item">
					<text>平台/品类</text>
					<text>全平台/全品类</text>
				</view>
				<view class="list_item">
					<text>使用期限</text>
					<text>2019/09/10至2019/10/10</text>
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
				title:'我的优惠券'
			};
		}
	}
</script>

<style lang="scss" scoped>
.title{
	background-color: #ffe6e6;
	margin-bottom: 52rpx;
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
		margin-bottom: 68rpx;
		.list_item{
			line-height: 56rpx;
			text:first-child{
				float: left;
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
	.useborder{
		border: 1rpx solid #b3b3b3;
	}
	.nouse{
		position:absolute;
		top: -43rpx;
		right: 33rpx;
		width: 183rpx;
		height: 154rpx;
		z-index: -2;
	}
	.uses{
		position:absolute;
		bottom: 253rpx;
		right: 33rpx;
		width: 183rpx;
		height: 154rpx;
		z-index: -2;
	}
}
</style>
