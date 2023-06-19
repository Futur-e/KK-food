"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "setting7",
  setup(__props) {
    dingshi();
    function dingshi() {
      setTimeout(() => {
        gohome();
      }, 500);
    }
    function toNext() {
      common_vendor.index.redirectTo({
        url: "/pages/jieguoye/jieguoye"
      });
    }
    const store = common_vendor.useStore();
    const db = common_vendor.wx$1.cloud.database();
    const userInfo = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    const phone = userInfo.value.phone;
    function gohome() {
      db.collection("demo01").where({ email: phone }).get({
        success: (res) => {
          console.log(res);
          if (!res.data.length <= 0) {
            if (res.data[0].password === password.value) {
              store.dispatch("saveInfo", res.data[0]);
            }
          }
        }
      });
      toNext();
    }
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-afff739a"], ["__file", "D:/project/zhongjie/pages/setting/setting7.vue"]]);
wx.createPage(MiniProgramPage);
