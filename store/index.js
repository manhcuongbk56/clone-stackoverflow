import firebase from '~/plugins/firebase.js';

export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated: state => {
    console.log("USERRRRR");
    console.log(state.user);
    return !!state.user;
  }
}

export const mutations = {
  setUser(state, user) {
    console.log("SETUSERRRRRRRRRRRRRRR");
    state.user = user;
  }
}

export const actions = {
  setUser ({ commit }, user){
    commit('setUser', user)
  },
  login (email, password) {
    return new Promise((resolve, reject) => {
      console.log("Email: " +  email)
      console.log("Password: " +  password)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => resolve())
        .catch((err) => reject(err))
    })
  }
}
