<template>
  <header class="mui-bar mui-bar-nav">
    <h1 class="mui-title">
        <span class="mui-icon mui-icon-search"></span>
        <input type="search" name="" id="search" placeholder="白色香水百合" autofocus />
    </h1>
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
.mui-bar .mui-title{
	width: 100%;
	left: 0px;
	right: 0px;
	
}
.mui-bar .mui-title input{
	width: 90%;
	margin: 0px auto;
	border-radius: 25px;
	text-align: left;
	padding-left: 35px;
}
.mui-bar .mui-title span{
	position: absolute;
	top: 10px;
	left: 25px;
}
</style>
