const state = () => {
  return {
    resources: [
      {
        id: 1,
        name: 'Akun Bank',
        code: '',
        type: 'BANK',
        balance: ''
      },
      {
        id: 2,
        name: 'Piutang Jasa',
        code: '',
        type: 'OPERATING REVENUE',
        balance: ''
      },
      {
        id: 3,
        name: 'Pendapatan Umum',
        code: '',
        type: 'RECEIVABLE',
        balance: ''
      },
      {
        id: 4,
        name: 'Utang Jasa',
        code: '',
        type: 'PAYABLE',
        balance: ''
      },
      {
        id: 5,
        name: 'Gaji dan Upah Karyawan',
        code: '',
        type: 'OPERATING EXPENSE',
        balance: ''
      },
      {
        id: 6,
        name: 'Makan dan Hiburan',
        code: '',
        type: 'OPERATING EXPENSE',
        balance: ''
      },
      {
        id: 7,
        name: 'Biaya Perjalanan',
        code: '',
        type: 'OPERATING EXPENSE',
        balance: ''
      },
      {
        id: 8,
        name: 'Biaya IT dan Internet',
        code: '',
        type: 'OPERATING EXPENSE',
        balance: ''
      },
      {
        id: 8,
        name: 'Peralatan Kantor',
        code: '',
        type: 'NON CURRENT ASSET',
        balance: ''
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
