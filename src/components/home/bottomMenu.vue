<template>
  <div class="wrap">
    <div class="contain">
      <div class="childMenu">
        <template v-for="(item, i) in childMenuList">
          <div class="childMenuItem" :key="i">
            <p class="title" @click="titleClick(item.title)">
              {{ item.title }}
            </p>
            <template v-for="(el, i) in item.child">
              <p
                @click="textClick(item, el.text)"
                v-bind:class="['text', currVal === el.text ? 'active' : '']"
                :key="i"
                @mouseover="checkItem(el.text)"
                @mouseleave="clearSelect()"
              >
                {{ el.text }}
              </p>
            </template>
          </div>
        </template>
      </div>
      <div class="join">
        <div class="title">Join Our Newsletter</div>
        <div class="input">
          <el-input v-model="name" placeholder="name" clearable> </el-input>
        </div>
        <div class="input">
          <el-input v-model="email" placeholder="email" clearable> </el-input>
        </div>
        <div class="btn" @click="send()">Submit</div>
      </div>
    </div>
    <div class="recordBox">
      <img class="imgIcon" src="http://img.seatent.com/statics/images/jianguan.png" alt="">
      <a style="cursor: pointer;" href="https://beian.miit.gov.cn"> 浙ICP备2022018131号-1 </a>
    </div>
  </div>
</template>


<script>
export default {
  name: "BottomMenu",
  data() {
    return {
      name: "",
      email: "",
      childMenuList: [
        {
          id: "1",
          title: "Products",
          child: [
            { text: "Modules" },
            { text: "PV Kits" },
            { text: "PV Accessories" },
          ],
        },
        {
          id: "2",
          title: "Global Supply Chain",
          child: [
            { text: "Doesburg, Netherlands" },
            { text: "Almere, Netherlands" },
          ],
        },
        {
          id: "3",
          title: "Contact",
          child: [
            { text: "Sunwalker Headquarter" },
            { text: "Sunwalker Europe" },
            { text: "Sunwalker Latin America" },
            { text: "Sunwalker Africa" },
            { text: "Sunwalker Asia and Australia" },
          ],
        },
        {
          id: "4",
          title: "Downloads",
          child: [
            { text: "Brochures and Datasheets" },
            { text: "Warranty" },
            { text: "Installation and User Manual" },
          ],
        },
      ],
      currVal: null,
    };
  },
  methods: {
    checkItem(val) {
      this.currVal = val;
    },
    clearSelect() {
      this.currVal = "";
    },
    titleClick(name) {
      switch (name) {
        case "Products":
          this.$router.push({
            path: "/Detail",
            query: { name: "SW320-330W-M" },
          });
          break;
        case "Global Supply Chain":
          this.$router.push({ path: "/Global" });
          break;
        case "Contact":
          this.$router.push({ path: "/Contact" });
          break;
        case "Downloads":
          this.$router.push({ path: "/Down" });
          break;
      }
    },
    textClick(item, name) {
      switch (item.title) {
        case "Products":
          if (name !== "PV Accessories") {
            this.$router.push({
              path: "/Detail",
              query: { name: "SW320-330W-M" },
            });
          } else {
            this.$router.push({
              path: "/Detail",
              query: { name: "Folding Solar Panels" },
            });
          }
          break;
        case "Global Supply Chain":
          this.$router.push({ path: "/Global" });
          break;
        case "Contact":
          this.$router.push({ path: "/Contact" });
          break;
        case "Downloads":
          this.$router.push({ path: "/Down" });
          break;
      }
    },
    send() {
      const { name, email } = this;
      if (!name || !email) {
        this.$message({
          message: "Please complete all the information",
          type: "warning",
        });
      } else {
        const obj = {
          first_name: name,
          email_addr: email,
        };
        this.$axios({
          url: "http://120.55.86.134:3001/email",
          method: "post",
          data: JSON.stringify(obj),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          if (res.status == 200) {
            this.$message({
              message: "Sent successfully",
              type: "success",
            });
          } else {
            this.$message.error("fail in send");
          }
          this.name = "";
          this.email = "";
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 100%;
  display: flex;
  border-top: #f4f5f7 2px solid;
  margin-top: 30px;
}
.childMenu {
  width: 75%;
  padding: 0px 20px 30px 40px;
  display: flex;
}
.childMenuItem {
  /* width: 25%; */
  margin-right: 7%;
}
.join {
  flex: 1;
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
}
.text {
  cursor: pointer;
  color: #545454;
}
.input {
  margin-top: 20px;
  width: 240px;
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
.active {
  color: #4395ff;
  font-weight: 500;
}
.recordBox {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-bottom: 40px;
  font-size: 14px;
}
.imgIcon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
