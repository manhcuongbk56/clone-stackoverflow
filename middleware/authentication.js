export default function ({store, route, redirect}) {
  if (!store.getters.isAuthenticated && !['login', 'signup', '/'.includes(route.name)]) {
    redirect('/login');
  }
  if (store.getters.isAuthenticated && route.name == 'login'){
    redirect('/');
  }
}
