<template>
  <div>
    <register-header></register-header>
    <register-body></register-body>
  </div>
</template>

<script>
import RegisterHeader from "@/components/login/registerheader.vue"
import RegisterBody from "@/components/login/registerbody.vue"
export default {
  data () {
    return {
    }
  },
  components:{
    RegisterHeader,
    RegisterBody
  }
}
</script>

<style scoped>

</style>
