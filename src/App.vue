<script>
  import axios from 'axios';
  import { store } from './data/store.js'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import Jumbotron from './components/Jumbotron.vue'
  import Subscription from './components/Subscription.vue'
  
  export default {
    components:{
      Header,
      Main,
      Footer,
      Jumbotron,
      Subscription
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <Header />
  <Jumbotron />
  <Main />
  <Subscription />
  <Footer />
</template>

<style lang="scss">

@use './assets/scss/main.scss';
body{
  font-family: 'Public Sans', sans-serif;
}
</style>