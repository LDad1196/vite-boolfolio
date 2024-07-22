<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'SingleProject',

    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            project: null
        }
    },

    mounted() {
        console.log(this.$route.params.slug);
        const url = `${this.base_url}/api/projects/${this.$route.params.slug}`
        console.log(url);
        console.log(this.project);
        axios
        .get(url)
        .then(response => {
            console.log(response);
            if (response.data.success) {
            // save the response into the vue instance
            console.log(response.data.project);
            this.project = response.data.project
            } else {
            console.log(response.data.message);
            // redirect to a 404 
            this.$router.push({ name: 'not-found' });
            }
        })
    }
}
</script>

<template>
    <div v-if="project">


        <div class="p-5 mb-4 bg-light">
          <div class="container py-5">
            <h1 class="display-5 fw-bold">Project: {{ project.project_title }}</h1>
            <p class="col-md-8 fs-4">
              {{ project.collaborators }}
            </p>
    
          </div>
        </div>
    
    
        <div class="container">
          <template v-if="!project.cover_image.startsWith('http')">
            <img class="img-fluid" :src="base_url + '/storage/' + project.thumb" alt="">
          </template>
          <template v-else>
            <img class="img-fluid" :src="project.thumb" alt="">
          </template>
    
        </div>

        <RouterLink to="/projects" class="btn btn-primary">Back to Projects</RouterLink>
      </div>

    <router-view></router-view>
</template>

<style scoped>

</style>