"use strict";
const state = {
  footerTabbar: [
    {
      pagePath: "/pages/index/index",
      text: "\u9996\u98751",
      customIcon: false,
      iconPath: "../../static/tabbar/index.png",
      selectedIconPath: "../../static/tabbar/indexSelected.png"
    },
    {
      pagePath: "/pages/sort/sort",
      text: "\u5206\u7C7B",
      customIcon: false,
      iconPath: "../../static/tabbar/list.png",
      selectedIconPath: "../../static/tabbar/listSelected.png"
    },
    {
      pagePath: "/pages/shopCar/shopCar",
      text: "\u8D2D\u7269\u8F66",
      customIcon: false,
      iconPath: "../../static/tabbar/shop.png",
      selectedIconPath: "../../static/tabbar/shopSelected.png"
    },
    {
      pagePath: "/pages/center/center",
      text: "\u6211\u7684",
      customIcon: false,
      iconPath: "../../static/tabbar/my.png",
      selectedIconPath: "../../static/tabbar/mySelected.png"
    }
  ]
};
const mutations = {};
const actions = {};
const getters = {};
const listtab = {
  state,
  mutations,
  actions,
  getters
};
exports.listtab = listtab;
