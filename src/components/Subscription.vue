<script>
    export default {
        
    }
</script>

<template>
    <div class="container-fluid d-flex">
        <div class="container">
            <h6 class="rosso">Join our mailing list today</h6>
            <h2>Insider offers & flash sales in your inbox every week</h2>
            <span class="wave"><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i><i class="fa-solid fa-wave-square"></i></span>
            <div class="input-box row mb-4 mt-5">
                <div class="col">
                    <input class="form-control" type="text" placeholder="Insert your email address..."/>
                </div>
                <div class="col">
                    <button class="btn btn-primary ">Subscribe</button>
                </div>
            </div>
            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus.</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
.container-fluid{
    height: 700px;
    background-image: url('../../img/banner1-2x.jpg');
    background-image: linear-gradient(90deg, rgba(0,0,0,1) 45%, rgba(0,0,0,0.1)55%), url('../../img/banner1-2x.jpg');
    background-size: cover;
    background-position: right 50%;
    .container{
        
        .rosso{
            margin-top: 115px;
            margin-bottom: 32px;
            color: $rosso;
        }
        h2{
            width: 65%;
            font-size: 49.6px;
            color: white;
            margin-bottom: 16px;
        }
        .wave{
            color: $giallo;

        }
        p{
            color: $grigio;
            width: 60%;
        }
        input{
            border-radius: 20px;
            &:focus{
                color: $rosso;
                box-shadow: 0 0 10px $rosso;
                border-color: red;
            }
        }
        button{
            padding: 10px 60px;
            &:hover{
                background-color: $rosso;
                border-color: $rosso;
            }
        }
    }
}
</style>