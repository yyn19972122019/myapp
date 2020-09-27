<template>
    <view class="prohibition">
        <view class="demo" :style="'height:' +  demo.height + 'px;' + 'padding-top:' + demo.top + 'px;padding-bottom:10rpx'">
            <view class="left" :style="'top:' + demo.top + 'px'">
                <image src="../static/top-left.png" mode=""></image>
				<text>关闭</text>
            </view>
            {{title}}
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
            const demo = uni.getMenuButtonBoundingClientRect()
            this.demo.top = demo.top
            this.demo.height = demo.height
        }
    }
</script>

<style lang="scss">
    .demo{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f2f2f2;
        font-size: 26rpx;
        .left{
            float: left;
            position: absolute;
            width: max-content;
            height: max-content;
            top: 0;
            bottom: 0;
            left: 20rpx;
            margin: auto;
			image{
				width: 16rpx;
				height: 32rpx;
				margin-right: 42rpx;
			}
			text{
				display: inline-block;
				vertical-align: top;
			}
        }
    }
</style>
