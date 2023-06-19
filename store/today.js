"use strict";
const state = {
  foodlist: {}
};
const mutations = {
  SAVETODAYLIST(state2, user) {
    state2.foodlist = user;
  }
};
const actions = {
  saveTodayList(content, user) {
    content.commit("SAVETODAYLIST", user);
  }
};
const getters = {};
const today = {
  state,
  mutations,
  actions,
  getters
};
exports.today = today;
