<script>
import { RouterLink } from 'vue-router';

    export default {
        name: 'AppHeader',
    }

</script>


<template>
    <header>
        <nav class="container py-5 mb-5">
            <div class="row justify-content-center">
                <div class="col-3">
                    <h5>Welcome in BoolFolio</h5>
                </div>

                <div class="col-6">
                    <ul class="row text-center">
                        <li class="col-3">
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li class="col-3">
                            <RouterLink to="/about">About</RouterLink>
                        </li>
                        <li class="col-3">
                            <RouterLink to="/contacts">Contact</RouterLink>
                        </li>
                        <li class="col-3">
                            <RouterLink to="/projects">Projects</RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="col-3">
                    <div class="row justify-content-center">
                        <div class="col-4">Login</div>
                        <div class="col-4">Registrati</div>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <router-view></router-view>
</template>

<style scoped>

    
    header {
        background-color: #222;
        color:white
    }

    li {
        list-style: none;
    }
</style>