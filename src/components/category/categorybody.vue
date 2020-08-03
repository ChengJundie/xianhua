<template>
  <div class="mui-content">
			<div class="left clearbox" id="left">
				<ul>
					<routerLink tag="li" :to="{path:'',query:{id:item.id}}" v-for="item in categoryInfo" :key="item.index">
						<a :class="{'active' :idx==(item.id-1)}"><span></span>{{item.title}}</a>
					</routerLink>
				</ul>
			</div>
			<div class="right clearbox" id="right">
				<div id="flower">
					<div class="flower">
						<p>
							<a href="javascript:void(0);">
								<img v-if="categoryInfo[idx]" :src="categoryInfo[idx].bigimg">
							</a>
						</p>
						<div v-if="categoryInfo[idx]"  >
						<div class="obj"  v-for="flow in categoryInfo[idx].list" :key="flow.index">
							<p  class="u-title">
								<span class="title">{{flow.titletxt}}</span>
								<span v-if="flow.type==1" class="paihang">{{flow.descp}}</span>
								<span v-if="flow.type==1" class="iconfont icon-paihangbang"></span>
							</p>
							<ul class="mui-table-view mui-grid-view">
								<li v-for="category in flow.classifylist" :key="category.index" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
									<router-link to="categorylist">
										<img class="mui-media-object" :src="category.img">
										<div class="mui-media-body">{{category.name}}</div>
									</router-link>
								</li>
							</ul>	
						</div>
					</div>
					</div>
				</div>
				
			</div>
		</div>
</template>

<script>
import {mapActions,mapState} from "vuex"
import {reqCategoryInfo} from "@/api/index.js"
export default {
  data () {
    return {
		idx:0
    }
  },
  computed: {
	  ...mapState(["categoryInfo"])
  },
  methods: {
      getData(){
        let id = this.$route.query.id-1?this.$route.query.id-1:0;
		  this.idx=id;
		 // console.log("idx",this.idx)
	  },
	  ...mapActions(["getCategoryInfo"])
  },
  async created() {
      this.getData();
	  this.getCategoryInfo();
	  let categoryInfo = await reqCategoryInfo();
	  //console.log("categoryInfo",categoryInfo)
	  //console.log("categoryInfo[idx]",categoryInfo[this.idx])
  },
  watch: {
      $route(){
         this.getData();
      }
  }
}
</script>

<style scoped>

@import "../../assets/css/classfiy/classify-body.css";
.right{
	background-color: white;
	margin-bottom: 50px;
}
.u-title{
	height: 30px;
	line-height: 30px;
	
}
.title{
	color: #3c3c3c;
	margin-left: 10px;
	margin-top: 5px;
	font-size: 16px;
}
.paihang{
	float: right;
	color: #3c3c3c;
	margin-right: 10px;
}
.icon-paihangbang{
	float: right;
	margin-right: 5px;
	color: #3c3c3c;
}
.obj{
	box-shadow: 0.1875rem 0.1875rem 0.625rem rgba(0, 0, 0, 0.3);
	margin-bottom: 15px;
	border-radius: 10px;
}
</style>
