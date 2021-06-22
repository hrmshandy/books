<template>
  <div
    id="coa-form"
    class="modal"
    tabindex="-1"
    aria-hidden="true"
    data-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- BEGIN: Modal Header -->
        <div class="modal-header">
          <h2 class="font-medium text-base mr-auto">
            New Account
          </h2>
          <button class="btn btn-sm" data-dismiss="modal">
            <XIcon />
          </button>
        </div>
        <!-- END: Modal Header -->
        <!-- BEGIN: Modal Body -->
        <div class="modal-body grid grid-cols-12 gap-4 gap-y-3">
          <div class="col-span-12">
            <label for="account-type" class="form-label text-red-600"
              >Account Type*</label
            >
            <select name="" id="account-type" class="form-select">
              <option
                v-for="(typeLabel, typeVal) in types"
                :key="typeVal"
                :value="typeVal"
              >
                {{ typeLabel }}
              </option>
            </select>
          </div>
          <div class="col-span-12">
            <label for="account-name" class="form-label text-red-600"
              >Account Name*</label
            >
            <input id="account-name" type="text" class="form-control" />
          </div>
          <div class="col-span-12">
            <label for="account-code" class="form-label">Account Code</label>
            <input id="account-code" type="number" class="form-control" />
          </div>
          <div class="col-span-12">
            <label for="account-description" class="form-label"
              >Description</label
            >
            <textarea
              id="account-description"
              class="form-control"
              row="6"
            ></textarea>
          </div>
        </div>
        <!-- END: Modal Body -->
        <!-- BEGIN: Modal Footer -->
        <div class="modal-footer text-right">
          <button
            type="button"
            data-dismiss="modal"
            class="btn btn-outline-secondary w-20 mr-1"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary w-20">
            Save
          </button>
        </div>
        <!-- END: Modal Footer -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'

export default defineComponent({
  props: {
    types: Object
  },

  setup() {
    const submit = () => {}

    return { submit }
  }
})
</script>
