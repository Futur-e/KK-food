"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "fooddetails",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    common_vendor.useStore();
    const detail = common_vendor.ref([]);
    common_vendor.onBeforeMount(() => {
      getNavBarHeight();
      getfood();
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
    getfood();
    function getfood() {
      console.log("213");
      db.collection("fooddetails").where({ _id: "0122a58764720b950e296e167ce6ff5f" }).get({
        success: (res) => {
          console.log("123", res.data);
          detail.value = res.data[0].list;
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: barHeight.value + "px",
        c: common_vendor.f(detail.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.hanliang),
            c: index === 4,
            d: index === 5,
            e: index === 7,
            f: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-29e1f00d"], ["__file", "D:/project/zhongjie/pages/fooddetails/fooddetails.vue"]]);
wx.createPage(MiniProgramPage);
