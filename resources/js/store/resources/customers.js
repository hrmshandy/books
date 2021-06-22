const state = () => {
  return {
    resources: [
      {
        id: 1,
        salutation: '',
        first_name: 'Trys',
        last_name: '',
        display_name: '',
        company_name: '',
        email: '',
        work_phone: '',
        mobile: '',
        website: '',
        receivables: 0
      }
    ]
  }
}

// getters
const getters = {
  resources: state => state.resources
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
