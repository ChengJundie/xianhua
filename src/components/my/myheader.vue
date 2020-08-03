<template>
  <div class="top" id="m-login">
    <ul class="mui-table-view" v-if="userInfo.length>0">
        <li class="mui-table-view-cell mui-media">
            <a href="person.html">
                <img class="mui-media-object mui-pull-left" :src="userInfo[0].userimg">
                <div class="mui-media-body">
                    <span class="username">{{userInfo[0].name}}</span>
                    <p class="mui-ellipsis">
                        <span class="iconfont icon-zuanshi"></span>
                        注册会员
                    </p>
                </div>
            </a>
        </li>
    </ul>
    <div v-else>
        <p class="wellcom">欢迎来到花礼网</p>
        <p class="login-but"><router-link to="/login">登录/注册</router-link></p>
    </div>
</div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data () {
    return {
        
    }
  },
  computed: {
      ...mapState(["userInfo"])
  },
  created() {
    //this.userInfo=JSON.parse(localStorage.getItem("user"))||[]
   // console.log("this.userInfo",this.userInfo)
  },
}
</script>

<style scoped>
#g-body .top {
    width: 100%;
    height: 130px;
    background: url(../../assets/img/my/bg.png) no-repeat;
    background-size: 100%;
    overflow: hidden;
}

#g-body .top ul {
    width: 50%;
    margin: 0rem auto;
    margin-top: 0.625rem;
    background-color: transparent;
}

#g-body .top ul::after,
#g-body .top ul::before {
    background-color: transparent;
}

#g-body .top ul li>a>img {
    width: 3.75rem;
    height: 3.75rem;
    max-width: 3.75rem;
    line-height: 3.75rem;
    border-radius: 50%;
}

#g-body .top ul li>a>div {
    margin-top: 0.625rem;
}

#g-body .top ul li>a>div>span {
    color: #fff;
    margin-left: 0.625rem;
}

#g-body .top ul li>a>div>p {
    background-color: #f56200;
    color: #fff;
    font-size: 0.625rem;
    text-align: center;
    border-radius: 0.625rem;
    margin-top: 0.3125rem;
}

#g-body .top ul li>a>div>p>span {
    font-size: 0.625rem;
}

#g-body .top p.wellcom {
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    margin: 0px auto;
    margin-top: 20px;
}

#g-body .top p.login-but {
    width: 120px;
    height: 35px;
    background-color: white;
    text-align: center;
    line-height: 35px;
    border-radius: 20px;
    margin: 0px auto;
    letter-spacing: 1px;
}

#g-body .top p.login-but a {
    font-size: 15px;
    color: #3C3C3C;
}
</style>
