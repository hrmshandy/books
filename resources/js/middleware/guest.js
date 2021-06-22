export default function guest({ next, store }) {
  const storageItem = window.localStorage.getItem('guest')
  if (storageItem === 'isNotGuest' && !store.getters['auth/user']) {
    store.dispatch('auth/getAuthUser').then(() => {
      if (store.getters['auth/user']) {
        next({ name: 'dashboard' })
      } else {
        store.dispatch('auth/setGuest', { value: 'isGuest' })
        next()
      }
    })
  } else {
    next()
  }
}
