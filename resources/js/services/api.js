import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api',
  withCredentials: true // required to handle the CSRF token
})

apiClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  response => {
    return response
  },
  function(error) {
    if (
      error.response &&
      [401, 419].includes(error.response.status) &&
      store.getters['auth/user'] &&
      !store.getters['auth/guest']
    ) {
      store.dispatch('auth/logout')
    }
    return Promise.reject(error)
  }
)

export default apiClient
