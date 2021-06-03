import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layouts/AppLayout'
import Login from '@/pages/Auth/Login'
import Dashboard from '@/pages/Dashboard'
import Sales from '@/pages/Sales/Main'
import Customers from '@/pages/Sales/Customers'
import Estimates from '@/pages/Sales/Estimates'
import SalesOrders from '@/pages/Sales/SalesOrders'
import Invoices from '@/pages/Sales/Invoices'
import Purchases from '@/pages/Purchases/Main'
import Vendors from '@/pages/Purchases/Vendors'
import Expenses from '@/pages/Purchases/Expenses'
import PurchaseOrders from '@/pages/Purchases/PurchaseOrders'
import Bills from '@/pages/Purchases/Bills'
import TimeTracking from '@/pages/TimeTracking/Main'
import Projects from '@/pages/TimeTracking/Projects'
import TimeSheet from '@/pages/TimeTracking/TimeSheet'
import Accountant from '@/pages/Accountant/Main'
import Journals from '@/pages/Accountant/Journals'
import ChartOfAccount from '@/pages/Accountant/ChartOfAccount'
import Reports from '@/pages/Reports/Main'

const routes = [
    {
        path: '/login',
        name: 'login',
        meta: { guest: true },
        component: Login,
    },
    {
        path: '/',
        meta: { auth: true },
        component: Layout,
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'sales',
                name: 'sales',
                component: Sales,
                children: [
                    {
                        path: 'customers',
                        name: 'sales.customers',
                        component: Customers,
                    },
                    {
                        path: 'estimates',
                        name: 'sales.estimates',
                        component: Estimates,
                    },
                    {
                        path: 'sales-orders',
                        name: 'sales.sales-orders',
                        component: SalesOrders,
                    },
                    {
                        path: 'invoices',
                        name: 'sales.invoices',
                        component: Invoices,
                    },
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
                        component: Vendors,
                    },
                    {
                        path: 'expenses',
                        name: 'purchases.expenses',
                        component: Expenses,
                    },
                    {
                        path: 'purchase-orders',
                        name: 'purchases.purchase-orders',
                        component: PurchaseOrders,
                    },
                    {
                        path: 'bills',
                        name: 'purchases.bills',
                        component: Bills,
                    },
                ]
            },
            {
                path: 'time-tracking',
                name: 'time-tracking',
                component: TimeTracking,
                children: [
                    {
                        path: 'projects',
                        name: 'time-tracking.projects',
                        component: Projects,
                    },
                    {
                        path: 'timesheet',
                        name: 'time-tracking.timesheet',
                        component: TimeSheet,
                    },
                ]
            },
            {
                path: 'accountant',
                name: 'accountant',
                component: Accountant,
                children: [
                    {
                        path: 'journals',
                        name: 'accountant.journals',
                        component: Journals,
                    },
                    {
                        path: 'coa',
                        name: 'accountant.coa',
                        component: ChartOfAccount,
                    },
                ]
            },
            {
                path: 'reports',
                name: 'reports',
                component: Reports,
            },
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

export default router
