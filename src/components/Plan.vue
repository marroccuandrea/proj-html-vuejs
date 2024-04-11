<script>
import {store} from '../data/store'
    export default {
        data(){
            return{
                store
            }
        }
    }
// Formula percorso immagine
// getImagePath(imagePath) {
//     return new URL(`../../img/${imagePath}`, import.meta.url).href;
// }


</script>

<template>
    <div class="container-fluid">
        <div class="container d-flex h-100 justify-content-bewteen gap-5">
            <div 
            v-for="(plansItem,index) in store.plansItems"
            :key="index" 
            class="card">
                <div class="card-body">
                    <span class="icon"><i :class="['fa-solid', plansItem.icon ]"></i></span>
                    <h5 class="card-title mb-3">{{plansItem.title}}</h5>
                    <h6 class="card-subtitle mb-5">{{ plansItem.subtitle }}</h6>
                    <p class="card-text">{{ plansItem.text }}</p>
                    <a :href="plansItem.link" class="card-link">{{ plansItem.linkText }} <i :class="['fa-solid', plansItem.linkIcon ]"></i></a>
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
            border: 7px solid grey;
            transition: all 0.4s;
            &:hover{
                scale: 1.1;
                border: 7px solid $blu;
            }
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