import firebase from '~/plugins/firebase.js';
export default context => {
  const { store } = context;

  return new Promise((resolve, reject)=> {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.commit('setUser', user));
      }
      return resolve();
    })
  })
}
