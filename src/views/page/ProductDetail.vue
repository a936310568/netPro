<template>
  <div class="contain">
    <div class="picBox">
      <template v-if="name === 'SW320-330W-M'">
        <img class="pic" src="../../assets/a1.jpg" alt="">
        <img class="pic2" src="../../assets/a2.jpg" alt="">
        <img class="pic2" src="../../assets/a3.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW380-400W-M'">
        <img class="pic" src="../../assets/b1.jpg" alt="">
        <img class="pic2" src="../../assets/b2.jpg" alt="">
        <img class="pic2" src="../../assets/b3.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW250-270W-P'">
        <img class="pic" src="../../assets/c1.jpg" alt="">
        <img class="pic2" src="../../assets/c2.jpg" alt="">
        <img class="pic2" src="../../assets/c3.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW330-350W-P'">
        <img class="pic" src="../../assets/d1.jpg" alt="">
        <img class="pic2" src="../../assets/d2.jpg" alt="">
        <img class="pic2" src="../../assets/d3.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW420-450W-HC'">
        <img class="pic" src="../../assets/e1.jpg" alt="">
        <img class="pic2" src="../../assets/e2.jpg" alt="">
        <img class="pic2" src="../../assets/e3.jpg" alt="">
      </template>
      <template v-else-if="name === 'SW535-550W-HC'">
        <img class="pic" src="../../assets/f1.jpg" alt="">
        <img class="pic2" src="../../assets/f2.jpg" alt="">
        <img class="pic2" src="../../assets/f3.jpg" alt="">
      </template>
      <template v-else-if="name === 'Folding Solar Panels'">
        <img class="pic ml" src="../../assets/g2.jpg" alt="">
        <img class="pic ml" src="../../assets/g1.jpg" alt="">
      </template> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'Products',
  data() {
    return{
      name:'',
    }
  },
  watch: {
    '$route' (to, from) {   //监听路由是否变化
      if(to.query.name != from.query.name && to.query.name != null){
        this.name = to.query.name;
      }
    },
  },
  mounted() {
    this.name = this.$route.query.name
  },
}
</script>

<style scoped>
  .contain {
    width: 100%;
    margin-bottom: 80px;
  }
  .picBox {
    width: 80%;
    margin-left: 10%;
  }
  .pic {
    width: 96%;
    height: auto;
    margin-left: 5%;
  }
  .pic2 {
    width: 82%;
    margin-left: 9%;
    height: auto;
  }
  .ml {
    margin-left: 3%;
  }
</style>