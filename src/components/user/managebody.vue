<template>
  <div class="mui-content" id="g-body">
			<ul class="mui-table-view" id="showaddress">
                <li class="mui-table-view-cell mui-media" v-for="item in addressInfo" :key="item.index">
					<a href="javascript:;">
						<input type="checkbox" name="rext" class="fl check" value="item.id" v-model="item.checked"/>
						<div class="mui-media-body">
							<div>
								<p>
									{{item.name}} {{item.phone}}
									
									<span class="def" v-if="item.def==1">默认</span>
								</p>
								<router-link :to="{path:'editaddress',query:{id:item.id}}" class="mui-icon mui-icon-compose fr" tag="span"></router-link> 
							</div>
							<p class="mui-ellipsis">{{item.provice}} {{item.address}}</p>
						</div>
					</a>
				</li>
			</ul>
			<p><input type="button" @click="addAddress" id="btn" value="+ 新建地址" /></p>
			<p><input type="button"  id="btn1"  @click="selectAddress" value="选择地址" /></p>
		</div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  data () {
    return {
    }
  },
  computed: {
      ...mapState(["addressInfo"])
  },
  methods: {
      addAddress(){
          this.$router.push("/addaddress")
      },
	  ...mapActions(["showAddress"]),
	  editAddress(){
		  this.$router.push("/editaddress")
	  },
	  selectAddress(){
		  for(let i=0;i<this.addressInfo.length;i++){
              if(this.addressInfo[i].checked){
                  this.$store.dispatch("oneAddressInfo",this.addressInfo[i])
              }
		  }
		  this.$router.push("/order")
	  }
  },
  created() {
      this.showAddress();
  },
}
</script>

<style scoped>
@import "../../assets/css/manageAddress/manageAddress.css"
</style>
