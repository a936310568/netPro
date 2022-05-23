<template>
    <el-carousel
      id="swiperBox"
      :autoplay='true' 
      :interval='4000'
      height="calc(100vh - 75px)"
    >
    <el-carousel-item v-for ="(item) in picList" :key="item.id">
      <img class="img" :src="item.url">
    </el-carousel-item>
  </el-carousel>
  
</template>


<script>

export default {
  
  name: 'Swiper',
  data() {
    return {
      picList: [
        {
          id: '1',
          url: require('../../assets/swiper1.jpg')
        },
        {
          id: '2',
          url: require('../../assets/swiper2.jpg')
        },
        {
          id: '3',
          url: require('../../assets/swiper3.jpg')
        },
        {
          id: '4',
          url: require('../../assets/swiper4.jpg')
        }
      ],
      isChange: false
    };
  },
  methods: {
  },
  mounted(){     
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #swiperBox {
    width: 100%;
  }
  .el-carousel__container{
    height: auto!important;
  }
  .swiperItem {
    width: 100%;
    /* position: relative; */
  }
  .img {
    width: 100%;
    height: 100%;
  }
  .text {
    position: absolute;
    bottom: 0;
    left: 20px;
    z-index: 99;
    color: #fff;
  }
  .content1 {
    font-size: 26px;
  }
  .content2 {
    font-size: 22px;
  }
  .animation {
    animation: identifier 3s 1 forwards;
  }
  @keyframes identifier {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
</style>
