<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">Customers</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center justify-between mt-2"
      >
        <router-link
          :to="{ name: 'sales.customers.create' }"
          class="btn btn-primary shadow-md mr-2"
        >
          <PlusIcon class="w-4 h-4 mr-2" /> New
        </router-link>
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="form-control w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
      </div>
      <ResourceTable :fields="fields" resource-name="expenses" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ResourceTable from '@/components/ResourceTable.vue'

export default defineComponent({
  components: {
    ResourceTable
  },

  setup() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'IDR'

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    })
    const fields = [
      { label: 'Date', name: 'date', sortable: true },
      {
        label: 'Expense Account',
        name: 'account',
        sortable: true,
        computed: resource => {
          return `
            <span class="text-theme-1 font-medium">${resource.account}</span>
          `
        }
      },
      { label: 'Reference#', name: 'reference', sortable: true },
      {
        label: 'Vendor Name',
        name: 'vendor_name'
      },
      {
        label: 'Customer Name',
        name: 'customer_name'
      },
      {
        label: 'Status',
        name: 'status'
      },
      {
        label: 'Amount',
        name: 'amount'
      }
    ]

    return { fields }
  }
})
</script>
