<template>
  <div>
    <h1>To see the bug - open a console and refresh this page</h1>

    <ValidationProvider rules="required" slim>
      <div>
        <input id="checkbox" type="checkbox" />
        <label for="checkbox">Checkbox</label>
      </div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import { ValidationProvider } from 'vee-validate'

export default defineNuxtComponent({
  name: 'BaseStore',

  components: {
    ValidationProvider,
  },
})
</script>
