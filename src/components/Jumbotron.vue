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
   <div class="jumbotron container-fluid">
      <div class="d-flex h-100 align-items-center">
        <span class="play"><i class="fa-solid fa-play"></i></span>
        <div class="demo-pack">
          <div class="demos text-center mb-1">
            <i class="fa-solid fa-folder-open"></i>
            <p class="text-demo">Demos</p>
          </div>
          <div class="demos text-center">
            <span class="dollar">$</span>
            <span class="price">39</span>
            <p class="text-demo">On Sale</p>
          </div>
        </div>
        <div class="jumbo container">
          <h6>Certified fitness professional</h6>
          <h1>Take control of your health</h1>
          <span><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
          <p class="text-jumbo">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet.</p>
          <button class="btn btn-primary"><i class="fa-brands fa-youtube me-2"></i>Visit my YouTube channel</button>
          <button class="btn btn-outline-secondary ms-3">Buy Avada today<i class="fa-solid fa-arrow-right ms-2"></i></button>
        </div>
      </div>
    </div>
</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.jumbotron{
    position: relative;
    height: 630px;
    background-image: url('../../img/slider82x-scaled.jpg');
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.5)55%), url('../../img/slider82x-scaled.jpg');
    background-size: cover;
    .demo-pack{
      position: absolute;
      top: 8%;
      right: 1%;
    }
    .demos{
      position: relative;
      background-color: white;
      padding: 5px 10px;
      border-radius: 5px;
      .dollar{
        position: absolute;
        left: 15%;
        top: 15%;
        color: $verde;
        font-size: 0.6rem;
        font-weight: 800;
      }
      .price{
        color: $verde;
        font-weight: 800;
        font-size: 1.2rem;
      }
      i{
        font-size: 1.5rem;
      }
      .text-demo{
        margin-bottom: 0;
        font-size: 0.6rem;
      }
    }
    .play{
      position: absolute;
      top: 40%;
      right: 22%;
      i{
        color: $blu;
        background-color: white;
        padding: 27px 29px;
        border-radius: 50%;
      }
    }
    
    h6{
      color: $rosso;
      margin-bottom: 20px;
    }
    h1{
      font-size: 3rem;
      color: white;
      margin-bottom: 20px;
    }
    .text-jumbo{
      color: $grigio;
      margin-bottom: 30px;
    }
    span i{
      color: $giallo;
      margin-bottom: 30px;
    }
  }
</style>