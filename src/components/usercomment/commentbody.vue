<template>
  <div class="mui-content" id="g-body">
			<p>最近已有338条评价</p>
			<ul class="clearbox" id="showappraise">
                <li v-for="item in oneFlower.commentlist" :key="item.index">
					<p class="user-msg clearbox">
						<img class="user" :src="item.userimg">
						<span>{{item.username}}</span>
						<img class="star" src="../../assets/img/detail/star.png">
					</p>
					<p class="ppri">{{item.descp}}</p>
					<div class="imgs clearbox">
						<p><img :src="item.pic1"></p>
						<p><img :src="item.pic2"></p>
						<p><img :src="item.pic3"></p>
					</div>
					<p class="di-zhi clearbox">
						<span class="mui-icon mui-icon-location"></span>
						<span class="font">{{item.address}}</span>
						<span>{{item.date}}</span>
					</p>
				</li>
			</ul>	
		</div>
</template>

<script>
import {reqOneFlower} from "@/api/index.js"
export default {
  data () {
    return {
        id:0,    
        oneFlower:{},
    }
  },
  async created() {
    this.id=this.$route.query.id;
    this.oneFlower= await reqOneFlower(this.id);
  },
}
</script>

<style scoped>
@import '../../assets/css/userAppraise/userAppraise.css'
</style>
