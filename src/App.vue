<script>
  import axios from 'axios';
  import { store } from './data/store.js'
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import Jumbotron from './components/Jumbotron.vue'
  import Subscription from './components/Subscription.vue'
  import Plan from  './components/Plan.vue'
  import Latest from  './components/Latest.vue'
  import Buy from  './components/Buy.vue'
  import Cardlink from  './components/Cardlink.vue'
  import Event from  './components/Event.vue'

  export default {
    components:{
      Header,
      Main,
      Footer,
      Jumbotron,
      Subscription,
      Plan,
      Latest,
      Buy,
      Cardlink,
      Event
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
  <Plan />
  <Latest />
  <Buy />
  <Cardlink />
  <Event />
  <Footer />
</template>

<style lang="scss">

@use './assets/scss/main.scss';
body{
  font-family: 'Public Sans', sans-serif;
}
</style>