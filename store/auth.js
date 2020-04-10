import Cookie from 'js-cookie';

export const state = () => ({
  token: null
});

export const getters = {
  isAuthenticated(state) {
    return state.token !== null;
  }
};

export const mutations = {
  authUser(state, token) {
    state.token = token;
  },
  logOutUser(state) {
    state.token = null;
  }
};

export const actions = {
  signUp({commit, dispatch}, payload) {
    return this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`, payload)
      .then((response) => {
        commit('authUser', response.idToken);
        dispatch('cacheAuthData', response);
      })
      .catch(e => console.log(e))
  },
  signIn({commit, dispatch}, payload) {
    return this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`, payload)
      .then((response) => {
        commit('authUser', response.idToken);
        dispatch('cacheAuthData', response);
      })
      .catch(e => console.log(e))
  },
  cacheAuthData(context, authData) {
    Cookie.set('token',authData.idToken);
    Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(authData.expiresIn) * 1000);
  },
  autoLogin({commit, dispatch}, req) {
    let token;
    let expirationDate;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      token = req.headers.cookie.split(';').find((cookie) => cookie.trim().startsWith('token')).split('=')[1];
      expirationDate = req.headers.cookie.split(';').find((cookie) => cookie.trim().startsWith('expirationDate')).split('=')[1];
    } else {
      token = Cookie.get('token');
      expirationDate = Cookie.get('expirationDate');
    }
    const now = new Date().getTime();
    if (!token || !expirationDate || now >= +expirationDate) {
      dispatch('logOut');
      return false;
    }
    commit('authUser', token);
  },
  logOut({commit}) {
    commit('logOutUser');
    Cookie.remove('token');
    Cookie.remove('expirationDate');
  }
};
