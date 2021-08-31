import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    giveaways: [],
    giveaway: {},
    sortedGiveaways: [],
    sortParameters: {
      Types: "game, loot, beta",
      Platforms:
        "pc, steam, epic-games-store, ubisoft, gog, itchio, ps4, xbox-one, switch, android, ios, vr, battlenet, origin, drm-free",
      SortBy: "date, value, popularity",
    },
  },
  mutations: {
    setGiveaways(state, giveaways) {
      state.giveaways = giveaways;
    },
    setGiveaway(state, giveaway) {
      state.giveaway = giveaway;
    },
    setSortedGiveaways(state, sortedGiveaways) {
      state.sortedGiveaways = sortedGiveaways;
    },
  },
  actions: {
    async getGiveaways(context) {
      let url = "http://167.99.138.67:4545/giveaways/all";
      const res = await fetch(url);
      const json = await res.json();

      console.log(json);
      context.commit("setGiveaways", json);
    },
    getGiveaway(context, data) {
      context.commit("setGiveaway", data);
    },
    getSortedGiveaways(context, data) {
      context.commit("setSortedGiveaways", data);
    },
  },
});
