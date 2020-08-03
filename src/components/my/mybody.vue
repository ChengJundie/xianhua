<template>
  <div class="cont-box">
    <!-- 订单 -->
    <div class="order">
      <div class="box">
        <div class="box-top">
          <span>我的订单</span>
          <a href="#">
            全部订单
            <span class="mui-icon mui-icon-arrowright"></span>
          </a>
        </div>
        <div class="box-bot">
          <ul>
            <li>
              <img src="../../assets/img/my/order1.png" />
              <p>待付款</p>
            </li>
            <li>
              <img src="../../assets/img/my/order2.png" />
              <p>今日配送</p>
            </li>
            <li>
              <img src="../../assets/img/my/order3.png" />
              <p>待评价</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 权益 -->
    <div class="legal">
      <div class="box">
        <div class="box-top">
          <ul>
            <li>
              <span class="iconfont icon-coupon"></span>
              <p>优惠券</p>
            </li>
            <li>
              <span class="iconfont icon-wodekapian"></span>
              <p>权益卡</p>
            </li>
            <li>
              <span class="iconfont icon-zuanshi"></span>
              <p>会员积分</p>
            </li>
            <li>
              <span class="iconfont icon-naozhong"></span>
              <p>生日纪念提醒</p>
            </li>
          </ul>
        </div>
        <div class="box-bot">
          <ul>
            <li>
              <span class="iconfont icon-xingxing"></span>
              <p>我的搜藏</p>
            </li>
            <li>
              <span class="iconfont icon-address_icon"></span>
              <p>收货地址</p>
            </li>
            <li>
              <span class="iconfont icon-yue"></span>
              <p>余额</p>
            </li>
            <li>
              <span class="iconfont icon-shizhong"></span>
              <p>浏览记录</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 设置 -->
    <div class="set-box">
      <div class="set">
        <ul>
          <li>
            <a href="#">
              <span class="iconfont icon-kefu"></span>
              <p>联系客服</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="iconfont icon-bangzhu"></span>
              <p>帮助中心</p>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="iconfont icon-guanyu"></span>
              <p>关于花礼</p>
            </a>
          </li>
          <li>
          <router-link to="/setting">
              <span class="iconfont icon-shezhi"></span>
              <p>设置</p>
           </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import '../../assets/css/my/my.css'
</style>
