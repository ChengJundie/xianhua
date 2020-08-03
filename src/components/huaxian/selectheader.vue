<template>
  <div>
    <div class="mui-segmented-control mui-segmented-control-inverted" id="g-header">
        <router-link to="/huaxian/shaidan" class="mui-control-item mui-active" tag="li" >
            <a :class="{'mui-active':idx==1}" @click="changeIdx(1)" > 晒单</a>
        </router-link>
        <router-link to="/huaxian/specialselect" class="mui-control-item" tag="li" >
            <a :class="{'mui-active':idx==2}" @click="changeIdx(2)"> 精选推荐</a>
        </router-link>
        <router-link to="/huaxian/huayuall" class="mui-control-item" tag="li" >
            <a :class="{'mui-active':idx==3}" @click="changeIdx(3)"> 花与大全</a>
        </router-link>
        <router-link to="/huaxian/cartoonselect" class="mui-control-item" tag="li" >
            <a :class="{'mui-active':idx==4}" @click="changeIdx(4)"> 漫画选花</a>
        </router-link>
    </div>
    <div class="mui-slider-group" id="g-middle">
        <router-view :huaxiandata="huaxianData"></router-view>
    </div>
  </div>
</template>

<script>
import {reqHuaInfo} from "@/api/index.js"
export default {
  data() {
    return {
        idx:1,
        huaxianData:{}
    };
  },
  methods: {
    async changeIdx(i) {
      this.idx = i;
       this.huaxianData= await reqHuaInfo(this.idx)
       // console.log("this.huaxianData",this.huaxianData)
    }
  },
  async created() {
      this.huaxianData= await reqHuaInfo(1)
  },
};
</script>

<style scoped>
a.active{
  color: #FF0000;
}
#g-body #g-header{
	position: fixed;
	top: 0rem;
	left: 0rem;
	right: 0rem;
	z-index: 99;
	background-color: #fff;
}
</style>
