<template>
  <div>
      <shop-header></shop-header>
      <shop-goods></shop-goods>
  </div>
</template>

<script>
import ShopHeader from "@/components/shopcar/shopheader"
import ShopGoods from "@/components/shopcar/shopgoods"
export default {
  data () {
    return {
    }
  },
  components:{
      ShopHeader,
      ShopGoods
  }
}
</script>

<style scoped>

</style>
