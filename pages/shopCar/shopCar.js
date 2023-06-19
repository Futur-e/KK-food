"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "shopCar",
  setup(__props) {
    const store = common_vendor.useStore();
    const barHeight = common_vendor.ref(0);
    const data = common_vendor.ref();
    const ur = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/02.png");
    common_vendor.onBeforeMount(() => {
      getNavBarHeight();
      const time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
      var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      data.value = year + "-" + month + "-" + day;
      console.log(year + "-" + month + "-" + day);
    });
    function getNavBarHeight() {
      common_vendor.index.getSystemInfo({
        success: (result) => {
          const isIos = result.system.indexOf("iOS") > -1;
          const statusBarHeight = result.statusBarHeight;
          if (isIos) {
            barHeight.value = statusBarHeight + 3;
          } else {
            barHeight.value = statusBarHeight + 7;
          }
        }
      });
    }
    const bindDateChange = (e) => {
      console.log("123");
      data.value = e.detail.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(store).state.userInfo.userInfo.avtar,
        b: common_vendor.t(data.value),
        c: common_vendor.o(bindDateChange),
        d: barHeight.value + "px",
        e: ur.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/project/zhongjie/pages/shopCar/shopCar.vue"]]);
wx.createPage(MiniProgramPage);
