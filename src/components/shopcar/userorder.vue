<template>
  <div>
      <order-header></order-header>
      <order-body></order-body>
      <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "./orderheader"
import OrderBody from "./orderbody"
import OrderFooter from "./orderfooter"
export default {
  data () {
    return {
    }
  },
  components:{
      OrderHeader,
      OrderBody,
      OrderFooter
  }
}
</script>

<style scoped>

</style>
