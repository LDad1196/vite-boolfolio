<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',

  components: {
    ProjectCard

  }
}


</script>

<template>
  <h1>Welcome into your Boolfolio</h1>
    <ProjectCard />
      
</template>

<style scoped>
  
</style>
