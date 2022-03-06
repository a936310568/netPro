<template>
  <div class="contain">
    <div class="requst">
      <div class="requst-header">
        <img class="img" src="../../assets/4.Contact us页面第一部分图片.png" alt="">
      </div>
      <div class="request-title">
        <p class="title-text flexCC">
          How can we help? We're here to answer any questions you may have.
        </p>
        <p class="title-text flexCC">
          All fields marked with an asterisk(*) are required.
        </p>
      </div>
      <div class="request-content">
        <div class="inputBox">
          <div class="input-item flexEnd">
            <div class="item">
              <div class="item-title">
                <span class="text">First Name</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="firstName"
                    clearable>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="input-item ml">
            <div class="item">
              <div class="item-title">
                <span class="text">Last Name</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="lastName"
                    clearable>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inputBox">
          <div class="input-item flexEnd">
            <div class="item">
              <div class="item-title">
                <span class="text">Email Address</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="email"
                    clearable>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="input-item ml">
            <div class="item">
              <div class="item-title">
                <span class="text">Phone Number</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="email"
                    clearable>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inputBox">
          <div class="input-item flexEnd">
            <div class="item">
              <div class="item-title">
                <span class="text">Job Title</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="job"
                    clearable>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
          <div class="input-item ml">
            <div class="item">
              <div class="item-title">
                <span class="text">Company Name</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="company"
                    clearable>
                  </el-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="inputBox">
          <div class="input-item flexEnd">
            <div class="item">
              <div class="item-title">
                <span class="text">Job Title</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-select v-model="value">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
          <div class="input-item ml">
            <div class="item">
              <div class="item-title">
                <span class="text">Company Name</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-select v-model="value">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="network" class="netWork">
      <div class="network-header">
        <p class="header-title">Global NetWork</p>
        <div class="header-img">
          <img class="addressImg" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.hqhdwalls.com%2Fuploads%2Fwallpaper%2Ffiles%2Fwor%2Fworldmap-wallpaper-53d499d581b96.jpg&refer=http%3A%2F%2Fimg.hqhdwalls.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647515500&t=78026b09a82530bfed88ccd068cb7c98" alt="">
        </div>
      </div>
      <div class="network-content">
        <div class="info">
          <div class="info-title">Sunwalker Headquarter</div>
          <div class="info-text">Email:info@sunwalkertech.com</div>
          <div class="info-text">No.396,Kaiming Str,Haishu District, Ningbo,China</div>
        </div>
        <div class="info">
          <div class="info-title">Sunwalker EMEA</div>
          <div class="info-text">Sales Director: Paul Su</div>
          <div class="info-text">Tel:+8613263181798(WhatsApp/WeChat)</div>
          <div class="info-text">Email:paul@sunwalkertech.com</div>
        </div>
        <div class="info">
          <div class="info-title">Sunwalker Asiaand AU</div>
          <div class="info-text">Sales Director: Steve</div>
          <div class="info-text">Tel:+8613955390159</div>
          <div class="info-text">Email:steve@sunwalkertech.com</div>
        </div>
        <div class="info">
          <div class="info-title">Sunwalker NA</div>
          <div class="info-text">Sales Director: Simon Cheung</div>
          <div class="info-text">Tel:+86178621251999</div>
          <div class="info-text">Email:simon@sunwalkertech.com</div>
        </div>
        <div class="info">
          <div class="info-title">Sunwalker LATAM</div>
          <div class="info-text">Sales Director: Acker Elon</div>
          <div class="info-text">Tel:+8619817028832</div>
          <div class="info-text">Email:acker@sunwalkertech.com</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Global',
  data() {
    return {
      input: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  mounted() {
    window.location.href="#netWork"
  }
}
</script>

<style scoped>
  .flexCC {
    display: flex;
    justify-content: center;
  }
  .requst {
    width: 100%;
  }
  .requst-header {
    width: 100%;
  }
  .img {
    width: 100%;
    height: 50vh;
  }
  .ml {
    margin-left: 2%;
  }
  .title-text{
    font-size: 24px;
    font-weight: 600;
    color: #000;
  }
  .request-content {
    width: 100%;
    margin-top: 50px;
  }
  .inputBox {
    width: 60%;
    transform: translateX(35%);
    display: flex;
  }
  .input-item {
    width: 46%;
    height: 100px;
    margin-right: 2%;
  }
  .flexEnd {
    display: flex;
    justify-content: flex-end;
  }
  .item {
    width: 300px;
  }
  .text {
    font-size: 16px;
    font-weight: 500;
    color: #000;
  }
  .must {
    color: #E82134;
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
    margin-top: 5px;
  }
  .input-wrap {
    width: 100%;
    /* display: flex;
    justify-content: flex-end; */
  }
  .input {
    margin-top: 10px;
  }
  .network-header {
    width: 100%;
    margin-top: 50px;
    text-align: center;
  }
  .header-title {
    font-size: 26px;
    font-weight: 600;
    color: #000;
  }
  .header-img {
    width: 100%;
  }
  .addressImg {
    width: 100%;
    height: 60vh;
  }
  .info {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }
  .info-title {
    font-size: 30px;
    font-weight: 600;
    color: #000;
  }
  .info-text {
    font-size: 18px;
    font-weight: 500;
    color: #000;
  }
</style>

