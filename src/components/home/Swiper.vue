<template>
  <el-carousel 
    id="swiperBox" 
    arrow="always" 
    :interval="4000"
    :autoplay='true' 
    :height="'575px'"
  >
    <el-carousel-item class="swiperItem" v-for ="(item) in picList" :key="item.id">
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
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220305/d7b9d41cbb454b948a5295728ac02dd9.jpg'
        },
        {
          id: '3',
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220305/7c291a700ead4ebcb1f843e36de73dd6.jpg'
        },
        {
          id: '4',
          url: 'http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220305/46a998a6721d40ba89aadddbf9aebc45.jpg'
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
    z-index: -1;
  }
  .swiperItem {
    width: 100%;
    /* position: relative; */
  }
  .img {
    width: 100%;
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
