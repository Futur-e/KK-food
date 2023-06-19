"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
require("./store/listtab.js");
require("./store/userInfo.js");
require("./store/foodlist.js");
require("./store/today.js");
require("./store/zha.js");
if (!Math) {
  "./pages/launch/launch.js";
  "./pages/index/index.js";
  "./pages/sort/sort.js";
  "./pages/shopCar/shopCar.js";
  "./pages/center/center.js";
  "./pages/login/login.js";
  "./pages/editCenter/editCenter.js";
  "./pages/foodList/foodList.js";
  "./pages/fooddetails/fooddetails.js";
  "./pages/dingyue/dingyue.js";
  "./pages/geren/geren.js";
  "./pages/setting/setting.js";
  "./pages/setting/setting1.js";
  "./pages/setting/setting2.js";
  "./pages/setting/setting3.js";
  "./pages/setting/setting4.js";
  "./pages/setting/setting5.js";
  "./pages/setting/setting6.js";
  "./pages/setting/setting7.js";
  "./pages/search/search.js";
  "./pages/sort/mubiaodetail.js";
  "./pages/sort/updatamubiao.js";
  "./pages/jieguoye/jieguoye.js";
  "./pages/sportList/sportList.js";
  "./pages/searchsport/searchsport.js";
  "./pages/setting/setting3-3.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    common_vendor.wx$1.cloud.init({
      env: "cloud1-7gss67lqbd87c579",
      traceUser: true
    });
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/project/zhongjie/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
