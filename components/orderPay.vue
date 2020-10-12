<template>
	<view class="father">
	  <view class="content" v-if="pay">
	  	<view class="close">
	  		<image src="../static/close.png" mode=""></image>
	  	</view>
		<view class="title">
			请选择支付方式
		</view>
		<view class="detail">
			<view class="item">
				<view>
					<image src="../static/weixin.png" mode=""></image>
					微信支付
				</view>
			</view>
			<view class="item">
				<view>
					<image src="../static/zhifubao.png" mode=""></image>
					支付宝
				</view>
				<image src="../static/red-gou.png" mode="" ></image>
			</view>
		</view>
		<view class="sub">
			确定
		</view>
	  </view>
	  <view class="Dcontent" v-if="Discount">
	  	<view class="close">
	  		<image src="../static/close.png" mode=""></image>
	  	</view>
		<view class="title">
			优惠券
		</view>
		<view class="Disdetail">
			<text>可用优惠券(0)</text>
			<text></text>
			<text>不可用优惠券(0)</text>
		</view>
		<view class="yohuijuan">
			<image src="../static/youhuijuan.png" mode=""></image>
		</view>
		<view class="noyouhui">您还没有可用的优惠券哦</view>
		<view class="sub">
			确定
		</view>
	  </view>
	  <view class="content" v-if="share">
	  		<view class="title">
	  			分享到
	  		</view>
	  		<view class="detail">
	  			<view class="item" style="justify-content: space-around;border: none;">
	  				<view class="share_item">
	  					<image src="../static/shareWx.png" mode=""></image>
						<view class="share_detail">微信</view>
	  				</view>
					<view class="share_item">
						<image src="../static/sharepy.png" mode=""></image>
						<view class="share_detail">朋友圈</view>
					</view>
					<view class="share_item">
						<image src="../static/sharebaocun.png" mode=""></image>
						<view class="share_detail">保存图片</view>
					</view>
	  			</view>
	  		</view>
	  		<view class="sub" style="background-color: #e6e6e6;color: #666666;">
	  			取消
	  		</view>
	  </view>
	</view>
</template>

<script>
	export default {
	    props:['pay','Discount','share'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.father{
	position:fixed;
	width: 100%;
	height:100%;
	background: rgba(0,0,0,.4);
	z-index: 200;
	.Dcontent{
	  box-sizing: border-box;
	  position: absolute;
	  padding: 26rpx;
	  bottom:0;
	  width: 100%;
	  background-color: #FFFFFF;
	}
	.share_detail{
		text-align: center;
	}
	.Disdetail{
		width: 520rpx;
		margin: 0 auto;
		display: flex;
		font-weight: 550;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 200rpx;
		text:first-child{
			color: $color;
		}
		text:nth-child(2){
			width: 3rpx;
			height: 26rpx;
			display: inline-block;
			background-color: #e6e6e6;
		}
	}
	.yohuijuan{
		width: 208rpx;
		height: 110rpx;
		margin: 0 auto;
		image{
			width: 100%;
			height: 100%;
			margin-bottom: 30rpx;
		}
	}
	.noyouhui{
		text-align: center;
		font-size: 33rpx;
		color:#4d4d4d;
		padding-bottom: 200rpx;
	}
	.content{
		box-sizing: border-box;
		position: absolute;
		padding: 26rpx;
		bottom: 0;
		width: 100%;
		background-color: #FFFFFF;
		height: 520rpx;
		.item{
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 100rpx;
				border-bottom: 5rpx solid #F2F2F2;
				image{
					width: 53rpx;
					height: 53rpx;
					margin-right: 15rpx;
					vertical-align: middle;
				}
				.share_item{
					image{
						margin: 0 auto;
						width: 130rpx;
						height: 130rpx;
					}
				}
		}
		.detail{
			margin-bottom: 40rpx;
		}
	}
	.sub{
		@include sub(100%)
	}
	.close{
		line-height: 65rpx;
		overflow: hidden;
		image{
			float: right;
			width: 34rpx;
			height: 34rpx;
		}
	}
	.title{
		text-align: center;
		font-size: 36rpx;
		color: #000000;
		padding-bottom: 40rpx;
		font-weight: 550;
	}
}
</style>
