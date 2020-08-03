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
import Vue from "vue";
export default {
    //送恋人/爱情鲜花
    [LOVEFLOWER](state, loveflower) {
        state.loveFlower = loveflower;
    },
    //送长辈鲜花
    [PARENTFLOWER](state, parentflower) {
        state.parentFlower = parentflower;
    },
    //一朵鲜花
    [ONEFLOWER](state, oneflower) {
        state.oneFlower = oneflower;
    },
    //分类信息
    [CATEGORYINFO](state, categoryinfo) {
        state.categoryInfo = categoryinfo;
    },
    //用户登录信息
    [USERINFO](state, userinfo) {
        state.userInfo = userinfo;
    },
    //添加购物车
    [ADDCAR](state, oneflower) {
        //有count++ 没有 加入carData
        let flag = true;
        state.carData.forEach(item => {
            if (item.id === oneflower.id) {
                item.aa += oneflower.count;
                flag = false;
            }
        })
        if (flag) {
            //直接添加属性
            Vue.set(oneflower, "aa", oneflower.count)
            state.carData.push(oneflower)
        }
    },
    //改变数量
    changeNum(state, num) {
        state.oneFlower.count = num
    },
    //删除商品
    delFlower(state, oneflower) {
        state.carData.forEach(item => {
            if (item.id === oneflower.id) {
                state.carData.pop(oneflower)
            }
        })
    },
    //判断商品是否在购物车
    isCarData(state, oneflower) {
        state.carData.forEach(item => {
            if (item.id === oneflower.id) {
                alert("该商品已在购物车");
            }
        })
    },
    //结算
    [JIESUAN](state, oneflower) {
        if (state.jieSuanData.length == 0) {
            state.jieSuanData.push(oneflower)
        } else {
            state.jieSuanData.forEach(item => {
                if (item.id === oneflower.id) {
                    item.num++
                } else {
                    state.jieSuanData.push(oneflower)
                }
            })
        }
    },


    //显示所有地址
    [ADDRESSINFO](state, addressinfo) {
        state.addressInfo = addressinfo;

    },
    //显示一条地址信息
    [ONEADDRESS](state, oneaddress) {
        state.oneAddress = oneaddress;

    },

}