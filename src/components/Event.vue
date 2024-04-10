<script>
    export default {
        
    }
</script>

<template>
    <div class="container-fluid d-flex">
        <div class="container h-100 text-center">
            <h1>Crossfit Workout of the day</h1>
            <h4>November 15th, 2019</h4>
            <p><a href="#">View all videos <i class="fa-solid fa-arrow-right-long"></i></a></p>
            <span class="play"><i class="fa-solid fa-play"></i></span>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.container-fluid{
    height: 640px;
    background-image: url('../../img/banner14-2x.jpg');
    background-image: linear-gradient(135deg, rgba(13,0,239,0.4) 0%, rgba(217,1,1,0.4) 100%), url('../../img/banner14-2x.jpg');
    background-size: cover;
    .container{
        margin: 0 auto;
        position: relative;
        .play{
        position: absolute;
        top: 30%;
        left: 47%;
        i{
          color: $blu;
          background-color: white;
          padding: 24px 26px;
          border-radius: 50%;
          cursor: pointer;
          &:hover{
            color: $rosso;
          }
        }
      }
        h1{
            margin-top: 300px;
            color: white;
        }
        h4{
            color: $giallo;
        }
        a{
            text-decoration: none;
            color: white;
            font-size: 0.8rem;
            i{
                font-size: 0.7rem;
            }
        }
    }
    
}
</style>