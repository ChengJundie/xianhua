<template>
  <div>
      <add-header></add-header>
      <add-body></add-body>
  </div>
</template>

<script>
import AddBody from "./addbody"
import AddHeader from "./addheader"
export default {
  data () {
    return {
    }
  },
  components:{
      AddHeader,
      AddBody
  }
}
</script>

<style scoped>

</style>
