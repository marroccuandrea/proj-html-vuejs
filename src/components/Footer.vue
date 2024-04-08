<script>
   import {store} from '../data/store'
    export default {  
    data(){
      return{
        store
      }
    }
    
  }
</script>

<template>
  <footer>
    <div class="container">
        <div class="row row-cols-3">
        <div class="col text-center">
            <img class="logo-footer mb-4" src="../../img/logo-200x34.png" alt="">
            <p class="text-footer mb-4">Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.</p>
            <nav>
                <ul class="footer-menu d-flex justify-content-center">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </nav>
        </div>
        <div class="col text-center">
            <h6>RECENT POSTS</h6>
            
                <ul class="posts-menu">
                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i> The best protein shake</a></li>
                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Ultimate cardio workout</a></li>
                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i> New juices available now</a></li>
                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i> Tips to find training partners</a></li>
                    <li><a href="#"><i class="fa-solid fa-chevron-right"></i> 20 best healthy recipes</a></li>
                </ul>
            
        </div>
        <div class="col text-center">
            <h6 class="mb-4">CONTACT INFORMATIONS</h6>
            <p class="text-footer">4746 Tipple Road Michigan 48449</p>
            <h6>Mobile: 1.800.000.0000</h6>
            <h6>Email: info@your-company.com</h6>
        </div>
    </div>
    </div>
    
  </footer>
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
footer{
    background-color: black;
    ul{
    list-style: none;
    margin-right: 15px;
        a{
        color: $rosso-icone;
        text-decoration: none;
        margin: 0 0.4rem;
        font-size: 0.8rem;
            
        }
    }
    .col{
        margin: 100px 0;
        color: white;
        h6{
            font-size: 0.8rem;
        }
        .logo-footer{
            width: 150px;
        }
        .text-footer{
            color: rgb(180, 180, 180);
            font-size: 0.8rem;
            
        }
        .posts-menu{
            line-height: 2rem;
            margin-right: 30px;
            a{
                color: white;
            }
            i{
                font-size: 0.6rem;
            }
        }
    }
}
</style>