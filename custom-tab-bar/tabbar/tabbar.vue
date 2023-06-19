<template>
  <view class="TabBar">
    1243123123
    <view
        class="tab"
        v-for="(item,index) in TabBarList"
        :key="index"
        @tap="navigatorTo(item.url)"
    >
      <!-- 判断是否有点击，如果没有就不是激活样式，点击就是激活的样式 -->
      <image
          class="imgsize"
          v-if="item.type == 0"
          :src="current == index ? item.selectIcon : item.icon"
          mode="widthFix"
      ></image>
      <!-- 设置一个状态值（type），判断加号是否展示 -->
      <image
          class="addimgsize"
          v-if="item.type == 1"
          :src="item.icon"
          mode="widthFix"
      ></image>
      <view  :class="current == index ?'active':'text'">{{item.name}}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0, //默认第一个页面tabbar激活
    },
  },
  data() {
    return {
      TabBarList: [
        {
          type: 0,
          icon: '../../static/tabbar/index.png',
          selectIcon: '../../static/tabbar/indexSelected.png',
          name: '首页',
          url: '/pages/index/index',
        },
      ],
    }
  },
  methods: {
    navigatorTo(e) {
      uni.redirectTo({
        url: e,
      })
    },
  },
}
</script>
css样式：用fixed固定在底部

<style scoped>
.TabBar {
  position: fixed;
  bottom: 0;
  background-color: red;
  background-size: 750rpx 88rpx;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
}
.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgsize {
  width: 42rpx;
  height: 42rpx;
}
.addimgsize {
  width: 98rpx;
  height: 98rpx;
  margin-top: -30rpx;
}
.text {
  margin-top: 10rpx;
  font-size: 20rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #BFC4C8FF;
  line-height: 20rpx;
}
.active {
  margin-top: 10rpx;
  font-size: 20rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #609EFF;
  line-height: 20rpx;
}
</style>
