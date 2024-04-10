<script>
    export default {
        
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex h-100 justify-content-bewteen">
            <div class="card">
                <div class="card-body">
                    <span class="icon"><i class="fa-solid fa-heart-pulse"></i></span>
                    <h5 class="card-title mb-3">Team training</h5>
                    <h6 class="card-subtitle mb-5">Find a partner</h6>
                    <p class="card-text">Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.</p>
                    <a href="#" class="card-link">Find a partner <i class="fa-solid fa-chevron-right"></i></a>
                    
                </div>
            </div>
            <div class="card mx-5">
                <div class="card-body">
                    <span class="icon"><i class="fa-solid fa-dumbbell"></i></span>
                    <h5 class="card-title mb-3">Crossfit workout</h5>
                    <h6 class="card-subtitle mb-5">Push your limits</h6>
                    <p class="card-text">Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.</p>
                    <a href="#" class="card-link">Learn about Crossfit <i class="fa-solid fa-chevron-right"></i></a>
                    
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <span class="icon"><i class="fa-solid fa-weight-scale"></i></span>
                    <h5 class="card-title mb-3">Weight loss plan</h5>
                    <h6 class="card-subtitle mb-5">Shed those pounds</h6>
                    <p class="card-text">Vestibulum, curabitur eu sem nibh ultrices sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique.</p>
                    <a href="#" class="card-link">Schedule a workout <i class="fa-solid fa-chevron-right"></i></a>
                    
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.container-fluid{
    height: 790px;
    background-color: black;
    .container{
        .card{
            margin: 100px 0;
            text-align: center;
            background-color: black;
            color: white;
            border: 7px solid $blu;
            .card-body{
                margin: 60px 25px;
                .icon{
                    font-size: 70px;
                }
                .card-subtitle{
                    color: $giallo;
                }
                .card-link{
                    text-decoration: none;
                    color: white;
                    i{
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }
}
</style>