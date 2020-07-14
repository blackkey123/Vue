<template>
  <div class="productlist">
    <div class="product" v-for="( item , index) in getAllRecommendList" :key="index"  @click="sss"  :abd="111">
      <img class="img" :src='"http://image.ggjiao.cn/"+item.logoUrl' />
      <div class="product_text">
        <div class="product_text_name">{{item.companyname}}</div>
        <span style="color:red">￥ {{item.price}}</span>
        &nbsp;| &nbsp;
        <s>￥ {{item.money}}</s>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  components: {},
  name: "",
  props: ["getAllRecommendList"],
  data() {
    return {
      childByValues:"我是子组件的数据"
    };
  },
  computed: {},
  watch: {},
  methods: {
    sss(e){
    console.log("执行子方法")
    console.log("执行子方法"+this.childByValues)
    this.$emit('childByValu', this.childByValues)
    // this.$router.push({
    //   path:"Cart",
    //   query: {
    //          id: 15151515
    //      }
    // })
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  distroyed() {}
};
</script>

<style>
.productlist {
  /* background-color: brown; */
  display: flex;
  width: 100%;
  padding: 1%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product {
  width: 48%;
  height: 15rem;
  /* background-color: blue; */
  margin: 1%;
  border: 1px solid rgba(102, 102, 102, 0.829);
  border-radius: 10px;
  /* flex: 1; */
}
.img {
  width: 100%;
  max-height: 10rem;
  border-radius: 10px 10px 0px 0px;
}
.product_text {
  margin: 0.5rem;
}
.product_text_name {
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-bottom: 0.5rem;
}
</style>