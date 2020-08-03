<template>
  <div class="swiper-container detailbanner" id="d1">
    <ul class="swiper-wrapper" v-if="huaxiandata.list">
      <li class="swiper-slide" v-for="item in huaxiandata.list" :key="item.index">
        <img :src="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import Swiper from "swiper"
export default {
  props:["huaxiandata"],
  data() {
    return {};
  },
  methods:{
        initSwiper(){
            new Swiper('.detailbanner', {
		        paginationClickable: true,
		        autoplay:false,
		        loop:"ture",
		        speed:500,
		        autoplayDisableOnInteraction : false,
		    });
        }
    },
    mounted(){
        this.initSwiper();
    },
};
</script>

<style scoped>
img{
  width: 100%;
}
#g-body .mui-slider .mui-slider-group>#d1{
margin-top: 40px;
}
#g-body .mui-slider .mui-slider-group>#d1,
#g-body .mui-slider .mui-slider-group>#d1::before{
	background-color: transparent;
	border-bottom: none;
	border-top: none;
}
#g-body .mui-slider .mui-slider-group>#d1 .mui-slider-item{
	border: none;
}

</style>
