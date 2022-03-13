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
      </div>
      <!-- <div class="network-content">
        <div class="content-left">
          <p>Sunwalker Headquarter:</p>
          <p>Email: info@sunwalkertech.com</p>
          <p>No.396, Kaiming Str., Haishu District, Ningbo, China</p>
        </div>
        <div class="content-right">
          <img src="" alt="">
        </div>
      </div> -->
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
  .el-select {
    width: 100%;
  }
  .network-content {
    display: flex;
  }
  .content-left {
    margin-left: 20%;
  }
  
</style>

