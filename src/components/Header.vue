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
    <header>
      <div class="container d-flex justify-content-between align-items-center">
        <img src="../../img/logo.png" alt="" class="logo">
        <nav class="d-flex justify-content-between align-items-center">
          <ul class="menu d-flex  align-items-center ">
            <a href=""><li>Home</li></a>
            <a href=""><li>Services</li></a>
            <a href=""><li>About</li></a>
            <a href=""><li>Videos</li></a>
            <a href=""><li>Blog</li></a>
            <a href=""><li>Store<span class="badge-cust">new</span></li></a>
          </ul>
          <button class="btn btn-primary ms-5 ">Schedule a workout</button>
          <a class="cart" href=""><i class="fa-solid fa-cart-shopping"></i></a>
          <a class="search" href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        </nav>
      </div>
    </header>

</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
header{
  background-color: black;
  .container{
    height: 95px;
    .btn{
      font-size: 0.9rem;
    }
    .cart,  .search{
      color: white;
      margin-left: 2.5rem;
      font-size: 0.9rem;
    }
    .btn{
      border-radius: 20px;
      padding: 10px 25px;
    }

  }
  ul{
    list-style: none;
    margin: auto 0;
    a{
      text-decoration: none;
      color: white;
      margin-left: 2.5rem;
      font-size: 0.9rem;
       .badge-cust{
        margin-left: 0.5rem;
        background-color: yellow;
        color: black;
        font-size: 0.7rem;
        padding: 6px 5px 5px 5px;
        border-radius: 2px;
      }
    }
  }
  
}
</style>