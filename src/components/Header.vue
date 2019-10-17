<template>
  <div class="nav">
    <ul>
      <router-link tag="li" active-class="active" to="/home"><a href="javascript:;" >书城</a></router-link>
      <router-link tag="li" active-class="active" to="/jingxuan"><a href="javascript:;" >精选</a></router-link>
      <router-link tag="li" active-class="active" to="/user"><a href="javascript:;" >我的</a></router-link>
    </ul>

  </div>
</template>
<style scoped>
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#fff;}
.nav ul{width:4.38rem;height:0.6rem; margin:0 auto;}
.nav ul li{width:1.46rem;height:0.6rem; float:left;}
.nav ul li a{ display:block;width:1.46rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:0.3rem; color:rgb(255, 94, 0);}
.nav ul li.active a{height:0.5rem; border-bottom:0.1rem solid #54b26c; color:aqua;}
</style>
