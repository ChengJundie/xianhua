<template>
  <div class="mui-content" id="g-body">
    <div class="box">
      <p class="font">手机号</p>
      <p class="inp">
        <input type="text" v-model="user.phone" placeholder="请输入手机号" autofocus />
      </p>
      <!-- <p class="font">邮箱</p>
      <p class="inp"><input type="text" name="" id="email" placeholder="请输入邮箱" autofocus /></p>-->
      <p class="font">设置密码</p>
      <p class="inp yan-zm">
        <input type="password" v-model="user.pass" placeholder="请设置账号密码" />
        <a class="yan-jing1">
          <span class="iconfont icon-yanjing_bi he1"></span>
          <span class="iconfont icon-yanjing zhang1"></span>
        </a>
      </p>
      <p class="font">确认密码</p>
      <p class="inp yan-zm">
        <input type="password" v-model="user.pass1"  placeholder="请确认您的账号密码" />
        <a class="yan-jing2">
          <span class="iconfont icon-yanjing_bi he2"></span>
          <span class="iconfont icon-yanjing zhang2"></span>
        </a>
      </p>
      <p class="butt">
        <input type="button" id="btn" @click="Register" value="注册账号" />
      </p>
      <p class="zhang-hao">
        <router-link to="/login" id="phone-mi">返回登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { reqRegister } from "@/api/server.js";
export default {
  data() {
    return {
      user:{
		  phone:"",
		  pass:"",
		  pass1:""
	  }
    };
  },
  methods: {
    async Register() {
      if (!this.user.phone || !this.user.pass || !this.user.pass1) {
        alert("请填全信息");
      } else {
        const result = await reqRegister(this.user);
        alert(result.msg)
        console.log("result.errNo",result.errNo)
        if(result.errNo==0){
          this.$router.push("/login")
        }else{
          this.$router.push("/register")
        }
      }
    },
  },
};
</script>

<style scoped>
#g-body > div.box {
  width: 90%;
  margin: 0px auto;
  margin-top: 20px;
}
#g-body > div.box > p.font {
  color: #3c3c3c;
}

#g-body > div.box > p.inp > input {
  color: #232628;
  border: none;
  font-size: 16px;
  background-color: #efeff4;
  border-bottom: 2px solid #e9ecf0;
}
#g-body > div.box > p.inp > a > span.icon-yanjing_bi {
  font-size: 1.125rem;
  color: #3c3c3c;
  display: block;
}
#g-body > div.box > p.inp {
  position: relative;
}
#g-body > div.box > p.inp > a {
  position: absolute;
  top: 0.5rem;
  right: 1.25rem;
}
#g-body > div.box > p.inp > a > span.icon-yanjing {
  font-size: 1.125rem;
  color: #3c3c3c;
  display: none;
}
#g-body > div.box > p.butt > input {
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
#g-body > div.box > p.zhang-hao {
  width: 100%;
  text-align: center;
  margin-top: 2.14285714rem;
}
#g-body > div.box > p.zhang-hao > a {
  font-size: 16px;
  color: #3c3c3c;
}
</style>
