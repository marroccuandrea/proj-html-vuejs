<script>
   import {store} from '../data/store';
   import {footerMenues} from '../data/menues'
    export default {  
    data(){
      return{
        store,
        footerMenues
      }
    }
    
  }
</script>

<template>
  <footer>
    <div class="container footer-top">
        <div class="row row-cols-3">
            <div class="col text-center">
                <img class="logo-footer mb-4" src="../../img/logo-200x34.png" alt="">
                <p class="text-footer mb-4">Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.</p>
                <nav class= "d-flex justify-content-center">
                    <ul 
                    v-for="(item,index) in footerMenues.social" 
                    :key="`s-${index}`" 
                    class="footer-menu ">
                        <li>
                            <a :href="item.href" v-html="`${item.text}`"></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col text-center">
                <h6>RECENT POSTS</h6>
                
                    <ul 
                    v-for="(item,index) in footerMenues.posts"
                    :key="`p-${index}`"
                    class="posts-menu">
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a :href="item.href">{{ item.text }}</a>
                        </li>
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
    <div class="container-fluid footer-btm">
        <div class="container h-100 d-flex justify-content-center align-items-center">
            <p class="copyright">© Copyright 2012 - 2020 | Avada theme by <strong>ThemeFusion</strong> |  All Rights Reserved | Powered by <strong>Word Press</strong></p>
        </div>
    </div>
    
  </footer>
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
footer{
    background-color: black;
    
    .posts-menu{
    list-style: none;
    margin-right: 15px;
    }
    .footer-menu{
        list-style: none;
        
    }
    li{
        a{
        color: $rosso-icone;
        text-decoration: none;
        font-size: 0.8rem;
        }
    }
    .col{
        margin: 100px 0;
        color: white;
        h6{
            font-size: 0.9rem;
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
    .footer-btm{
        border-top: 1px solid $grigio;
        height: 100px;
        .copyright{
            color: $grigio;
            font-size: 0.7rem;
            strong{
                color: white;
            }
        }
    }
}
</style>