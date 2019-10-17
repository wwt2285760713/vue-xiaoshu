<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Vue from 'vue'
import Footer from './components/Footer.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


export default {
  name: 'app',
  components: {
   Header,Footer
  },
  mounted(){
  }
}
</script>

<style>

</style>
