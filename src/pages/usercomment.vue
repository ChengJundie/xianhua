<template>
<div>
  <commend-header></commend-header>
  <common-fixed></common-fixed>
  <comment-body></comment-body>
  <comment-footer></comment-footer>
</div>
  
</template>

<script>
import commendHeader from "@/components/usercomment/commentheader.vue"
import CommentBody from "@/components/usercomment/commentbody.vue"
import CommentFooter from "@/components/usercomment/commentfooter.vue"
import CommonFixed from "./commonfixed.vue"
export default {
  data () {
    return {
    }
  },
  components:{
    commendHeader,
    CommonFixed,
    CommentBody,
    CommentFooter
  }
}
</script>

<style scoped>

</style>
