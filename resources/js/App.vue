<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const init = () => {
      setTimeout(function() {
        location.reload()
      }, 60000)
    }

    onMounted(() => {
      init()
    })
  }
})
</script>
