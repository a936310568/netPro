<template>
  <div class="contain">
    <div class="module_one">
      <div class="pikBox">
        <img class="img" src="../../assets/Global-Supply-Chain.jpg" alt="">
      </div>
      <!-- 介绍部分 -->
      <div class="content">
        <div class="content-top">
          <p class="title">
            Overseas Warehouses Address.
          </p>
          <div class="lineBox"></div>
          <p class="content-text">
            (1) Doesburg, Netherlands(Solar panels; Solar lights; Solar Inverter)
          </p>
          <p class="content-text">
            (2) Almere, Netherlands(Solar panels; Solar Inverter)
          </p>
        </div>
        <!-- 问题部分 -->
        <div class="content-qustion">
          <p class="title">
            Why Sunwalker set up overseas warehouses?
          </p>
          <div class="lineBox"></div>
          <p class="qustion-text">
            Faster delivery time solves the time required for complicated operation procedures in transportation, customs declaration, customs clearance, et. and helps customers get the goods faster and more effectively.
          </p>
          <p class="qustion-text">
            Lower shipping costs,direct shipments from overseas to customers, equivalent to domestic express, lower costs than shipping from China.
          </p>
          <p class="qustion-text">
            Faster after-sales response. If the machine fails,it can be replaced quickly, eliminating the cost, timeliness, and abandonment of the customer's domestic and foreign double customs clearance.
          </p>
        </div>
      </div>
    </div>
    <div class="module_two">
      <div class="pikBox">
        <img class="img" src="../../assets/Overseas-Stock.jpg" alt="">
      </div>
      <!-- 介绍部分 -->
      <div class="content flex">
        <div class="content-left">
          <div class="content-top">
            <div class="title">
              Why Choose SOFARSOLAR Inverters? (Solar Inverter in Overseas Warehouse)
            </div>
          </div>
        <!--  -->
          <div class="text-pic">
            <div class="leftBox">
              <div class="Solar-text mt20">
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
                (g) All SOFARSOLAR inverters can be found in PV Solar system;
              </div>
            </div>
          </div>
        </div>
        <div class="rightBox">
          <img class="pic" src="../../assets/卖点小图.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="module_three">
      <div class="productBox">
        <div class="product">
          <div class="product-pic">
            <div class="images" v-viewer @click="show()">
              <img class="proPic" src="../../assets/SOFAR 8.8KTL-X.jpg" alt="">
            </div>
            <div class="proText" @click="show()">SOFAR 8.8KTL-X</div>
            <el-button @click="download()" type="primary" plain class=" btn mt20">Download</el-button>
          </div>
        </div>
        <div class="product">
          <div class="product-pic" >
            <div class="images" v-viewer @click="show()">
              <img class="proPic" src="../../assets/SOFAR 11KTL-X.jpg" alt="">
            </div>
            <div class="proText" @click="show()">SOFAR 11KTL-X</div>
             <el-button @click="download()" type="primary" plain class=" btn mt20">Download</el-button>
          </div>
        </div>
        <div class="product">
          <div class="product-pic">
            <div class="images" v-viewer @click="show()">
              <img class="proPic" src="../../assets/SOFAR 12KTL-X.jpg" alt="">
            </div>
            <div @click="show()" class="proText">SOFAR 12KTL-X</div>
             <el-button @click="download()" type="primary" plain class=" btn mt20">Download</el-button>
          </div>
        </div>
      </div>
      <div class="content-qustion ml20">
        <p class="title">
          Sofar Overview:
        </p>
        <div class="lineBox"></div>
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
import { api as viewerApi } from "v-viewer"

export default {
  name: 'Global',
  methods: {
    show() {
      let src = require('../../assets/SOFARSOLAR 3.3-12kW data.jpg')
      viewerApi({
        images: [src]
      })
    },
    download() {
      let base64Img = require('../../assets/SOFARSOLAR 3.3-12kW data.jpg')
      let image = new Image();
      // 解决跨域 Canvas 污染问题
      image.setAttribute("crossOrigin", "anonymous");
      image.onload = function() {
        let canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
        let a = document.createElement("a"); // 生成一个a元素
        let event = new MouseEvent("click"); // 创建一个单击事件
        a.download = 'product' || "photo"; // 设置图片名称
        a.href = url; // 将生成的URL设置为a.href属性
        a.dispatchEvent(event); // 触发a的单击事件
      };
      image.src = base64Img;
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
    padding-top: 20px;
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
  .ml20 {
    margin-left: 20px;
  }
  .mt20 {
    margin-top: 20px;
  }
  .qustion-text {
    font-weight: 500;
    font-size: 14px;
    color: #545449;
  }
  .text-pic {
    width: 100%;
    display: flex;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }
  .leftBox {
    height: 180;
  }
  .content-left {
    width: 75%;
  }
  .rightBox {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .Solar-text {
    font-weight: 500;
    font-size: 16px;
    color: #545449;
    margin-top: 10px;
  }
  .pic {
    width: 240px;
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
    cursor: pointer;
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
  .btn {
    width: 180px;
    background: #39a9ae;
    color: #fff;
    padding: 8px 15px;
    border-radius: 15px;
    text-align: center;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
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

