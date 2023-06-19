"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "editCenter",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const store = common_vendor.useStore();
    const db = common_vendor.wx$1.cloud.database();
    common_vendor.ref("");
    common_vendor.ref("");
    common_vendor.ref("");
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
    const userInfo = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    const phone = userInfo.value.phone;
    function changeUser() {
      console.log("\u4FEE\u6539", phone);
      db.collection("demo01").where({ phone }).update({
        data: {
          username: userInfo.value.username,
          email: userInfo.value.email,
          password: userInfo.value.password
        },
        success: (res) => {
          console.log(res);
          common_vendor.index.navigateBack(-1);
          common_vendor.index.showToast({
            title: "\u4FEE\u6539\u6210\u529F",
            icon: "success",
            duration: 2e3
          });
        }
      });
    }
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: barHeight.value + "px",
        c: common_vendor.unref(userInfo).avtar,
        d: common_vendor.unref(userInfo).username,
        e: common_vendor.o(($event) => common_vendor.unref(userInfo).username = $event.detail.value),
        f: common_vendor.unref(userInfo).email,
        g: common_vendor.o(($event) => common_vendor.unref(userInfo).email = $event.detail.value),
        h: common_vendor.unref(userInfo).password,
        i: common_vendor.o(($event) => common_vendor.unref(userInfo).password = $event.detail.value),
        j: common_vendor.t(common_vendor.unref(userInfo).phone),
        k: common_vendor.o(changeUser)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d76ecc3f"], ["__file", "D:/project/zhongjie/pages/editCenter/editCenter.vue"]]);
wx.createPage(MiniProgramPage);
