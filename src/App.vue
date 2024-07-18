<script>
import axios from 'axios';

export default {
  name: 'App',

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
  <h1>Welcome into your Boolfolio</h1>

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="project in projects.data">
        <div class="card h-100">
          <template v-if="!project.thumb.startsWith('http')">
            <img class="card-img-top" :src="base_url + '/storage/' + project.thumb" alt="">
          </template>
          <template v-else>
            <img class="card-img-top" :src="project.thumb" alt="">
          </template>
          <div class="card-body">
            {{ project.project_title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
