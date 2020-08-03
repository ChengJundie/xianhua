<template>
  <div class="similar">
    <div class="list clearbox">
      <ul id="list">
        <li :class="{'active':idx==1}" @click="changeIdx(1)">购买该商品的还购买了</li>
        <li :class="{'active':idx==2}" @click="changeIdx(2)">巧克力/花瓶</li>
      </ul>
    </div>
    <div class="box" id="box">
      <div
        style="height: 300px;"
        class="box1 mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll" v-if="similarGoods">
          <a class="mui-control-item" v-for="item in similarGoods" :key="item.index">
            <img :src="item.img" />
            <p class="font">{{item.title}}</p>
            <p class="price">&yen;{{item.price}}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqSimilatGoodsInfo} from "@/api/index.js"
export default {
  data() {
    return {
        idx:1,
        similarGoods:[]
    };
  },
  methods: {
   async changeIdx(i) {
      this.idx = i;
      let Data={}
      Data=await reqSimilatGoodsInfo(i)
      this.similarGoods=Data.list
      //console.log("this.similarGoods",this.similarGoods)
    }
  },
  async created() {
      let Data={}
      Data=await reqSimilatGoodsInfo(1)
      this.similarGoods=Data.list
      //console.log("this.similarGoods",this.similarGoods)
  },
};
</script>

<style scoped>
#g-body {
    margin-bottom: 6.875rem;
}

#g-body>div.similar {
    width: 100%;
    height: 11.875rem;
    background-color: white;
    overflow: hidden;
}

#g-body>div.similar .list {
    width: 94%;
    margin: 0rem auto;
}

#g-body>div.similar .list ul {
    margin-top: 0.625rem;
}

#g-body>div.similar .list ul li {
    float: left;
    font-size: 0.75rem;
    padding: 0px 0.625rem;
}

#g-body>div.similar .list ul li:first-child {
    border-right: 0.0625rem solid #CCCCCC;
}

#g-body>div.similar .list ul li.active {
    color: #FF0000;
}

#g-body>div.similar .box {
    margin-top: 2.8125rem;
}

#g-body>div.similar .box>.box1 {
    display: block;
}

#g-body>div.similar .box>.box2 {
    display: none;
}

#g-body>div.similar .box>.mui-scroll-wrapper .mui-scroll>a {
    padding: 0 0;
}

#g-body>div.similar .box>.mui-scroll-wrapper .mui-scroll>a>img {
    margin-bottom: -0.5rem;
}

#g-body>div.similar .box>.mui-scroll-wrapper .mui-scroll>a>p.font {
    width: 6.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #3C3C3C;
    height: 1.5625rem;
    margin-bottom: -0.3125rem;
}

#g-body>div.similar .box>.mui-scroll-wrapper .mui-scroll>a>p.price {
    color: #FF0000;
    height: 1.25rem;
}

#g-body>div.similar .box>.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
    color: #fff;
    border-bottom: none;
}
</style>
