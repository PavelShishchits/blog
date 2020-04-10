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
        dispatch('setLogOutTimer', response.expiresIn * 1000);
      })
      .catch(e => console.log(e))
  },
  signIn({commit, dispatch}, payload) {
    return this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`, payload)
      .then((response) => {
        commit('authUser', response.idToken);
        dispatch('cacheAuthData', response);
        dispatch('setLogOutTimer', response.expiresIn * 1000);
      })
      .catch(e => console.log(e))
  },
  setLogOutTimer({commit}, duration) {
    setTimeout(() => {
      commit('logOutUse');
    }, duration)
  },
  cacheAuthData(context, authData) {
    const now = new Date();
    const expirationDate = new Date(now.getTime() + authData.expiresIn * 1000);
    localStorage.setItem('authData', JSON.stringify({
      'token': authData.idToken,
      'expirationDate': expirationDate
    }));
  },
  autoLogin({commit}) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const now = new Date();
    if (!authData || !authData.token || now >= authData.expirationDate) {
      return;
    }
    commit('authUser', authData.token);
  }
};
