"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const db = common_vendor.wx$1.cloud.database();
    const phone = common_vendor.reactive();
    const password = common_vendor.ref("");
    const store = common_vendor.useStore();
    function getToday() {
      db.collection("todyfood").doc("93e4b6a06470dc570e12a8030bcecc20").get({
        success: (res) => {
          console.log("123", res.data);
          store.dispatch("saveTodayList", res.data);
        }
      });
    }
    function getData() {
      console.log(phone);
      db.collection("demo01").where({ email: phone }).get({
        success: (res) => {
          console.log(res);
          if (!res.data.length <= 0) {
            if (res.data[0].password === password.value) {
              getToday();
              store.dispatch("saveInfo", res.data[0]);
              common_vendor.index.showModal({
                title: "\u63D0\u793A",
                content: "\u8981\u8FDB\u884C\u76EE\u6807\u8BBE\u7F6E?",
                success: function(res2) {
                  if (res2.confirm) {
                    common_vendor.index.navigateTo({
                      url: "/pages/setting/setting"
                    });
                  } else if (res2.cancel) {
                    common_vendor.index.switchTab({
                      url: "/pages/index/index"
                    });
                  }
                }
              });
              common_vendor.index.showToast({
                title: "\u767B\u5F55\u6210\u529F",
                icon: "success"
              });
            } else {
              common_vendor.index.showToast({
                title: "\u5BC6\u7801\u9519\u8BEF",
                icon: "error"
              });
            }
          } else {
            common_vendor.index.showToast({
              title: "\u624B\u673A\u53F7\u672A\u6CE8\u518C",
              icon: "success"
            });
          }
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: phone,
        b: common_vendor.o(($event) => phone = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(getData)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/project/zhongjie/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
