<template>
  <div>
      <select-header></select-header>
      <common-fixed></common-fixed>
      <list-body></list-body>
  </div>
</template>

<script>
import ListBody from "./listbody"
import SelectHeader from "./listheader"
import CommonFixed from "@/pages/commonfixed.vue"
export default {
  data () {
    return {
    }
  },
  components:{
      SelectHeader,
      CommonFixed,
      ListBody
  }
}
</script>

<style scoped>

</style>
