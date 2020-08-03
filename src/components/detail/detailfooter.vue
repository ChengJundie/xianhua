<template>
  <div class="footer" id="footer">
    <a href="#">
      <span class="iconfont icon-kefu"></span>
      <span class="font">客服</span>
    </a>
    <router-link to="/shopcar">
      <span class="iconfont icon-icon-"></span>
      <span class="font">购物车</span>
    </router-link>
    <a id="qianggou" @click="addCar">加入购物车</a>
    <a @click="jieSuan">立即购买</a>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      shopcarData: [],
    };
  },
  computed: {
    ...mapState(["oneFlower", "carData"]),
  },
  methods: {
    //结算
    jieSuan(){
      this.$store.dispatch("changeNum", 1);
      this.$store.dispatch("jieSuan",this.oneFlower);
      this.$router.push("/order")
    },
    //先判断是否登录
    isLogin() {
      let userinfo = JSON.parse(localStorage.getItem("user")) || [];
      if (userinfo.length < 1) {
        alert("请先登录");
        return false;
      }
      return true;
    },
    //如果已经登录就加入购物车
    async addCar() {
      let flag = this.isLogin();
      if (flag) {
        //判断该商品是否已经在购物车
        //this.$store.dispatch("isCarData", this.oneFlower);
        alert("已加入购物车！");
        if (!this.oneFlower.count) {
          this.$store.dispatch("changeNum", 1);
        }
        //发送添加购物信息请求
        this.$store.dispatch("addCar", this.oneFlower);
      }
    },
    
  },
};
</script>

<style scoped>
</style>
