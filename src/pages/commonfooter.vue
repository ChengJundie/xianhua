<template>
  <div class="g-footer" id="g-footer">
			<router-link to="/" :class="{'active':idx==1}" @click="changeIdx(1)">
				<span class="iconfont icon-home" ></span>
				<span>首页</span>
			</router-link>
			<router-link to="/category" :class="{'active':idx==2}" @click="changeIdx(2)">
				<span class="iconfont icon-icon-category"></span>
				<span>分类</span>
			</router-link>
			<router-link to="/huaxian" :class="{'active':idx==3}" @click="changeIdx(3)">
				<span class="iconfont icon-xinbaniconshangchuan-"></span>
				<span>花现</span>
			</router-link>
			<router-link to="/shopcar" :class="{'active':idx==4}" @click="changeIdx(4)">
				<span class="iconfont icon-icon-"></span>
				<span>购物车</span>
				<i id="numAll">{{getLength}}</i>
			</router-link>
			<router-link to="/my" :class="{'active':idx==5}" @click="changeIdx(5)">
				<span class="iconfont icon-xiaolian"></span>
				<span>我的</span>
			</router-link>
		</div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data () {
    return {
		idx:1
    }
  },
  computed: {
	  ...mapState(["carData"]),
	  getLength(){
          let getLength = this.carData.length;
          return getLength;
      },
  },
  methods: {
    changeIdx(i) {
	  this.idx = i;
	  console.log("this.idx",this.idx)
    }
  },
 
}
</script>

<style scoped>
a.active span{
	color: #ff0000;
}
</style>
