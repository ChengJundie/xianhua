import myajax from "./myajax";
//显示轮播图片
export const reqIndexSwiper = () => myajax("/indexswiper");
//显示所有送恋人/爱情鲜花
export const reqDeliverLove = () => myajax("/deliverlove");
//显示一朵花
export const reqOneFlower = (id) => myajax("/oneflower", { id });
//显示所有送长辈鲜花
export const reqDeliverParent = () => myajax("/deliverparent");
//显示所有推荐中的花信息
export const reqRecommendFlower = () => myajax("/recommendflower");
//显示所有分类信息
export const reqCategoryInfo = () => myajax("/categoryinfo");
//根据id显示所有花现信息
export const reqHuaInfo = (id) => myajax("/huaxianinfo", { id });
//根据id显示不同相似商品
export const reqSimilatGoodsInfo = (id) => myajax("/similiargoods", { id });
//根据选择显示商品id销量，综合，价格，最新
export const reqSort = (id) => myajax("/showlist", { id }, "GET");