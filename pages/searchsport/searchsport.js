"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "searchsport",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    const foodlist = common_vendor.ref([]);
    common_vendor.useStore();
    const userFeedbackHidden = common_vendor.ref(true);
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
    const search = common_vendor.ref("");
    function getToday() {
      const queryContent = search.value;
      db.collection("sportList").doc("9e70c6656475c3df000bf0684c29c880").get({
        success: (res) => {
          foodlist.value = [];
          console.log(res.data);
          res.data.sportlist.forEach((item) => {
            if (!item.name.indexOf(queryContent)) {
              foodlist.value.push(item);
            } else {
              console.log(item);
            }
          });
        }
      });
    }
    function add() {
      userFeedbackHidden.value = false;
    }
    function hideDiv() {
      userFeedbackHidden.value = true;
    }
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: common_vendor.o(add),
        c: barHeight.value + "px",
        d: common_vendor.o(getToday),
        e: search.value,
        f: common_vendor.o(($event) => search.value = $event.detail.value),
        g: common_vendor.o((...args) => _ctx.toSearch && _ctx.toSearch(...args)),
        h: common_vendor.t(foodlist.value.length),
        i: common_vendor.f(foodlist.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.kcal)
          };
        }),
        j: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(index + 1),
            c: common_vendor.t(index + 2),
            d: index
          };
        }),
        k: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(index + 1),
            c: common_vendor.t(index + 2),
            d: index
          };
        }),
        l: common_vendor.f(100, (item, index, i0) => {
          return {
            a: index
          };
        }),
        m: !userFeedbackHidden.value,
        n: common_vendor.o(($event) => hideDiv()),
        o: !userFeedbackHidden.value,
        p: userFeedbackHidden.value,
        q: common_vendor.o(($event) => hideDiv())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b7ee9752"], ["__file", "D:/project/zhongjie/pages/searchsport/searchsport.vue"]]);
wx.createPage(MiniProgramPage);
