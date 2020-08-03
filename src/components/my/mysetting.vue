<template>
<div>
  <header class="mui-bar mui-bar-nav" id="g-header">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)"></a>
			<h1 class="mui-title">设置</h1>
		</header>
		<!-- 主体 -->
		<div class="mui-content" id="g-body">
			<ul class="mui-table-view">
					<li class="mui-table-view-cell">
						<router-link to="/person" class="mui-navigate-right">  
							个人资料
						</router-link>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 账号绑定
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 反馈建议
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 推荐花礼APP给好友
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 清除本地缓存
							 <span>35.59KB</span>
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 检测更新
							 <span>当前版本6.8</span>
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 用户协议与隐私政策
						</a>
					</li>
					<li class="mui-table-view-cell">
						<a class="mui-navigate-right">
							 WiFi下自动升级客户端
							 <div class="mui-switch mui-switch-mini mui-active">
							   <div class="mui-switch-handle"></div>
							 </div>
						</a>
					</li>
				</ul>
				<div class="loginout" id="loginout">
					<input type="button" @click="exitLogin" value="退出登录"/>
				</div>
		</div>
        </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
	  exitLogin(){
		 // localStorage.removeItem("user")
		 //this.$router.push("/order")
		 window.location.reload();
		 
	  }
  },
}
</script>

<style scoped>
@import "../../assets/css/setting/setting.css"
</style>
