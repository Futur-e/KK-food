"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const barHeight = common_vendor.ref(100);
    const data = common_vendor.ref();
    const store = common_vendor.useStore();
    const breakfast = common_vendor.ref([]);
    const lunch = common_vendor.ref([]);
    const dinner = common_vendor.ref([]);
    const showList = common_vendor.ref([]);
    const sum = common_vendor.ref({
      breakfast: 0,
      lunch: 0,
      dinner: 0
    });
    const userFeedbackHidden = common_vendor.ref(true);
    const shui = common_vendor.ref({
      one: 1,
      two: 1,
      three: 0,
      four: 0,
      five: 0,
      six: 0
    });
    common_vendor.wx$1.cloud.database();
    common_vendor.onBeforeMount(() => {
      getNavBarHeight();
      const time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
      var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      data.value = year + "-" + month + "-" + day;
      console.log(year + "-" + month + "-" + day);
      console.log(foodlist.value);
      breakfast.value = foodlist.value.breakfast.food;
      lunch.value = foodlist.value.lunch.food;
      dinner.value = foodlist.value.dinner.food;
      foodlist.value.breakfast.food.forEach((item) => {
        sum.value.breakfast += item.kcal;
      });
      foodlist.value.lunch.food.forEach((item) => {
        sum.value.lunch += item.kcal;
      });
      foodlist.value.lunch.food.forEach((item) => {
        sum.value.dinner += item.kcal;
      });
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
    const bindDateChange = (e) => {
      common_vendor.index.showToast({
        title: "qweqw",
        icon: "success"
      });
      data.value = e.detail.value;
    };
    const foodlist = common_vendor.computed$1(() => {
      return store.state.today.foodlist;
    });
    function hideDiv() {
      userFeedbackHidden.value = true;
    }
    function showtype(t) {
      userFeedbackHidden.value = false;
      if (t === "0") {
        showList.value = breakfast.value;
      } else if (t === "1") {
        showList.value = lunch.value;
      } else if (t === "2") {
        showList.value = dinner.value;
      }
    }
    function toFoodlist() {
      common_vendor.index.navigateTo({
        url: "/pages/foodList/foodList"
      });
    }
    function toSport() {
      common_vendor.index.navigateTo({
        url: "/pages/sportList/sportList"
      });
    }
    function addshui(index) {
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(store).state.userInfo.userInfo.avtar,
        b: common_vendor.t(data.value),
        c: common_vendor.o(bindDateChange),
        d: barHeight.value + "px",
        e: common_vendor.t(common_vendor.unref(store).state.userInfo.userInfo.username),
        f: common_vendor.t(common_vendor.unref(store).state.zha.texttype),
        g: common_vendor.t(Math.floor((sum.value.breakfast + sum.value.lunch + sum.value.dinner) / 820)),
        h: common_vendor.t(sum.value.breakfast + sum.value.lunch + sum.value.dinner),
        i: common_vendor.o(toFoodlist),
        j: common_vendor.t(breakfast.value.length),
        k: common_vendor.t(sum.value.breakfast),
        l: common_vendor.o(($event) => showtype("0")),
        m: common_vendor.t(lunch.value.length),
        n: common_vendor.t(sum.value.lunch),
        o: common_vendor.o(($event) => showtype("1")),
        p: common_vendor.t(dinner.value.length),
        q: common_vendor.t(sum.value.dinner),
        r: common_vendor.o(($event) => showtype("2")),
        s: shui.value.one === 1,
        t: shui.value.one === 0,
        v: common_vendor.o(($event) => addshui()),
        w: shui.value.two === 1,
        x: shui.value.two === 0,
        y: common_vendor.o(($event) => addshui()),
        z: shui.value.three === 1,
        A: shui.value.three === 0,
        B: common_vendor.o(($event) => addshui()),
        C: shui.value.four === 1,
        D: shui.value.four === 0,
        E: common_vendor.o(($event) => addshui()),
        F: shui.value.five === 1,
        G: shui.value.five === 0,
        H: common_vendor.o(($event) => addshui()),
        I: shui.value.six === 1,
        J: shui.value.six === 0,
        K: common_vendor.o(($event) => addshui()),
        L: common_vendor.o(toSport),
        M: common_vendor.f(showList.value, (item, index, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.kcal),
            d: common_vendor.t(item.kcal)
          };
        }),
        N: !userFeedbackHidden.value,
        O: common_vendor.o(($event) => hideDiv()),
        P: !userFeedbackHidden.value,
        Q: userFeedbackHidden.value,
        R: common_vendor.o(($event) => hideDiv())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/project/zhongjie/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
