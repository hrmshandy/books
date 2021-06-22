import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'
import auth from '@/middleware/auth'
import guest from '@/middleware/guest'
import middlewarePipeline from './middleware-pipeline'
import Layout from '@/layouts/AppLayout'
import Dashboard from '@/pages/Dashboard'
import Sales from '@/pages/Sales/Main'
import Customers from '@/pages/Customers/Index'
import CustomersCreate from '@/pages/Customers/Create'
import CustomersEdit from '@/pages/Customers/Edit'
import Estimates from '@/pages/Sales/Estimates'
import SalesOrders from '@/pages/Sales/SalesOrders'
import Invoices from '@/pages/Invoices/Index'
import Purchases from '@/pages/Purchases/Main'
import Vendors from '@/pages/Vendors/Index'
import Expenses from '@/pages/Expenses/Index'
import PurchaseOrders from '@/pages/Purchases/PurchaseOrders'
import Bills from '@/pages/Purchases/Bills'
import TimeTracking from '@/pages/TimeTracking/Main'
import Projects from '@/pages/Projects/Index'
import TimeSheet from '@/pages/TimeTracking/TimeSheet'
import Accountant from '@/pages/Accountant/Main'
import Journals from '@/pages/Accountant/Journals'
import ChartOfAccount from '@/pages/COA/Index'
import Reports from '@/pages/Reports/Main'
import Login from '@/pages/Auth/Login'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { middleware: [guest] },
    component: Login
  },
  {
    path: '/',
    meta: { middleware: [auth] },
    component: Layout,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta: {
          breadcrumb: 'Dashboard' //crumb
        }
      },
      {
        path: 'sales',
        name: 'sales',
        component: Sales,
        children: [
          {
            path: 'customers',
            name: 'sales.customers',
            component: Customers
          },
          {
            path: 'customers/create',
            name: 'sales.customers.create',
            component: CustomersCreate
          },
          {
            path: 'customers/:id/edit',
            name: 'sales.customers.edit',
            component: CustomersEdit
          },
          {
            path: 'estimates',
            name: 'sales.estimates',
            component: Estimates
          },
          {
            path: 'sales-orders',
            name: 'sales.sales-orders',
            component: SalesOrders
          },
          {
            path: 'invoices',
            name: 'sales.invoices',
            component: Invoices
          }
        ]
      },
      {
        path: 'purchases',
        name: 'purchases',
        component: Purchases,
        children: [
          {
            path: 'vendors',
            name: 'purchases.vendors',
            component: Vendors
          },
          {
            path: 'expenses',
            name: 'purchases.expenses',
            component: Expenses
          },
          {
            path: 'purchase-orders',
            name: 'purchases.purchase-orders',
            component: PurchaseOrders
          },
          {
            path: 'bills',
            name: 'purchases.bills',
            component: Bills
          }
        ]
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects
      },
      {
        path: 'accountant',
        name: 'accountant',
        component: Accountant,
        children: [
          {
            path: 'journals',
            name: 'accountant.journals',
            component: Journals
          },
          {
            path: 'coa',
            name: 'accountant.coa',
            component: ChartOfAccount
          }
        ]
      },
      {
        path: 'reports',
        name: 'reports',
        component: Reports
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const middleware = to.meta.middleware
  const context = { to, from, next, store }

  if (!middleware) {
    return next()
  }

  middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
