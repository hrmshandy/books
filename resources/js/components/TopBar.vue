<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <!-- <div class="-intro-x breadcrumb mr-auto hidden sm:flex">
      <a href="">Application</a>
      <ChevronRightIcon class="breadcrumb__icon" />
      <a href="" class="breadcrumb--active">Dashboard</a>
    </div> -->
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Search -->
    <div class="-intro-x relative mr-3 sm:mr-auto">
      <div class="search hidden sm:block">
        <input
          type="text"
          class="search__input form-control border-transparent placeholder-theme-13"
          placeholder="Search..."
          @focus="showSearchDropdown"
          @blur="hideSearchDropdown"
        />
        <SearchIcon class="search__icon dark:text-gray-300" />
      </div>
      <a class="notification sm:hidden" href="">
        <SearchIcon class="notification__icon dark:text-gray-300" />
      </a>
      <div class="search-result left-0 mt-4" :class="{ show: searchDropdown }">
        <div class="search-result__content">
          <div class="search-result__content__title">Results</div>
          <!-- <div class="mb-5">
            <a href="" class="flex items-center">
              <div
                class="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full"
              >
                <InboxIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Mail Settings</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full"
              >
                <UsersIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Users & Permissions</div>
            </a>
            <a href="" class="flex items-center mt-2">
              <div
                class="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full"
              >
                <CreditCardIcon class="w-4 h-4" />
              </div>
              <div class="ml-3">Transactions Report</div>
            </a>
          </div>
          <div class="search-result__content__title">Users</div>
          <div class="mb-5">
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2"
            >
              <div class="w-8 h-8 image-fit">
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">{{ faker.users[0].name }}</div>
              <div
                class="ml-auto w-48 truncate text-gray-600 text-xs text-right"
              >
                {{ faker.users[0].email }}
              </div>
            </a>
          </div>
          <div class="search-result__content__title">Products</div>
          <a
            v-for="(faker, fakerKey) in $_.take($f(), 4)"
            :key="fakerKey"
            href
            class="flex items-center mt-2"
          >
            <div class="w-8 h-8 image-fit">
              <svg
                class="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="ml-3">{{ faker.products[0].name }}</div>
            <div class="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              {{ faker.products[0].category }}
            </div>
          </a> -->
        </div>
      </div>
    </div>
    <!-- END: Search -->
    <!-- BEGIN: Notifications -->
    <Notifications />
    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu -->
    <div class="intro-x dropdown w-8 h-8">
      <div
        class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
        role="button"
        aria-expanded="false"
      >
        <img :src="user.avatar" :alt="user.name" />
      </div>
      <div class="dropdown-menu w-56">
        <div
          class="dropdown-menu__content box bg-theme-26 dark:bg-dark-6 text-white"
        >
          <div class="p-4 border-b border-theme-27 dark:border-dark-3">
            <div class="font-medium">{{ user.name }}</div>
            <div class="text-xs text-theme-28 mt-0.5 dark:text-gray-600">
              {{ user.email }}
            </div>
          </div>
          <div class="p-2">
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <UserIcon class="w-4 h-4 mr-2" /> Profile
            </a>
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Reset Password
            </a>
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <HelpCircleIcon class="w-4 h-4 mr-2" /> Help
            </a>
          </div>
          <div class="p-2 border-t border-theme-27 dark:border-dark-3">
            <a
              href=""
              class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 dark:hover:bg-dark-3 rounded-md"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import Notifications from './Notifications'

export default defineComponent({
  components: {
    Notifications
  },
  setup() {
    const store = useStore()
    const user = store.getters['auth/user']
    const searchDropdown = ref(false)

    const showSearchDropdown = () => {
      searchDropdown.value = true
    }

    const hideSearchDropdown = () => {
      searchDropdown.value = false
    }

    return {
      user,
      searchDropdown,
      showSearchDropdown,
      hideSearchDropdown
    }
  }
})
</script>
