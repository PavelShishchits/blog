export const state = () => ({
  posts: []
});

export const getters = {

};

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  }
};

export const actions = {
  setPosts({commit}, payload) {
    commit('setPosts', payload)
  }
};
