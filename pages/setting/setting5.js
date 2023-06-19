"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "setting5",
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
    const tizhong = common_vendor.ref();
    const mubiaotizhong = common_vendor.ref();
    const store = common_vendor.useStore();
    const db = common_vendor.wx$1.cloud.database();
    const userInfo = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    xiugaigender();
    function mubiaotiz() {
      store.dispatch("xiugaitizhong", mubiaotizhong.value);
    }
    const phone = userInfo.value.phone;
    tizhong.value = userInfo.value.tizhong;
    function xiugaigender() {
      console.log("\u4FEE\u6539", phone);
      db.collection("demo01").get({
        success: (res) => {
          console.log(res.data);
          tizhong.value = res.data[0].tizhong;
        }
      });
    }
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    function tonext() {
      common_vendor.index.navigateTo({
        url: "/pages/setting/setting6"
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
        d: tizhong.value,
        e: common_vendor.o(($event) => tizhong.value = $event.detail.value),
        f: common_vendor.o(($event) => mubiaotiz()),
        g: mubiaotizhong.value,
        h: common_vendor.o(($event) => mubiaotizhong.value = $event.detail.value),
        i: common_vendor.o(tonext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-19563656"], ["__file", "D:/project/zhongjie/pages/setting/setting5.vue"]]);
wx.createPage(MiniProgramPage);
