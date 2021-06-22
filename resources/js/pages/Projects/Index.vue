<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">
      Projects
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"
      >
        <button class="btn btn-primary shadow-md mr-2">Add New Project</button>
        <!-- <div class="hidden md:block mx-auto text-gray-600">
          Showing 1 to 10 of 150 entries
        </div> -->
        <div class="w-full sm:w-auto mt-3 sm:mt-0 ml-auto">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="form-control w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
      <ProjectCard />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default defineComponent({
  components: { ProjectCard },
  setup() {}
})
</script>
