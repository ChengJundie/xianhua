<template>
  <div>
    <div class="mui-content" id="g-body">
      <div class="goods-list clearbox">
        <ul class="clearbox" id="shopcar" v-if="carData.length>0">
          <li v-for="(item,index) in carData" :key="index">
            <div class="img-box">
              <p>
                <input type="checkbox" name="rext" class="check" v-model="item.checked" value="item.id" />
              </p>
              <a href="#">
                <img :src="item.img" />
              </a>
            </div>
            <div class="cont">
              <div>
                <a href="#">{{item.name}}</a>
                <span class="mui-icon mui-icon-trash" @click="delFlower(index)"></span>
              </div>
              <div class="num">
                <p class="descp">
                  <span>数量</span>
                  <span class="jian" @click="subhandel(index)">-</span>
                  <input class="num-text" type="text" v-if="item.num" v-model="item.num" />
                  <span class="jia" @click="addhandel(index)">+</span>
                </p>
                <p class="price">
                  &yen;
                  <span>{{item.price}}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div class="none" v-else>购物车内暂时没有商品</div>
      </div>
      <!-- 相似商品 -->
      <similar-goods></similar-goods>
    </div>

    <!-- 结算 -->
    <div class="jie-suan">
      <p>
        合计：
        <span id="allprice">&yen;{{getAllPrice}}</span>
      </p>
      <p id="jieSuanBtn" @click="jieSuan">
        去结算(
        <span id="allnum">{{getNum}}</span>)
      </p>
    </div>
  </div>
</template>

<script>
import SimilarGoods from "./similargoods";
import { mapState } from "vuex";
export default {
  data() {
    return {
      checkAll:false
    };
  },
  components: {
    SimilarGoods,
  },
  computed: {
    ...mapState(["carData"]),
    //选中商品总数量
      getNum(){
          let num=0;
          for(let i=0;i<this.carData.length;i++){
              if(this.carData[i].checked){
                  num+=this.carData[i].num;
              }
          }
          return num;
      },
      //选中商品总价格
      getAllPrice(){
          let sum=0;
          for(let i=0;i<this.carData.length;i++){
              if(this.carData[i].checked){
                  sum+=(this.carData[i].num)*(this.carData[i].price);
              }
          }
          return sum;
      }
  },
  methods: {
    subhandel(idx) {
     this.carData[idx].num--;
      if (this.carData[idx].num <= 1) {
        this.carData[idx].num = 1;
        alert("不能再减了")
      }
      this.$store.dispatch("changeNum", this.carData[idx].num);
    },
    addhandel(idx) {
      this.carData[idx].num++;
      this.$store.dispatch("changeNum", this.carData[idx].num);
    },
    delFlower(idx) {
      console.log("idx",idx)
      if (confirm("确定删除该商品吗？")) {
        this.carData.splice(idx,1)
      }
    },
    //结算
    jieSuan(){
      let flag=false;
      for(let i=0;i<this.carData.length;i++){
        if(this.carData[i].checked){
          //console.log("this.carData[i]",this.carData[i])
            this.$store.dispatch("jieSuan",this.carData[i]);
            flag=true;  
        }
      }
      if(flag){
        this.$router.push("/order")
      }else{
        alert("您还没有选择任何商品")
      }
    }
  },
};
</script>

<style scoped>
.none {
  width: 100%;
  height: 100px;
  background-color: #fff;
  text-align: center;
  line-height: 100px;
}
#g-body .goods-list {
  width: 100%;
  margin-bottom: 1.875rem;
}

#g-body .goods-list ul {
  width: 100%;
  margin: 0rem auto;
}

#g-body .goods-list ul.active {
  background-color: #fff;
  text-align: center;
  height: 6.25rem;
  line-height: 6.25rem;
}

#g-body .goods-list ul li {
  width: 100%;
  border-top: 0.0625rem solid #e9ecf0;
  border-bottom: 0.0625rem solid #e9ecf0;
  padding: 0.5rem 0.625rem;
  background-color: white;
  height: 100%;
  padding-bottom: 1.25rem;
}

#g-body .goods-list ul li div.img-box > p {
  width: 15%;
}

#g-body .goods-list ul li div.img-box > p > input {
  width: 0.9375rem;
  height: 0.9375rem;
  border-radius: 50%;
  display: block;
  float: left;
  margin-top: 1.875rem;
  margin-left: 0.625rem;
}

#g-body .goods-list ul li div.img-box > a {
  width: 35%;
  display: block;
  float: left;
  padding: 0px 0.625rem;
}

#g-body .goods-list ul li div.img-box > a > img {
  width: 100%;
}

#g-body .goods-list ul li div.cont div:nth-of-type(1) a {
  color: #3c3c3c;
}

#g-body .goods-list ul li div.cont div:nth-of-type(1) span {
  font-size: 1rem;
  float: right;
  padding-right: 0.625rem;
}

#g-body .goods-list ul li div.cont div.num > p.descp {
  margin-top: 0.9375rem;
  height: 1.875rem;
}

#g-body .goods-list ul li div.cont div.num > p.descp > span.mui-icon {
  font-size: 0.6875rem;
}

#g-body .goods-list ul li div.cont div.num > p.descp > span:nth-of-type(1) {
  font-size: 14px;
  color: #3c3c3c;
  float: left;
}

#g-body .goods-list ul li div.cont div.num > p.descp > span:nth-of-type(2) {
  margin-left: 0.9375rem;
}

#g-body .goods-list ul li div.cont div.num > p.descp > span:nth-of-type(2),
#g-body .goods-list ul li div.cont div.num > p.descp > span:nth-of-type(3) {
  width: 1.125rem;
  height: 1.25rem;
  text-align: center;
  line-height: 1.25rem;
  display: block;
  float: left;
  border: 0.0625rem solid #e9ecf0;
  background-color: #f7f9fa;
  cursor: pointer;
}

#g-body .goods-list ul li div.cont div.num > p.price {
  color: #ff0000;
  font-size: 1rem;
}

#g-body .goods-list ul li div.cont div.num > p.descp > input {
  width: 2.1875rem;
  height: 0.9375rem;
  border: none;
  border-top: 0.0625rem solid #e9ecf0;
  border-bottom: 0.0625rem solid #e9ecf0;
  background-color: #f7f9fa;
  float: left;
  color: #3c3c3c;
}
#g-body {
  margin-top: 50px;
}
.jie-suan {
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  bottom: 50px;
  left: 0px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 99;
}
.jie-suan p:nth-child(1) {
  width: 25%;
  height: 50px;
  float: left;
  text-align: center;
  line-height: 50px;
  color: #3c3c3c;
}
.jie-suan p:nth-child(1) span {
  color: #ff0000;
  font-size: 18px;
}
.jie-suan p:nth-child(2) {
  width: 25%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  float: right;
  background-color: #ff734c;
}
</style>
