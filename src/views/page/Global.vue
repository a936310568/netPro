<template>
  <div class="contain">
    <div class="module_one">
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
    <div class="module_two">
      <div class="pikBox">
        <img class="img" src="../../assets/2.海外仓网页第二部分图片.png" alt="">
      </div>
      <!-- 介绍部分 -->
      <div class="content">
        <div class="content-top">
          <p class="title">
            Why Choose SOFARSOLAR Inverters? (Solar Inverter in Overseas Warehouse)
          </p>
        </div>
        <!--  -->
        <div class="text-pic">
          <div class="leftBox">
            <div class="Solar-text">
              (a) All SOFARSOLAR inverters have a built-in zero export function;
            </div>
            <div class="Solar-text">
              (b) All SOFARSOLAR inverters have standard Wifi communication and allow remote operation;
            </div>
            <div class="Solar-text">
              (c) All SOFARSOLAR inverters are capable of storing 25 years of data;
            </div>
            <div class="Solar-text">
              (d) All SOFARSOLAR inverters are insured by US CHUBB Insurance Corporation Company;
            </div>
            <div class="Solar-text">
              (e) All SOFARSOLAR inverters are fitted with extensive protection functions;
            </div>
            <div class="Solar-text">
              (f) All SOFARSOLAR inverters operate safely in challenging weather conditions.
            </div>
            <div class="Solar-text">
              (g) All SOFARSOLAR inverters can be found in PV Sol system;
            </div>
          </div>
          <div class="rightBox">
            <img class="pic" src="../../assets/卖点小图.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="module_three">
      <div class="productBox">
        <div class="product">
          <div class="product-pic">
            <img class="proPic" src="../../assets/SOFAR 8.8KTL-X.jpg" alt="">
            <div class="proText">SOFAR 8.8KTL-X</div>
          </div>
        </div>
        <div class="product">
          <div class="product-pic">
            <img class="proPic" src="../../assets/SOFAR 11KTL-X.jpg" alt="">
            <div class="proText">SOFAR 11KTL-X</div>
          </div>
        </div>
        <div class="product">
          <div class="product-pic">
            <img class="proPic" src="../../assets/SOFAR 12KTL-X.jpg" alt="">
            <div class="proText">SOFAR 12KTL-X</div>
          </div>
        </div>
      </div>
      <div class="content-qustion ml20">
        <p class="title">
          Sofar Overview:
        </p>
        <p class="qustion-text">
          SOFARSOLAR was established in 2013 in China. The company specializes in the R&D, production, and sales of a wide range of inverters, including grid-tied inverters (1kW-255kW) and hybrid inverters (3kW-20kW), energy storage systems and EV charging. With a firm, long-standing position in China's top 5 string inverter manufacturers.
        </p>
        <p class="qustion-text">
          SOFARSOLAR has provided solutions in more than 80 countries across the globe (e.g. Brazil, India, Australia, the UK, Germany, Italy, Belgium, Spain, the Netherlands, Poland, France, Japan, Vietnam, South Africa, Pakistan, Korea, China, etc.), achieving solid brand recognition. The EUPD has awarded SOFARSOLAR as a "Top PV Brand" in multiple countries, such as Poland, Brazil, The United Kingdom and India, which illustrates the company's commitment to achieving the most optimal results together with its international partners.
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Global',
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
  .ml20 {
    margin-left: 20px;
  }
  .qustion-text {
    font-weight: 500;
    font-size: 18px;
    color: #000;
  }
  .text-pic {
    width: 100%;
    display: flex;
  }
  .leftBox {
    width: 75%;
    height: 180;
  }
  .rightBox {
    flex: 1;
    height: 180;
    display: flex;
    justify-content: flex-end;
  }
  .Solar-text {
    font-weight: 500;
    font-size: 18px;
    color: #000;
    margin-top: 10px;
  }
  .pic {
    width: 200px;
    height: auto;
    margin-right: 30px;
  }
  .productBox {
    width: 100%;
    margin-top: 20px;
    display: flex;
  }
  .product {
    width: 33%;
    margin-left: 12px;
    display: flex;
    justify-content: center;
  }
  .product-pic {
    width: 70%;
    text-align: center;
  }
  .proPic {
    width: 100%;
    height: auto;
  }
  .proText {
    font-size: 25px;
    color: #000;
    font-weight: 500;
  }
  .module_three {
    margin-top: 30px;
  }
  .module_two {
    margin-top: 30px;
  }
</style>

