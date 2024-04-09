<script>
    import {store} from '../data/store'
    import Cards from './Cards.vue'
    export default {  
    data(){
      return{
        store
      }
    },
    components: { 
      Cards,
    }
    
  }
</script>

<template>
    <main>
      <div class="container-fluid">
          <div class="cards-wrapper container d-flex">
            <Cards />
          </div>
        <div class="text container text-center">
          <h2>"How you respond to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser."</h2>
          <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
          <div class="text-box d-flex align-items-center">
            <img src="../../img/avatar-1-2x.jpg" alt="">
            <h6>Brad Johnson</h6>
            <h6 class="grey-text">Las Vegas</h6>
          </div>
        </div>
      </div>
    </main>

</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.container-fluid{
  height: 900px;
  margin-top: -90px;
  background: rgb(13,0,239);
  background: linear-gradient(135deg, rgba(13,0,239,1) 0%, rgba(217,1,1,1) 100%);
  .cards-wrapper{
    height: 50%;
    margin-bottom: 90px;
  }
  .text{
    height: 50%;
    width: 60%;
    h2{
      color: white;
    }
    .wave{
      color: $giallo;
    }
    .text-box{
      margin: 0 auto;
      width: 50%;
      h6{
        font-size: 0.8rem;
        margin: 0 10px;
        color: white;
      }
      .grey-text{
        color: $grigio;
      }
      img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin-left: 100px;
      }
    }
  }
}

</style>