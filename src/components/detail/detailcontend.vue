<template>
  <div class="cont-box">
    <div class="cont">
        <input type="hidden" id="gid" value="${id}"/>
        <p class="title">
            {{oneflower.name}}
            <span class="iconfont icon-xingxing"></span>
        </p>
        <p class="descp">{{oneflower.style}}</p>
        <p class="price-box">
            <span class="price">&yen;{{oneflower.price}}</span>
            <span class="fall">&yen;{{oneflower.fallprice}}</span>
            <span class="app">APP专享</span>
            <span class="sell">已售{{oneflower.sell}}件</span>
        </p>
    </div>
</div>
</template>

<script>
import {reqDeliverFlower} from "../../api/index.js"
export default {
  props:["oneflower"],
  data () {
    return {
        
    }
  },
  async created() {
      
  },
}
</script>

<style scoped>

</style>
