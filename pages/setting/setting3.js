"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "setting3",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const data = common_vendor.ref("2020-12-12");
    const store = common_vendor.useStore();
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
      xiugaigender();
      common_vendor.index.navigateTo({
        url: "/pages/setting/setting3-3"
      });
    }
    const shengri = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    const userInfo = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    const phone = userInfo.value.phone;
    shengri.value = userInfo.value.age;
    function xiugaigender() {
      console.log("\u4FEE\u6539", phone);
      db.collection("demo01").where({ phone }).update({
        data: {
          age: shengri.value
        },
        success: (res) => {
          console.log(res);
        }
      });
    }
    const bindDateChange = (e) => {
      console.log("123");
      data.value = e.detail.value;
      const time = new Date();
      var year = time.getFullYear();
      shengri.value = Math.floor(year - e.detail.value.substring(0, 4));
    };
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
        d: common_vendor.t(shengri.value),
        e: common_vendor.t(data.value),
        f: common_vendor.o(bindDateChange),
        g: common_vendor.o(tonext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ce7c385"], ["__file", "D:/project/zhongjie/pages/setting/setting3.vue"]]);
wx.createPage(MiniProgramPage);
