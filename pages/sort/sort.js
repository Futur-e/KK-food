"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "sort",
  setup(__props) {
    const store = common_vendor.useStore();
    const barHeight = common_vendor.ref(0);
    const data = common_vendor.ref();
    const userFeedbackHidden = common_vendor.ref(true);
    common_vendor.ref("");
    common_vendor.onBeforeMount(() => {
      getNavBarHeight();
      const time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
      var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
      data.value = year + "-" + month + "-" + day;
      console.log(year + "-" + month + "-" + day);
    });
    const ur = common_vendor.ref("cloud://cloud1-7gss67lqbd87c579.636c-cloud1-7gss67lqbd87c579-1311918633/04.png");
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
    function showBox() {
      console.log("122");
      common_vendor.index.showActionSheet({
        mask: true,
        itemList: ["\u76EE\u6807\u8BE6\u60C5\u8FDB\u5EA6", "\u66F4\u65B0\u5F53\u524D\u4F53\u91CD", "\u8BBE\u7F6E"],
        success(res) {
          console.log(res.tapIndex);
          if (res.tapIndex === 0) {
            common_vendor.index.navigateTo({
              url: "/pages/sort/mubiaodetail"
            });
          } else if (res.tapIndex === 1) {
            console.log("bb");
            userFeedbackHidden.value = false;
          } else if (res.tapIndex === 2) {
            console.log("cc");
            common_vendor.index.navigateTo({
              url: "/pages/sort/updatamubiao"
            });
          }
        },
        fail(res) {
          console.log(res.errMsg);
        }
      });
    }
    const bindDateChange = (e) => {
      console.log("123");
      data.value = e.detail.value;
    };
    function hideDiv() {
      userFeedbackHidden.value = true;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(store).state.userInfo.userInfo.avtar,
        b: common_vendor.t(data.value),
        c: common_vendor.o(bindDateChange),
        d: barHeight.value + "px",
        e: common_vendor.o(showBox),
        f: ur.value,
        g: common_vendor.t(common_vendor.unref(store).state.zha.mubiaotizhong),
        h: common_vendor.t(common_vendor.unref(store).state.userInfo.userInfo.tizhong),
        i: common_vendor.f(100, (item, index, i0) => {
          return {
            a: common_vendor.t(index),
            b: common_vendor.t(index + 1),
            c: common_vendor.t(index + 2),
            d: index
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
            a: index
          };
        }),
        l: !userFeedbackHidden.value,
        m: common_vendor.o(($event) => hideDiv()),
        n: !userFeedbackHidden.value,
        o: userFeedbackHidden.value,
        p: common_vendor.o(($event) => hideDiv())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/project/zhongjie/pages/sort/sort.vue"]]);
wx.createPage(MiniProgramPage);
