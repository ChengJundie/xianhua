<template>
  <div class="swiper-container banner" >
		<ul class="swiper-wrapper">
			<li class="swiper-slide">
				<img src="../../assets/img/index/swrap1.jpg">
			</li>
			<li class="swiper-slide">
				<img src="../../assets/img/index/swrap2.jpg">
			</li>
			<li class="swiper-slide">
				<img src="../../assets/img/index/swrap3.jpg">
			</li>
			<li class="swiper-slide">
				<img src="../../assets/img/index/swrap4.jpg">
			</li>
		</ul>
		<div class="swiper-pagination sp01"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
  data () {
    return {
       
    }
  },
   methods:{
        initSwiper(){
            new Swiper('.banner', {
                 pagination: {
                    el: '.sp01',
                },
		        paginationClickable: true,
		        autoplay:true,
		        loop:"ture",
		        speed:500,
		        autoplayDisableOnInteraction : false,
		    });
        }
    },
   created() {
      
  },
}
</script>

<style scoped>
img{
    width: 100%;
    height: 200px;
}
</style>
