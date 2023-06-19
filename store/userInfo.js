"use strict";
const state = {
  userInfo: []
};
const mutations = {
  SAVEINFO(state2, user) {
    state2.userInfo = user;
  }
};
const actions = {
  saveInfo(content, user) {
    content.commit("SAVEINFO", user);
  }
};
const getters = {};
const userInfo = {
  state,
  mutations,
  actions,
  getters
};
exports.userInfo = userInfo;
