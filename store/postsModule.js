import axios from 'axios';

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
    return axios.post(`${process.env.baseUrl}/posts.json`, payload)
      .then((response) => {
        commit('addPost', {
          ...payload,
          id: response.data.name
        })
      })
      .catch((error) => console.log(error))
  },
  editPost({commit}, payload) {
    return axios.put(`${process.env.baseUrl}/posts/${payload.id}.json`, payload)
      .then((response) => {
        commit('editPost', {
          ...payload
        });
      })
      .catch((error) => console.log(error))
  }
};
