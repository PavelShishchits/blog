export const state = () => ({

});

export const getters = {

};

export const mutations = {

};

export const actions = {
  nuxtServerInit(vueContext, context) {
    return new Promise((resolve, reject) => {
      vueContext.dispatch('postsModule/setPosts', [
        {
          id: 1,
          thumbnail: '/images/post_01.jpg',
          title: 'Post title',
          previewText: 'Post preview text'
        },
        {
          id: 2,
          thumbnail: '/images/post_02.jpg',
          title: 'Post title 2',
          previewText: 'Post preview text'
        }
      ]);
      resolve();
    })
  },
};
