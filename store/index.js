import firebase from '~/plugins/firebase.js';
// import { firebaseMutations, firebaseAction } from 'vuexfire'
export const state = () => ({
  user: {}
});

export const getters = {
  isAuthenticated: (state) => () => {
    console.log("Current user in state: " + state.user.user)
    return !!state.user.user;
  }
};

export const mutations = {
  setUser(state, payload) {
    // Vue.set()
    console.log( "Payload: " + payload.user);
    console.log( "Before set: " +state.user.user);
    Object.assign(state.user, payload);
    console.log( "After set: " + state.user.user)
  },
  reset(state, payload) {
    // Vue.set()
    console.log( "Payload: " + payload.user);
    console.log( "Before set: " +state.user.user);
    state.user = payload;
    console.log( "After set: " + state.user.user)
  }
};

export const actions = {
  userLogin ({ commit }, account) {
    return firebase.auth()
      .signInWithEmailAndPassword(account.email, account.password)
      .then(payload => {
        console.log(account);
        return  this.dispatch('setUser', payload)
        // commit('setUser', payload)
        // console.log("aaaaaaaaaaaaaaaaaa")
      })
  },
  setUser({commit}, user1) {
    commit('setUser', user1)
  },
  resetUser({commit}){
    commit('reset', {})
  }
};
