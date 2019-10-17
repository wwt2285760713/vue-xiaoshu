<template>
  <div class="foot-btn" >
    <ul>
      <router-link tag="li" class="home" active-class="home--active" to="/home"><a href="javascript:;" ></a></router-link>
      <router-link tag="li" class="shujia" active-class="write--active" to="/buycar"><a href="javascript:;" ></a></router-link>
      <router-link tag="li" class="paihang" active-class="my--active" to="/rankbtn"><a href="javascript:;" ></a></router-link>
    </ul>
  </div>
</template>
<style scoped>
.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
.foot-btn ul{width:4.08rem; margin:0 auto;}
.foot-btn ul li{ float:left;}
.foot-btn ul li a{ display:block; width:100%;height:100%;}
.foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.jpg) no-repeat 0 0; background-size:100%; margin-top:0.1rem;}
.foot-btn ul .shujia{width:0.4rem;height:0.5rem; background:url(../assets/img/shujia.jpg) no-repeat 0 0; background-size:100%; margin-left:1.18rem;margin-top:0.1rem}
.foot-btn ul .paihang{width:0.80rem;height:0.80rem; background:url(../assets/img/paihang.jpg) no-repeat 0 0;background-size:100%; margin-left:1.18rem; }
</style>