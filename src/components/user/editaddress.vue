<template>
    
  <div>
   <edit-header></edit-header>
    <!-- 内容框 -->
    <div class="zy_module-content" id="g-body">
      <div class="vip_user_addr_new vip_user_addr_dizhi">
        <div class="box dizhi_new">
          <form>
            <div class="txt">
              <h2>
                <input type="hidden" v-model="address.id">
                <input type="text" v-model="address.name"  value=""/>
              </h2>
              <h2>
                <input type="text" v-model="address.phone" value="" />
              </h2>
              <select class="g-select">
                <option selected v-text="address.province" >省份</option>
                <option
                  v-for="(item,index) in kindList"
                  v-bind:value="item.id"
                  v-text="item.name"
                  :key="index"
                ></option>
              </select>
              <h2>
                <input type="text" v-model="address.address" value="" />
              </h2>
              <h2>
                <input type="text" v-model="address.code" value="" />
              </h2>
            </div>
            <div class="dizhi_foot dis_flex">
              <a @click="deladdress">删除</a>
              <h2>
                <span @click="updDefault">设为默认收货地址</span>
                <!-- <input type="button" @onclick="saveUpd" value="保存更改" /> -->
				      <span @click="saveUpd">保存更改</span>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditHeader from "./editheader"
import {reqProviceInfo, oneAddress,updAddress,delAddress ,setDefault} from "@/api/server.js";
export default {
  data() {
    return {
        kindList:[],
       address: {
        name: "",
        phone: "",
        school: "",
        address: "",
        code: "",
        def: "0"
    }
    };
  }, 
  components:{
    EditHeader
  },
  methods: {
    //修改地址
   async saveUpd(){
        this.address=await updAddress(this.address)
        alert(this.address.msg)
        this.$router.push("/manageaddress")
     },
     //删除地址
    async deladdress(){
      if(confirm("是否确定删除该地址")){
          let Msg=await delAddress(this.address.id);
        alert(Msg.msg)
        this.$router.push("/manageaddress")
      }
     },
     //修改默认地址
    async updDefault(){
      let Msg = await setDefault(this.address);
       alert(Msg.msg)
       //将默认地址放在最前面
        await setDefault(this.address)
       this.$router.push("/manageaddress")
    },
  },
  async created(){
    let id=this.$route.query.id;
    this.address=await oneAddress(id);
    this.kindList = await reqProviceInfo()
  },
}
</script>

<style scoped>
#g-body{
    margin-top: 50px;
}
.g-select {
  width: 100%;
  padding: 0 1%;
  border: #ddd solid 1px;
  font-size: 16px;
  line-height: 240%;
  border-radius: 0.08rem;
  color: #3c3c3c;
  padding-left: 20px;
}
/*地址设置*/
.vip_user_addr_dizhi {
  margin-bottom: 5%;
}
.vip_user_addr_new .dizhi_foot {
  padding: 2%;
  background-color: #FF734C;
  width: 96%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
}
.vip_user_addr_new .dizhi_foot > a {
  background: url(../../assets/img/icon_xdel.png) no-repeat center left;
  background-size: 16px;
  padding-left: 20px;
  font-size: 16px;
  color: #fff;
  line-height: 150%;
 margin-top: 10px;
 float: left;
}
.vip_user_addr_new .dizhi_foot h2 {
  width: 80%;
  float: right;
  text-align: right;
}
.vip_user_addr_new .dizhi_foot h2 span {
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  border: #fff solid 1px;
  line-height: 40px;
  padding: 0 5%;
  display: inline-block;
  margin-right: 1%;
}
.vip_user_addr_new .dizhi_foot h2 input {
  color: #fff;
  border-radius: 0.08rem;
  font-size: 0.24rem;
  border: #fff solid 1px;
  line-height: 270%;
  padding: 0 5%;
  display: inline-block;
  vertical-align: middle;
  background-color: #FF734C;
}
/*添加新地址*/
.vip_user_addr_new .box form > div.txt {
  margin: 0 0 4%;
  padding: 5% 4%;
  background: url(../../assets/img/line_botm.jpg) no-repeat center bottom
    #fff;
  background-size: 100% 3px;
}
.vip_user_addr_new .box .txt h2 {
  margin: 2% 0;
}
.vip_user_addr_new .box .txt h2 input {
  width: 98%;
  padding: 0 1%;
  border: #ddd solid 1px;
  font-size: 16px;
  line-height: 240%;
  border-radius: 0.08rem;
  font-weight: 500;
  color: #3c3c3c;
  padding-left: 20px;
}
.vip_user_addr_new .box .txt h2 input:focus {
  border-color: #e00400;
}
.pick-area {
  border: #ddd solid 1px;
  border-radius: 0.1rem;
  width: 100% !important;
  line-height: 240%;
  font-size: 0.26rem;
  color: #666;
  position: relative;
}
.pick-area {
  margin-bottom: 2%;
}
.pick-area .pick-show {
  position: relative;
  padding: 0 1% !important;
}
.pick-show i {
  margin: 0 1%;
}
.pick-show span.pressActive {
  background: #999;
  color: #fff !important;
  border-radius: 0.06rem;
}
.pick-area em.pick-arrow {
  position: absolute;
  top: 50%;
  margin-top: -0.05rem;
  right: 0;
  display: block;
  border: 0.1rem solid #999;
  border-left: 0.1rem solid transparent;
  border-right: 0.1rem solid transparent;
  border-bottom: 0.1rem solid transparent;
}
.pick-area .pick-list {
  display: none;
  position: absolute;
  left: -1px;
  line-height: 240%;
  margin: 0;
  padding: 0;
  background: #fff;
  z-index: 99;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ddd;
  border-top: none;
  width: 100% !important;
  max-height: 250px !important;
}
.pick-area .pick-list li {
  margin: 0;
  list-style: none;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pick-area .pick-list li.pick-selectedLi {
  font-weight: normal !important;
}

.vip_user_addr_new .dizhi_new button {
  color: #fff;
  border-radius: 0.08rem;
  font-size: 0.24rem;
  border: #fff solid 1px;
  line-height: 270%;
  padding: 0 5%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 1%;
  background-color: transparent;
}
</style>
