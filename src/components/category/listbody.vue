<template>
  <div class="mui-content" id="g-body">
    <div class="mui-slider">
      <div class="mui-segmented-control mui-segmented-control-inverted u-header" >
        <a class="mui-control-item" :class="{'mui-active':idx==1}" @click="changeIdx(1)" >综合</a>
        <a class="mui-control-item" :class="{'mui-active':idx==2}" @click="changeIdx(2)" >销量</a>
        <a class="mui-control-item price" :class="{'mui-active':idx==3}" @click="changeIdx(3)">
          价格
          <span class="iconfont icon-quanxianfuzhi" :class="{'mui-active':idx==3}" @click="changeIdx(3)"></span>
          <span class="iconfont icon-quanxianfuzhi-copy" :class="{'mui-active':idx==5}" @click="changeIdx(5)"></span>
        </a>
        <a class="mui-control-item" :class="{'mui-active':idx==4}" @click="changeIdx(4)">最新</a>
      </div>

      <div class="mui-slider-group u-body" >
        <!--第一个内容区容器-->
        <div class="mui-slider-item mui-control-content" id="a1">
          <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6" v-for="item in allGoods" :key="item.index">
              <router-link to="detail">
                <img class="mui-media-object" :src="item.img" />
                <span>{{item.honor}}</span>
                <div class="mui-media-body">{{item.descp}}</div>
                <p>&yen;{{item.price}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqSort} from "@/api/index.js"
export default {
  data() {
    return {
      idx: 1,
      allGoods:[]
    };
  },
  methods: {
    handle() {
      this.flag = !this.flag;
    },
    async changeIdx(i) {
      this.idx = i;
      this.allGoods= await reqSort(i);
    }, 
  },
  async created() {
     this.allGoods=await reqSort(1);
     //console.log("aaa", this.allGoods)
  },
};
</script>

<style scoped>
@import "../../assets/css/select/select.css";
.u-header{
 position: fixed;
	top:44px;
	left: 0rem;
	right: 0rem;
  z-index: 99;
  height: 40px;
  background-color: #ffffff;
}
.u-body{
  margin-top: 40px;
}
</style>
