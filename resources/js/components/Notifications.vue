<template>
  <div class="intro-x dropdown mr-auto sm:mr-6">
    <div
      class="dropdown-toggle notification notification--bullet cursor-pointer"
      role="button"
      aria-expanded="false"
    >
      <BellIcon class="notification__icon dark:text-gray-300" />
    </div>
    <div class="notification-content pt-2 dropdown-menu">
      <div
        class="notification-content__box dropdown-menu__content box dark:bg-dark-6"
      >
        <div class="notification-content__title">Notifications</div>
        <!-- <div
          v-for="(faker, fakerKey) in $_.take($f(), 5)"
          :key="fakerKey"
          class="cursor-pointer relative flex items-center"
          :class="{ 'mt-5': fakerKey }"
        >
          <div class="w-12 h-12 flex-none image-fit mr-1">
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
            <div
              class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"
            ></div>
          </div>
          <div class="ml-2 overflow-hidden">
            <div class="flex items-center">
              <a href="javascript:;" class="font-medium truncate mr-5">{{
                faker.users[0].name
              }}</a>
              <div class="text-xs text-gray-500 ml-auto whitespace-nowrap">
                {{ faker.times[0] }}
              </div>
            </div>
            <div class="w-full truncate text-gray-600 mt-0.5">
              {{ faker.news[0].shortContent }}
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
