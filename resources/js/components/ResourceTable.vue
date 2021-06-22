<template>
  <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
    <table class="table table-report -mt-2">
      <thead>
        <tr>
          <!-- Select Checkbox -->
          <!-- <th class="w-4">
            <input class="form-check-input -mt-1" type="checkbox" value="" />
          </th> -->

          <!-- Field Names -->
          <th
            v-for="(field, index) in fields"
            :key="`field-${index}`"
            class="uppercase text-xs font-medium whitespace-nowrap"
          >
            <!-- <sortable-icon
              @sort="requestOrderByChange(field)"
              @reset="resetOrderBy(field)"
              :resource-name="resourceName"
              :uri-key="field.sortableUriKey"
              v-if="field.sortable"
            >
              {{ field.indexName }}
            </sortable-icon> -->

            <span>{{ field.label }}</span>
          </th>

          <!-- Actions, View, Edit, Delete -->
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="resource in resources" :key="resource.id">
          <ResourceTableRow
            :fields="fields"
            :resource="resource"
            :resource-name="resourceName"
          />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import ResourceTableRow from './ResourceTableRow.vue'

export default defineComponent({
  components: { ResourceTableRow },

  props: {
    fields: {
      type: Array,
      default: () => []
    },
    resourceName: String
  },

  setup(props) {
    const store = useStore()
    const resources = store.getters[`${props.resourceName}/resources`]

    onMounted(() => {
      //   init()
    })

    return {
      resources
    }
  }
})
</script>
