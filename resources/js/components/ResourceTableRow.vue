<template>
  <tr>
    <!-- Resource Selection Checkbox -->
    <!-- <td class="w-16" v-if="shouldShowCheckboxes">
      <checkbox
        :data-testid="`${testId}-checkbox`"
        :dusk="`${resource['id'].value}-checkbox`"
        v-if="shouldShowCheckboxes"
        :checked="checked"
        @input="toggleSelection"
      />
    </td> -->

    <!-- Fields -->
    <td v-for="(field, index) in fields" :key="`field-${index}`">
      <span v-if="field.computed" v-html="field.computed(resource)"></span>
      <span v-else>{{ resource[field.name] }}</span>
    </td>
    <td class="td-fit text-right pr-6 align-middle">
      <div class="inline-flex"></div>
    </td>
  </tr>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    resource: {
      type: Object,
      default: () => ({})
    },
    resourceName: String
  },

  setup(props) {
    onMounted(() => {
      //   init()
    })

    return {}
  }
})
</script>
