<template>
  <div>
      <index-header></index-header>
      <div class="mui-content" id="index-body">
          <index-swiper></index-swiper>
          <index-nav></index-nav>
          <index-classify></index-classify>
          <deliver-flower></deliver-flower>
          <recommend-flower></recommend-flower>
          <select-we></select-we>
      </div>
  </div>
</template>

<script>
import IndexHeader from "@/components/index/indexheader.vue"
import IndexSwiper from "@/components/index/indexswiper.vue"
import IndexNav from "@/components/index/indexnav.vue"
import IndexClassify from "@/components/index/indexclassify.vue"
import DeliverFlower from "@/components/index/deliverflower.vue"
import RecommendFlower from "@/components/index/recommendflower.vue"
import SelectWe from "@/components/index/selectwe.vue"
export default {
  data () {
    return {
    }
  },
  components:{
      IndexHeader,
      IndexSwiper,
      IndexNav,
      IndexClassify,
      DeliverFlower,
      RecommendFlower,
      SelectWe
  }
}
</script>

<style scoped>

</style>
