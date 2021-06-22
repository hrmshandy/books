<template>
  <div class="intro-y col-span-12 md:col-span-4">
    <div class="box">
      <div
        class="flex flex-col lg:flex-row items-center p-5 border-b border-gray-200 dark:border-dark-5"
      >
        <div class="lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
          <a href="#" class="font-medium block">Trys</a>
          <a href="#" class="font-bold text-xl block">Digimap</a>
        </div>
        <div class="-ml-2 lg:ml-0 mt-3 lg:mt-0">
          <div class="font-medium">Rate</div>
          <div class="font-bold text-xl">Rp. 645.985.800</div>
        </div>
      </div>
      <div
        class="flex flex-wrap lg:flex-nowrap items-center justify-center p-5"
      >
        <div class="w-full lg:w-1/2 mb-4 lg:mb-0 mr-auto">
          <div class="flex text-gray-600 text-xs">
            <div class="mr-auto">Progress</div>
            <div>20%</div>
          </div>
          <div class="progress h-1 mt-2">
            <div
              class="progress-bar w-1/4 bg-theme-1"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <button class="btn btn-primary py-1 px-2 mr-2">Create Expanse</button>
        <!-- <button class="btn btn-outline-secondary py-1 px-2">Profile</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>
