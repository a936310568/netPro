<template>
<div>
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
            @mouseover="checkItem(item.menuName,i)"
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
    <div class="childMenu" v-show="isShowChild" @mouseleave="unshowChild()">
      <template v-for ="(item, i) in childMenuList">
          <div class="childMenuItem" :key="i" >
            <p class="title">{{item.title}}</p>
            <template v-for ="(el, i) in item.child">
              <p 
                @click="goDetail(el.text)"
                v-bind:class="['text', currVal === el.text ? 'activeText' : '']"
                :key="i"
                @mouseover="childTextSelect(el.text)"
                @mouseleave="clearTextSelect()"
              >{{el.text}}</p>
            </template>
          </div>
        </template>
    </div>
    <div>
      
    </div>
  </div>
</div>
</template>


<script>
import Bus from '../../utils/bus';

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
      childMenuList: [
        {
          id: '1',
          title: 'PERC Mono',
          child: [
            { text: 'SW320-330W-M' },
            { text: 'SW380-400W-M' }
          ]
        },
        {
          id: '2',
          title: 'PERC Poly',
          child: [
            { text: 'SW250-270W-P' },
            { text: 'SW330-350W-P' }
          ]
        },
        {
          id: '3',
          title: 'PERC Half-cell',
          child: [
            { text: 'SW420-450W-HC' },
            { text: 'SW535-550W-HC' }
          ]
        },
        {
          id: '4',
          title: 'PV Accessories',
          child: [
            { text: 'Folding Solar Panels' }
          ]
        },
      ],
      currIndex: null,
      currVal: ''
    };
  },
  methods: {
    clearSelect() {
      this.currIndex = null
    },
    unshowChild() {
      this.isShowChild = false
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
    checkItem(menuName, index) {
      if(menuName === 'Products') {
        this.isShowChild = true
      } else {
        this.isShowChild = false
      }
      this.currIndex = index
    },
    goDetail(name) {
      this.isShowChild =false
      Bus.$emit('getName', name);   
      this.$router.push({ path : '/Detail', query: { name } } )
    },
    childTextSelect(val) {
      this.currVal = val
    },
    clearTextSelect() {
      this.currVal = ''
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
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 10;
  }
  .wrap {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: #f4f5f7 2px solid;
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
  .title {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    cursor: pointer;
  }
  .text {
    cursor: pointer;
  }
  .childMenu {
    width: 100%;
    padding: 0px 80px 30px;
    display: flex;
    border-bottom: #f4f5f7 2px solid;
  }
  .childMenuItem {
    width: 20%;
  }
  .activeText {
    color: #4395ff;
    font-weight: 500;
  }
</style>
