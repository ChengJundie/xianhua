<template>
  <div>
    <header class="mui-bar mui-bar-nav" id="g-header">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)"></a>
      <h1 class="mui-title">密码重置</h1>
    </header>
    <!-- 主体 -->
    <div class="mui-content" id="g-body">
      <div class="box">
        <p class="inp">
          <input type="text" v-model="user.phone" placeholder="请输入手机号" />
        </p>
        <p class="inp put">
          <input type="password" v-model="user.pass" placeholder="请输入新密码" />
          <span class="iconfont icon-yanjing_bi he1"></span>
          <span class="iconfont icon-yanjing zhang1"></span>
        </p>
        <p class="inp againput">
          <input type="password" v-model="user.pass1" placeholder="请确定新密码" />
          <span class="iconfont icon-yanjing_bi he2"></span>
          <span class="iconfont icon-yanjing zhang2"></span>
        </p>
        <p class="butt">
          <input type="button" @click="sureAmend" value="确认修改" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqForgetPass } from "@/api/server.js";
export default {
  data() {
    return {
      user: {
        phone: "",
        pass: "",
        pass1: "",
      },
    };
  },
  methods: {
    async sureAmend() {
      if (!this.user.phone || !this.user.pass || !this.user.pass1) {
        alert("请填全信息");
      } else {
		const result = await reqForgetPass(this.user);
		alert(result.msg)
		if(result.errNo==0){
			this.$router.push("/login")
		}
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/forgetpass/forgetpass.css";
</style>
