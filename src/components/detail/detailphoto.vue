<template>
  <div class="img-font">
				<p>图文详情</p>
				<div class="box" id="showpic">
					<ul v-if="oneFlower">
						<li v-for="item in oneFlower.imglist" :key="item.index">
							<img :src="item">
						</li>
					</ul>
				</div>
				<div class="fix-img">
					<p><img src="../../assets/img/detail/fix-img1.jpg"></p>
					<ul>
						<li>
							<h4>龙头企业认证·15年品牌</h4>
							<p>始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。</p>
							<img src="../../assets/img/detail/fix-img2.png">
						</li>
						<li>
							<h4>12道品控标准 + 送前实拍</h4>
							<p>行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。</p>
							<img src="../../assets/img/detail/fix-img3.png">
						</li>
						<li>
							<h4>花艺设计团队</h4>
							<p>国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。</p>
							<img src="../../assets/img/detail/fix-img4.png">
						</li>
						<li>
							<h4>当日新鲜花材制作，极速送达</h4>
							<p>门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！</p>
							<img src="../../assets/img/detail/fix-img5.png">
						</li>
						<li>
							<h4>客服团队</h4>
							<p>建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。</p>
							<img src="../../assets/img/detail/fix-img6.png">
						</li>
						<li>
							<h4>优秀平台汇聚优秀人才</h4>
							<p>我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才</p>
							<img src="../../assets/img/detail/fix-img7.png">
						</li>
						<li>
							<h4>不只鲜花 · 跨界音乐微电影</h4>
							<p>联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。</p>
							<img src="../../assets/img/detail/fix-img8.png">
						</li>
					</ul>
				</div>
			</div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  data () {
    return {
    }
  },
  computed: {
	  ...mapState(["oneFlower"])
  },
  methods: {
	  ...mapActions(["getOneFlower"])
  },
  created() {
	  this.getOneFlower();
  },
}
</script>

<style scoped>

</style>
