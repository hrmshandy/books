<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 xl:col-span-8 xxl:col-span-8 z-10">
        <div class="mt-14 mb-3 grid grid-cols-12 sm:gap-10 intro-y">
          <div class="col-span-12 sm:col-span-6 py-6">
            <div
              class="text-base xxl:text-lg flex items-center text-gray-700 dark:text-gray-500"
            >
              Total Receivables
              <Tippy
                tag="div"
                content="Current and overdue amount that you're yet to receive from customers"
              >
                <AlertCircleIcon class="w-4 h-4 ml-1.5" />
              </Tippy>
            </div>
            <div class="mt-5">
              <small>Total Unpaid Invoices Rp. 0.00 </small>
              <div class="progress mt-1">
                <div
                  class="progress-bar w-0 bg-theme-1"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-12 sm:gap-10 mt-4">
              <div class="col-span-6">
                <small class="uppercase text-theme-1">current</small>
                <div
                  class="relative text-2xl xxl:text-3xl font-bold leading-6 pl-8"
                >
                  <span
                    class="absolute text-lg xxl:text-xl top-0 left-0 -mt-1.5 xxl:mt-0"
                    >Rp.</span
                  >
                  0.00
                </div>
              </div>
              <div class="col-span-6">
                <small class="uppercase text-theme-6">overdue</small>
                <div
                  class="relative text-2xl xxl:text-3xl font-bold leading-6 pl-8"
                >
                  <span
                    class="absolute text-lg xxl:text-xl top-0 left-0 -mt-1.5 xxl:mt-0"
                    >Rp.</span
                  >
                  0.00
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-span-12 sm:col-span-6 py-6 border-black border-opacity-10 border-t md:border-t-0 md:border-l border-dashed px-10 sm:px-28 md:px-5 -mx-5"
          >
            <div
              class="text-base xxl:text-lg flex items-center text-gray-700 dark:text-gray-500"
            >
              Total Payables
              <Tippy
                tag="div"
                content="Current and overdue amount that you're yet to pay your vendors"
              >
                <AlertCircleIcon class="w-4 h-4 ml-1.5" />
              </Tippy>
            </div>
            <div class="mt-5">
              <small>Total Unpaid Bills Rp. 0.00 </small>
              <div class="progress mt-1">
                <div
                  class="progress-bar w-0 bg-theme-1"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div class="grid grid-cols-12 sm:gap-10 mt-4">
              <div class="col-span-6">
                <small class="uppercase text-theme-1">current</small>
                <div
                  class="relative text-2xl xxl:text-3xl font-bold leading-6 pl-8"
                >
                  <span
                    class="absolute text-lg xxl:text-xl top-0 left-0 -mt-1.5 xxl:mt-0"
                    >Rp</span
                  >
                  0.00
                </div>
              </div>
              <div class="col-span-6">
                <small class="uppercase text-theme-6">overdue</small>
                <div
                  class="relative text-2xl xxl:text-3xl font-bold leading-6 pl-8"
                >
                  <span
                    class="absolute text-lg xxl:text-xl top-0 left-0 -mt-1.5 xxl:mt-0"
                    >Rp</span
                  >
                  0.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-14">
          <div
            class="text-base xxl:text-lg flex items-center text-gray-700 dark:text-gray-500"
          >
            Cash Flow
            <Tippy
              tag="div"
              content="Current and overdue amount that you're yet to receive from customers"
            >
              <AlertCircleIcon class="w-4 h-4 ml-1.5" />
            </Tippy>
          </div>
          <div
            class="px-5 pt-8 pb-14 col-span-12 z-10 bg-theme-8 dark:bg-dark-3 bg-opacity-40 dark:bg-opacity-50 rounded-3xl mt-3"
          >
            <div class="grid grid-cols-12">
              <div class="col-span-12 sm:col-span-9 sm:pr-10">
                <ReportLineChart :height="100" class="mt-6" />
              </div>
              <div
                class="col-span-12 sm:col-span-3 sm:text-right border-black border-opacity-10 border-t md:border-t-0 md:border-l border-dashed px-10 sm:px-28 md:px-5 -mx-5"
              >
                <div class="mb-4 pr-5">
                  <div class="text-gray-700">Cash on 01/01/2021</div>
                  <div class="text-2xl">Rp. 0,00</div>
                </div>
                <div class="mb-4 relative pr-5">
                  <div>
                    <div class="text-theme-9">Incoming</div>
                    <div class="text-2xl">Rp. 645.985.800,00</div>
                  </div>
                  <div class="absolute right-0 bottom-[4px]">+</div>
                </div>
                <div class="mb-4 relative pr-5">
                  <div>
                    <div class="text-theme-6">Outgoing</div>
                    <div class="text-2xl">Rp. 2.535.000,00</div>
                  </div>
                  <div class="absolute right-0 bottom-[4px]">-</div>
                </div>
                <div class="mb-4 relative pr-5">
                  <div>
                    <div class="text-theme-1">Cash on 31/12/2021</div>
                    <div class="text-2xl">Rp. 643.450.800,00</div>
                  </div>
                  <div class="absolute right-0 bottom-[4px]">=</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import ReportLineChart from '@/components/report-line-chart/Main.vue'

export default defineComponent({
  components: {
    ReportLineChart
  },
  setup() {}
})
</script>
