<template>
  <div class="mui-content" id="g-body">
    <h1>
      <img src="../../assets/img/login/login.png" />
    </h1>
    <div class="login-box">
      <div class="box phone" v-if="flag">
        <p class="font">手机号</p>
        <p class="inp">
          <input type="text" name id="userphone" placeholder="请输入手机号" autofocus />
        </p>
        <p class="font">验证码</p>
        <p class="inp yan-zm">
          <input type="password" name id="password" placeholder="请输入验证码" />
          <a class="forget" href="javascript:void(0);">获取验证码</a>
        </p>
        <p class="butt">
          <input type="button" name id="btn1" value="登录" />
        </p>
        <p class="zhang-hao">
          <a href="#" id="phone-mi" @click="changeShow">账号密码登录</a>
        </p>
        <div class="other-box">
          <p class="other">其他登录方式</p>
          <p class="method">
            <a href="javascript:void(0);">
              <span class="iconfont icon-weixin"></span>
              <span class="font">微信</span>
            </a>
            <a href="javascript:void(0);">
              <span class="iconfont icon-QQ"></span>
              <span class="font">QQ</span>
            </a>
            <a href="javascript:void(0);">
              <span class="iconfont icon-zhifubao"></span>
              <span class="font">支付宝</span>
            </a>
            <router-link to="/register">
              <span class="iconfont icon-youxiang"></span>
              <span class="font">注册</span>
            </router-link>
          </p>
        </div>
      </div>
      <div class="box phone-msg" v-else>
        <p class="font">手机号/邮箱</p>
        <p class="inp">
          <input type="text" v-model="user.phone" placeholder="请输入手机号" autofocus />
        </p>
        <p class="font">密码</p>
        <p class="inp yan-zm">
          <input type="password" v-model="user.pass" placeholder="请输入密码" />
          <router-link to="/pass" class="forget">忘记密码</router-link>
          <a class="yan-jing">
            <span class="iconfont icon-yanjing_bi he"></span>
            <span class="iconfont icon-yanjing zhang"></span>
          </a>
        </p>
        <p class="butt">
          <input type="button" @click="Login" id="btn" value="登录" />
        </p>
        <p class="zhang-hao">
          <a id="phone-ma" @click="changeShow">手机验证码登录</a>
        </p>
        <div class="other-box">
          <p class="other">其他登录方式</p>
          <p class="method">
            <a href="javascript:void(0);">
              <span class="iconfont icon-weixin"></span>
              <span class="font">微信</span>
            </a>
            <a href="javascript:void(0);">
              <span class="iconfont icon-QQ"></span>
              <span class="font">QQ</span>
            </a>
            <a href="javascript:void(0);">
              <span class="iconfont icon-zhifubao"></span>
              <span class="font">支付宝</span>
            </a>
            <router-link to="/register">
              <span class="iconfont icon-youxiang"></span>
              <span class="font">注册</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin } from "@/api/server.js";
export default {
  data() {
    return {
      flag: false,
      user: {
        phone: "",
        pass: "",
      },
    };
  },
  methods: {
    changeShow() {
      this.flag = !this.flag;
    },
    async Login() {
      if (!this.user.phone || !this.user.pass) {  
		  alert("请填全信息");
		  return;
      }else{
		  const result = await reqLogin(this.user);
			localStorage.setItem("user", JSON.stringify(result.datas));
			this.$store.dispatch("getUserInfo", result.datas);
			alert(result.msg);
			this.$router.push("/my");
	  }
    },
  },
  created() {},
};
</script>

<style scoped>
#g-body h1 {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
#g-body h1 img {
  width: 50%;
}
#g-body .login-box {
  width: 90%;
  margin: 0px auto;
  margin-top: 30px;
}

#g-body .login-box > div.box > p.font {
  color: #3c3c3c;
}
#g-body .login-box > div.box > p.inp {
  position: relative;
}
#g-body .login-box > div.box > p.inp > input {
  color: #232628;
  border: none;
  font-size: 16px;
  background-color: #efeff4;
  border-bottom: 2px solid #e9ecf0;
}
#g-body .login-box > div.box > p.yan-zm > a.forget {
  position: absolute;
  top: 10px;
  right: 0px;
  color: #ff734c;
}

#g-body .login-box > div.box > p.yan-zm > a.yan-jing > span {
  font-size: 1.125rem;
  color: #3c3c3c;
  position: absolute;
  top: 0.625rem;
  right: 4.375rem;
}
#g-body .login-box > div.box > p.yan-zm > a.yan-jing > span.he {
  display: block;
}
#g-body .login-box > div.box > p.yan-zm > a.yan-jing > span.zhang {
  display: none;
}
#g-body .login-box > div.box > p.butt > input {
  width: 100%;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: #ff734c;
  border: 1px solid #ff734c;
  text-align: center;
  color: #fff;
  font-size: 1.21428571rem;
  margin-top: 20px;
}
#g-body .login-box > div.box > p.zhang-hao {
  width: 100%;
  text-align: center;
  margin-top: 2.14285714rem;
}
#g-body .login-box > div.box > p.zhang-hao > a {
  color: #3c3c3c;
  font-size: 1rem;
  text-align: center;
}
#g-body .login-box > div.box > div.other-box {
  position: relative;
  margin-top: 120px;
}
#g-body .login-box > div.box > div.other-box > p.other {
  width: 10rem;
  font-size: 16px;
  display: block;
  background-color: #efeff4;
  text-align: center;
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}
#g-body .login-box > div.box > div.other-box > p.method {
  width: 100%;
  display: flex;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #e5e5e5;
  justify-content: space-around;
  padding-top: 10px;
}
#g-body .login-box > div.box > div.other-box > p.method > a > span.iconfont {
  font-size: 18px;
}
#g-body .login-box > div.box > div.other-box > p.method > a > span.font {
  color: #3c3c3c;
  font-size: 16px;
}
</style>
