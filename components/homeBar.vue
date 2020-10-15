<template>
	<view class='bar'>
		<view class="item" v-for="(item,i) in list" :key='i' @click="act(i)">
			<image :src="curIndex == i ?item.picA:item.pic"></image>
			<view :class="[i==curIndex?'active':'']">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		created(){
			
		},
		data() {
			return {
				list:[
					{title:'首页',pic:require('../static/house.png'),picA:require('../static/home_active.png')},
					{title:'购物导航',pic:require('../static/shop.png'),picA:require('../static/shop_active.png')},
					{title:'VIP特区',pic:require('../static/vip.png'),picA:require('../static/vip_active.png')},
					{title:'我的',pic:require('../static/home-user.png'),picA:require('../static/user_active.png')},
					],
					curIndex:0
			};
		},
		methods:{
			act(i){
				this.curIndex = i
			}
		}
	}
</script>

<style lang="scss" scoped>
.bar{
	position: fixed;
	bottom: 0;
	width: 750rpx;
	height: 150rpx;
	box-sizing: border-box;
	z-index: 200;
	padding: 29rpx;
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	font-size: 22rpx;
	color: #808080;
	.item{
		image{
			width: 37rpx;
			height: 35rpx;
		}
	}
	.active{
		color: #39b54a;
	}
}
</style>
