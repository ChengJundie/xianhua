<template>
  <div class="mui-slider-item mui-control-content" id="c1">
    <div class="box">
      <div class="top">
        <span class="mui-icon mui-icon-search"></span>
        <input type="search" placeholder="请输入花材名称,如:玫瑰" />
        <span class="font">搜索</span>
      </div>
      <div class="hot-search" >
        <p>热门搜索</p>
        <ul v-if="huaxiandata.list">
          <li class="mui-col-xs-2 mui-col-sm-2" v-for="item in huaxiandata.list" :key="item.index">
            <a href="#" v-if="item">{{item}}</a>
          </li>
        </ul>
      </div>
      <div class="img-box">
        <ul>
          <li>
            <img src="../../assets/img/huaxian/hua-yu-01.jpg" />
            <div class="cover">
              <h2>花材</h2>
              <p>一秒读懂花的语言 ></p>
            </div>
          </li>
          <li>
            <img src="../../assets/img/huaxian/hua-yu-02.jpg" />
            <div class="cover">
              <h2>枝数</h2>
              <p>了解所有枝数的寓意 ></p>
            </div>
          </li>
        </ul>
      </div>
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
#g-body .mui-slider .mui-slider-group>#c1,
#g-body .mui-slider .mui-slider-group>#c1::before{
	background-color: transparent;
	border-bottom: none;
	border-top: none;
}
#g-body .mui-slider .mui-slider-group>#c1{
	margin-top: 50px;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.top{
	height: 3.125rem;
	position: relative;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.top>input{
	width: 96%;
	height: 2.1875rem;
	margin: 0rem auto;
	margin-left:0.625rem ;
	text-align: left;
	padding-left: 1.875rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.top>span.mui-icon{
	position: absolute;
	left:0.9375rem;
	top: 0.4375rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.top>span.font{
	position: absolute;
	right: 1.25rem;
	top:0.625rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.hot-search{
	height: 7.5rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.hot-search>p{
	height: 1.875rem;
	line-height: 1.875rem;
	padding-left: 0.625rem;
	color: #3C3C3C;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.hot-search>ul{
	width: 96%;
	margin: 0rem auto;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.hot-search>ul>li{
	float: left;
	width: 18%;
	margin-right: 0.375rem;
	margin-bottom: 0.3125rem;
	text-align: center;
	height: 1.5625rem;
	line-height: 1.5625rem;
	border-radius: 0.3125rem;
	border: 1px solid #3C3C3C;
	background-color: transparent;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.hot-search>ul>li>a{
	color:#3C3C3C; 
	font-size: 0.75rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box{
	width: 96%;
	margin: 0rem auto;
	height: 18.75rem;
	margin-top: 1.25rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li:first-child{
	margin-right:0.3125rem ;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li:last-child{
	margin-right:0rem ;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li{
	width: 49%;
	height: 100%;
	float: left;
	position: relative;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li>img{
	width: 100%;
	height: 100%;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li>div.cover{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0rem;
	left: 0rem;
	background-color: rgba(0,0,0,0.3);
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li>div.cover>h2{
	margin-top: 1.5625rem;
}
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li>div.cover>h2,
#g-body .mui-slider .mui-slider-group>#c1>.box>.img-box>ul>li>div.cover>p{
	width: 100%;
	text-align: center;
	color: #fff;
	font-weight: 300;
}
</style>
