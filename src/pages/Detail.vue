<template>
  <div class="detail">
    <div class="nav1"></div>
    <div class="nav">
      <ul>
        <li class="l-btn" @click="goback"></li>
      </ul>
    </div>
    <div class="shu">
      <ul>
        <li>
          <img :src="data.url" alt="aaa">
          <span>书名：{{data.name}}</span>
          <span class="zuozhe">作者：{{data.author}}</span>
          <input type="button" value="添加到书架" >
          <p>描述：{{data.miaoshu}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // console.log(1)
    let id = this.$route.params.id;
    let dataName = this.$route.query.dataName;//获取地址栏发过来的数据dataName
    axios({
      url: `/${dataName}.json`
    }).then(res => {
      for (let item of res.data) {
        if (item.id == id) {
          this.data = item;
        }
      }
    });
  }
};
</script>

<style scoped>
html,
body {
  overflow-x: hidden;
}
.nav1 {
  height: 0.6rem;
}
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.15rem;
  margin: 0 auto;
}
.nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background: url(../assets/img/history.png) no-repeat 0 0;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}

.shu ul li{position:relative}
.shu ul li img{margin-left:0.3rem;margin-top:.3rem}
.shu ul li span{position:absolute;left:2rem;top:.7rem}
.shu ul li span.zuozhe{margin-top:0.7rem;color: aqua}
.shu ul li input{background:brown;margin-left:1.8rem}

</style>