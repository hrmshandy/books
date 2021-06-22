<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">Chart of Accounts</h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center justify-between mt-2"
      >
        <a
          href="javascript:;"
          data-toggle="modal"
          data-target="#coa-form"
          class="btn btn-primary shadow-md mr-2"
        >
          <PlusIcon class="w-4 h-4 mr-2" /> New Account
        </a>
        <CoaForm :types="types" />
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
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="w-4">
                <input class="form-check-input" type="checkbox" value="" />
              </th>
              <th class="uppercase text-xs font-medium whitespace-nowrap">
                Account Name
              </th>
              <th class="uppercase text-xs font-medium whitespace-nowrap">
                Account Code
              </th>
              <th class="uppercase text-xs font-medium whitespace-nowrap">
                Account Type
              </th>
              <th class="uppercase text-xs font-medium whitespace-nowrap">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(faker, fakerKey) in $_.take($f(), 9)"
              :key="fakerKey"
              class="intro-x"
            >
              <td class="w-4 text-gray-500">
                <LockIcon
                  v-if="fakerKey == 3 || fakerKey == 4"
                  class="w-4 h-4"
                />
                <input
                  v-else
                  class="form-check-input"
                  type="checkbox"
                  value=""
                />
              </td>
              <td>
                <a href="" class="font-medium whitespace-nowrap">{{
                  faker.products[0].name
                }}</a>
              </td>
              <td>{{ faker.stocks[0] }}</td>
              <td>
                <div class="whitespace-nowrap">
                  {{ faker.products[0].category }}
                </div>
              </td>
              <td class="table-report__action w-20">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle btn btn-sm"
                    aria-expanded="false"
                  >
                    <SettingsIcon class="w-4 h-4" />
                  </button>
                  <div class="dropdown-menu w-40">
                    <div class="dropdown-menu__content box dark:bg-dark-1 p-2">
                      <a
                        href=""
                        class="flex items-center block px-2 py-1 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        Edit
                      </a>
                      <a
                        href=""
                        class="flex items-center block px-2 py-1 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        Mark as Inactive
                      </a>
                      <a
                        href=""
                        class="flex items-center block px-2 py-1 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                      >
                        Delete
                      </a>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
      >
        <ul class="pagination">
          <li>
            <a class="pagination__link" href="">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">1</a>
          </li>
          <li>
            <a class="pagination__link pagination__link--active" href="">2</a>
          </li>
          <li>
            <a class="pagination__link" href="">3</a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
        <select class="w-20 form-select box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
    <!-- BEGIN: Delete Confirmation Modal -->
    <div
      id="delete-confirmation-modal"
      class="modal"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class="p-5 text-center">
              <XCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
              <div class="text-3xl mt-5">Are you sure?</div>
              <div class="text-gray-600 mt-2">
                Do you really want to delete these records? <br />This process
                cannot be undone.
              </div>
            </div>
            <div class="px-5 pb-8 text-center">
              <button
                type="button"
                data-dismiss="modal"
                class="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-danger w-24">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, reactive, provide } from 'vue'
import CoaForm from './CoaForm.vue'
import API from '@/services/api'

export default defineComponent({
  components: {
    CoaForm
  },
  setup() {
    onMounted(async () => {
      await fetchTypes()
      await fetchAccounts()
    })

    const types = ref({})
    const accounts = ref([])

    const fetchTypes = async () => {
      API.get('/account/types').then(({ data }) => (types.value = data))
    }

    const fetchAccounts = async () => {
      API.get('/accounts').then(({ data }) => (accounts.value = data))
    }

    return { types, accounts }
  }
})
</script>
