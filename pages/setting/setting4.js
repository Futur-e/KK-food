"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "setting4",
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
    const store = common_vendor.useStore();
    const db = common_vendor.wx$1.cloud.database();
    const userInfo = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    const phone = userInfo.value.phone;
    tizhong.value = userInfo.value.tizhong;
    function xiugaigender() {
      console.log("\u4FEE\u6539", phone);
      db.collection("demo01").where({ phone }).update({
        data: {
          tizhong: tizhong.value
        },
        success: (res) => {
          console.log(res);
        }
      });
    }
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    function tonext() {
      xiugaigender();
      common_vendor.index.navigateTo({
        url: "/pages/setting/setting5"
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
        f: common_vendor.o(tonext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ea93dc75"], ["__file", "D:/project/zhongjie/pages/setting/setting4.vue"]]);
wx.createPage(MiniProgramPage);
