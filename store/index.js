import axios from 'axios';

export const state = () => ({

});

export const getters = {

};

export const mutations = {

};

export const actions = {
  nuxtServerInit(vueContext, context) {
    return axios.get(`${process.env.baseUrl}/posts.json`)
      .then((response) => {
        let postsArray = [];
        for (let key in response.data) {
          if (response.data.hasOwnProperty(key)) {
            postsArray.push({...response.data[key], id: key})
          }
        }
        vueContext.dispatch('postsModule/setPosts', postsArray);
      })
      .catch(e => context.error(e))
  },
};
