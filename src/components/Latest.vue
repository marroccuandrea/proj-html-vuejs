<script>
    export default {
        
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container h-100 d-flex">
            <div class="container playlist-vid">
          <div class="featured d-flex justify-content-between  align-items-center mb-5">
            <h5 class="featured-sx">Latest articles</h5>
            <h6 class="featured-dx"><a href="#">Read all articles</a> <i class="fa-solid fa-chevron-right"></i></h6>
          </div>
          <div class="videos-wrapper d-flex justify-content-between">
            <div class="card card-3 ">
                <img src="../../img/blog4-2x.jpg" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">The best protein shake</h5>
                    <p class="card-text">By admin | November 26th, 2019 | Gym</p>
                </div>
                <div class="img-card gradient"></div>
            </div>
            <div class="card card-3 mx-5">
              <img src="../../img/blog1-2x.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Ultimate cardio workout</h5>
                <p class="card-text">By admin | November 26th, 2019 | Gym</p>
              </div>
              <div class="img-card gradient"></div>
            </div>
            <div class="card card-3 ">
              <img src="../../img/blog3-2x.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">New juices available now</h5>
                <p class="card-text">By admin | November 26th, 2019 | Gym</p>
              </div>
              <div class="img-card gradient"></div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.container-fluid{
    height: 700px;
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
      border: none;
      transition: all 0.6s;
      
      &:hover .gradient{
        transition: all 0.6s;
        background: linear-gradient(to Top, $blu-trans, $blu-trans, $blu-trans-light, transparent);
        position: absolute;
        width: 100%;
        height: 100%;
        }
      .card-body{
        z-index: 999;
        background-color: white;
        .card-text{
            color: $grigio;
            font-size: 0.8rem;
        }
      }
      
      img{
        border-radius: 2px;
      }
    }
}
}

</style>