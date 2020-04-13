import axios from 'axios';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', faildColor: 'red', height: '4px', duration: 5000 },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/core-components.js',
    '~/plugins/date-filter.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://nuxt-blog-71976.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: 'https://nuxt-blog-71976.firebaseio.com',
    fbApiKey: 'AIzaSyABIKCSkWcAlNH5qHcg7XdpTlBAO8XnYBs'
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  generate: {
    routes: function () {
      return axios.get(`https://nuxt-blog-71976.firebaseio.com/posts.json`)
        .then((res) => {
          return Object.keys(res.data).map((item) => {
            return {
              route: `/posts/${item}`,
              payload: {postData: res.data[item]}
            }
          });
        })
    }
  }
}
