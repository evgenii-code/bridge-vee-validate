<template>
  <div>
    <button @click="setFoo(foo + 1)">Increment</button>

    <div>{{ foo }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',

  computed: {
    ...mapGetters({
      foo: 'foo/foo',
    }),
  },

  methods: {
    ...mapMutations({
      setFoo: 'foo/setFoo',
    }),
  },
})
</script>
