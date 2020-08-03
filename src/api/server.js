import myajax from "./myajax";
//显示所有省份信息
export const reqProviceInfo = () => myajax("/privoceinfo");

//登录
export const reqLogin = (user) => myajax("/userlogin", { user }, "POST");
//注册
export const reqRegister = (user) => myajax("/userregister", { user }, "POST");
//忘记密码
export const reqForgetPass = (user) => myajax("/forgetpass", { user }, "POST");
//修改用户
export const reqUpdUser = (user) => myajax("/upduser", { user }, "POST ");


//显示所有地址信息
export const reqAllAddress = () => myajax("/sitemanage");
//添加地址
export const AddAddress = (address) => myajax("/addaddress", { address }, "POST");
//根据id显示一条地址
export const oneAddress = (id) => myajax("/oneaddress", { id }, "GET");
//修改地址
export const updAddress = (address) => myajax("/updaddress", { address }, "POST ");
//删除地址
export const delAddress = (id) => myajax("/deladdress", { id }, "GET");
//修改默认地址
export const setDefault = (address) => myajax("/setdefault", { address }, "POST");