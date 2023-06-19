"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../__vite-browser-external_url.js");
const _sfc_main = {
  __name: "foodList",
  setup(__props) {
    const barHeight = common_vendor.ref();
    const db = common_vendor.wx$1.cloud.database();
    const foodlist = common_vendor.ref([]);
    const store = common_vendor.useStore();
    const userFeedbackHidden = common_vendor.ref(true);
    const count = common_vendor.ref(1);
    const huoquId = common_vendor.ref();
    const fooditem = common_vendor.ref([]);
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
    function hideDiv() {
      fooditem.value = [];
      userFeedbackHidden.value = true;
    }
    function toback() {
      common_vendor.index.navigateBack(-1);
    }
    getToday();
    function getToday() {
      getList();
      console.log("123");
      db.collection("todyfood").doc("93e4b6a06470dc570e12a8030bcecc20").get({
        success: (res) => {
          console.log(res.data);
          const { breakfast, dinner, lunch } = res.data;
          console.log(breakfast);
          breakfast.food.forEach((item) => {
            foodlist.value.push(item);
          });
          dinner.food.forEach((item) => {
            foodlist.value.push(item);
          });
          lunch.food.forEach((item) => {
            foodlist.value.push(item);
          });
        }
      });
    }
    const a = common_vendor.ref([]);
    function getList() {
      db.collection("newList").get({
        success: (res) => {
          console.log("123", res.data);
          res.data.forEach((item) => {
            console.log(item);
            a.value.push(item._id);
            foodlist.value.push(item.food[0]);
          });
        }
      });
    }
    function EditCount(index) {
      huoquId.value = index;
      fooditem.value.push(foodlist.value[huoquId.value]);
      console.log("123", foodlist.value[huoquId.value]);
      console.log("1234", fooditem.value[0]);
      userFeedbackHidden.value = false;
    }
    function queren() {
      userFeedbackHidden.value = true;
      console.log(foodlist.value[huoquId.value]);
      foodlist.value[huoquId.value].count = count.value;
    }
    function delfood(index) {
      foodlist.value.splice(index, 1);
      db.collection("newList").doc(`${a.value[index]}`).remove({
        success: console.log,
        fail: console.error
      });
    }
    const sumkcal = common_vendor.computed$1(() => {
      let sum = 0;
      foodlist.value.forEach((item) => {
        sum += item.kcal;
      });
      return sum;
    });
    function tofooddetails(index) {
      console.log(foodlist.value[index]);
      store.dispatch("saveFood", foodlist.value[index]);
      common_vendor.index.navigateTo({
        url: "/pages/fooddetails/fooddetails"
      });
    }
    function toSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toback),
        b: barHeight.value + "px",
        c: common_vendor.o(toSearch),
        d: common_vendor.t(common_vendor.unref(sumkcal)),
        e: ur.value,
        f: common_vendor.t(foodlist.value.length),
        g: common_vendor.f(foodlist.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.o(($event) => tofooddetails(index)),
            c: common_vendor.t(item.name),
            d: common_vendor.t(item.count),
            e: common_vendor.o(($event) => tofooddetails(index)),
            f: common_vendor.o(($event) => delfood(index)),
            g: common_vendor.t(item.kcal),
            h: common_vendor.t(item.kcal / 4),
            i: common_vendor.o(($event) => EditCount(index))
          };
        }),
        h: common_vendor.o(toSearch),
        i: common_vendor.f(fooditem.value, (i, index, i0) => {
          return {
            a: common_vendor.t(i.name),
            b: common_vendor.t(i.count),
            c: common_vendor.t(i.kcal)
          };
        }),
        j: count.value,
        k: common_vendor.o(($event) => count.value = $event.detail.value),
        l: common_vendor.o(($event) => queren()),
        m: !userFeedbackHidden.value,
        n: common_vendor.o(($event) => hideDiv()),
        o: !userFeedbackHidden.value,
        p: userFeedbackHidden.value,
        q: common_vendor.o(($event) => hideDiv())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-62898146"], ["__file", "D:/project/zhongjie/pages/foodList/foodList.vue"]]);
wx.createPage(MiniProgramPage);
