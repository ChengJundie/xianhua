<template>
  <header class="mui-bar mui-bar-nav" id="g-header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)"></a>
			<h1 class="mui-title">管理收货地址</h1>
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
#g-header>a{
	color: #3C3C3C;
}
#g-header>span{
	color: #3C3C3C;
	padding-right: 0.625rem;
	padding-top: 0.625rem;
}
</style>
