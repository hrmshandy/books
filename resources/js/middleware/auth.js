export default function auth({ to, next, store }) {
  const loginQuery = { path: '/login', query: { redirect: to.fullPath } }

  if (!store.getters['auth/user']) {
    console.log('authenticate')
    store.dispatch('auth/getAuthUser').then(() => {
      if (!store.getters['auth/user']) next(loginQuery)
      else next()
    })
  } else {
    next()
  }
}
