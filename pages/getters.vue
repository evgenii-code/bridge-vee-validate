<template>
  <div>
    <h1>To see the bug - open a console and refresh this page</h1>

    <ValidationProvider v-slot="{ errors }" rules="required">
      <div>{{ errors[0] }}</div>

      <nuxt-link to="/">Back</nuxt-link>

      <base-input v-model="bar" />
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate'
import BaseInput from '~/components/BaseInput.vue'

export default defineNuxtComponent({
  name: 'BaseStore',

  components: {
    ValidationProvider,
    BaseInput,
  },

  data() {
    return {
      bar: '',
    }
  },
})
</script>
