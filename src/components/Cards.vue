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
  <div class="card">
    <div class="img-card">
      <img src="../../img/service6-2x.jpg" alt="">
    </div>
    <div class="text-card">
      <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
      <h6>Crossfit Workout</h6>
      <p class="text-yellow">Push your limits</p>
    </div>
  </div>
  <div class="card">
    <div class="img-card">
      <img src="../../img/box1-2x.jpg" alt="">
    </div>
    <div class="text-card">
      <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
      <h6>New gym apparel</h6>
      <p class="text-yellow">Look good, feel good</p>
    </div>
  </div>
  <div class="card">
    <div class="img-card">
      <img src="../../img/box3-2x.jpg" alt="">
    </div>
    <div class="text-card">
      <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
      <h6>Team training</h6>
      <p class="text-yellow">Find a partner</p>
    </div>
  </div>
  
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.card{
  height: 350px;
  width: calc(100% / 3);
  margin: 0 20px;
  border-radius: 2px 2px 30px 2px;
  border: none;
  .img-card{
    position: absolute;
  }
  .text-card{
    position: relative;
    top: 72%;
    // left: 5%;
    padding: 0 15px;
    border-radius: 2px 2px 30px 2px;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0) 5%, rgba(0,0,0,0.7) 70%);
    
    .wave{
      color: white;
      font-size: 0.6rem;
    }
    h6{
      color: white;
      font-size: 1.5rem;
    }
    p{
      color: $giallo;
      font-weight: bold;
    }
  }
  
  img{
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 2px 2px 30px 2px;
    
  }
}

</style>