"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "center",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const userInfo = common_vendor.ref([]);
    common_vendor.useStore();
    const db = common_vendor.wx$1.cloud.database();
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
    getData();
    function getData() {
      db.collection("demo01").where({ email: "zhl2222@163.com" }).get({
        success: (res) => {
          console.log(res);
          userInfo.value = res.data[0];
        }
      });
    }
    function tosetting() {
      common_vendor.index.navigateTo({
        url: ""
      });
    }
    function tochange(index) {
      if (index === 1) {
        common_vendor.index.navigateTo({
          url: "/pages/dingyue/dingyue"
        });
      } else if (index === 2) {
        common_vendor.index.navigateTo({
          url: "/pages/geren/geren"
        });
      }
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.toback && _ctx.toback(...args)),
        b: barHeight.value + "px",
        c: userInfo.value.avtar,
        d: common_vendor.o(tosetting),
        e: common_vendor.t(userInfo.value.username),
        f: common_vendor.t(userInfo.value.age),
        g: common_vendor.t(userInfo.value.shenggao),
        h: common_vendor.t(userInfo.value.tizhong),
        i: common_vendor.o(($event) => tochange(1)),
        j: common_vendor.o(($event) => tochange(2)),
        k: common_vendor.o(($event) => tochange(3)),
        l: common_vendor.o(($event) => tochange(4))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3f122818"], ["__file", "D:/project/zhongjie/pages/center/center.vue"]]);
wx.createPage(MiniProgramPage);
