<template>
  <header class="mui-bar mui-bar-nav" id="g-header">
    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)"></a>
    <span class="mui-icon mui-icon-bars"></span>
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
#g-header span{
	color: #3C3C3C;
	float: right;
	font-weight: 600;
}
</style>
