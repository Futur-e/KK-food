"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
require("../../store/listtab.js");
require("../../store/userInfo.js");
require("../../store/foodlist.js");
require("../../store/today.js");
require("../../store/zha.js");
const _sfc_main = {
  __name: "setting1",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const dianji = common_vendor.ref([
      {
        title: "\u6211\u8981\u589E\u91CD",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/3.png"
      },
      {
        title: "\u6211\u8981\u51CF\u91CD",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/11.png"
      },
      {
        title: "\u4FDD\u6301\u5065\u5EB7",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/9.png"
      }
    ]);
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
    const currentIndex = common_vendor.ref();
    function chuanIndex(index) {
      currentIndex.value = index;
      console.log(currentIndex.value);
      if (index === 0) {
        store_index.store.dispatch("saveText", "\u589E\u52A0");
      } else {
        store_index.store.dispatch("saveText", "\u51CF\u5C11");
      }
    }
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    function tonext() {
      common_vendor.index.navigateTo({
        url: "/pages/setting/setting2"
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
            b: item.picture,
            c: index,
            d: common_vendor.n(index === currentIndex.value ? "bg" : "moren"),
            e: common_vendor.o(($event) => chuanIndex(index), index)
          };
        }),
        e: common_vendor.o(tonext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6d94feab"], ["__file", "D:/project/zhongjie/pages/setting/setting1.vue"]]);
wx.createPage(MiniProgramPage);
