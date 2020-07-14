<template>
  <div>Cart</div>
</template>

<script>
import bus from '../../network/bus' 
export default {
  name: "Cart",
  components: {},
  methods: {
    ad(){
      console.log(this.$route.query);
    }
  },
  computed: {},
  created() {
     bus.$on('add',(message)=>{
        //一些操作，message就是从top组件传过来的值
        console.log(message)
    })
    const that = this
    that.ad()
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
