<template>
  <div>
    <header class="mui-bar mui-bar-nav" id="g-header" >
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="$router.go(-1)"></a>
      <h1 class="mui-title">个人资料</h1>
      <span id="btn" @click="savePerson">保存</span>
    </header>
    <!-- 主体 -->
    <div class="mui-content" id="g-body">
      <ul class="mui-table-view" id="list">
        <li class="mui-table-view-cell">
          <ul class="mui-table-view mui-grid-view" id="photo">
            <li class="mui-table-view-cell mui-media mui-col-xs-6">
              <a href="#">
                <img class="mui-media-object" :src="userInfo[0].userimg" />
                <router-link to="/photo" tag="div" class="mui-media-body" >点击修改头像</router-link>
              </a>
            </li>
          </ul>
        </li>
        <li class="mui-table-view-cell">
          <label>姓名</label>
          <input type="hidden" id="uid" v-model="userInfo[0].id" />
          <input type="text" id="name" v-model="userInfo[0].name" />
        </li>
        <li class="mui-table-view-cell">
          <label>手机</label>
          <input type="text" id="phone" v-model="userInfo[0].phone" />
          <a href="#" class="change">更换手机 ></a>
        </li>
        <li class="mui-table-view-cell">
          <label>邮箱</label>
          <input type="text" id="email" v-model="userInfo[0].email" />
          <a href="#" class="change">验证邮箱 ></a>
        </li>

        <li class="mui-table-view-cell">
          <label>性别</label>
          <p>
            <input type="radio" name="per"  value="man" />男
          </p>
          <p>
            <input type="radio" name="per"  value="woman" checked />女
          </p>
        </li>
        <li class="mui-table-view-cell">
          <label>生日</label>
          <input type="text" v-model="userInfo[0].date" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { reqUpdUser } from "@/api/server.js";
export default {
  data() {
    return {
      result: {
       
      },
    };
  },
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    async savePerson() {
      let result = await reqUpdUser(this.userInfo); 
      //console.log("bbb",result)
      alert("修改用户成功");
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/person/person.css";
</style>
