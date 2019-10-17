<template>
  <div class="home">
    <Slider :banner="banner"></Slider>
    <List :list-data="listData" :data-name="'home'"></List>
  </div>
</template>
<script>
import Slider from '../components/Slider'
import List from '../components/List'
// import axios from 'axios';

export default {
  data(){
    return {
      listData:[],
      banner:[]
    }
  },
  components:{
    Slider,List
  },
  mounted(){
   this.$axios({
    url:'/home.json'
    }).then(
      res=>{
        this.listData = res.data
        // console.log(this.listData);
      }
    )

    //并行无关联
    // axios({
    //   url:'../../public/a.json',
    //   params:{_page:1,_limit:10}
    // }).then(
    //   res=>this.listData=res.data
    // )

    // axios({
    //   url:'http://localhost:3000/api/banner',
    //   params:{_page:1,_limit:3}
    // }).then(
    //   res=>this.banner=res.data.data
    // )

    //串行有关联
    /* axios({
      url:'/api/parent'
    }).then(
      res=>res.data.child
    ).then(
      child=>axios({url:'/xx/'+child})
    ).then(
      data=>console.log('数据',data)
    ) */

  }
}
</script>

<style scoped>

</style>
