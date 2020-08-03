<template>
  <header class="mui-bar mui-bar-nav" id="g-header">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)"></a>
    <h1 class="mui-title">注册</h1>
</header>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#g-header a{
	color: #3C3C3C;
}
</style>
