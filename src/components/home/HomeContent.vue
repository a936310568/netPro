<template>
  <div class="contain">
    <div class="pikBox">
      <img class="img" src="../../assets/Global-Supply-Chain.jpg" alt="">
    </div>
    <!-- 介绍部分 -->
    <div class="content">
      <div class="content-top">
        <p class="title">
          Overseas Warehouses.
        </p>
        <div class="lineBox"></div>
        <p class="content-text">
          (1) Doesburg, Netherlands(Solar panels; Solar lights; Solar inverter)
        </p>
        <p class="content-text">
          (2) Almere, Netherlands(Solar panels; Solar inverter)
        </p>
      </div>
      <!-- 问题部分 -->
      <div class="content-qustion">
        <p class="title">
          Why does Sunwalker set up overseas warehouses?
        </p>
        <div class="lineBox"></div>
        <p class="qustion-text">
          Faster delivery time solves the time required for complicated operation procedures in transportation, customs declaration, customs clearance, et. and helps customers get the goods faster and more effectively.
        </p>
        <p class="qustion-text">
          Lower shipping costs, shipments from overseas to customers, equivalent to domestic express, lower costs than shipping from China.
        </p>
        <p class="qustion-text">
          Faster after-sales response. If the machine fails, it can be replaced quickly, eliminating the cost, timeliness, and abandonment of the customer's domestic and foreign double customs clearance.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeContent',
  data() {
    return {
      bg: require('../../assets/Global-Supply-Chain.jpg')
    }
  }
}
</script>

<style scoped>
  .pikBox {
    width: 100%;
  }
  .img {
    width: 100%;
    height: auto;
  }
  .title {
    font-weight: 600;
    font-size: 24px;
    color: #000;
  }
  .content {
    margin-left: 20px;
  }
  .content-text {
    font-weight: 500;
    font-size: 14px;
    color: #545449;
  }
  .content-qustion {
    margin-top: 30px;
  }
  .qustion-text {
    font-weight: 500;
    font-size: 14px;
    color: #545449;
  }
  .lineBox {
    margin-top: -10px;
    margin-bottom: 10px;
    border-top-color: #ffbc35;
    border-top-width: 8px;
    border-top-style: solid;
    border-right: 6px solid rgba(0,0,0,0);
    width: 52px;
    height: 0;
    box-sizing: border-box;
  }
</style>

