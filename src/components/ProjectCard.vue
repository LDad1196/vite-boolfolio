<script>
import axios from 'axios';

export default {
    name: 'ProjectCard',

    data(){
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: ''
    }
  },

  mounted(){

    axios
    .get(`${this.base_url}/api/projects`)
    .then(response=> {
      console.log(response)
      this.projects = response.data.projects
    })

  }

}

</script>

<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="project in projects.data">  
        <div class="card h-100 bg-warning" >
          <template v-if="!project.thumb.startsWith('http')">
            <img class="card-img-top" :src="base_url + '/storage/' + project.thumb" alt="">
          </template>
          <template v-else>
            <img class="card-img-top" :src="project.thumb" alt="">
          </template>
          <div class="card-body">
            <h2>{{ project.project_title }}</h2>
            <p class="c-red">Fatto da: {{ project.collaborators }}</p>
            <p>Con il framework: {{ project.framework }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>      
</template>

<style scoped>
    .c-red {
        color: red;
    }

</style>