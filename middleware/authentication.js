export default function ({store, route, redirect}) {
  if (process.server) {
    // console.log("middleware from client side");
    return
  }
  console.log(route.name);
  console.log("Authenticated: " + store.getters.isAuthenticated());
  if (!store.getters.isAuthenticated() && !'login' === (route.name)) {
    redirect('/login');
  }
  if (store.getters.isAuthenticated() && ['login', 'signUp'].includes(route.name)){
    redirect('/');
  }
}

