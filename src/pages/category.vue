<template>
  <div>
      <category-header></category-header>
      <category-body></category-body>
  </div>
</template>

<script>
import CategoryHeader from "@/components/category/categoryheader.vue"
import CategoryBody from "@/components/category/categorybody.vue"
export default {
  data () {
    return {
    }
  },
  components:{
      CategoryHeader,
      CategoryBody
  }
}
</script>

<style scoped>

</style>
