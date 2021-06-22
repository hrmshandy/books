import { createStore } from 'vuex'
import auth from './auth'
import coa from './resources/coa'
import customers from './resources/customers'
import expenses from './resources/expenses'
import invoices from './resources/invoices'
import main from './main'
import sideMenu from './side-menu'
import simpleMenu from './simple-menu'
import topMenu from './top-menu'

const store = createStore({
  modules: {
    auth,
    coa,
    customers,
    expenses,
    invoices,
    main,
    sideMenu,
    simpleMenu,
    topMenu
  }
})

export function useStore() {
  return store
}

export default store
