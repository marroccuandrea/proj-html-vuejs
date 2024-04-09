<script>
    import {store} from '../data/store';
    import {headerMenues} from '../data/menues'
    export default {  

    data(){
      return{
        store,
        headerMenues
      }
    }
    
  }
</script>

<template>
    <header>
      <div class="container d-flex justify-content-between align-items-center">
        <img src="../../img/logo.png" alt="" class="logo">
        <nav class="d-flex align-items-center">
          <ul 
          v-for="(item, index) in headerMenues.main" 
          :key="`m-${index}`" 
          class="header-menu d-flex justify-content-between align-items-center ">
            <li >
              <a :href="item.href">{{ item.text }}</a>
              <span v-if="index == headerMenues.main.length - 1" class="badge-cust">new</span>
            </li>
          </ul>
          <button class="btn btn-primary ms-5 ">Schedule a workout</button>
          
            <ul 
              v-for="(item, index) in headerMenues.social"
              :key="`s-${index}`"
              class="header-menu d-flex justify-content-between align-items-center ">
                <li>
                  <a :href="item.href" v-html="`${item.text}`"></a>
                </li>
            </ul>
          
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
    
    .cart,  .search{
      color: $grigio;
      margin-left: 2.5rem;
      font-size: 0.9rem;
      &:hover{
        color: white;
      }
    }
    

  }
  ul{
    list-style: none;
    margin: auto 0;
    .badge-cust{
        margin-left: 0.5rem;
        background-color: $giallo;
        color: black;
        font-size: 0.7rem;
        padding: 6px 5px 5px 5px;
        border-radius: 2px;
      }
    a{
      text-decoration: none;
      color: $grigio;
      margin-left: 0.5rem;
      font-size: 0.9rem;
      &:hover{
        color: white;
      }
       
    }
  }
  .btn:hover{
    background-color: $btn-rosso;
    border-color: $btn-rosso;
  }
  
}
</style>