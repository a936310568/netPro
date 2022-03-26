<template>
    <el-carousel
      id="swiperBox"
      :autoplay='true' 
      :interval='5000'
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
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220305/b4a1676810c744b99d4dd5e38f1b7cf1.jpg'
        },
        {
          id: '2',
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220313/db891f5bb3e84b868d29521e92e2bac7.jpg'
        },
        {
          id: '3',
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220313/f1aa7ef678c14ed3875962c68e43cea1.jpg'
        },
        {
          id: '4',
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220313/cabd9ce774224696898b9dd71656524c.jpg'
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
