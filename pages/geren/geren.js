"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "geren",
  setup(__props) {
    const store = common_vendor.useStore();
    const userInfo = common_vendor.ref([]);
    const userFeedbackHidden = common_vendor.ref(true);
    const zhonglei = common_vendor.ref("");
    const text = common_vendor.ref();
    getInfo();
    function getInfo() {
      userInfo.value = store.state.userInfo.userInfo;
    }
    function hideDiv() {
      userFeedbackHidden.value = true;
      text.value = "";
    }
    const db = common_vendor.wx$1.cloud.database();
    function toEdit() {
      var data = JSON.stringify(userInfo.value);
      common_vendor.provide("userInfo", userInfo.value);
      console.log(data);
      common_vendor.index.navigateTo({
        url: "/pages/editCenter/editCenter?index=" + data
      });
    }
    function Edit(type) {
      if (type === "age") {
        zhonglei.value = "\u5E74\u9F84";
      } else if (type === "tizhong") {
        zhonglei.value = "\u4F53\u91CD";
      } else if (type === "shengao") {
        zhonglei.value = "\u8EAB\u9AD8";
      } else if (type === "sex") {
        zhonglei.value = "\u6027\u522B";
      }
      userFeedbackHidden.value = false;
    }
    const userInfo1 = common_vendor.computed$1(() => {
      return store.state.userInfo.userInfo;
    });
    const phone = userInfo1.value.phone;
    function queren() {
      console.log("123");
      if (zhonglei.value === "\u5E74\u9F84") {
        db.collection("demo01").where({ phone }).update({
          data: {
            age: text.value
          },
          success: (res) => {
            console.log(res);
            common_vendor.index.showToast({
              title: "\u4FEE\u6539\u6210\u529F",
              icon: "success",
              duration: 2e3
            });
          }
        });
        userInfo.value.age = text.value;
      } else if (zhonglei.value === "\u4F53\u91CD") {
        db.collection("demo01").where({ phone }).update({
          data: {
            tizhong: text.value
          },
          success: (res) => {
            console.log(res);
            common_vendor.index.showToast({
              title: "\u4FEE\u6539\u6210\u529F",
              icon: "success",
              duration: 2e3
            });
          }
        });
        userInfo.value.tizhong = text.value;
      } else if (zhonglei.value === "\u8EAB\u9AD8") {
        db.collection("demo01").where({ phone }).update({
          data: {
            shenggao: text.value
          },
          success: (res) => {
            console.log(res);
            common_vendor.index.showToast({
              title: "\u4FEE\u6539\u6210\u529F",
              icon: "success",
              duration: 2e3
            });
          }
        });
        userInfo.value.shenggao = text.value;
      } else if (zhonglei.value === "\u6027\u522B") {
        db.collection("demo01").where({ phone }).update({
          data: {
            gender: text.value
          },
          success: (res) => {
            console.log(res);
            common_vendor.index.showToast({
              title: "\u4FEE\u6539\u6210\u529F",
              icon: "success",
              duration: 2e3
            });
          }
        });
        userInfo.value.gender = text.value;
      }
      userFeedbackHidden.value = true;
      setTimeout(() => {
        chongxin();
      }, 1e3);
      text.value = "";
    }
    function chongxin() {
      db.collection("demo01").get({
        success: (res) => {
          store.dispatch("saveInfo", res.data[0]);
        }
      });
      getInfo();
    }
    return (_ctx, _cache) => {
      return {
        a: userInfo.value.avtar,
        b: common_vendor.t(userInfo.value.username),
        c: common_vendor.t(userInfo.value.desc),
        d: common_vendor.o(toEdit),
        e: common_vendor.t(userInfo.value.age),
        f: common_vendor.o(($event) => Edit("age")),
        g: common_vendor.t(userInfo.value.tizhong),
        h: common_vendor.o(($event) => Edit("tizhong")),
        i: common_vendor.t(userInfo.value.shenggao),
        j: common_vendor.o(($event) => Edit("shengao")),
        k: common_vendor.t(userInfo.value.gender),
        l: common_vendor.o(($event) => Edit("sex")),
        m: text.value,
        n: common_vendor.o(($event) => text.value = $event.detail.value),
        o: common_vendor.t(zhonglei.value),
        p: common_vendor.o(($event) => queren()),
        q: !userFeedbackHidden.value,
        r: common_vendor.o(($event) => hideDiv()),
        s: !userFeedbackHidden.value,
        t: userFeedbackHidden.value,
        v: common_vendor.o(($event) => hideDiv())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a2a7652c"], ["__file", "D:/project/zhongjie/pages/geren/geren.vue"]]);
wx.createPage(MiniProgramPage);
