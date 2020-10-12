<template>
    <view class="prohibition">
        <view class="demo" :style="'height:' +  demo.height + 'px;' + 'padding-top:' + demo.top + 'px;padding-bottom:10rpx'">
            <view class="left" :style="'top:' + demo.top + 'px'">
                <image src="../static/left.png" mode=""></image>
            </view>
			<image src="../static/fans.png" class="imgs" ></image>
			<input placeholder="搜用户名"  />
        </view>
    </view>
</template>

<script>
    export default {
		props:['title'],
        data () {
            return {
                demo: {
                    top: 0,
                    height: 0
                }
            }
        },
        created () {
          this.demo.top = this.StatusBar
		  console.log(this.StatusBar)
          this.demo.height = this.CustomBar
        }
    }
</script>

<style lang="scss" scoped>
    .demo{
		width: 750rpx;
        position: fixed;
        display: flex;
        align-items: center;
        background: #FBB03B;
		z-index: 999;
		box-sizing: border-box;
        font-size: 26rpx;
		overflow: hidden;
        .left{
            // position: absolute;
            // width: max-content;
            // height: max-content;
            // bottom: 0;
            // left: 20rpx;
            // margin: auto;
			image{
				width: 16rpx;
				height: 32rpx;
				margin: 0 20rpx;
				vertical-align: middle;
			}
			text{
				display: inline-block;
				vertical-align: top;
			}
        }
		.imgs{
			position: absolute;
			left: 75rpx;
			width: 27rpx;
			height: 27rpx;
			z-index: 60;
		}
		input{
			box-sizing: border-box;
			// position: absolute;
			padding-left: 50rpx;
			top: 0;
			bottom: 0;
			// margin-left: 57rpx;
			border-radius: 26rpx;
			width: 500rpx;
			height: 55rpx;
			// border: 1rpx solid black;s
			background-color: #FFFFFF;
		}
    }
</style>
