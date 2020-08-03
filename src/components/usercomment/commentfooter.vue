<template>
  <div id="apr-footer">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<ul class="mui-table-view" id="goods" v-if="oneFlower">
                            <li class="mui-table-view-cell mui-media">
								<a href="javascript:;">
									<img class="mui-media-object mui-pull-left" :src="oneFlower.img">
									<div class="mui-media-body">
										{{oneFlower.name}}
										<p class="mui-ellipsis">&yen;{{oneFlower.price}}</p>
									</div>
								</a>
							</li>
						</ul>
					</a>
				</li>
				<li class="mui-table-view-cell" @click="addCar">
					<a class="mui-navigate-right" >
						加入购物车
					</a>
				</li>

			</ul>
		</div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data () {
    return {
    }
  },
  computed: {
      ...mapState(["oneFlower"])
  },
  methods: {
	  //先判断是否登录
    isLogin() {
      let userinfo = JSON.parse(localStorage.getItem("user")) || [];
      if (userinfo.length < 1) {
        alert("请先登录");
        return false;
      }
      return true;
    },
    //如果已经登录就加入购物车
    async addCar() {
      let flag = this.isLogin();
      if (flag) {
        //判断该商品是否已经在购物车
        //this.$store.dispatch("isCarData", this.oneFlower);
        alert("已加入购物车！");
        if (!this.oneFlower.count) {
          this.$store.dispatch("changeNum", 1);
        }
        //发送添加购物信息请求
        this.$store.dispatch("addCar", this.oneFlower);
      }
    },
  },
}
</script>

<style scoped>
#apr-footer{
	position: fixed;
	bottom: 1.125rem;
	left: 0rem;
	right: 0rem;
	width: 100%;
	background: #fff;
	height: 1.875rem;
	z-index: 999;
}
#apr-footer>ul>li:first-child{
	width: 50%;
	background-color: pink;
	padding: 0rem;
}
#apr-footer>ul>li:first-child #goods{
	padding-top: 0.3125rem;
}
#apr-footer>ul>li:first-child #goods>li>a>div>p{
	color: #FF0000;
	font-size: 0.875rem;
}
#apr-footer>ul>li:last-child{
	width: 50%;
	background-color: yellow;
	text-align: center;
	line-height: 1.875rem;
	color: #fff;
	background-color: #FF6E0D;
}
#apr-footer>ul{
	display: flex;
	justify-content: space-around;
}
#apr-footer>ul::after{
	background-color: transparent;
}
#apr-footer>ul>li>a::after{
	content: '';
}
#apr-footer>ul>li::after{
	background-color: transparent;
}
#apr-footer #goods::after,
#apr-footer #goods::before{
	background-color: transparent;
}
#apr-footer #goods>a::after{
	content: '';
}
#apr-footer #goods>li>a::after{
	content: '';
}
</style>
