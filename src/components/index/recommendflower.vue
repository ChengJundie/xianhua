<template>
  <div class="tuijian clearbox">
    <!-- 永生花推荐 -->
    <div class="forever clearbox" v-for="item in recommendData" :key="item.index">
      <p class="title">{{item.title}}</p>
      <ul class="clearbox" id="showforever">
          <li class="mui-col-sm-6 mui-col-xs-6 foreverlist" 
          v-for="flower in item.list" :key="flower.index">
  			<a href="javascript:void(0);">
  				<img :src="flower.img">
  				<p>{{flower.honor}}</p>
  				<p>{{flower.descp}}</p>
  				<p>
  					<span>&yen;{{flower.price}}</span>
  					<span>&yen;{{flower.fallprice}}</span>
  					<span>已销售{{flower.sell}}件</span>
  					<span class="iconfont icon-icon-"></span>
  				</p>
  			</a>
  		</li>
      </ul>  
      <p class="gd">查看更多</p>
    </div>
  </div>
</template>

<script>
import { reqRecommendFlower } from "@/api/index.js";
export default {
  data() {
    return {
      recommendData: []
    };
  },
  async created() {
    this.recommendData = await reqRecommendFlower();
  }
};
</script>

<style scoped>
</style>
