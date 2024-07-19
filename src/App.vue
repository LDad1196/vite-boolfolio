<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';


export default {
  name: 'App',

  components: {
    AppHeader,
    ProjectCard
    

  }
}


</script>

<template>
  <AppHeader />
  <ProjectCard />




  <router-view></router-view>  
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
