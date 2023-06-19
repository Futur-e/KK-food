"use strict";
const common_vendor = require("../common/vendor.js");
const store_listtab = require("./listtab.js");
const store_userInfo = require("./userInfo.js");
const store_foodlist = require("./foodlist.js");
const store_today = require("./today.js");
const store_zha = require("./zha.js");
const store = common_vendor.createStore({
  modules: {
    listtab: store_listtab.listtab,
    userInfo: store_userInfo.userInfo,
    foodlist: store_foodlist.foodlist,
    today: store_today.today,
    zha: store_zha.zha
  }
});
exports.store = store;
