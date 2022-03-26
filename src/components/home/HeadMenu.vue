<template>
  <div class="nav">
    <el-row class="wrap">
      <el-col :span="4">
        <div class="imgBox" @click="goToHome()">
          <img class="img" src="../../assets/231646541950_.pic.jpg" alt="">
        </div>
      </el-col>
      <el-col class="navItemBox" :span="12">
        <template v-for ="(item, i) in menuList">
          <div 
            v-bind:class="['navItem', currIndex === i ? 'bottomLine' : '']"
            @click="routerPush(item.routerPath)" 
            @mouseover="checkItem(i)"
            @mouseleave="clearSelect()"
            v-if="!item.hasChild" :key="item.id"
          >{{item.menuName}}</div>
        </template>
      </el-col>
      <el-col :span="6">
        <div class="iconlist">
          <a href="https://www.linkedin.com/company/ningbo-sunwalker-new-energy-technologies-co-ltd/"><img class="icon" src="../../assets/领英 小图标.jpg" alt="" ></a>
          <a href="https://www.facebook.com/SunwalkerNewEnergy/"><img class="icon2" src="../../assets/facebook 小图标.jpg" alt="" ></a>
          <a href="https://www.instagram.com/sunwalkernewenergyL/"><img class="icon2" src="../../assets/Ins 小图标.jpg" alt="" ></a>
          <a href="https://www.twitter.com/SunwalkerNE/"><img class="icon2" src="../../assets/Twitter 小图标.jpg" alt="" ></a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>

export default {
  
  name: 'HeadMenu',
  data() {
    return {
      isShowChild: false,
      menuList: [
        {
          id: '1',
          menuName: 'Products',
          routerPath: 'Products'
        },
        {
          id: '2',
          menuName: 'Global Supply Chain',
          routerPath: 'Global'
        },
        {
          id: '3',
          menuName: 'About Us',
          routerPath: 'About',
        },
        {
          id: '4',
          menuName: 'Contact',
          routerPath: 'Contact',
        }
      ],
      currIndex: null
    };
  },
  methods: {
    showChild(menuName, index) {
      this.checkItem(index);
      this.menuList.forEach((item) => {
        if(item.menuName === menuName) {
          item.showChild = true
        }
      })
    },
    clearSelect() {
      this.currIndex = null
    },
    unshowChild(menuName) {
      this.menuList.forEach((item) => {
        if(item.menuName === menuName) {
          item.showChild = false
        }
      })
    },
    handleClickChild(child) {
      console.log(child)
      this.unShow()
    },
    goToHome() {
      this.$router.push('/')
    },
    routerPush(routerName) {
      if(routerName === 'Products') return
      const url = `/${routerName}`
      this.$router.push({path : url})
    },
    checkItem(index) {
      console.log('index', index)
      this.currIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
    border-bottom: #f4f5f7 2px solid;
  }
  .wrap {
    width: 100%;
    display: flex;
    align-items: center;
    /* position: relative; */
  }
  .navItemBox {
    display: flex;
    align-items: center;
    height: 40px;
  }
  .navItem {
    color: #008bd2;
    margin-right: 50px;
    font-size: 20px;
    font-weight: 600;
    text-decoration:rgba(1, 1, 1, 0);
    cursor: pointer;
  }
  .bottomLine {
    /* border-bottom: 1px solid #fff; */
    color: black;
  }
  .imgBox {
    width: 160px;
  }
  .img {
    width: 100%;
    height: auto;
  }
  .contact {
    position: relative;
    /* height: 250px; */
    /* width: 200px; */
  }
  .child {
    width: 200px;
    height: 80px;
    background: #262626;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .childItem {
    height: 40px;
    line-height: 40px;
    display: flex;
    padding-left: 20px;
  }
  .iconlist {
  }
  .icon {
    width: 20px;
    height: 20px;
    margin-left: 30px;
  }
  .icon2 {
    width: 25px;
    height: 20px;
    margin-left: 30px;
  }
</style>
