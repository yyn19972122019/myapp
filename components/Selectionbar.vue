<template>
	<view>
		<view class="title" :style="{'margin-top':top+'px',backgroundColor:(bac?'#FFFFFF':'')}">
			 <block v-for="(item,i) in t_list" :key='item.id'>
				<view class="first" @click="change(i)">
					<text :style="{'color':i == t_index?'#39b54a':''}">{{item.title}}</text>
					<view v-if="i == t_index"></view>
				</view>
				<view class="mt_gun" v-if="i != t_list.length-1 && gun">
					<text class='gun'></text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:['t_list','top','gun','bac'],
		data() {
			return {
				t_index:0
			};
		},
		methods:{
			change(i){
				this.t_index = i
			}
		}
	}
</script>

<style lang="scss" scoped>
.title{
	padding: 20rpx;
	line-height: 80rpx;
	// background-color: #FFFFFF;
	display: flex;
	margin-bottom: 12rpx;
	font-size: 24rpx;
	padding-top:0;
	text-align: center;
	view{
		margin-right: 30rpx;
	}
	.first{
		font-size: 30rpx;
		width: 120rpx;
		view{
		  width: 100%;
		  height: 6rpx;
		  background-color: #39b54a;
		}
	}
	.mt_gun{
		display: flex;
		align-items: center;
		.gun{
			width: 3rpx;
			display: inline-block;
			height: 21rpx;
			background-color: grey;
			vertical-align: middle;
		}
	}
}
</style>
