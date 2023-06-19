"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "setting6",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const dianji = common_vendor.ref([
      {
        title: "\u589E\u5F3A\u7248",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/9.png"
      },
      {
        title: "\u8FDB\u9636\u7248",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/10.png"
      },
      {
        title: "\u521D\u7EA7\u7248",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/8.png"
      }
    ]);
    common_vendor.ref();
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
    function tonext() {
      common_vendor.index.redirectTo({
        url: "/pages/setting/setting7"
      });
    }
    function toHome() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: common_vendor.o(toHome),
        c: barHeight.value + "px",
        d: common_vendor.f(dianji.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index === 0,
            c: index === 1,
            d: index === 2,
            e: item.picture,
            f: index
          };
        }),
        e: common_vendor.o(tonext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f25414ba"], ["__file", "D:/project/zhongjie/pages/setting/setting6.vue"]]);
wx.createPage(MiniProgramPage);
