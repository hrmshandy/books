const state = () => {
  return {
    resources: [
      {
        id: 1,
        date: '12/06/2021',
        account: 'Makan dan Hiburan',
        reference: '',
        customer_name: 'Trys',
        vendor_name: '',
        status: 'NON-BILLABLE',
        amount: 'IDR 1.700.000,00'
      },
      {
        id: 2,
        date: '12/06/2021',
        account: 'Biaya IT dan Internet',
        reference: '',
        customer_name: 'Trys',
        vendor_name: '',
        status: 'UNBILLED',
        amount: 'IDR 385.000,00'
      },
      {
        id: 1,
        date: '12/06/2021',
        account: 'Biaya Perjalanan',
        reference: '',
        customer_name: 'Trys',
        vendor_name: '',
        status: 'UNBILLED',
        amount: 'IDR 450.000,00'
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
