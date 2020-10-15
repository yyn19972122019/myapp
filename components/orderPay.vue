<template>
	<view class="father">
		<!-- 确认订单 支付方式 -->
	  <view class="content" v-if="pay">
	  	<view class="close">
	  		<image src="../static/close.png" mode="" @click="closes()"></image>
	  	</view>
		<view class="title">
			请选择支付方式
		</view>
		<view class="detail">
			<view class="item" @click="choose(1)">
				<view>
					<image src="../static/weixin.png" mode=""></image>
					微信支付
				</view>
				<image :src="choseIndex == 1?require('../static/red-gou.png'):require('../static/red-none.png')" mode="" ></image>
			</view>
			<view class="item" @click="choose(-1)">
				<view>
					<image src="../static/zhifubao.png" mode=""></image>
					支付宝
				</view>
				<image :src="choseIndex == -1?require('../static/red-gou.png'):require('../static/red-none.png')" mode="" ></image>
			</view>
		</view>
		<view class="sub">
			确定
		</view>
	  </view>
	  <!-- 确认订单 优惠券 -->
	  <view class="Dcontent" v-if="Discount">
	  	<view class="close">
	  		<image src="../static/close.png" mode="" @click="closes()"></image>
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
	  <!-- 商品详情 分享 -->
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
	  		<view class="sub" style="background-color: #e6e6e6;color: #666666;" @click="closes()">
	  			取消
	  		</view>
	  </view>
	  <!-- 商品详情 购买 -->
	  <view class="Dcontent" v-if="shop" style="height: 918rpx; padding: 0;">
	  	<view style="padding: 26rpx;">
			<view class="close">
				<image src="../static/close.png" mode="" @click="closes()"></image>
			</view>
			 <view class="num">
			 	<image src="../static/banner.png" mode=""></image>
				<view class="num_detail">
					<view>￥<text>198</text></view>
					<view>已选:  12个装</view>
				</view>
			 </view>
			 <view class="shop_num">
			 	规格
			 	<view class="shop_item">
			 		12个装
			 	</view>
			 </view>
			 <view class="count">
			 	数量
				<view>
					<text>-</text>
					<input type="text" value="1" />
					<text>+</text>
				</view>
			 </view>
		</view>
			 <view class="sub" style="position:fixed;bottom: 0; left: 50%;
            transform: translate(-50%);margin-bottom: 26rpx;width: 720rpx;box-sizing: border-box;">
			 	确定
			 </view>
		
	  </view>
	</view>
</template>

<script>
	export default {
	    props:['pay','Discount','share','shop'],
		data() {
			return {
				choseIndex:-1
			};
		},
		methods:{
			// 关闭
			closes(){
				this.$emit('changeDate',false)
			},
			choose(index){
				if(index==1){
					this.choseIndex = 1
				}else{
					this.choseIndex = -1
				}
			}
		},
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
	.count{
		view{
			float: right;
			display: flex;
			width: 214rpx;
			height: 57rpx;
			text-align: center;
			border-radius: 12rpx;
			border: 1rpx solid #F2F2F2;
			text{
				width: 200rpx;
				display: inline-block;
				background-color: f2f2f2;
				font-size: 26rpx;
				color: #000000;
				border: 1rpx solid #F2F2F2;
				line-height: 57rpx;
			}
			input{
				height: 100%;
			}
		}
	}
	.shop_num{
		height: 170rpx;
		overflow: hidden;
		margin-bottom: 16rpx;
		border-bottom: 6rpx solid #EEEEEE;
		.shop_item{
			margin-top: 20rpx;
			width: 146rpx;
			line-height: 55rpx;
			border: 1rpx solid #c1272d;
			color: #c1272d;
			text-align: center;
			font-size: 26rpx;
			border-radius: 10rpx;
		}
	}
	.num{
		height: 170rpx;
		margin-bottom: 20rpx;
		border-bottom: 6rpx solid #EEEEEE;
		display:  flex;
		image{
			position: absolute;
			top: -38rpx;
			width: 230rpx;
			height: 230rpx;
		}
		.num_detail{
			margin-left: 260rpx;
			view{
				color: $color;
				text{
					font-size: 60rpx;
				}
			}
			view:last-child{
				font-size: 24rpx;
				color: #808080;
			}
		}
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
