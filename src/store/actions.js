import {
    LOVEFLOWER,
    PARENTFLOWER,
    ONEFLOWER,
    CATEGORYINFO,
    USERINFO,
    ADDCAR,
    JIESUAN,
    ADDRESSINFO,
    ONEADDRESS
} from "./mutation-type";
import { reqDeliverLove, reqDeliverParent, reqCategoryInfo } from "../api/index.js";
import { reqAllAddress } from "../api/server.js";

export default {
    //送恋人/爱情鲜花
    async getLoveFlower(context) {
        const loveflower = await reqDeliverLove();
        context.commit(LOVEFLOWER, loveflower);
    },
    //送长辈鲜花
    async getParentFlower(context) {
        const parentflower = await reqDeliverParent();
        context.commit(PARENTFLOWER, parentflower);
    },
    //一条新品信息
    getOneFlower(context, oneflower) {
        context.commit(ONEFLOWER, oneflower);
    },
    //分类信息
    async getCategoryInfo(context) {
        const categoryinfo = await reqCategoryInfo();
        context.commit(CATEGORYINFO, categoryinfo);
    },
    //用户登录信息
    getUserInfo(context, userinfo) {
        context.commit(USERINFO, userinfo);
    },
    //添加购物车
    addCar(context, oneflower) {
        context.commit(ADDCAR, oneflower);
    },
    //改变数量
    changeNum(context, num) {
        context.commit("changeNum", num);
    },
    //删除商品
    delFlower(context, oneflower) {
        context.commit("delFlower", oneflower);
    },
    //判断商品是否在购物车
    isCarData(context, oneflower) {
        context.commit("isCarData", oneflower);
    },
    //结算
    jieSuan(context, oneflower) {
        context.commit(JIESUAN, oneflower);
    },

    //显示所有地址 mock
    async showAddress(context) {
        const addressinfo = await reqAllAddress();
        context.commit(ADDRESSINFO, addressinfo);
    },
    //添加地址
    addAddress(context, addaddress) {
        context.commit(ADDADDRESS, addaddress);
    },
    //接收一条地址信息
    oneAddressInfo(context, oneaddress) {
        context.commit(ONEADDRESS, oneaddress);
    }
}