"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "launch",
  setup(__props) {
    onLoad();
    function onLoad() {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        direct();
      }, 1e3);
    }
    function direct() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-82d34b09"], ["__file", "D:/project/zhongjie/pages/launch/launch.vue"]]);
wx.createPage(MiniProgramPage);
