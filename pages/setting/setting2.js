"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "setting2",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const store = common_vendor.useStore();
    const dianji = common_vendor.ref([
      {
        title: "\u7537",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/6.png"
      },
      {
        title: "\u5973",
        picture: "cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/7.png"
      }
    ]);
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
    const currentIndex = common_vendor.ref();
    const gender = common_vendor.ref("");
    const db = common_vendor.wx$1.cloud.database();
    function chuanIndex(item, index) {
      currentIndex.value = index;
      gender.value = item.title;
      console.log(item.title);
    }
    const userInfo = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    const phone = userInfo.value.phone;
    function xiugaigender() {
      console.log("\u4FEE\u6539", phone);
      db.collection("demo01").where({ phone }).update({
        data: {
          gender: gender.value
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
        url: "/pages/setting/setting3"
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
        d: common_vendor.f(dianji.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.n(index === currentIndex.value ? "bg" : "moren"),
            e: common_vendor.o(($event) => chuanIndex(item, index), index)
          };
        }),
        e: common_vendor.o(tonext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eed3a92e"], ["__file", "D:/project/zhongjie/pages/setting/setting2.vue"]]);
wx.createPage(MiniProgramPage);
