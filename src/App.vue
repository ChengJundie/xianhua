<template>
  <div id="app">
   <common-footer v-show="$route.meta.isShow"></common-footer>
    <router-view/>
  </div>
</template>

<script>
import CommonFooter from "./pages/commonfooter.vue"
export default {
  name: 'App',
  components:{
    CommonFooter
  }
}
</script>

<style>

</style>
