<template>
    <view class="prohibition">
        <view class="demo" :style="'height:' +  demo.height + 'px;' + 'padding-top:' + demo.top + 'px;'+'padding-bottom:10rpx;'+'color:'+mycolor+';'+'background:'+mybackground+';'">
            <view class="left" :style="'top:' + demo.top + 'px'">
                <image src="../static/top-left.png" mode=""></image>
				<text style="display: inline-block;vertical-align: middle;">关闭</text>
            </view>
            <text style="position: absolute;top:65rpx;">{{title}}</text>
			<text style="position: absolute;right:190rpx;top:65rpx;" v-if="mode && mingxi">明细</text>
        </view>
    </view>
</template>

<script>
    export default {
		props:['title','mode','mingxi'],
        data () {
            return {
                demo: {
                    top: 0,
                    height: 0
                },
				mycolor:'',
				mybackground:''
            }
        },
        created () {
            const demo = uni.getMenuButtonBoundingClientRect()
            this.demo.top = demo.top
            this.demo.height = demo.height
			if(this.mode){
				this.mycolor = '#ffff'
				this.mybackground = '#fbb03b'
			}
        }
    }
</script>

<style lang="scss" scoped>
    .demo{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
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
				vertical-align: middle;
			}
        }
    }
</style>
