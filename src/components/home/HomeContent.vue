<template>
  <div class="contain">
    <div class="pikBox">
      <img class="img" src="../../assets/2.海外仓网页第一部分图片.png" alt="">
    </div>
    <!-- 介绍部分 -->
    <div class="content">
      <div class="content-top">
        <p class="title">
          Overseas Warenouses Address.
        </p>
        <p class="content-text">
          (1) Doesburg,Netherlands(Solar panels;Solar lights; Solar Inverter)
        </p>
        <p class="content-text">
          (2) Almere,Netherlands(Solar panels;Solar Inverter)
        </p>
      </div>
      <!-- 问题部分 -->
      <div class="content-qustion">
        <p class="title">
          Why Sunwalker set up overseas warehouses?
        </p>
        <p class="qustion-text">
          Faster delivery time solves the time required for complicated operation procedures in transportation, customs declaration, customs clearance, et. and helps customers get the goods faster and more effectively.
        </p>
        <p class="qustion-text">
          Lower shipping costs,direct shipments from overseas to customers, equivalent to domestic express, lower costs than shipping from China.
        </p>
        <p class="qustion-text">
          Faster after-sales response.Ifthe machine fails,it can be replaced quickly, eliminating the cost, timeliness, and abandonment of the customer's domestic and foreign double customs clearance.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeContent',
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
    font-weight: 600;
    font-size: 20px;
    color: #000;
  }
  .content-qustion {
    margin-top: 30px;
  }
  .qustion-text {
    font-weight: 500;
    font-size: 18px;
    color: #000;
  }
</style>

