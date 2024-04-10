<script>
    export default {
        
    }
</script>

<template>
    <div class="container-fluid d-flex">
        <div class="container h-100 text-center">
            
                <h1>"I've failed over and over again in my life. And that's why I succeed"</h1>
                <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
                <p>Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam in iaculis</p>
                <button class="btn btn-primary">Buy Avada today <i class="fa-solid fa-chevron-right"></i></button>
           
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.container-fluid{
    height: 770px;
    background-image: url('../../img/banner2-2x.jpg');
    background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 65%), url('../../img/banner2-2x.jpg');
    background-size: cover;
    background-position: 50%;
    .container{
        width: 50%;
        margin: 0 auto;
        h1{
            margin-top: 200px;
            margin-bottom: 32px;
            color: white;
        }
        .wave{
            color: $giallo;
        }
        p{
            color: $grigio;
            margin-top: 32px;
        }
        button{
            padding: 10px 30px;
            margin-top: 16px;
            &:hover{
                background-color: $rosso;
                border-color: $rosso;
            }
            i{
                font-size: 0.7rem;
            }
        }
    }
}
</style>