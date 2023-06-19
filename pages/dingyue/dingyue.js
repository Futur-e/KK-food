"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "dingyue",
  setup(__props) {
    const barHeight = common_vendor.ref();
    common_vendor.onBeforeMount(() => {
      getNavBarHeight();
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
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: barHeight.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1fd154c8"], ["__file", "D:/project/zhongjie/pages/dingyue/dingyue.vue"]]);
wx.createPage(MiniProgramPage);
