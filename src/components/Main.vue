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
        <div class="text container">
          <h2>"How you respond to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser."</h2>
        </div>
      </div>
    </main>

</template>


<style lang="scss" scoped>
@import '../assets/scss/partials/variables.scss';

.container-fluid{
  height: 1000px;
  margin-top: -90px;
  background: rgb(13,0,239);
  background: linear-gradient(135deg, rgba(13,0,239,1) 0%, rgba(217,1,1,1) 100%);
  .cards-wrapper{
    height: 50%;
    
  }
  .text{
    height: 50%;
    width: 50%;
  }
}

</style>