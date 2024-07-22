<script>

import AppHeader from './components/AppHeader.vue';
import { RouterLink } from 'vue-router';

export default {
  name: 'App',

  components: {
    AppHeader

  }
}


</script>

<template>
  <AppHeader />
  

  <router-view></router-view>
</template>

<style scoped>
  
</style>
