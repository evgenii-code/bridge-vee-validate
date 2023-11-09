<template>
  <div>
    <h1>Both bugs occur only on SSR</h1>

    <ul>
      <li>
        <nuxt-link to="/getters">Bug with render</nuxt-link>
      </li>

      <li>
        <nuxt-link to="/slim">Bug with slim</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: 'IndexPage',
})
</script>
