<template>
  <div class="businessArea flex">
    <div class="businessArea_item" v-for="(item , index) in see1" :key="index">
      <img class="img"
        :src="item.path"
      />
      <div class="businessArea_item_text">{{item.name}}</div>
    </div>
<!-- 
    <div class="businessArea_item">
      <img
        class="img"
        src="http://image.ggjiao.cn/images/ticket/2019/6/25/35466b60-fdcd-4d15-ac20-3675463a0a01.jpg"
      />
      <div class="businessArea_item_text">丽人美容</div>
    </div>

    <div class="businessArea_item">
      <img
        class="img"
        src="http://image.ggjiao.cn/images/ticket/2019/6/25/542d2cf2-140e-4746-bab4-cd31200a5c98.jpg"
      />
      <div class="businessArea_item_text">{{see}}</div>
    </div>

    <div class="businessArea_item">
      <img
        class="img"
        src="http://image.ggjiao.cn/images/ticket/2019/5/6/ea968315-18c6-4564-9f44-a28fbd3273ea.png"
      />
      <div class="businessArea_item_text">家居百货</div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
// import  global from "../../../global";
export default {
  components: {},
  name: "homeItem",
  props:["see1"],
  data() {
    return {
      //  merchantId : global.merchantId,
      //  latitude : global.latitude,
      //  longitude : global.location
      imgList: []
    };
  },
  computed: {},
  watch: {},
  methods: {
    businessArea() {
      let that = this;
      let obj = new Object();
      obj.merchantId = "2c90872e69658c9e0169708e68f6019a";
      obj.latitude = "32.39463";
      obj.longitude = "119.43157";
      axios
        .post(
          "https://api.ggjiao.cn/csapi//commercial/getAllGoodsIndustry/",
          obj
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  beforeCreate() {},
  created() {
    let that = this;
    that.businessArea();
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  distroyed() {}
};
</script>

<style scoped>
.businessArea_item {
  flex: 1;
  height: 4.5rem;
  width: 4.5rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  align-items: center;
}
.flex {
  display: flex;
  /* width: 100%; */
}
.businessArea {
  padding: 1rem;
}
.img {
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
}
.businessArea_item_text {
  text-align: center;
  font-size: 0.9rem;
  padding: 0.5rem;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>