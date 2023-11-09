<template>
  <div>
    <input v-model="valueLocal" type="text" />

    <div>{{ foo }}</div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

export default defineNuxtComponent({
  name: 'BaseInput',

  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    value: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapGetters({
      foo: 'foo/foo',
    }),

    valueLocal: {
      get(): string {
        return this.value
      },

      set(value: string) {
        this.$emit('input', value)
      },
    },
  },
})
</script>
