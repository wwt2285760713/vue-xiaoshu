<template>
  <div class="newsList">
    <ul>

      <li
        v-for="(item,index) of listData"
        :key="index"
      >
        <router-link :to="'/detail/'+item.id+'?dataName=' + dataName ">
          <!-- <h2>{{index+1}}.{{item.title}}</h2> -->
            
              <img :src="item.url" />
              <span>{{item.name}}</span>
              <span class="my">{{item.author}}</span> 
              <input type="button" value="添加到书架" @click="tianjia" to="../pages/shujia">
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  props:['listData','dataName'],//接受数据
  mounted(){
    // console.log(this.listData);
  },
  methods:{
    tianjia(){

    }
  }
}
</script>

<style scoped>
.newsList{width:6.4rem; margin:0 auto;}
.newsList ul{ padding:0 0.4rem;position: relative;}
.newsList ul li{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
.newsList ul li h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
.newsList ul li span{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;position: absolute;}
.newsList ul li span.my{margin-top:0.4rem;color: aqua}
.newsList ul li input{background:brown;margin-left:0.6rem}
.newsList{clear: both;margin-bottom:1rem;}
</style>