"use strict";
const state = {
  fooddetail: [],
  foodlist: []
};
const mutations = {
  SAVEFOOD(state2, user) {
    state2.fooddetail = [];
    state2.fooddetail.push(user);
  },
  SAVEFOODLIST(state2, user) {
    state2.foodlist = [];
    state2.foodlist.push(user);
  }
};
const actions = {
  saveFood(content, user) {
    content.commit("SAVEFOOD", user);
  },
  saveFoodList(content, user) {
    content.commit("SAVEFOODLIST", user);
  }
};
const getters = {};
const foodlist = {
  state,
  mutations,
  actions,
  getters
};
exports.foodlist = foodlist;
