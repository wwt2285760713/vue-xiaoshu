<template>
  <div class="jingxuan">
    <List :list-data="listData" :data-name="'home'"></List>
  </div>
</template>
<script>
import List from '../components/List'
export default {
  data(){
    return {
      listData:[],
    }
  },
  components:{
    List
  },
  mounted(){
    this.$axios({
      url:'/home.json',
    
    }).then(
      res=>{
        this.listData=res.data
        // console.log(this.listData)
        }
    )
  }
}
</script>
<style scoped>
.jingxuan{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>
