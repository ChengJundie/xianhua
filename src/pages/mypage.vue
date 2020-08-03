<template>
  <div class="mui-content" id="g-body">
      <my-header></my-header>
      <my-body></my-body>
      </div>
</template>

<script>
import MyHeader from "@/components/my/myheader.vue"
import MyBody from "@/components/my/mybody.vue"
export default {
  data () {
    return {
    }
  },
  components:{
      MyHeader,
      MyBody
  }
}
</script>

<style scoped>

</style>
