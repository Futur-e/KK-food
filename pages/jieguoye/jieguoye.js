"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "jieguoye",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    common_vendor.ref([]);
    const store = common_vendor.useStore();
    const ur = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/01.png");
    const ur1 = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/1111.png");
    const ur2 = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/2.png");
    const ur3 = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/4.png");
    const ur4 = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/5.png");
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
    function tochose(index) {
      if (index === 1) {
        common_vendor.index.redirectTo({
          url: "/pages/foodList/foodList"
        });
      } else if (index === 2) {
        common_vendor.index.redirectTo({
          url: "/pages/foodList/foodList"
        });
      } else if (index === 3) {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
      } else if (index === 4) {
        common_vendor.index.redirectTo({
          url: "/pages/geren/geren"
        });
      }
    }
    function toback() {
      common_vendor.index.navigateTo({
        url: "/pages/setting/setting"
      });
    }
    function toHome() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
      db.collection("demo01").get({
        success: (res) => {
          store.dispatch("saveInfo", res.data[0]);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: common_vendor.o(toback),
        c: barHeight.value + "px",
        d: common_vendor.t(_ctx.sumkcal),
        e: ur.value,
        f: ur1.value,
        g: common_vendor.o(($event) => tochose(1)),
        h: ur2.value,
        i: common_vendor.o(($event) => tochose(2)),
        j: ur3.value,
        k: common_vendor.o(($event) => tochose(3)),
        l: ur4.value,
        m: common_vendor.o(($event) => tochose(4)),
        n: common_vendor.o(toHome)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-542c92a0"], ["__file", "D:/project/zhongjie/pages/jieguoye/jieguoye.vue"]]);
wx.createPage(MiniProgramPage);
