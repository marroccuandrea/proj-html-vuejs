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
              <img class="vid-img" src="../../img/service15-2x.jpg">
              <span class="play"><i class="fa-solid fa-play"></i></span>
            </div>
          </div>
          <div class="col col-text">
            <div class="workout">
              <h5 class="tune mb-5">Tune up your workouts</h5>
              <h2 class="best mb-4">The best health & fitness advice online</h2>
              <div class="youtube d-flex">
                <div class="logo-sx me-2">
                  <img src="../../img/unnamed.jpg" alt="">
                </div>
                <div class="link-youtube mb-4">
                  <div class="link-top">
                    <p class="theme mb-1">ThemeFusion</p>
                  </div>
                  <div class="link-btm">
                    <span class="yt-red"><i class="fa-brands fa-youtube"></i> YouTube</span>
                    <span class="yt-white">999+</span>
                  </div>
                </div>
              </div>
              <h6 class="grey-text mb-4">Arcu en facilisi ut quisque placerat nunc habitant. Magna semper mauris, venenatis, leo integer sit pellentesque.</h6>
              <button class="btn btn-danger btn-red"><i class="fa-brands fa-youtube"></i> Visit my YouTube channel</button>
            </div>
          </div>
        </div>
        <div class="container playlist-vid">
          <div class="featured d-flex justify-content-between  align-items-center mb-5">
            <h5 class="featured-sx">Featured playlists</h5>
            <h6 class="featured-dx"><a href="#">View all videos</a> <i class="fa-solid fa-chevron-right"></i></h6>
          </div>
          <div class="videos-wrapper d-flex justify-content-between">
            <div class="card card-3 ">
              <img src="../../img/video2-2x.jpg" class="card-img-top">
              <span class="play"><i class="fa-solid fa-play"></i></span>
              <div class="card-body">
                <h5 class="card-title">Thighs & glute workout</h5>
                <p class="card-text">Increase your mobility</p>
              </div>
            </div>
            <div class="card card-3 mx-5">
              <img src="../../img/video7-2x.jpg" class="card-img-top">
              <span class="play"><i class="fa-solid fa-play"></i></span>
              <div class="card-body">
                <h5 class="card-title">Lift, firm & perk up</h5>
                <p class="card-text">Feel young again</p>
              </div>
            </div>
            <div class="card card-3 ">
              <img src="../../img/video9-2x.jpg" class="card-img-top">
              <span class="play"><i class="fa-solid fa-play"></i></span>
              <div class="card-body">
                <h5 class="card-title">Slim & trim your waist</h5>
                <p class="card-text">Shed those extra pounds</p>
              </div>
            </div>
          </div>
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
      position: relative;
      .play{
        position: absolute;
        top: 45%;
        left: 45%;
        i{
          color: $blu;
          background-color: white;
          padding: 24px 26px;
          border-radius: 50%;
          cursor: pointer;
        }
      }
      .vid-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 2px 2px 30px 2px;
        // position: relative;
      }
    }
  }
  .workout{
    margin: 110px 110px;
    .grey-text{
      color: $grigio;
    }
    .btn-red{
      background-color: red;
      border-color: red;
      &:hover{
        background-color: #FF414B;
        border-color: #FF414B;
      }
    }
    .tune{
      color: $blu;
      font-size: 1.6rem;
    }
    .best{
      font-size: 3.5rem;
    }
    .theme{
      font-size: 0.7rem;
      color: $grigio;
    }
    .yt-red{
      font-size: 0.7rem;
      background-color: #FB0000;
      color: white;
      padding: 4px 5px;
      border: 1px solid #FB0000;
    }
    .yt-white{
      font-size: 0.7rem;
      padding: 4px 5px;
      border: 1px solid $grigio;
      color: $grigio;
    }
  }
  .playlist-vid{
    margin-top: 6rem;
    .featured-sx{
      font-size: 1.5rem;
    }
    .featured-dx{
      font-size: 1rem;
      a{
        text-decoration: none;
        color: black;
      }
      i{
        font-size: 0.9rem;
      }
    }
    .card-3{
      width: calc(100% / 3);
      // margin: 2rem 2rem;
      border: none;
      img{
        border-radius: 2px 2px 30px 2px;
        position: relative;
      }
      .play{
        position: absolute;
        top: 25%;
        left: 45%;
        i{
          color: $blu;
          background-color: white;
          padding: 20px 22px;
          border-radius: 50%;
          cursor: pointer;
        }
      }
      .card-body{
        text-align: center;
        .card-text{
          color: $blu;
        }
      }
    }
  }
}

</style>