import Mock from "mockjs"
let userInfo = [
    { id: 1, name: "admin", pass: "123", gender: "男", phone: "18856211812", email: "192166140@qq.com", date: "1999-12-02", userimg: require('../assets/img/my/user1.jpg') },
    { id: 2, name: "user", pass: "123", gender: "女", phone: "123456798321", email: "123456789@qq.com", date: "2002-12-02", userimg: require('../assets/img/my/wxguanjia-kf.png') },
    { id: 3, name: "user1", pass: "123", gender: "男", phone: "18002110543", email: "123456789@qq.com", date: "2010-02-03", userimg: require('../assets/img/my/user1.jpg') },
];
//省份
let kindList = [
    { name: "北京市", id: 1 }, { name: "天津市", id: 2 }, { name: "河北省", id: 3 }, { name: "山西省", id: 4 }, { name: "内蒙古自治区", id: 5 },
    { name: "辽宁省", id: 6 }, { name: "吉林省", id: 2 }, { name: "黑龙江省", id: 3 }, { name: "上海市", id: 4 }, { name: "江苏省", id: 5 },
    { name: "浙江省", id: 1 }, { name: "安徽省", id: 2 }, { name: "福建省", id: 3 }, { name: "江西省", id: 4 }, { name: "山东省", id: 5 },
    { name: "河南省", id: 1 }, { name: "湖北省", id: 2 }, { name: "湖南省", id: 3 }, { name: "广东省", id: 4 }, { name: "广西壮族自治区", id: 5 },
    { name: "海南省", id: 1 }, { name: "重庆市", id: 2 }, { name: "四川省", id: 3 }, { name: "贵州省", id: 4 }, { name: "云南省", id: 5 },
    { name: "西藏自治区", id: 1 }, { name: "陕西省", id: 2 }, { name: "甘肃省", id: 3 }, { name: "青海省", id: 4 }, { name: "宁夏回族自治区", id: 5 },
    { name: "新疆维吾尔自治区", id: 1 }, { name: "台湾省", id: 2 }, { name: "香港特别行政区", id: 3 }, { name: "澳门特别行政区", id: 4 },
]
let addressList = [
    { id: 1, name: '程俊蝶', phone: '18856211812', province: '江苏省', address: '南京市雨花区', code: '23600', def: 1, checked: false },
    { id: 2, name: '小明', phone: '12345678912', province: '上海市', address: '嘉定区徐航镇', code: '123456', def: 0, checked: false },
    { id: 3, name: '小红', phone: '97845632178', province: '安徽省', address: '阜阳市鄞州区颍上南路', code: '789456', def: 0, checked: false }
];
//显示所有省份信息
Mock.mock("/privoceinfo", kindList);

