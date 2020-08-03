<template>
  <div class="swiper-container detailbanner" >
		<ul class="swiper-wrapper">
			<li class="swiper-slide" v-for="item in oneflower.swiperimg" :key="item.index">
				<img :src="item">
			</li>
		</ul>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
  props:["oneflower"],
  data () {
    return {
      
    }
  },
   methods:{
        initSwiper(){
            new Swiper('.detailbanner', {
		        paginationClickable: true,
		        autoplay:true,
		        loop:"ture",
		        speed:500,
		        autoplayDisableOnInteraction : false,
		    });
        }
    },
    mounted(){
        this.initSwiper();
    },
    created() {
      
    },
}
</script>

<style scoped>
img{
    width: 100%;
    
}
</style>
