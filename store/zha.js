"use strict";
const state = {
  texttype: "\u51CF\u5C11\u4E86",
  mubiaotizhong: 70
};
const mutations = {
  SAVETEXT(state2, user) {
    state2.texttype = user;
  },
  XIUGAITIZHONG(state2, tizhong) {
    state2.mubiaotizhong = tizhong;
  }
};
const actions = {
  saveText(content, user) {
    content.commit("SAVETEXT", user);
  },
  xiugaitizhong(content, tizhong) {
    content.commit("XIUGAITIZHONG", tizhong);
  }
};
const getters = {};
const zha = {
  state,
  mutations,
  actions,
  getters
};
exports.zha = zha;
