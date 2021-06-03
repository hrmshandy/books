const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "dashboard",
        title: "Dashboard",
      },
      'devider',
      {
        icon: "ShoppingCartIcon",
        pageName: "sales",
        title: "Sales",
        subMenu: [
          {
            icon: "",
            pageName: "sales.customers",
            title: "Customers"
          },
          {
            icon: "",
            pageName: "sales.estimates",
            title: "Estimates"
          },
          {
            icon: "",
            pageName: "sales.sales-orders",
            title: "Sales Orders"
          },
          {
            icon: "",
            pageName: "sales.invoices",
            title: "Invoices"
          },
        ]
      },
      {
        icon: "ShoppingBagIcon",
        pageName: "purchases",
        title: "Purchases",
        subMenu: [
          {
            icon: "",
            pageName: "purchases.vendors",
            title: "Vendors"
          },
          {
            icon: "",
            pageName: "purchases.expenses",
            title: "Expenses"
          },
          {
            icon: "",
            pageName: "purchases.purchase-orders",
            title: "Purchase Orders"
          },
          {
            icon: "",
            pageName: "purchases.bills",
            title: "Bills"
          },
        ]
      },
      'devider',
      {
        icon: "ClockIcon",
        pageName: "time-tracking",
        title: "Time Tracking",
        subMenu: [
          {
            icon: "",
            pageName: "time-tracking.projects",
            title: "Projects"
          },
          {
            icon: "",
            pageName: "time-tracking.timesheet",
            title: "Timesheet"
          },
        ]
      },
      {
        icon: "UserIcon",
        pageName: "accountant",
        title: "Accountant",
        subMenu: [
          {
            icon: "",
            pageName: "accountant.journals",
            title: "Manual Journals"
          },
          {
            icon: "",
            pageName: "accountant.coa",
            title: "Chart of Accounts"
          },
        ]
      },
      {
        icon: "ActivityIcon",
        pageName: "reports",
        title: "Reports"
      },
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
