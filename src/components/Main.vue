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
      <div class="container-fluid gradient">
          <div class="cards-wrapper container d-flex">
            <Cards />
          </div>
        <div class="text container text-center">
          <h2>"How you respond to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser."</h2>
          <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
          <div class="text-box d-flex justify-content-center align-items-center">
            <img src="../../img/avatar-1-2x.jpg" alt="">
            <h6>Brad Johnson</h6>
            <h6 class="grey-text">Las Vegas</h6>
          </div>
        </div>
      </div>
      <div class="container-fluid white">
        <div class="row row-cols-2">
          <div class="col col-video">
            <div class="vid-container">
              <img class="vid-img" src="../../img/service15-2x.jpg" alt="">
            </div>
          </div>
          <div class="col col-text">
            <div class="workout">
              <h5>Tune up your workouts</h5>
              <h2>The best health & fitness advice online</h2>
              <div class="youtube d-flex">
                <div class="logo-sx">
                  <img src="../../img/unnamed.jpg" alt="">
                </div>
                <div class="link-youtube">
                  <div class="link-top">
                    <p class="theme m-0">ThemeFusion</p>
                    
                  </div>
                  <div class="link-btm">
                    <span class="yt-red"><i class="fa-brands fa-youtube"></i> YouTube</span>
                    <span class="yt-white">999+</span>
                  </div>
                </div>
              </div>
              <h6>Arcu en facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.</h6>
            </div>
          </div>
        </div>
        <div class="container playlist-vid">
          
        </div>
      </div>
    </main>

</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.gradient{
  height: 900px;
  margin-top: -90px;
  background: rgb(13,0,239);
  background: linear-gradient(135deg, rgba(13,0,239,1) 0%, rgba(217,1,1,1) 100%);
  .cards-wrapper{
    height: 50%;
    margin-bottom: 70px;
  }
  .text{
    height: 30%;
    width: 60%;
    
    h2{
      color: white;
      margin-bottom: 20px;
    }
    .wave{
      color: $giallo;
      
    }
    .text-box{
      margin: 20px auto;
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
        // margin-left: 100px;
      }
    }
  }
}
.white{
  height: 1500px;
  .col-video{
    height: 820px;
    margin-top: -50px;
    .vid-container{
      width: 100%;
      height: 100%;
      .vid-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px 2px 30px 2px;
      }
    }
  }
  .workout{
    margin: 100px 60px;
  }
}

</style>