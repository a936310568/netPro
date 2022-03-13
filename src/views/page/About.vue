<template>
  <div class="contain">
    <div class="module_one">
      <div class="pikBox">
        <img class="img" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220313/e329949cb2de4c2a85549fd2ba0f25a0.jpg" alt="">
      </div>
      <div class="content">
        <div class="content-title">Sunwalker Overview:</div>
        <p class="content-text">Founded in 2012, Ningbo Sunwalker New Energy Technologies Co., Ltd. is specialized in solar power supply solutions. With 2 <br /> manufacturing bases and more than 6 branches around the world, the company’s business covers solar modules and home energy storage solutions.</p>
        <p class="content-text">Sunwalker has designed all its products from the ground up to handle the most extreme conditions and has been certified globally and obtained certificates including VDE, TUV, IEC, ISO, Inmetro, etc. Its core research team is made up of excellent R&D engineers who have rich experience in the solar power industry in power electronics, computer information engineering, semiconductor technology, automatic control, communications, etc. </p>
        <p class="content-text">Sunwalker has two warehouses in the Netherlands (Doesburg and Almere). Sunwalker has shipped about 200,000+pcs solar panels and 1,100+units solar kits, primarily into the residential and commercial markets in Africa, the Middle East, Latam, and Europe.</p>
      </div>
      <div class="pikBox">
        <img class="img" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220313/a096d1eda4fc4249a62dbf51acd9fe62.jpg" alt="">
        <div class="qutNumbox">
          <div
            class="qutNum"
            v-waypoint="{
              active: true,
              callback: onWaypoint,
              options: intersectionOptions,
            }"
          >
            <animated-number
              :value="2"
              :duration="1000"
              :formatValue="formatToPrice"
              v-if="show"
            />
            <p class="antext">Manufacturing Bases</p>
          </div>
          <div 
            class="qutNum"
            v-waypoint="{
              active: true,
              callback: onWaypoint,
              options: intersectionOptions,
            }"
          >
            <animated-number
              :value="2"
              :duration="1000"
              :formatValue="formatToPrice"
              v-if="show"
            />
            <p class="antext"> Overseas Warehouses</p>
          </div>
          <div 
            class="qutNum"
            v-waypoint="{
              active: true,
              callback: onWaypoint,
              options: intersectionOptions,
            }"
          >
            <animated-number
              :value="6"
              :duration="1000"
              :formatValue="formatToPrice"
              v-if="show"
            />
            <p class="antext"> Overseas Branches</p>
          </div>
          <div 
            class="qutNum"
            v-waypoint="{
              active: true,
              callback: onWaypoint,
              options: intersectionOptions,
            }"
          >
            <animated-number
              :value="200000"
              :duration="1000"
              :formatValue="toLocaleString"
              v-if="show"
            />
            <p class="antext">Cumulative Solar Panels Shipments</p>
          </div>
          <div 
            class="qutNum"
            v-waypoint="{
              active: true,
              callback: onWaypoint,
              options: intersectionOptions,
            }"
          >
            <animated-number
              :value="1100"
              :duration="1000"
              :formatValue="toLocaleString"
              v-if="show"
            />
            <p class="antext">Cumulative Solar Kits Shipments</p>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-title">Our Mission：</div>
        <p class="content-text">With a firm commitment to renewable energy and sustainable development, Sunwalker is dedicated to the R&D of affordable,durable and smart products,and making our technology accessible to all over the world！</p>
      </div>
    </div>
  </div>
</template>

<script>

import AnimatedNumber from "animated-number-vue";

export default {
  name: 'About',
  components: {
    AnimatedNumber
  },
  data() {
    return{
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 1
      },
      show: false
    }
  },
  methods: {
    onWaypoint({ going }) {
      if (going === this.$waypointMap.GOING_IN) {
        console.log("in");
        this.show = true;
      }
    },
    formatToPrice(value) {
      return `<div style="margin:20px 0px 10px 30px;font-weight:600;font-size:22px;"> ${Number(value).toFixed(0)}</div>`;
    },
    toLocaleString(value) {
      return `<div style="margin:20px 0px 10px 30px;font-weight:600;font-size:22px;"> ${Number(value).toLocaleString()} + </div>`;
    }
  }
}
</script>

<style scoped>
  .pikBox {
    width: 100%;
    position: relative;
  }
  .img {
    width: 100%;
    height: auto;
  }
  .content {
    width: 97%;
    padding: 20px;
  }
  .content-title {
    font-size: 22px;
    color: #000;
    font-weight: 600;
  }
  .content-text {
    font-size: 18px;
    color: #000;
    font-weight: 500;
  }
  .qutNumbox {
    width: 100%;
    position: absolute;
    top: 38%;
    display: flex;
    justify-content: space-around;
  }
  .qutNum {
    width: 12%;
    background-color: #fff;
    border-radius: 3px;
  }
  .animatedNum {
    font-size: 25px;
    color: #000;
    font-weight: 600;
  }
  .antext {
    margin-left: 10px;
    font-size: 12px;
    color: #999;
    font-weight: 500;
  }
</style>

