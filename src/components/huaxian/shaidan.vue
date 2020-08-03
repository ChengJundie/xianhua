<template>
  <div class="mui-slider-item mui-control-content" id="a1">
    <div class="box">
      <ul v-if="huaxiandata">
        <li class="mui-col-sm-12 mui-col-xs-12" v-for="item in huaxiandata.listone" :key="item.index">
          <img v-if="item.img" :src="item.img" />
          <p>{{item.descp}}</p>
          <div>
            <p>
              <img :src="item.userimg" />
              <span>{{item.username}}</span>
              <a href="javascript:void(0);">
                <span class="iconfont icon-dianzan fr bai"></span>
                <span class="iconfont icon-dianzan1 fr hong"></span>
              </a>
            </p>
          </div>
        </li>
        
      </ul>
      <ul v-if="huaxiandata">
        <li class="mui-col-sm-12 mui-col-xs-12" v-for="item in huaxiandata.listtwo" :key="item.index">
          <img v-if="item.img" :src="item.img" />
          <p>{{item.descp}}</p>
          <div>
            <p>
              <img :src="item.userimg" />
              <span>{{item.username}}</span>
              <a href="javascript:void(0);">
                <span class="iconfont icon-dianzan fr bai"></span>
                <span class="iconfont icon-dianzan1 fr hong"></span>
              </a>
            </p>
          </div>
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
  created() {
    //console.log("this.huaxianData",this.huaxianData)
  },
};
</script>

<style scoped>
#g-body .mui-slider .mui-slider-group>#a1{
  margin-top: 40px;
}
#g-body .mui-slider .mui-slider-group>#a1>div.box{
	display: flex;
	justify-content: space-around;
}
#g-body .mui-slider .mui-slider-group>#a1 ul{
	width: 47%;
	margin: 0.3125rem auto;
	flex-direction: column;
	align-items: flex-start;
}
#g-body .mui-slider .mui-slider-group>#a1 ul:last-child{
	margin-right: 0.625rem;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li{
	width: 100%;
	padding-top: 0rem;
	padding-left: 0rem;
	border-radius: 0.625rem;
	margin: 0rem 0.3125rem;
	background-color: #fff;
	padding-bottom: 0.3125rem;
	margin-bottom: 0.625rem;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>img{
	width: 100%;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>p{
	color: #3C3C3C;
	font-size:0.75rem;
	padding-left: 0.5rem;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>div>p>img{
	width: 1.25rem;
	height: 1.25rem;
	border-radius: 50%;
	vertical-align: middle;
	margin-left: 0.5rem;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>div>p>span.name{
	font-size: 0.75rem;
	color: #3C3C3C;
	padding-left: 0.1875rem;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>div>p{
	position: relative;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>div>p>a>span.iconfont{
	position: absolute;
	top: 0rem;
	right: 0.625rem;
	font-size: 1rem;
	display: block;
	color: #3C3C3C;
}
#g-body .mui-slider .mui-slider-group>#a1 ul>li>div>p>a>span.hong{
	color: #FF0000;
	display: none;
}
#g-body .mui-slider .mui-slider-group>#a1,
#g-body .mui-slider .mui-slider-group>#a1::before{
	background-color: transparent;
	border-bottom: none;
	border-top: none;
}
</style>
