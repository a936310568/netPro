<template>
  <div class="download">
    <div class="downBg">
      <img class="downImg" src="https://img1.baidu.com/it/u=431273345,2457428174&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt="">
    </div>
    <div class="download-title"><span class="title-text">Brochures and Datasheets</span></div>
    <div>
      <template v-for ="(item, index) in halfCellList">
        <div class="download-content" :key="index">
          <div class="content-left">{{item.left}}</div>
          <div class="content-right" v-if="!item.isTitle">
            <img class="icon" src="../../assets/right.png" alt="">
            <span class="icon-text">Click</span>
            <span class="icon-text mr10 e39">View</span>
            <img class="icon" src="../../assets/down.png" alt="">
          </div>
        </div>
      </template>
    </div>
    <div class="mt50">
      <template v-for ="(item, index) in halfCellList">
        <div class="download-content" :key="index">
          <div class="content-left">{{item.left}}</div>
          <div class="content-right" v-if="!item.isTitle">
            <img class="icon" src="../../assets/right.png" alt="">
            <span class="icon-text">Click</span>
            <span class="icon-text mr10 e39">View</span>
            <img class="icon" src="../../assets/down.png" alt="">
          </div>
        </div>
      </template>
    </div>
    <div class="mt50">
      <template v-for ="(item, index) in halfCellList">
        <div class="download-content" :key="index">
          <div class="content-left">{{item.left}}</div>
          <div class="content-right" v-if="!item.isTitle">
            <img class="icon" src="../../assets/right.png" alt="">
            <span class="icon-text">Click</span>
            <span class="icon-text mr10 e39">View</span>
            <img class="icon" src="../../assets/down.png" alt="">
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Products',
  data() {
    return{
      halfCellList: [
        {
          left: 'Half cell',
          isTitle: true
        },
        {
          left: '420-450WHalfcell-Sunwalker',
        },
        {
          left: '400-410WHalfcell-Sunwalker',
        },
        {
          left: '360-380WHalfcell-Sunwalker'
        },
        {
          left: '330-340WHalfcell-Sunwalker'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .download {
    width: 100%;
  }
  .downBg {
    width: 100%;
  }
  .downImg {
    width: 100%;
    height: 40vh;
  }
  .download-title {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .title-text {
    font-size: 22px;
    font-weight: 600;
    color: #000;
  }
  .download-content {
    width: 100%;
    display: flex;
    align-content: center;
    margin-top: 20px;
  }
  .content-left {
    width: 50%;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-left: 2%;
  }
  .content-right {
    flex: 1;
    margin-left: 30%;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
  .icon-text {
    font-size: 24px;
    font-weight: 500;
  }
  .mr10 {
    margin-right: 10px;
  }
  .mt50 {
    margin-top: 50px;
  }
  .e39 {
    color: #e39c6d;
  }
</style>

