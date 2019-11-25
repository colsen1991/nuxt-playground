<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container content has-text-centered">
        <h1>Hello world!</h1>
        <np-test/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import NpTest from '../components/test.vue'

  export default Vue.extend({
    components: {
      NpTest
    }
  })
</script>
