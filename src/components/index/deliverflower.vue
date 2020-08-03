<template>
  <!-- 送恋人/爱情鲜花 -->
  <div class="song-flower clearbox">
    <!-- 送恋人/爱情鲜花 -->
    <div class="song-love clearbox" >
      <p class="title">送恋人/爱情鲜花</p>
      <ul id="showflowerlove">
        <li class="loveflower" v-for="flower in loveFlower" :key="flower.index">
          <router-link :to="{path:'/detail',query:{id:flower.id}}">
            <div class="img-box">
              <img :src="flower.img" />
            </div>
            <div class="cont">
              <div class="cont-box">
                <p>{{flower.name}}</p>
                <p>{{flower.descp}}</p>
                <p>{{flower.honor}}</p>
                <p>{{flower.style}}</p>
                <p>
                  <span>&yen;{{flower.price}}</span>
                  <span>&yen;{{flower.fallprice}}</span>
                  <span>已销售{{flower.sell}}件</span>
                  <span class="iconfont icon-icon-"></span>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <p class="gd">
        <a href="select.html">查看更多</a>
      </p>
    </div>
    <div class="song-love clearbox" >
      <p class="title">送长辈鲜花</p>
      <ul id="showflowerlove">
        <li class="loveflower" v-for="flower in parentFlower" :key="flower.index">
          <router-link :to="{path:'/detail',query:{id:flower.id}}">
            <div class="img-box">
              <img :src="flower.img" />
            </div>
            <div class="cont">
              <div class="cont-box">
                <p>{{flower.name}}</p>
                <p>{{flower.descp}}</p>
                <p>{{flower.honor}}</p>
                <p>{{flower.style}}</p>
                <p>
                  <span>&yen;{{flower.price}}</span>
                  <span>&yen;{{flower.fallprice}}</span>
                  <span>已销售{{flower.sell}}件</span>
                  <span class="iconfont icon-icon-"></span>
                </p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <p class="gd">
        <a href="select.html">查看更多</a>
      </p>
    </div>
  </div>
</template>

<script>
// import { reqDeliverLove,reqDeliverParent } from "@/api/index.js";
import {mapState,mapActions} from "vuex"
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(["loveFlower"]),
    ...mapState(["parentFlower"]),
  },
  methods: {
    ...mapActions(["getLoveFlower"]),
    ...mapActions(["getParentFlower"]),
  },
  created() {
    this.getLoveFlower();
    this.getParentFlower();
  },
};
</script>

<style scoped>
</style>
