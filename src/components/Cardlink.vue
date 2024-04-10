<script>
    export default {
        
    }
</script>

<template>
    <div class="container-fluid">
        <div class="container h-100 row row-cols-4">
            <div class="col">
                <div class="card">
                    <img src="../../img/sponsor-1-2x.png" class="card-img-top">
                    <div class="card-body">
                        <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
                        <p class="card-text">Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.</p>
                        <a href="#" class="card-link">Visit Yoga Studio <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../../img/sponsor-2-2x.png" class="card-img-top">
                    <div class="card-body">
                        <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
                        <p class="card-text">Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.</p>
                        <a href="#" class="card-link">Join Fitness Center <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../../img/sponsor-3-2x.png" class="card-img-top">
                    <div class="card-body">
                        <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
                        <p class="card-text">Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.</p>
                        <a href="#" class="card-link">Learn about FC <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../../img/sponsor-4-2x.png" class="card-img-top">
                    <div class="card-body">
                        <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
                        <p class="card-text">Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.</p>
                        <a href="#" class="card-link">Visit Power Gym <i class="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.container-fluid{
    height: 550px;
    .container{
        margin: 0 auto;
        .card{
            margin-top: 150px;
            border: none;
            img{
                width: 150px;
                margin: 0 auto;
            }
            .card-body{
                text-align: center;
                margin: 0 15px;
                .wave{
                    color: $blu;
                }
                .card-text{
                    color: $grigio;
                    font-size: 0.8rem;
                    margin-top: 16px;
                }
                .card-link{
                    font-size: 0.8rem;
                    text-decoration: none;
                    color: black;
                    i{
                        font-size: 0.7rem;
                    }
                }
            }
        }
    }
}
</style>