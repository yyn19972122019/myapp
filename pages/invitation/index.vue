<template>
	<view class="father">
		<Top :title='title' mode='true'></Top>
		<view class="title_bac">
			<image src="../../static/yaoqing.png" class="redbac"></image>
			<view class="title">
				<text>邀请好友</text> <text>佣金提现</text>
			</view>
			<view class="yongjin">
				<view class="detail">
					<view class="yuan">
						复制
					</view>
					<view>我的邀请码</view>
					<view class="dr">VNVT4P</view>
				</view>
			</view>
			<view class="content">
				<view class="imgs">
					<image src="../../static/blue.png" ></image>
					<view class="imgs_detail">
						好友下载APP并使用您的邀请码成功注册会员,他将永久成为您的粉丝,未来他通过推广商品产生得订单佣金您都将有奖励,会自动计入您的账号中!
					</view>
				</view>
				<view class="yaoqing">
					<text></text>
					邀请方式
					<text></text>
				</view>
				<view class="list_item">
					<view class="items">
						<view class="item_one">
							<text>方式</text>
							<view>1</view>
						</view>
						<view class="zhuanfa">转发邀请海报,好友下载APP注册时填下海报上的邀请码;</view>
					</view>
					<view class="items">
						<view class="item_one">
							<text>方式</text>
							<view>2</view>
						</view>
						<view class="zhuanfa">转发邀请海报,好友下载APP注册时填下海报上的邀请码;</view>
					</view>
					<view class="items">
						<view class="item_one">
							<text>方式</text>
							<view>3</view>
						</view>
						<view class="zhuanfa">转发邀请海报,好友下载APP注册时填下海报上的邀请码;</view>
					</view>
				</view>
			</view>
			<view class="submit">
				<view class="sub">
					邀请链接
				</view>
				<view class="sub">
					邀请链接
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
				title:'邀请好友成为VIP'
			};
		}
	}
</script>

<style lang="scss" scoped>
.dr{
	font-size: 48rpx;
}
.father{
	position: relative;
}
.title_bac{
	position: relative;
	background-color: #fbb03b;
	height: 682rpx;
	border-bottom-left-radius: 60rpx;
	border-bottom-right-radius:60rpx;
	z-index: 30;
	.title{
		position: absolute;
		top: 3%;
		left: 51%;
		transform: translate( -51%);
		width: 396rpx;
		line-height: 66rpx;
		text-align: center;
		color: #FFFFFF;
		background-color: #f15a24;
		font-size: 32rpx;
		font-weight: 550;
		z-index: 70;
		border-radius: 20rpx;
		text{
			margin-right: 10rpx;
		}
	}
	.yongjin{
		position: absolute;
		top: 8%;
		left: 50%;
		transform: translate( -50%);
		width: 377rpx;
		height: 152rpx;
		background-color: #fcf4ae;
		z-index: 65;
		padding:16rpx;
		box-sizing: border-box;
		border-radius: 15rpx;
		.detail{
			font-size: 24rpx;
			padding:22rpx;
			box-sizing: border-box;
			border: 1rpx dashed red;
			height:100%;
			color: #ff0000;
			view{
				display: inline-block;
			}
			.yuan{
				width: 80rpx;
				height:80rpx;
				float: right;
				text-align: center;
				background-color: #FF0000;
				border-radius: 50%;
				font-size: 27rpx;
				color: #FFFFFF;
				line-height: 80rpx;
			}
		}
	}
	.content{
		position: absolute;
		padding-top: 244rpx;
		box-sizing: border-box;
		width: 700rpx;
		// height:971rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		z-index: 60;
		top: 10%;
		left: 50%;
		transform: translate( -50%);
		 .imgs{
			width: 513rpx;
			 margin: 0 auto;
			 image{
				 width: 100%;
				 height:223rpx;
			 }
			 .imgs_detail{
				 text-indent:35rpx;
				 padding-bottom: 117rpx;
			 }
		 }
		 .yaoqing{
			 padding: 0 33rpx;
			 color: #f15a24;
			 font-size: 36rpx;
			 font-weight: 550;
			 margin-bottom: 23rpx;
			 text{
				 display: inline-block;
				 width: 227rpx;
				 height: 6rpx;
				 background-color: pink;
				 vertical-align:middle;
				 margin-right: 10rpx;
			 }
		 }
		 .list_item{
			 padding: 0 33rpx;
			 padding-bottom: 23rpx;
			 .items{
				 display: flex;
				 margin-bottom: 31rpx;
				 .item_one{
					 text:first-child{
					 					 color: #f15a24;
					 }
					 view{
					 					 width:32%;
					 					 height:59%;
										 display: inline-block;
					 					 background-color: #f15a24;
					 					 border-radius: 50%;
					 					 text-align: center;
					 					 color: #FFFFFF;
					 }
					 width: 27%;
				 }
				 text{
					  margin-right: 10rpx;
				 }
				 .zhuanfa{
					 display: inline-block;
				 }
			 }
		 }
	}
	.submit{
		position: relative;
		bottom: -1270rpx;
		box-sizing: border-box;
		margin-bottom: 30rpx;
		width: 750rpx;
		padding: 0 33rpx;
		display: flex;
		justify-content: space-between;
		z-index: 80;
		.sub{
			width: 334rpx;
			line-height: 100rpx;
			background-color: #fbb03b;
			text-align: center;
			color: #FFFFFF;
			font-size: 36rpx;
		}
	}
	.redbac{
		position: absolute;
		top:4%;
		left: 47%;
		transform: translate( -47%); 
		width: 396rpx;
		height: 50rpx;
		z-index: 20;
	}
}
</style>
