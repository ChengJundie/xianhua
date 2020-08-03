<template>
  <div>
      <login-header></login-header>
      <login-body></login-body>
  </div>
</template>

<script>
import LoginHeader from "@/components/login/loginheader.vue"
import LoginBody from "@/components/login/loginbody.vue"
export default {
  data () {
    return {
    }
  },
  components:{
      LoginHeader,
      LoginBody
  }
}
</script>

<style scoped>

</style>
