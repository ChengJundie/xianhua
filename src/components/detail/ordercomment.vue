<template>
  <div class="appraise">
				<div class="title">
					<p>订单评价</p>
					<p>最近已有328条评论</p>
				</div>
				<div class="appri-cont clearbox">
					<ul class="clearbox" id="showappraise">
						<li v-for="item in oneflower.commentlist" :key="item.index">
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
							</p>
						</li>
					</ul>
					<router-link :to="{path:'/comment',query:{id:this.id}}" class="gd" tag="p"> 查看更多评价</router-link>
				</div>
			</div>
</template>

<script>
export default {
  props:["oneflower","id"],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
