"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../__vite-browser-external_url.js");
const _sfc_main = {
  __name: "sportList",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    const sportlist = common_vendor.ref([]);
    common_vendor.useStore();
    const userFeedbackHidden = common_vendor.ref(true);
    const ur = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/01.png");
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
    getToday();
    function getToday() {
      console.log("123");
      db.collection("sportList").doc("9e70c6656475c3df000bf0684c29c880").get({
        success: (res) => {
          console.log(res.data);
          sportlist.value = res.data.sportlist;
        }
      });
    }
    function add() {
      userFeedbackHidden.value = false;
    }
    common_vendor.ref([]);
    function hideDiv() {
      userFeedbackHidden.value = true;
    }
    const sumkcal = common_vendor.computed$1(() => {
      let sum = 0;
      sportlist.value.forEach((item) => {
        sum += item.kcal;
      });
      return sum;
    });
    function toSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/searchsport/searchsport"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: common_vendor.o(add),
        c: barHeight.value + "px",
        d: common_vendor.o(toSearch),
        e: common_vendor.t(common_vendor.unref(sumkcal)),
        f: ur.value,
        g: common_vendor.t(common_vendor.unref(sumkcal) * 2),
        h: common_vendor.t(Math.floor(common_vendor.unref(sumkcal) * 2 / (common_vendor.unref(sumkcal) * 3))),
        i: common_vendor.t(common_vendor.unref(sumkcal)),
        j: common_vendor.t(Math.floor(common_vendor.unref(sumkcal) / (common_vendor.unref(sumkcal) * 3))),
        k: common_vendor.t(sportlist.value.length),
        l: common_vendor.f(sportlist.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.kcal)
          };
        }),
        m: common_vendor.o(toSearch),
        n: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(index + 1),
            c: common_vendor.t(index + 2),
            d: index
          };
        }),
        o: common_vendor.f(100, (item, index, i0) => {
          return {
            a: index
          };
        }),
        p: common_vendor.f(60, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(index + 1),
            c: common_vendor.t(index + 2),
            d: index
          };
        }),
        q: common_vendor.f(100, (item, index, i0) => {
          return {
            a: index
          };
        }),
        r: !userFeedbackHidden.value,
        s: common_vendor.o(($event) => hideDiv()),
        t: !userFeedbackHidden.value,
        v: userFeedbackHidden.value,
        w: common_vendor.o(($event) => hideDiv())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d388b599"], ["__file", "D:/project/zhongjie/pages/sportList/sportList.vue"]]);
wx.createPage(MiniProgramPage);
