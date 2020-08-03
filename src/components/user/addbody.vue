<template>
  <div class="mui-content" id="g-body">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						收货人：
						<input class="rext" type="text" v-model="address.name"  placeholder="请填写真实姓名,避免无法配送" />
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 手机号码：
						 <input class="rext" type="text" v-model="address.phone" placeholder="收货人手机号码"/>
					</a>
				</li>
                <li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 省份：
						 <select class="g-select" v-model="address.province">
                            <option value="">请选择省份</option>
                            <option v-for="(item,index) in kindList" v-bind:value="item.name" v-text="item.name" :key="index" ></option>
                        </select>
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						 详细地址：
						 <input class="rext" type="text" v-model="address.address"  placeholder="收货人详细地址" />
					</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right">
						<input type="checkbox" class="default">
						<span id="setDefaule">设为默认</span>
					</a>
				</li>
			</ul>
			<p><input type="button" @click="saveAddress" value="保存并使用" /></p>
		</div>
</template>

<script>
import {reqProviceInfo,AddAddress} from "@/api/server.js"
import {mapState} from "vuex"
export default {
  data () {
    return {
        kindList:[]
    }
  },
  computed: {
	  ...mapState(["address"])
  },
  methods: {
	    async saveAddress(){
            let result = await AddAddress(this.address);
            alert(result.msg)
			this.$router.push("/manageaddress");
		}
  },
  async created() {
      this.kindList=await reqProviceInfo();
  },
}
</script>

<style scoped>
@import "../../assets/css/addAddress.css";
.default{
    margin-top: 6px;
}
.rext{
    width:70%;
}
select{
	width: 70%;
}
</style>
