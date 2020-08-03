<template>
  <div>
    <div class="mui-content" id="g-body">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <router-link to="/manageaddress" class="mui-navigate-right">
            收货人
            <div id="sure" class="fr">
              <p>
                <b>{{oneAddress.name}}</b>
                {{oneAddress.phone}}
              </p>
              <p>{{oneAddress.province}}{{oneAddress.address}}</p>
            </div>
          </router-link>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right" >
            送达日期
				<router-link style="position:relative;" to="/date" tag="span" class="fr date">
					<input  type="text" @click="openByDrop($event)" v-model="calendar3.display" readonly>
					<transition name="fade">
						<div class="calendar-dropdown" :style="{'left':calendar3.left+'px','top':calendar3.top+'px'}" v-if="calendar3.show">
							<calendar :zero="calendar3.zero" :lunar="calendar3.lunar" :value="calendar3.value" :begin="calendar3.begin" :end="calendar3.end" @select="calendar3.select"></calendar>
						</div>
					</transition>
				</router-link>
				
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            订购人信息
            <span class="fr" id="tian-phone">{{userInfo[0].phone}}</span>
            <span class="fr" id="tianxie">{{userInfo[0].name}}</span>
          </a>
        </li>
      </ul>
      <ul class="mui-table-view" id="heka">
        <li class="mui-table-view-cell">
          <!-- <a class="mui-navigate-right"> -->
          贺卡
          <span class="fr noness active">无需贺卡</span>
          <span class="fr ness">纸质贺卡</span>
          <div class="cover">
            <textarea rows="4" cols="20" placeholder="写上您的祝福语,可附上署名(200字内),
							请勿填写特殊符号和表情符号"></textarea>
          </div>
          <!-- </a> -->
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <ul class="mui-table-view" id="showgoodsMsg">
              <li
                class="mui-table-view-cell mui-media"
                v-for="(item,index) in jieSuanData"
                :key="index"
              >
                <a href="javascript:;">
                  <img class="mui-media-object mui-pull-left" :src="item.img" />
                  <div class="mui-media-body">
                    {{item.name}}
                    <span class="fr">&yen;{{item.price}}</span>
                    <p class="mui-ellipsis">
                      <span class="iconfont icon-chenghao"></span>
                      {{item.count}}
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            优惠券/权益卡
            <span class="fr">请选择送达日期后用券</span>
          </a>
        </li>
      </ul>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            发票
            <span class="fr">选填</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            备注
            <input type="text" placeholder="选填" />
          </a>
        </li>
      </ul>
    </div>
    <div id="bottom">
      <ul>
        <li>
          <p>
            应付:
            <span id="fu">&yen;{{getAllPrice}}</span>
          </p>
        </li>
        <li>
          <input type="button" id="btn" value="提交订单" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import calendar from "./calendar.vue";
export default {
  data() {
    return {
	  userInfo: [],
	  calendar3:{
                display:"2020/07/26",
                show:false,
                zero:true,
                value:[2020,7,25], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            },
    };
  },
  components: {
        calendar
	},
	methods: {
		 openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;
           
            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                    this.calendar3.show=false;
                    document.removeEventListener("click",()=>{},false);
                },false);
            },1000)
        },
	},
  computed: {
    ...mapState(["jieSuanData", "oneAddress"]),
    getAllPrice() {
      let sum = 0;
      for (let i = 0; i < this.jieSuanData.length; i++) {
        sum += this.jieSuanData[i].count * this.jieSuanData[i].price;
      }
      return sum;
    },
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    //console.log("this.userInfo", this.userInfo);
  },
};
</script>

<style scoped>
@import "../../assets/css/dingdan/dingdan.css";
.date input{
    background-color: #fff;
	box-sizing: border-box;
	text-align: right;
    width:60;
    border:none;
    padding:10px;
    font-size: 16px;
	padding-left: 36px;
	color:#666;
	margin-top: -10px;
}

/*transition*/
.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-in-out;
}
.fade-enter,.fade-leave-active{
    opacity: 0;
    transform: translateY(-10px);

}

/*下拉框*/
.calendar-dropdown{
    background: #fff;
    /* position: absolute;
    right: 30px;
    top:30px; */
    border: 1px solid #eee;
	border-radius: 2px;
	z-index: 99999;
	background-color: #fff;
}
.calendar-dropdown:before {
    position: absolute;
    left:30px;
    top: -10px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #DEDEDE;
}
.calendar-dropdown:after {
    position: absolute;
    left:30px;
    top: -9px;
    content: "";
    border:5px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
}

/*弹出框*/
.calendar-dialog{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
}

.calendar-dialog-mask{
    background:rgba(255,255,255,.5);
    width:100%;
    height:100%;
}

.calendar-dialog-body{
    background: #fff;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding:20px;
    border: 1px solid #eee;
    border-radius: 2px;
}
#bottom {
  position: fixed;
  bottom: 0rem;
  left: 0rem;
  right: 0rem;
  background-color: #fff;
  z-index: 999;
  height: 2.5rem;
}

#bottom > ul {
  display: flex;
  justify-content: space-around;
}

#bottom > ul > li {
  width: 50%;
}

#bottom > ul > li:first-child > p {
  width: 100%;
  text-align: center;
  height: 2.5rem;
  color: #3c3c3c;
  font-size: 1rem;
  line-height: 2.5rem;
}

#bottom > ul > li:first-child > p > span {
  color: #ff0000;
}

#bottom > ul > li:last-child {
  text-align: right;
}

#bottom > ul > li:last-child > input {
  width: 60%;
  height: 1.875rem;
  background-color: #ff734c;
  color: #fff;
  border-radius: 1.25rem;
  border: none;
  margin-top: 0.3125rem;
  margin-right: 1.25rem;
}

</style>
