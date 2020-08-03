<template>
  <div class="descp-cont clearbox">
    <div class="box1">
        <ul>
            <li><label>花语</label> <span>{{oneflower.huayu}}</span></li>
            <li><label>材料</label> <span>{{oneflower.metarial}}</span></li>
            <li><label>配送</label> <span>全国(小城市请提前一天预定)</span></li>
            <li><label>附送</label> <span>下单填写留言，即免费赠送精美贺卡！</span></li>
            <li>
                <label>已选</label>
                <span class="title">{{oneflower.name}}</span>
                <span class="iconfont icon-shenglvehao"></span>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  props:["oneflower"],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
