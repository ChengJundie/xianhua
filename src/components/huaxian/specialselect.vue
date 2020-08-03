<template>
  <div class="mui-slider-item mui-control-content" id="b1">
    <div class="box" >
      <ul class="mui-table-view mui-grid-view" v-if="huaxiandata.list" >
        <li class="mui-table-view-cell mui-media mui-col-xs-12" v-for="item in huaxiandata.list" :key="item.index">
          <a href="#">
            <img class="mui-media-object" v-if="item.img" :src="item.img" />
            <div class="mui-media-body" v-if="item.descp">{{item.descp}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:["huaxiandata"],
  data() {
    return {};
  },
};
</script>

<style scoped>
#g-body .mui-slider .mui-slider-group>#b1{
margin-top: 40px;
}
#g-body .mui-slider .mui-slider-group>#b1,
#g-body .mui-slider .mui-slider-group>#b1::before{
	background-color: transparent;
	border-bottom: none;
	border-top: none;
}
#g-body .mui-slider .mui-slider-group>#b1>.box>ul>li{
	border-radius: 0.625rem;
	margin-top: 0.625rem;
	background-color: #fff;
	height: 100%;
	padding-bottom: 0.3125rem;
}
#g-body .mui-slider .mui-slider-group>#b1>.box>ul>li>a{
	padding-top: 0rem;
	padding-left: 0rem;
}
#g-body .mui-slider .mui-slider-group>#b1>.box>ul>li>a>div{
	color: #3C3C3C;
}
</style>
