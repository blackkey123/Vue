<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">商圈</div>
    </nav-bar>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,index ) in imgList" :key="index">
          <img class="img" :src="ossurl+item.path" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <HomeItem :see1="see"></HomeItem>
    <img class="psc" src="../../img/psc.png" />
    <!-- <ProductList></ProductList> -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click.native="sss($event)" :abd="1212">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ProductList :getAllRecommendList="getAllRecommend1" @childByValu="childBy"></ProductList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell
          v-for="(item , index) in 11"
          :key="index"
          :title="'测试 ' + item"
          @click.native="sss($event)"
          :abd="111"
        />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(item , index) in 12" :key="index" :title="'选项 ' + item" :abd="index" />
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="bottom" @click="changesize">..78787878787..</div>
  </div>
</template>
<!--<script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"></script>-->
<script>
import axios from "axios";

import HomeItem from "./homeItem/homeItem.vue";
import NavBar from "components/common/navbar/NavBar";
import ProductList from "./productlist/productlist";
// import Global from "../../network/Global";
import bus from '../../network/bus' 
// mint-ui
import {
  TabContainer,
  TabContainerItem,
  Navbar,
  TabItem,
  Swipe,
  SwipeItem,
  Toast
} from "mint-ui";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeItem,
    ProductList
  },
  data() {
    return {
      ossurl: "http://image.ggjiao.cn/",
      imgList: [],
      see: [
        {
          name: "汽车周边",
          path:
            "http://image.ggjiao.cn/images/ticket/2020/3/17/bd01f67e-5b83-45fc-a989-3089e2ea8846.jpg"
        },
        {
          name: "丽人美容",
          path:
            "http://image.ggjiao.cn/images/ticket/2019/6/25/35466b60-fdcd-4d15-ac20-3675463a0a01.jpg"
        },
        {
          name: "生活服务",
          path:
            "http://image.ggjiao.cn/images/ticket/2019/6/25/542d2cf2-140e-4746-bab4-cd31200a5c98.jpg"
        },
        {
          name: "家居百货",
          path:
            "http://image.ggjiao.cn/images/ticket/2019/5/6/ea968315-18c6-4564-9f44-a28fbd3273ea.png"
        }
      ],
      selected: "1",
      getAllRecommend1: [],
      serverSrc: this.$GLOBAL.serverSrc
    };
  },
  computed: {},

  methods: {
    changesize(){
        bus.$emit('add',"1111")
    },
    childBy:function(childValue){
      
      console.log(childValue)

    },
    sss(e) {
      console.log(this.serverSrc);
      // console.log(e.target.getAttribute("abd"));
    },
    swiperList() {
      let that = this;
      let obj = new Object();
      obj.merchantId = "2c90872e69658c9e0169708e68f6019a";
      axios
        .post("https://api.ggjiao.cn/csapi//synergyGoods/getAllPicNew/", obj)
        .then(function(response) {
          // response.data.resultList
          // console.log(response.data.resultList)
          that.imgList = response.data.resultList;
          console.log(that.imgList);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getAllRecommend() {
      let that = this;
      let obj = new Object();
      obj.merchantId = "2c90872e69658c9e0169708e68f6019a";
      obj.customerId = "7e6db85a93b442d882cc8e97f6ae3f8d";
      obj.isFxPosition = 1;
      obj.latitude = 32.39463;
      obj.longitude = 119.43157;
      obj.page = 0;
      axios
        .post("https://api.ggjiao.cn/csapi//commercial/getAllRecommend/", obj)
        .then(function(response) {
          console.log(response);
          that.getAllRecommend1 = response.data.resultList;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  created: function() {
    let that = this;
    that.sss();
    that.swiperList();
    that.getAllRecommend();
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: relative; */
  z-index: 9;
  position: fixed;
  width: 100%;
  top: 0;
}
.swipe {
  height: 10rem;
  margin-top: 3rem;
}
.img {
  width: 100%;
  height: 100%;
}
.psc {
  width: 100%;
  height: 100%;
  margin-top: 0.5rem;
}
.tab_container {
  width: 100%;
  height: 5rem;
}
.bottom {
  height: 3.5rem;
}
</style>
