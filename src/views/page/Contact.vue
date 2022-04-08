<template>
  <div class="contain">
    <div class="requst">
      <div class="requst-header">
        <img class="img" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/e4b147f32b9946a5adcb07cb62bdd4d4.jpg" alt="">
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
                    v-model="phone"
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
                <span class="text">Country</span>
                <span class="must">*</span>
              </div>
              <div class="input-wrap">
                <div class="input">
                  <el-input
                    v-model="country"
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
        <div class="send">
          <div class="btn" @click="send()">submit</div>
        </div>
      </div>
    </div>
    <div id="network" class="netWork">
      <div class="network-header">
        <p class="header-title">Global NetWork</p>
      </div>
      <div class="network-content">
        <div class="content-left">
          <p class="decTitle">Sunwalker Headquarter:</p>
          <p>Email: info@sunwalkertech.com</p>
          <p>No.396, Kaiming Str., Haishu District, Ningbo, China</p>
        </div>
        <div class="content-right">
          <img class="decImg" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/694d6e6c815049bcaa054d85ff62baa1.jpg" alt="">
        </div>
      </div>
      <div class="network-content mt30">
        <div class="content-left">
          <p class="decTitle">Sunwalker  Europe:</p>
          <p>Sales Director: Paul Su</p>
          <p>Tel：+86 132 6318 1798 （WhatsApp / WeChat）</p>
          <p>Email:paul@sunwalkertech.com</p>
        </div>
        <div class="content-right mt30">
          <img class="decImg" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/04d767cc4dcc410a93bb6636f0ca005e.jpg" alt="">
        </div>
      </div>
      <div class="network-content mt30">
        <div class="content-left">
          <p class="decTitle">Sunwalker Headquarter:</p>
          <p>Sales Director: Acker Elon</p>
          <p>Tel:+86 198 1702 8832（WhatsApp / WeChat）</p>
          <p>Email:acker@sunwalkertech.com</p>
        </div>
        <div class="content-right">
          <img class="decImg" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/670d0186f67f4d53b3d85bb47347b7fb.jpg" alt="">
        </div>
      </div>
      <div class="network-content mt30">
        <div class="content-left">
          <p class="decTitle">Sunwalker Africa:</p>
          <p>Sales Director: Simon Cheung</p>
          <p>Tel:+86 178 6212 5199（WhatsApp / WeChat）</p>
          <p>Email:simon@sunwalkertech.com</p>
        </div>
        <div class="content-right">
          <img class="decImg" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/28bc8e81142941538bf5b42d9e78efe4.jpg" alt="">
        </div>
      </div>
      <div class="network-content mt30">
        <div class="content-left">
          <p class="decTitle">Sunwalker  Asia and Australia:</p>
          <p>Sales Director: Steve</p>
          <p>Tel:+86 139 5539 0159  （WhatsApp / WeChat）</p>
          <p>Email: steve@sunwalkertech.com</p>
        </div>
        <div class="content-right mt30">
          <img class="decImg" src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/824c195f819f4ed1a6376acbce913eb4.jpg" alt="">
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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      company: ''
    }
  },
  methods: {
    send() {
      const { firstName, lastName, email, phone, country, company } = this
      if(!firstName || !lastName || !email || !phone || !country || !company) {
        this.$message({
          message: 'Please complete all the information',
          type: 'warning'
        });
      }else {
        const obj = {
          first_name: firstName,
          last_name: lastName,
          email_addr: email,
          phone: phone,
          company: company,
          country: country,
        }
        this.$axios({
          url: 'http://120.55.86.134:3001/email',
          method:'post',
          data:JSON.stringify(obj),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => {
          if(res.status == 200) {
            this.$message({
              message: 'Sent successfully',
              type: 'success'
            });
          } else {
            this.$message.error('fail in send');
          }
          this.email = ''
          this.firstName = ''
          this.lastName = ''
          this.phone = ''
          this.company = ''
          this.country = ''
        })
      }
    }
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
    width: 60;
    padding: 0 20%;
    font-size: 18px;
    justify-content: space-between;
  }
  .mt30 {
    margin-top: 30px;
  }
  .decTitle {
    color: #000;
    font-weight: 600;
  }
  .content-right {
    width: 28%;
  }
  .decImg {
    width: 100%;
    height: auto;
  }
  .send {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .btn {
    width: 210px;
    background: #b6eb9a;
    color: #fff;
    padding: 8px 15px;
    border-radius: 15px;
    text-align: center;
    margin-top: 5px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    cursor: pointer;
  }
</style>

