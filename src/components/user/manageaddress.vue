<template>
  <div>
    <manage-header></manage-header>
    <manage-body></manage-body>
  </div>
</template>

<script>
import ManageHeader from "./manageheader"
import ManageBody from "./managebody"
export default {
  data () {
    return {
    }
  },
  components:{
    ManageHeader,
    ManageBody
  }
}
</script>

<style scoped>

</style>
