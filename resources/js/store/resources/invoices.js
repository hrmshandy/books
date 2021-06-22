const state = () => {
  return {
    resources: [
      {
        id: 1,
        date: '12/06/2021',
        invoice: 'INV-00001',
        customer_name: 'Trys',
        project_name: 'Digimap',
        status: 'PAID',
        due_date: '12/06/2021',
        amount: 'IDR 645.985.800,00'
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
