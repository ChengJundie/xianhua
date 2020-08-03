<template>
  <div>
    <common-header></common-header>
    <common-fixed></common-fixed>
    <div class="mui-content" id="g-body">
      <div class="box" id="box">
        <div class="detail-top">
          <detail-swiper :oneflower="oneFlower"></detail-swiper>
          <detail-contend :oneflower="oneFlower"></detail-contend>
        </div>
        <detail-descp :oneflower="oneFlower"></detail-descp>
      </div>
      <order-comment :oneflower="oneFlower" :id="id"></order-comment>
      <select-our></select-our>
      <detail-photo></detail-photo>
    </div>
    <detail-footer></detail-footer>
  </div>
</template>

<script>
import CommonHeader from "./commonheader.vue";
import CommonFixed from "./commonfixed.vue";
import DetailSwiper from "@/components/detail/detailswiper.vue";
import DetailContend from "@/components/detail/detailcontend.vue";
import DetailDescp from "@/components/detail/detaildescp.vue";
import OrderComment from "@/components/detail/ordercomment.vue";
import SelectOur from "@/components/detail/selectour.vue";
import DetailPhoto from "@/components/detail/detailphoto.vue";
import DetailFooter from "@/components/detail/detailfooter.vue";
import {reqOneFlower} from "@/api/index.js"
export default {
  data() {
    return {
      id:0,
     oneFlower:{},
    }
  },
  components: {
    CommonHeader,
    CommonFixed,
    DetailSwiper,
    DetailContend,
    DetailDescp,
    OrderComment,
    SelectOur,
    DetailPhoto,
    DetailFooter
  },
  async created() {
  this.id=this.$route.query.id;
  console.log("id",this.id)
   this.oneFlower= await reqOneFlower(this.id);
  this.$store.dispatch("getOneFlower",this.oneFlower)
  },
};
</script>

<style scoped>
</style>
