<template>
  <div>
    <BaseStore />
  </div>
</template>

<script lang="ts">
import BaseStore from '~/components/BaseStore.vue'

export default defineNuxtComponent({
  name: 'IndexPage',

  components: {
    BaseStore,
  },
})
</script>
