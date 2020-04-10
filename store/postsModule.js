export const state = () => ({
  posts: []
});

export const getters = {

};

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  editPost(state, payload) {
    const postIndex = state.posts.findIndex((post) => post.id === payload.id);
    state.posts[postIndex] = payload;
  },
  addPost(state, payload) {
    state.posts.push(payload);
  }
};

export const actions = {
  setPosts({commit}, payload) {
    commit('setPosts', payload)
  },
  addPost({commit}, payload) {
    return this.$axios.$post(`/posts.json`, payload)
      .then((data) => {
        commit('addPost', {
          ...payload,
          id: data.name
        })
      })
      .catch((error) => console.log(error))
  },
  editPost({commit}, payload) {
    return this.$axios.$put(`/posts/${payload.id}.json`, payload)
      .then((data) => {
        commit('editPost', {
          ...payload
        });
      })
      .catch((error) => console.log(error))
  }
};
