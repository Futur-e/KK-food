"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    const foodlist = common_vendor.ref([]);
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
    const search = common_vendor.ref("");
    function getToday() {
      const queryContent = search.value;
      db.collection("foodList").doc("7a9d6a8e6474203a0005a9bb56ce9e44").get({
        success: (res) => {
          foodlist.value = [];
          console.log(res.data);
          res.data.foodlist.forEach((item) => {
            if (!item.name.indexOf(queryContent)) {
              foodlist.value.push(item);
            } else {
              console.log(item);
            }
          });
        }
      });
    }
    function addfood() {
      db.collection("newList").add({
        data: {
          food: foodlist.value
        },
        success: (res) => {
          common_vendor.index.showToast({
            title: "\u6DFB\u52A0\u6210\u529F",
            icon: "success",
            duration: 1700
          });
          setTimeout(() => {
            common_vendor.index.redirectTo({
              url: "/pages/foodList/foodList"
            });
          }, 1e3);
          console.log(res);
          store.dispatch("saveFoodList", foodlist.value[0]);
        },
        fail: (err) => {
          console.log(err);
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
        c: common_vendor.o(getToday),
        d: search.value,
        e: common_vendor.o(($event) => search.value = $event.detail.value),
        f: common_vendor.t(foodlist.value.length),
        g: common_vendor.f(foodlist.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => addfood()),
            d: common_vendor.t(item.kcal),
            e: common_vendor.t(item.kcal / 4)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "D:/project/zhongjie/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