//登录
Mock.mock("/userlogin", "post", (options) => {
    let phone = JSON.parse(options.body).user.phone
    let pass = JSON.parse(options.body).user.pass
    for (let i = 0; i < userInfo.length; i++) {
        if (phone == userInfo[i].phone && pass == userInfo[i].pass) {
            let newuser = userInfo.filter(item => {
                return item.phone == phone
            })
            console.log("newuser", newuser)
            return {
                msg: "登录成功",
                datas: newuser
            }
        } else {
            return {
                msg: "登录失败",
            }
        }
    }
});
//注册
Mock.mock("/userregister", "post", (options) => {
    let phone = JSON.parse(options.body).user.phone;
    let pass = JSON.parse(options.body).user.pass;
    let pass1 = JSON.parse(options.body).user.pass1;
    for (let i = 0; i < userInfo.length; i++) {
        if (phone == userInfo[i].phone) {
            return {
                msg: "该用户名已存在",
                errNo: -1
            }
        } else {
            if (pass != pass1) {
                return {
                    msg: "密码不一致,请重新填写",
                    errNo: -1
                }
            } else {
                let idMax = userInfo[userInfo.length - 1].id + 1;
                userInfo.push({
                    id: idMax,
                    name: "",
                    phone: phone,
                    pass: pass,
                    gender: "",
                    email: "",
                    date: "",
                    userimg: ""
                })
                console.log("userInfo", userInfo)
                return {
                    msg: "注册成功",
                    errNo: 0
                }
            }
        }
    }
});
//忘记密码
Mock.mock("/forgetpass", "post", (options) => {
    let phone = JSON.parse(options.body).user.phone;
    let pass = JSON.parse(options.body).user.pass;
    let pass1 = JSON.parse(options.body).user.pass1;
    for (let i = 0; i < userInfo.length; i++) {
        if (phone != userInfo[i].phone) {
            return {
                msg: "未找到该用户名"
            }
        } else {
            userInfo[i].pass = pass
            console.log("userInfo", userInfo)
            return {
                msg: "修改密码成功",
                errNo: 0
            }
        }
    }

});
//显示一个用户
Mock.mock(RegExp("/oneuserinfo" + ".*"), "get", (options) => {
    //options变量名 里面包含url type body
    let id1 = options.url.split("?")[1].split("=")[1];
    //[0]将数组转为对象
    return userInfo.filter(item => item.id == id1)[0];
});
//修改用户
Mock.mock(RegExp("/upduser" + ".*"), "post", (user) => {
    //console.log("aaa", JSON.parse(user.body).user)
    let newuser = JSON.parse(user.body).user;
    for (let i = 0; i < userInfo.length; i++) {
        if (newuser.id == userInfo[i].id) {
            userInfo[i] = newuser
        }
    }
    return {
        msg: "修改用户成功"
    }
});

//将默认地址放在最上面
Mock.mock("/sitemanage", () => {
    let list1 = addressList.filter(item => item.def == 1);
    let list2 = addressList.filter(item => item.def == 0);
    addressList = list1.concat(...list2)
    return addressList;
});
//添加地址
Mock.mock("/addaddress", "post", (address) => {
    let idMax = addressList[addressList.length - 1].id + 1;
    //console.log("address", address)
    let newAddress = JSON.parse(address.body).address;
    addressList.push({
        id: idMax,
        name: newAddress.name,
        phone: newAddress.phone,
        province: newAddress.province,
        address: newAddress.address,
        code: newAddress.code,
        def: "0",
        checked: newAddress.checked
    })
    console.log("addressList", addressList)
    return {
        msg: "添加地址成功"
    }
});
//显示一条地址
Mock.mock(RegExp("/oneaddress" + ".*"), "get", (options) => {
    //options变量名 里面包含url type body
    let id1 = options.url.split("?")[1].split("=")[1];
    //[0]将数组转为对象
    return addressList.filter(item => item.id == id1)[0];
});
//修改地址
Mock.mock(RegExp("/updaddress" + ".*"), "post", (address) => {
    //JSON.parse(address.body).address
    let newaddress = JSON.parse(address.body).address;
    for (let i = 0; i < addressList.length; i++) {
        if (newaddress.id == addressList[i].id) {
            addressList[i] = newaddress
        }
    }
    return {
        msg: "修改地址成功"
    }
});
//删除地址
Mock.mock(RegExp("/deladdress" + ".*"), "get", (options) => {
    let id = options.url.split("?")[1].split("=")[1];
    console.log("id", id)
    for (let i = 0; i < addressList.length; i++) {
        if (addressList[i].id == id) {
            if (addressList[i].def == 1) {
                return {
                    msg: "默认地址不能删除"
                }
            } else {
                addressList.pop(addressList[i])
                console.log("addressList", addressList)
                return {
                    msg: "删除地址成功"
                }
            }
        }
    }

});
//设为默认地址
Mock.mock("/setdefault", "post", (address) => {
    let newaddress = JSON.parse(address.body).address;
    let id = newaddress.id;
    console.log("id", id)
    for (let i = 0; i < addressList.length; i++) {
        if (newaddress.id == addressList[i].id) {
            addressList[i].def = 1
        } else {
            addressList[i].def = 0
        }

    }
    return {
        msg: "修改默认地址成功"
    }
});