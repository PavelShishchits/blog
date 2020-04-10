export const state = () => ({

});

export const getters = {

};

export const mutations = {

};

export const actions = {
  nuxtServerInit(vueContext, context) {
    return context.app.$axios.$get(`/posts.json`)
      .then((data) => {
        let postsArray = [];
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            postsArray.push({...data[key], id: key})
          }
        }
        vueContext.dispatch('postsModule/setPosts', postsArray);
      })
      .catch(e => context.error(e))
  },
};
