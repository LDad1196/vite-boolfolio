<script>
    export default {
        name: 'AppHeader'
    }

</script>


<template>
    <header>
        <nav class="container py-5 mb-5">
            <div class="row">
                <div class="col-3">
                    <h5>Welcome in BoolFolio</h5>
                </div>

                <div class="col-6">
                    <ul class="row text-center">
                        <li class="col-3">Link 1</li>
                        <li class="col-3">Link 2</li>
                        <li class="col-3">Link 3</li>
                        <li class="col-3">Link 4</li>
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
</template>

<style scoped>

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    header {
        background-color: #222;
        color:white
    }

    li {
        list-style: none;
    }
</style>