<template>
  <div class="nav">
    <el-row class="wrap">
      <el-col :span="4">
        <div class="imgBox" @click="goToHome()">
          <img class="img" src="../../assets/231646541950_.pic.jpg" alt="">
        </div>
      </el-col>
      <el-col class="navItemBox" :span="10">
        <template v-for ="(item, i) in menuList">
          <div 
            v-bind:class="['navItem', currIndex === i ? 'bottomLine' : '']"
            
            @mouseover="checkItem(i)"
            v-if="!item.hasChild" :key="item.id"
          >{{item.menuName}}</div>
          <div 
            v-bind:class="['navItem', 'contact' ,  currIndex === index ? 'bottomLine' : '']"
            v-else
           
            @mouseover="showChild(item.menuName,index)"
            :key="item.id"
          >
            {{item.menuName}}
            <div class="child" v-if="item.showChild" @mouseleave="unshowChild(item.menuName)">
              <template v-for ="(child, index) in item.childList">
                <div class="childItem" @click="handleClickChild(child.name)" :key="index">{{child.name}}</div>
              </template>
            </div>
          </div>
        </template>
      </el-col>
      <!-- @click="routerPush(item.routerPath)"  -->
      <!--  @click="routerPush(item.menuName)" -->
      <el-col :span="8">
        <div class="iconlist">
          <a href="https://www.linkedin.com/company/ningbo-sunwalker-new-energy-technologies-co-ltd/"><img class="icon" src="../../assets/领英 小图标.jpg" alt="" :key="index"></a>
          <a href="https://www.facebook.com/SunwalkerNewEnergy/"><img class="icon2" src="../../assets/facebook 小图标.jpg" alt="" :key="index"></a>
          <a href="https://www.instagram.com/sunwalkernewenergyL/"><img class="icon2" src="../../assets/Ins 小图标.jpg" alt="" :key="index"></a>
          <a href="https://www.twitter.com/SunwalkerNE/"><img class="icon2" src="../../assets/Twitter 小图标.jpg" alt="" :key="index"></a>
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
          menuName: 'Media',
          routerPath: 'Media',
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
      console.log('item',index)
      this.checkItem(index);
      this.menuList.forEach((item) => {
        if(item.menuName === menuName) {
          item.showChild = true
        }
      })
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
      if(routerName === 'Contact') {
        this.isShowChild = false
      }
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
    
  }
  .navItem {
    color: #008bd2;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600;
    text-decoration:rgba(1, 1, 1, 0);
    cursor: pointer;
  }
  .bottomLine {
    border-bottom: 1px solid #fff;
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
