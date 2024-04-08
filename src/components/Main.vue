<script>
    import {store} from '../data/store'
    import Card from './partials/Card.vue'
    export default {  
        components: {
            Card
        },
    data(){
      return{
        store
      }
    }
    
  }
</script>

<template>
    <main>
      <div class="jumbotron container-fluid">
        <div class="jumbo container">

        </div>
      </div>
    </main>

</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';
main{
  .jumbotron{
    height: 675px;
    background-image: url('../../img/slider82x-scaled.jpg');
    // background-image: linear-gradient(left, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0)), url('../../img/slider82x-scaled.jpg');
    background-size: cover;
  }

}
</style>