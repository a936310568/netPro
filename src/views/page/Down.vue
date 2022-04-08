<template>
  <div class="download">
    <div class="downBg">
      <img
        class="downImg"
        src="http://img.saaspre.seatent.com/statics/621950557b5d3cbaee18c7351bbc929a/attachment/upload/image/20220406/185de5db6e2c4bcdbb78a7e34567da41.jpg"
        alt=""
      />
    </div>
    <div class="topBox">
      <div class="download-title">
        <span class="title-text">Brochures and Datasheets</span>
      </div>
      <div>
        <template v-for="(item, index) in halfCellList">
          <div class="download-content" :key="index">
            <div class="content-left">{{ item.left }}</div>
            <div class="content-right" v-if="!item.isTitle">
              <img class="icon" src="../../assets/down.png" alt=""  @click="downLoad()" />
            </div>
            <div v-else></div>
          </div>
        </template>
      </div>
      <div class="mt50">
        <template v-for="(item, index) in monoList">
          <div class="download-content" :key="index">
            <div class="content-left">{{ item.left }}</div>
            <div class="content-right" v-if="!item.isTitle">
              <img class="icon" src="../../assets/down.png" alt=""  @click="downLoad()" />
            </div>
            <div v-else></div>
          </div>
        </template>
      </div>
      <div class="mt50">
        <template v-for="(item, index) in polyList">
          <div class="download-content" :key="index">
            <div class="content-left">{{ item.left }}</div>
            <div class="content-right" v-if="!item.isTitle">
              <img
                class="icon"
                src="../../assets/down.png"
                alt=""
                @click="downLoad()"
              />
            </div>
            <div v-else></div>
          </div>
        </template>
      </div>
    </div>
    <div class="contentBox">
      <div class="download-title mt50">
        <span class="title-text">Warranty</span>
      </div>
      <div class="mt50">
        <template v-for="(item, index) in WarrantyList">
          <div class="download-content" :key="index">
            <div class="content-left">{{ item.left }}</div>
            <div class="content-right" v-if="!item.isTitle">
              <img
                class="icon"
                src="../../assets/down.png"
                alt=""
                @click="downLoad()"
              />
            </div>
            <div v-else></div>
          </div>
        </template>
      </div>
    </div>
    <div class="bottomBox">
      <div class="download-title mt50">
        <span class="title-text">Installation and User Manual</span>
      </div>
      <div class="mt50">
        <template v-for="(item, index) in manualList">
          <div class="download-content" :key="index">
            <div class="content-left">{{ item.left }}</div>
            <div class="content-right" v-if="!item.isTitle">
              <img
                class="icon"
                src="../../assets/down.png"
                alt=""
                @click="downLoad()"
              />
            </div>
            <div v-else></div>
          </div>
        </template>
      </div>
    </div>
    <el-dialog
      class="modal"
      title="Tips"
      :visible.sync="dialogVisible"
      width="400px"
      :before-close="handleClose"
    >
      <div class="message">
        <span>We will send the information to your email</span>
        <div class="input">
          <el-input v-model="name" placeholder="name" clearable> </el-input>
        </div>
        <div class="input">
          <el-input v-model="email" placeholder="email" clearable> </el-input>
        </div>
        <div class="btn" @click="send()">submit</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Down",
  data() {
    return {
      dialogVisible: false,
      name: "",
      email: "",
      halfCellList: [
        {
          left: "Half cell",
          isTitle: true,
        },
        {
          left: "420-450W Halfcell - Sunwalker",
        },
        {
          left: "400-410W Halfcell - Sunwalker",
        },
        {
          left: "360-380W Halfcell - Sunwalker",
        },
        {
          left: "330-340W Halfcell - Sunwalker",
        },
      ],
      monoList: [
        {
          left: "Mono",
          isTitle: true,
        },
        {
          left: "340-370W Mono - Sunwalker",
        },
        {
          left: "320-330W Mono - Sunwalker",
        },
        {
          left: "290-310W Mono - Sunwalker",
        },
        {
          left: "230-250W Mono - Sunwalker",
        },
      ],
      polyList: [
        {
          left: "Poly",
          isTitle: true,
        },
        {
          left: "330-350W Poly - Sunwalker",
        },
        {
          left: "280-300W Poly - Sunwalker",
        },
        {
          left: "250-270W Poly - Sunwalker",
        },
        {
          left: "Foldable Solar Panel",
        },
      ],
      WarrantyList: [
        {
          left: "Limited Warranty for Solar Modules -Sunwalker REV2.3",
        },
        {
          left: "Limited Warranty for Solar Kits -Sunwalker REV2.3",
        }
      ],
       manualList: [
        {
          left: "Installation and User Manual for Solar Modules -Sunwalker REV2.3",
        }
      ]
    };
  },
  methods: {
    downLoad() {
      this.dialogVisible = true;
    },
    handleClose() {
      this.dialogVisible = false;
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
            this.dialogVisible = false;
          } else {
            this.$message.error("fail in send");
            this.dialogVisible = false;
          }
          this.name = "";
          this.email = "";
        });
      }
    },
  },
};
</script>

<style scoped>
.download {
  width: 100%;
}
.downBg {
  width: 100%;
}
.downImg {
  width: 100%;
  height: 40vh;
}
.download-title {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.title-text {
  font-size: 24px;
  font-weight: 600;
  color: #000;
}
.download-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.content-left {
  color: #000;
  font-size: 16px;
  font-weight: 600;
  width: 50%;
}
.icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.icon-text {
  font-size: 24px;
  font-weight: 500;
}
.mr10 {
  margin-right: 10px;
}
.mt50 {
  margin-top: 50px;
}
.e39 {
  color: #e39c6d;
}
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 20px;
  cursor: pointer;
}
</style>

