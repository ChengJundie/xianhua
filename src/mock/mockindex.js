import Mock from "mockjs"
//首页轮播图片
let swiperData = [
    require('../assets/img/index/swrap1.jpg'),
    require('../assets/img/index/swrap2.jpg'),
    require('../assets/img/index/swrap3.jpg'),
    require('../assets/img/index/swrap4.jpg'),
];
//所有送恋人/爱情鲜花
let LoveFlowerData = [{
        id: 1,
        img: require('../assets/img/index/s-love5.jpg'),
        name: "满天星-浅粉",
        descp: "满天星1扎",
        honor: "新品特价",
        style: "满天星辰，只因有你",
        price: 194,
        fallprice: 256,
        sell: 2039,
        num: 1,
        checked: false,
        huayu: "我携满天星辰赠你，好教你不逊色人间错落烟火；只有这满天星辰，足够与你相配。",
        metarial: "浅粉满天星1扎",
        swiperimg: [
            require('../assets/img/detail/slip-a1.jpg'),
            require('../assets/img/detail/slip-a2.jpg'),
            require('../assets/img/detail/slip-a3.jpg'),
            require('../assets/img/detail/slip-a4.jpg'),
        ],
        commentlist: [{
                id: 1,
                userimg: require('../assets/img/detail/us-01.jpeg'),
                username: "缪*彬",
                descp: "好评，朋友很喜欢，而且送花的很负责，因为朋友下班晚，还一直电话确认，让收到花一定要回复一下，很负责，很好的服务！值得点赞",
                pic1: require('../assets/img/detail/us-01.jpeg'),
                pic2: require('../assets/img/detail/us-02.jpeg'),
                pic3: "",
                address: "上海闵行区",
                date: "2020-05-20"
            },
            {
                id: 2,
                userimg: require('../assets/img/detail/us-03.jpg'),
                username: "小*伊",
                descp: "太棒啦，我妈很满足哦！(＊︶＊).。.:＊第二张是原相机哦",
                pic1: require('../assets/img/detail/us-03.jpg'),
                pic2: require('../assets/img/detail/us-04.jpg'),
                pic3: "",
                address: "辽宁省鞍山市铁东区",
                date: "2020-03-19"
            },
            {
                id: 3,
                userimg: require('../assets/img/detail/user3.png'),
                username: "L*0",
                descp: "花的质量不错",
                pic1: require('../assets/img/detail/us-06.jpg'),
                pic2: "",
                pic3: "",
                address: "江苏省南京市玄武区",
                date: "2020-03-16"
            },
            {
                id: 4,
                userimg: require('../assets/img/detail/user4.jpg'),
                username: "竹*",
                descp: "妈妈的生日礼物~很漂亮，妈妈很喜欢！每年都在这里订花，方便又多选择！点赞！",
                pic1: require('../assets/img/detail/us-07.jpeg'),
                pic2: "",
                pic3: "",
                address: "广东深圳市龙岗区",
                date: "2020-03-14"
            },
            {
                id: 5,
                userimg: require('../assets/img/detail/user5.jpg'),
                username: "?*",
                descp: "挺大一束，好评，谢谢，辛苦了",
                pic1: require('../assets/img/detail/us-08.jpeg'),
                pic2: require('../assets/img/detail/us-09.jpeg'),
                pic3: "",
                address: "广东河源市源城区",
                date: "2020-02-20"
            },
            {
                id: 6,
                userimg: require('../assets/img/detail/user6.png'),
                username: "青*",
                descp: "花太美了，很新鲜！送给自己的，心情美美哒～",
                pic1: require('../assets/img/detail/us-10.jpeg'),
                pic2: "",
                pic3: "",
                address: "江苏盐城市亭湖区",
                date: "2020-02-19"
            },
            {
                id: 7,
                userimg: require('../assets/img/detail/user7.jpg'),
                username: "农民工*学生",
                descp: "很漂亮，很喜欢 ",
                pic1: require('../assets/img/detail/us-11.jpeg'),
                pic2: "",
                pic3: "",
                address: "浙江嘉兴市南湖区",
                date: "2020-02-15"
            },
            {
                id: 8,
                userimg: require('../assets/img/detail/user8.jpg'),
                username: "Du*e",
                descp: "不错的购物体验，送货及时服务态度好",
                pic1: require('../assets/img/detail/us-12.jpg'),
                pic2: "",
                pic3: "",
                address: "云南昆明市盘龙区",
                date: "2020-02-02"
            }
        ],
        imglist: [
            require('../assets/img/detail/img-font1.jpg'),
            require('../assets/img/detail/img-font2.jpg'),
            require('../assets/img/detail/img-font3.jpg'),
            require('../assets/img/detail/img-font4.jpg'),
            require('../assets/img/detail/img-font5.jpg'),
            require('../assets/img/detail/img-font6.jpg'),
            require('../assets/img/detail/img-font7.jpg'),
            require('../assets/img/detail/img-font8.jpg'),
            require('../assets/img/detail/img-font9.jpg'),
            require('../assets/img/detail/img-font10.jpg'),
            require('../assets/img/detail/img-font11.jpg'),
        ]
    },
    {
        id: 2,
        img: require('../assets/img/index/s-love2.jpg'),
        name: "一心一意",
        descp: "玫瑰11枝，粉色勿忘我0.3扎",
        honor: "畅销爆款",
        style: "经典款式 精选爆款",
        price: 135,
        fallprice: 189,
        sell: 125000,
        num: 1,
        checked: false,
        huayu: "11枝玫瑰，寓意一心一意！有情之人，天天是节。一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋。",
        metarial: "红玫瑰11枝，粉色(或者浅紫色）勿忘我0.3扎，栀子叶8枝",
        swiperimg: [
            require('../assets/img/detail/slip-b1.jpg'),
            require('../assets/img/detail/slip-b2.jpg'),
            require('../assets/img/detail/slip-b3.jpg'),
            require('../assets/img/detail/slip-b4.jpg'),
        ],
        commentlist: [{
                id: 1,
                userimg: require('../assets/img/detail/user-b1.png'),
                username: "念*",
                descp: "时间挺准的，就是不送上楼有点不开心，不过还是很惊喜的",
                pic1: require('../assets/img/detail/ub-01.jpeg'),
                pic2: require('../assets/img/detail/ub-02.jpeg'),
                pic3: require('../assets/img/detail/ub-03.jpeg'),
                address: "云南昆明市安宁市",
                date: "2020-05-20"
            },
            {
                id: 2,
                userimg: require('../assets/img/detail/user-b2.jpg'),
                username: "王*",
                descp: "今天我生命里的两个人都送的花，收到后都很喜欢，及时送达，下次有事情这个也方便",
                pic1: require('../assets/img/detail/ub-04.jpg'),
                pic2: require('../assets/img/detail/ub-05.jpg'),
                pic3: require('../assets/img/detail/ub-06.jpg'),
                address: "浙江宁波市海曙区",
                date: "2020-04-13"
            },
            {
                id: 3,
                userimg: require('../assets/img/detail/user-b3.jpg'),
                username: "龚*森",
                descp: "挺好看的，很喜欢 ",
                pic1: require('../assets/img/detail/ub-07.jpg'),
                pic2: "",
                pic3: "",
                address: "江西赣州市章贡区",
                date: "2020-04-03"
            },
            {
                id: 4,
                userimg: require('../assets/img/detail/user-b4.png'),
                username: "FA*NY",
                descp: "花姿欲滴，非常娇艳，比图片更美，物有所值。",
                pic1: require('../assets/img/detail/ub-08.jpg'),
                pic2: require('../assets/img/detail/ub-09.jpg'),
                pic3: require('../assets/img/detail/ub-10.jpg'),
                address: "北京朝阳区",
                date: "2020-04-01"
            },
            {
                id: 5,
                userimg: require('../assets/img/detail/user-b5.jpg'),
                username: "Win*on",
                descp: "圣诞节上午就送到了，很高效，女朋友超级开心！花花也很漂亮！赞！赞！赞！",
                pic1: require('../assets/img/detail/ub-11.jpeg'),
                pic2: "",
                pic3: "",
                address: "广东省广州市增城区",
                date: "2020-03-28"
            },
            {
                id: 6,
                userimg: require('../assets/img/detail/user-b6.jpg'),
                username: "杨*伟",
                descp: "只要俺家宝贝开心，就给五星好评",
                pic1: require('../assets/img/detail/ub-12.jpg'),
                pic2: "",
                pic3: "",
                address: "北京朝阳区",
                date: "2020-03-14"
            },
            {
                id: 7,
                userimg: require('../assets/img/detail/user-b7.jpg'),
                username: "石*华",
                descp: "及时送达，花束很满意。",
                pic1: require('../assets/img/detail/ub-13.jpg'),
                pic2: require('../assets/img/detail/ub-14.jpg'),
                pic3: "",
                address: "江西南昌市",
                date: "2020-06-18"
            },
            {
                id: 8,
                userimg: require('../assets/img/detail/user-b8.png'),
                username: "d*",
                descp: "挺不错的，花很好，很准时，下次还会买。",
                pic1: require('../assets/img/detail/ub-15.jpg'),
                pic2: require('../assets/img/detail/ub-16.jpg'),
                pic3: "",
                address: "湖北十堰市张湾区",
                date: "2020-06-12"
            }

        ],
        imglist: [
            require('../assets/img/detail/img-a1.jpg'),
            require('../assets/img/detail/img-a2.jpg'),
            require('../assets/img/detail/img-a3.jpg'),
            require('../assets/img/detail/img-a4.jpg'),
            require('../assets/img/detail/img-a5.jpg'),
            require('../assets/img/detail/img-a6.jpg'),
            require('../assets/img/detail/img-a7.jpg'),
            require('../assets/img/detail/img-a8.jpg'),
            require('../assets/img/detail/img-a9.jpg'),
            require('../assets/img/detail/img-a10.jpg'),
            require('../assets/img/detail/img-a11.jpg'),
        ]
    },
    {
        id: 3,
        img: require('../assets/img/index/s-love6.jpg'),
        name: "韩式系列/亲爱的你",
        descp: "粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
        honor: "全新韩式系列",
        style: "花艺师打造 韩式花束系列",
        price: 361,
        fallprice: 469,
        sell: 1564,
        num: 1,
        checked: false,
        huayu: "娇羞的粉色戴安娜玫瑰与清新的白色洋桔梗，经过花艺师之手赋予了爱的意义，将这份藏于心底的爱，包裹在粉色中幸会，今晚你好吗？今夜的美妙愿你永远记住，你是我心中最甜美的公主!",
        metarial: "韩式花束系列：戴安娜玫瑰11枝、3头或以上白色洋桔梗5枝、大叶尤加利10枝",
        swiperimg: [
            require('../assets/img/detail/slip-c1.jpg'),
            require('../assets/img/detail/slip-c2.jpg'),
            require('../assets/img/detail/slip-c3.jpg'),
            require('../assets/img/detail/slip-c4.jpg'),
        ],
        commentlist: [{
                id: 1,
                userimg: require('../assets/img/detail/user-c1.jpg'),
                username: "刘*鹏",
                descp: "非常好，送货很快",
                pic1: require('../assets/img/detail/uc-01.jpeg'),
                pic2: require('../assets/img/detail/uc-02.jpeg'),
                pic3: "",
                address: "河南新乡市红旗区",
                date: "2020-06-05"
            },
            {
                id: 2,
                userimg: require('../assets/img/detail/user-c2.jpg'),
                username: "曹*荧",
                descp: "这束花是我一眼相中的，朋友收到也夸好看，非常开心。",
                pic1: require('../assets/img/detail/uc-04.jpeg'),
                pic2: "",
                pic3: "",
                address: "上海宝山区",
                date: "2020-05-20"
            },
            {
                id: 3,
                userimg: require('../assets/img/detail/user-c3.jpg'),
                username: "石*迪",
                descp: "非常非常非常非常好",
                pic1: require('../assets/img/detail/uc-05.jpeg'),
                pic2: require('../assets/img/detail/uc-06.jpeg'),
                pic3: "",
                address: "北京大兴区",
                date: "2020-05-20"
            },
            {
                id: 4,
                userimg: require('../assets/img/detail/user-c4.jpg'),
                username: "严*飞",
                descp: "花很漂亮，送的也及时，满意，与图片相似度高",
                pic1: require('../assets/img/detail/uc-07.png'),
                pic2: require('../assets/img/detail/uc-08.png'),
                pic3: require('../assets/img/detail/uc-09.png'),
                address: "上海市闵行区",
                date: "2020-05-13"
            },
            {
                id: 5,
                userimg: require('../assets/img/detail/user-c5.jpg'),
                username: "汪*",
                descp: "非常漂亮，送的速度很快",
                pic1: require('../assets/img/detail/uc-10.jpg'),
                pic2: "",
                pic3: "",
                address: "浙江杭州市拱墅区",
                date: "2020-04-30"
            },
            {
                id: 6,
                userimg: require('../assets/img/detail/user-c6.jpg'),
                username: "木火通明*家易经",
                descp: "很漂亮派送及时",
                pic1: require('../assets/img/detail/uc-11.jpeg'),
                pic2: "",
                pic3: "",
                address: "四川成都市武侯区",
                date: "2020-04-16"
            },
            {
                id: 7,
                userimg: require('../assets/img/detail/user-c7.jpg'),
                username: "Felic*a攒rp",
                descp: "配送准时，花材新鲜，价格也不错",
                pic1: require('../assets/img/detail/uc-12.jpg'),
                pic2: "",
                pic3: "",
                address: "上海虹口区",
                date: "2020-04-10"
            },
            {
                id: 8,
                userimg: require('../assets/img/detail/user-c8.png'),
                username: "罗*然",
                descp: "很好看 有很大一束",
                pic1: require('../assets/img/detail/uc-13.jpeg'),
                pic2: "",
                pic3: "",
                address: "广东广州市番禺区",
                date: "2020-06-15"
            }
        ],
        imglist: [
            require('../assets/img/detail/img-b1.jpg'),
            require('../assets/img/detail/img-b2.jpg'),
            require('../assets/img/detail/img-b3.jpg'),
            require('../assets/img/detail/img-b4.jpg'),
            require('../assets/img/detail/img-b5.jpg'),
            require('../assets/img/detail/img-b6.jpg'),
            require('../assets/img/detail/img-b7.jpg'),
            require('../assets/img/detail/img-b8.jpg'),
            require('../assets/img/detail/img-b9.jpg'),
            require('../assets/img/detail/img-b10.jpg'),
            require('../assets/img/detail/img-b11.jpg'),
        ]
    },
    {
        id: 4,
        img: require('../assets/img/index/s-love7.jpg'),
        name: "不变的承诺",
        descp: "99枝红玫瑰",
        honor: "经典99枝",
        style: "经典99枝，鼎力推荐！",
        price: 528,
        fallprice: 869,
        sell: 6000,
        num: 1,
        checked: false,
        huayu: "下雨的时候，给她撑一把雨伞；寒冷的时候，给她一个温暖的臂弯；天黑了，永远有一盏灯为她点亮；晨起时，给她一缕温暖的阳光。爱她，就送她一束99枝的玫瑰花！",
        metarial: "99枝红玫瑰",
        swiperimg: [
            require('../assets/img/detail/slip-d1.jpg'),
            require('../assets/img/detail/slip-d2.jpg'),
            require('../assets/img/detail/slip-d3.jpg'),
            require('../assets/img/detail/slip-d4.jpg'),
        ],
        commentlist: [{
                id: 1,
                userimg: require('../assets/img/detail/user-d1.jpg'),
                username: "我已成*爱谁谁",
                descp: "很赞，花很新鲜，女朋友很喜欢！",
                pic1: require('../assets/img/detail/ud-01.png'),
                pic2: require('../assets/img/detail/ud-02.png'),
                pic3: "",
                address: "贵州贵阳市南明区",
                date: "2020-06-12"
            },
            {
                id: 2,
                userimg: require('../assets/img/detail/user-d2.jpg'),
                username: "李*茜",
                descp: "女朋友到很喜欢，花也很新鲜",
                pic1: require('../assets/img/detail/ud-03.jpg'),
                pic2: require('../assets/img/detail/ud-04.jpg'),
                pic3: require('../assets/img/detail/ud-05.jpg'),
                address: "河南郑州市金水区",
                date: "2020-05-20"
            },
            {
                id: 3,
                userimg: require('../assets/img/detail/user-d3.jpg'),
                username: "毕*",
                descp: "收到的鲜花看起来质量很好，接收人很喜欢。",
                pic1: require('../assets/img/detail/ud-06.jpeg'),
                pic2: "",
                pic3: "",
                address: "山东济南市历下区",
                date: "2020-05-20"
            },
            {
                id: 4,
                userimg: require('../assets/img/detail/user-d5.jpg'),
                username: "Desire *??????",
                descp: "花状态很赞，看起来很健康，都很新鲜，也很及时，客服服务周到，很棒的体验，小公主很喜欢",
                pic1: require('../assets/img/detail/ud-07.jpeg'),
                pic2: require('../assets/img/detail/ud-09.jpeg'),
                pic3: "",
                address: "辽宁鞍山市立山区",
                date: "2020-05-19"
            },
            {
                id: 5,
                userimg: require('../assets/img/detail/user-d5.jpg'),
                username: "上*飞",
                descp: "99朵玫瑰花很漂亮！",
                pic1: require('../assets/img/detail/ud-10.jpg'),
                pic2: require('../assets/img/detail/ud-11.jpg'),
                pic3: require('../assets/img/detail/ud-12.jpg'),
                address: "北京朝阳区",
                date: "2020-05-18"
            },
            {
                id: 6,
                userimg: require('../assets/img/detail/user-d5.jpg'),
                username: "竹*骞",
                descp: "很漂亮，客服小姐姐很尽职",
                pic1: require('../assets/img/detail/ud-13.jpeg'),
                pic2: "",
                pic3: "",
                address: "河北石家庄市桥西区",
                date: "2020-05-17"
            },
            {
                id: 7,
                userimg: require('../assets/img/detail/user-d5.jpg'),
                username: "沈*",
                descp: "又一次完美的订花，朋友很满意，送达时间很准时，5星好评，下次还会继续支持",
                pic1: require('../assets/img/detail/ud-14.png'),
                pic2: "",
                pic3: "",
                address: "山东青岛市市北区",
                date: "2020-05-10"
            },
            {
                id: 8,
                userimg: require('../assets/img/detail/user-d6.jpg'),
                username: "徐*",
                descp: "非常不错    很漂亮",
                pic1: require('../assets/img/detail/ud-15.jpg'),
                pic3: "",
                address: "江苏常州市天宁区",
                date: "2020-05-08"
            }
        ],
        imglist: [
            require('../assets/img/detail/img-d1.jpg'),
            require('../assets/img/detail/img-d2.jpg'),
            require('../assets/img/detail/img-d3.jpg'),
            require('../assets/img/detail/img-d4.jpg'),
            require('../assets/img/detail/img-d5.jpg'),
            require('../assets/img/detail/img-d6.jpg'),
            require('../assets/img/detail/img-d7.jpg'),
            require('../assets/img/detail/img-d8.jpg'),
            require('../assets/img/detail/img-d9.jpg'),
            require('../assets/img/detail/img-d10.jpg'),
            require('../assets/img/detail/img-d11.jpg'),
        ]
    },
    {
        id: 5,
        img: require('../assets/img/index/s-love1.jpg'),
        name: "一往情深",
        descp: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
        honor: "年销售冠军",
        style: "经典爆款，年销售冠军",
        price: 234,
        fallprice: 315,
        sell: 12400,
        num: 1,
        checked: false,
        huayu: "你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
        metarial: "高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎",
        swiperimg: [
            require('../assets/img/detail/slip-a1.jpg'),
            require('../assets/img/detail/slip-a2.jpg'),
            require('../assets/img/detail/slip-a3.jpg'),
            require('../assets/img/detail/slip-a4.jpg'),
        ],
    },
    {
        id: 6,
        img: require('../assets/img/index/s-love3.jpg'),
        name: "韩式系列/公主的假日",
        descp: "戴安娜玫瑰11枝、白色洋桔梗5枝、大叶尤加利10枝",
        honor: "全新韩式系列",
        style: "甜美的公主，今夜你最美",
        price: 211,
        fallprice: 298,
        sell: 3618,
        num: 1,
        checked: false,
        huayu: "人间蹉跎，你是唯一值得",
        metarial: "卡罗拉红玫瑰11枝、白色满天星3枝、尤加利10枝",
        swiperimg: [
            require('../assets/img/detail/slip-b1.jpg'),
            require('../assets/img/detail/slip-b2.jpg'),
            require('../assets/img/detail/slip-b3.jpg'),
            require('../assets/img/detail/slip-b4.jpg'),
        ]
    },
    {
        id: 7,
        img: require('../assets/img/index/s-love4.jpg'),
        name: "韩式系列/初心不负",
        descp: "韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
        honor: "全新韩式系列",
        style: "花艺师打造 韩式花束系列",
        price: 221,
        fallprice: 189,
        sell: 7000,
        num: 1,
        checked: false,
        huayu: "喜欢像是一阵风，而爱你是细水长流",
        metarial: "11枝香槟玫瑰，多头白百合2枝，栀子叶8枝",
        swiperimg: [
            require('../assets/img/detail/slip-c1.jpg'),
            require('../assets/img/detail/slip-c2.jpg'),
            require('../assets/img/detail/slip-c3.jpg'),
            require('../assets/img/detail/slip-c4.jpg'),
        ]
    },
    {
        id: 8,
        img: require('../assets/img/index/s-love8.jpg'),
        name: "你最珍贵",
        descp: "精品玫瑰礼盒:香槟玫瑰19枝，勿忘我适量",
        honor: "畅销爆款",
        style: "优雅设计 精致甄选",
        price: 239,
        fallprice: 329,
        sell: 6700,
        num: 1,
        checked: false,
        huayu: "再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸。",
        metarial: "各色玫瑰共36枝：白玫瑰22枝，粉佳人粉玫瑰14枝；粉色桔梗5枝，尤加利0.5扎",
        swiperimg: [
            require('../assets/img/detail/slip-d1.jpg'),
            require('../assets/img/detail/slip-d2.jpg'),
            require('../assets/img/detail/slip-d3.jpg'),
            require('../assets/img/detail/slip-d4.jpg'),
        ]
    }
];
//显示所有送长辈鲜花
let parentFlowerData = [{
        id: 1,
        img: require('../assets/img/index/s-par1.jpg'),
        name: "韩式系列/一路向阳",
        descp: "向日葵3枝、香槟玫瑰9枝、橙色多头玫5枝、黄色腊梅5枝、大叶尤加利5枝",
        honor: "全新韩式系列",
        style: "花艺师打造 韩式花束系列",
        price: 290,
        fallprice: 398,
        sell: 6400,
        huayu: "以秋色和暖阳为设计主题，打造全新韩式系列，在凛冽冬日，你的爱就像一束阳光，照进了我的心中！",
        metarial: "韩式花束系列：向日葵3枝、香槟玫瑰9枝、橙色多头玫5枝、黄色腊梅5枝、大叶尤加利5枝（腊梅花期为11-4月初，其他季节用跳舞兰或其他黄色线状花材代替）",
        swiperimg: [
            require('../assets/img/detail/slip-a1.jpg'),
            require('../assets/img/detail/slip-a2.jpg'),
            require('../assets/img/detail/slip-a3.jpg'),
            require('../assets/img/detail/slip-a4.jpg'),
        ]
    },
    {
        id: 2,
        img: require('../assets/img/index/s-love2.jpg'),
        name: "母爱",
        descp: "紫红色康乃馨9枝，粉色多头康乃馨10枝",
        honor: "母亲最爱",
        style: "红粉搭配 花色明艳",
        price: 159,
        fallprice: 228,
        sell: 1900,
        huayu: "我想在阳光下满身花香，我想在阳光下沐浴清新，我想在清新里感受每一天的好时光..",
        metarial: "粉色康乃馨11枝，粉色多头香水百合2枝，栀子叶10枝",
        swiperimg: [
            require('../assets/img/detail/slip-b1.jpg'),
            require('../assets/img/detail/slip-b2.jpg'),
            require('../assets/img/detail/slip-b3.jpg'),
            require('../assets/img/detail/slip-b4.jpg'),
        ]
    },
    {
        id: 3,
        img: require('../assets/img/index/s-love3.jpg'),
        name: "馨情无限",
        descp: "戴安娜玫瑰11枝，红色康乃馨11支，红色石竹梅4枝",
        honor: "畅销单品",
        style: "高端花盒设计",
        price: 232,
        fallprice: 312,
        sell: 7535,
        huayu: "韩式花束系列：粉色康乃馨13枝，戴安娜玫瑰5枝、3头或以上粉色洋桔梗5枝、浅紫紫罗兰5枝（紫罗兰花期为12-4月，其他月份用浅紫色金鱼草/浅紫色桔梗/浅紫色风铃花等相似线状花材替代）、尤加利10枝",
        metarial: "嫣粉/玫粉色欧雅纸8张、白色雪梨纸2大张、浅粉色罗纹玫瑰金丝带2米",
        swiperimg: [
            require('../assets/img/detail/slip-c1.jpg'),
            require('../assets/img/detail/slip-c2.jpg'),
            require('../assets/img/detail/slip-c3.jpg'),
            require('../assets/img/detail/slip-c4.jpg'),
        ]
    },
    {
        id: 4,
        img: require('../assets/img/index/s-love4.jpg'),
        name: "青青子衿",
        descp: "白色多头香水百合6枝",
        honor: "畅销单品",
        style: "香味清新 风格独特",
        price: 221,
        fallprice: 189,
        sell: 7000,
        huayu: "让每点阳光，洒于你脸庞；令你的微笑，比花更盛放！",
        metarial: "粉绣球1枝，粉雪山玫瑰6枝，粉桔梗0.3扎，栀子叶0.5扎",
        swiperimg: [
            require('../assets/img/detail/slip-d1.jpg'),
            require('../assets/img/detail/slip-d2.jpg'),
            require('../assets/img/detail/slip-d3.jpg'),
            require('../assets/img/detail/slip-d4.jpg'),
        ]
    },
    {
        id: 5,
        img: require('../assets/img/index/s-love5.jpg'),
        name: "幸福绽放",
        descp: "粉色康乃馨19枝",
        honor: "畅销单品",
        style: "温暖之选 亮丽花色 特价",
        price: 162,
        fallprice: 215,
        sell: 1600,
        huayu: "家是什么?有人说家是倦鸟归来的巢，家是小船避风的港......有爱有家，幸福万年长。",
        metarial: "红色康乃馨66枝，搭配白边紫色多头康乃馨15枝，栀子叶2扎",
        swiperimg: [
            require('../assets/img/detail/slip-c1.jpg'),
            require('../assets/img/detail/slip-c2.jpg'),
            require('../assets/img/detail/slip-c3.jpg'),
            require('../assets/img/detail/slip-c4.jpg'),
        ]
    },
    {
        id: 6,
        img: require('../assets/img/index/s-love6.jpg'),
        name: "幸福万年长",
        descp: "红色康乃馨66枝，白边紫色多头康乃馨15枝，栀子叶2扎",
        honor: "精品优选",
        style: "温暖花束 幸福万年长",
        price: 339,
        fallprice: 486,
        sell: 3811,
        huayu: "当你想我的时候，我会化作一缕温柔的清风，轻轻靠在你背后，温暖你的所有。",
        metarial: "向日葵3枝，白色洋桔梗0.5扎，绿色小雏菊2枝，雪柳0.1扎",
        swiperimg: [
            require('../assets/img/detail/slip-d1.jpg'),
            require('../assets/img/detail/slip-d2.jpg'),
            require('../assets/img/detail/slip-d3.jpg'),
            require('../assets/img/detail/slip-d4.jpg'),
        ]
    }
];
//推荐
let recommentFlowerData = [{
        id: 1,
        title: "永生花推荐",
        list: [{
                id: 1,
                img: require('../assets/img/index/forever1.jpg'),
                name: "一鹿(路)有你永生花小夜灯·永生花礼盒",
                honor: "创意新品",
                price: 288,
                fallprice: 398,
                sell: 645
            },
            {
                id: 2,
                img: require('../assets/img/index/forever2.jpg'),
                name: "520999迪奥双口红款永生花礼盒/红·迪奥口红＋永生花礼盒",
                honor: "dior双口红",
                price: 999,
                fallprice: 1099,
                sell: 39
            },
            {
                id: 3,
                img: require('../assets/img/index/forever3.jpg'),
                name: "永生花满月艺术台灯/朦胧粉·永生花台灯",
                honor: "创意新品",
                price: 398,
                fallprice: 498,
                sell: 359
            },
            {
                id: 4,
                img: require('../assets/img/index/forever4.jpg'),
                name: "一生一世·厄瓜多尔进口永生红玫1朵，双色永生绣球",
                honor: "爱的承诺",
                price: 198,
                fallprice: 259,
                sell: 1300
            },
        ]
    },
    {
        id: 2,
        title: "蛋糕推荐",
        list: [{
                id: 1,
                img: require('../assets/img/index/dg1.jpg'),
                name: "心相印·8寸(2磅)心形粉色鲜奶蛋糕",
                honor: "创意新品",
                price: 168,
                fallprice: 178,
                sell: 5393
            },
            {
                id: 2,
                img: require('../assets/img/index/dg2.jpg'),
                name: "四重奏蛋糕(约2磅)·方形/巧克力/榴莲/慕斯蛋糕",
                honor: "生日推荐",
                price: 228,
                fallprice: 296,
                sell: 3552
            },
            {
                id: 3,
                img: require('../assets/img/index/dg3.jpg'),
                name: "水果盛宴·3磅(10寸)水果蛋糕",
                honor: "创意新品",
                price: 239,
                fallprice: 239,
                sell: 3230
            },
            {
                id: 4,
                img: require('../assets/img/index/dg4.jpg'),
                name: "黑白巧克力慕斯(2磅)+方形蜡烛·慕斯蛋糕",
                honor: "爱的承诺",
                price: 306,
                fallprice: 306,
                sell: 473
            },
        ]
    },
    {
        id: 3,
        title: "礼品推荐",
        list: [{
                id: 1,
                img: require('../assets/img/index/lp1.jpg'),
                name: "星期耳钉礼盒·s925银个性耳钉",
                honor: "火热畅销款",
                price: 239,
                fallprice: 369,
                sell: 1758
            },
            {
                id: 2,
                img: require('../assets/img/index/lp2.jpg'),
                name: "施华洛世奇心心相扣Infinity项链 镀白金/镀玫瑰金色·",
                honor: "心心相印项链",
                price: 1199,
                fallprice: 1290,
                sell: 6
            },
            {
                id: 3,
                img: require('../assets/img/index/lp3.jpg'),
                name: "woody书灯木质led折叠usb书本灯-时尚版（黑胡桃）",
                honor: "精选礼品",
                price: 198,
                fallprice: 298,
                sell: 301
            },
            {
                id: 4,
                img: require('../assets/img/index/lp4.jpg'),
                name: "麋鹿水晶音乐盒/旋转蓝牙音箱·一路（鹿）有你，水晶球蓝牙音箱音乐盒",
                honor: "灯光蓝牙音响",
                price: 296,
                fallprice: 396,
                sell: 110
            },
        ]
    },
    {
        id: 4,
        title: "巧克力推荐",
        list: [{
                id: 1,
                img: require('../assets/img/index/dg1.jpg'),
                name: "心相印·8寸(2磅)心形粉色鲜奶蛋糕",
                honor: "创意新品",
                price: 168,
                fallprice: 178,
                sell: 5393
            },
            {
                id: 2,
                img: require('../assets/img/index/dg2.jpg'),
                name: "四重奏蛋糕(约2磅)·方形/巧克力/榴莲/慕斯蛋糕",
                honor: "生日推荐",
                price: 228,
                fallprice: 296,
                sell: 3552
            },
            {
                id: 3,
                img: require('../assets/img/index/dg3.jpg'),
                name: "水果盛宴·3磅(10寸)水果蛋糕",
                honor: "创意新品",
                price: 239,
                fallprice: 239,
                sell: 3230
            },
            {
                id: 4,
                img: require('../assets/img/index/dg4.jpg'),
                name: "黑白巧克力慕斯(2磅)+方形蜡烛·慕斯蛋糕",
                honor: "爱的承诺",
                price: 306,
                fallprice: 306,
                sell: 473
            },
        ]
    }
];
//分类
let categoryData = [{
        id: 1,
        title: "热门推荐",
        bigimg: require('../assets/img/classify/top1.jpg'),
        list: [{
            id: 1,
            titletxt: "对象",
            descp: "",
            type: 0,
            classifylist: [{
                    id: 1,
                    img: require('../assets/img/classify/cla-tj-nav1.png'),
                    name: "送恋人鲜花"
                },
                {
                    id: 2,
                    img: require('../assets/img/classify/cla-tj-nav2.png'),
                    name: "送长辈鲜花"
                },
                {
                    id: 3,
                    img: require('../assets/img/classify/cla-tj-nav3.png'),
                    name: "生日鲜花"
                },
                {
                    id: 4,
                    img: require('../assets/img/classify/cla-tj-nav4.png'),
                    name: "礼盒鲜花"
                },
                {
                    id: 5,
                    img: require('../assets/img/classify/cla-tj-nav5.png'),
                    name: "永生花"
                },
                {
                    id: 6,
                    img: require('../assets/img/classify/cla-tj-nav6.png'),
                    name: "蛋糕"
                },
                {
                    id: 7,
                    img: require('../assets/img/classify/cla-tj-nav7.png'),
                    name: "元组蛋糕"
                },
                {
                    id: 8,
                    img: require('../assets/img/classify/cla-tj-nav8.png'),
                    name: "金箔花"
                },
                {
                    id: 9,
                    img: require('../assets/img/classify/cla-tj-nav9.png'),
                    name: "首饰"
                },
                {
                    id: 10,
                    img: require('../assets/img/classify/cla-tj-nav10.png'),
                    name: "巧罗巧克力"
                },
                {
                    id: 11,
                    img: require('../assets/img/classify/cla-tj-nav11.png'),
                    name: "创意礼品"
                },
                {
                    id: 12,
                    img: require('../assets/img/classify/cla-tj-nav12.png'),
                    name: "企业团购"
                }
            ]
        }]
    },
    {
        id: 2,
        title: "鲜花",
        bigimg: require('../assets/img/classify/top2.png'),
        list: [{
                id: 1,
                titletxt: "对象",
                descp: "鲜花排行榜",
                type: 1,
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/cls-obj1.png'),
                        name: "全部"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/cls-obj2.png'),
                        name: "送女友"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/cls-obj3.png'),
                        name: "送男性"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/cls-obj4.png'),
                        name: "送长辈"
                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/cls-obj5.png'),
                        name: "送朋友"
                    },
                ]
            },
            {
                id: 2,
                titletxt: "场合",
                type: 0,
                descp: "",
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/cls-ch1.png'),
                        name: "爱情"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/cls-ch2.png'),
                        name: "生日"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/cls-ch3.png'),
                        name: "探望"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/cls-ch4.png'),
                        name: "商务"
                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/cls-ch5.png'),
                        name: "祝贺"
                    },
                    {
                        id: 6,
                        img: require('../assets/img/classify/cls-ch6.png'),
                        name: "婚庆"
                    },
                    {
                        id: 7,
                        img: require('../assets/img/classify/cls-ch7.png'),
                        name: "道歉"
                    },
                    {
                        id: 8,
                        img: require('../assets/img/classify/cls-ch8.png'),
                        name: "哀思"
                    }
                ]
            },
            {
                id: 3,
                titletxt: "花材",
                type: 0,
                descp: "",
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/hua-cai1.png'),
                        name: "玫瑰"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/hua-cai2.png'),
                        name: "康乃兴"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/hua-cai3.png'),
                        name: "向日葵"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/hua-cai4.png'),
                        name: "百合"
                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/hua-cai5.png'),
                        name: "绣球"
                    },
                    {
                        id: 6,
                        img: require('../assets/img/classify/hua-cai6.png'),
                        name: "郁金香"
                    },
                    {
                        id: 7,
                        img: require('../assets/img/classify/hua-cai7.png'),
                        name: "扶郎/太阳花"
                    },
                    {
                        id: 8,
                        img: require('../assets/img/classify/hua-cai8.png'),
                        name: "马蹄莲"
                    },
                ]
            },
            {
                id: 4,
                titletxt: "颜色",
                type: 0,
                descp: "",
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/cls-color1.png'),
                        name: "红色"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/cls-color2.png'),
                        name: "粉色"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/cls-color3.png'),
                        name: "香槟色"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/cls-color4.png'),
                        name: "黄色"
                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/cls-color5.png'),
                        name: "白色"
                    },
                    {
                        id: 6,
                        img: require('../assets/img/classify/cls-color6.png'),
                        name: "紫色"
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "永生花",
        bigimg: require('../assets/img/classify/top3.png'),
        list: [{
                id: 1,
                titletxt: "对象",
                descp: "永生花排行榜",
                type: 1,
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/cls-obj1.png'),
                        name: "全部"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/cls-for2.png'),
                        name: "送女友"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/cls-for3.png'),
                        name: "送男性"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/cls-for4.png'),
                        name: "送长辈"
                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/cls-for5.png'),
                        name: "送朋友"
                    },
                ]
            },
            {
                id: 2,
                titletxt: "分类",
                descp: "永生花行榜",
                type: 0,
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/cls-cls1.png'),
                        name: "永生瓶花"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/cls-cls2.png'),
                        name: "经典盒花"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/cls-cls3.png'),
                        name: "经典盒花"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/cls-cls4.png'),
                        name: "经典盒花"
                    },
                ]
            }
        ]
    },
    {
        id: 4,
        title: "蛋糕",
        bigimg: require('../assets/img/classify/top4.png'),
        list: [{
            id: 1,
            titletxt: "品牌",
            descp: "",
            type: 0,
            classifylist: [{
                    id: 1,
                    img: require('../assets/img/classify/brand1.png'),
                },
                {
                    id: 2,
                    img: require('../assets/img/classify/brand2.png'),
                },
                {
                    id: 3,
                    img: require('../assets/img/classify/brand3.png'),
                },
                {
                    id: 4,
                    img: require('../assets/img/classify/brand4.png'),
                },
                {
                    id: 5,
                    img: require('../assets/img/classify/brand5.png'),
                },
                {
                    id: 6,
                    img: require('../assets/img/classify/brand6.png'),
                },
                {
                    id: 7,
                    img: require('../assets/img/classify/brand7.png'),
                },
                {
                    id: 8,
                    img: require('../assets/img/classify/brand8.png'),
                },
                {
                    id: 9,
                    img: require('../assets/img/classify/brand9.png'),
                },
                {
                    id: 10,
                    img: require('../assets/img/classify/brand10.png'),
                },
                {
                    id: 11,
                    img: require('../assets/img/classify/brand11.png'),
                },
                {
                    id: 12,
                    img: require('../assets/img/classify/brand12.png'),
                },
                {
                    id: 13,
                    img: require('../assets/img/classify/brand13.png'),
                },
                {
                    id: 14,
                    img: require('../assets/img/classify/brand14.png'),
                },
                {
                    id: 15,
                    img: require('../assets/img/classify/brand1.png'),
                }
            ]
        }]
    },
    {
        id: 5,
        title: "特色礼品",
        bigimg: require('../assets/img/classify/top5.png'),
        list: [{
                id: 1,
                titletxt: "品牌",
                descp: "",
                type: 0,
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/gift-brand1.png'),

                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/gift-brand2.png'),

                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/gift-brand3.png'),

                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/gift-brand4.png'),

                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/gift-brand5.png'),

                    },
                    {
                        id: 6,
                        img: require('../assets/img/classify/brand15.png'),

                    },
                ]
            },
            {
                id: 2,
                titletxt: "对象",
                descp: "",
                type: 0,
                classifylist: [{
                        id: 1,
                        img: require('../assets/img/classify/cls-gift-obj1.png'),
                        name: "送女友"
                    },
                    {
                        id: 2,
                        img: require('../assets/img/classify/cls-gift-obj2.png'),
                        name: "送男性"
                    },
                    {
                        id: 3,
                        img: require('../assets/img/classify/cls-gift-obj3.png'),
                        name: "送长辈"
                    },
                    {
                        id: 4,
                        img: require('../assets/img/classify/cls-gift-obj4.png'),
                        name: "送朋友"
                    },
                    {
                        id: 5,
                        img: require('../assets/img/classify/cls-gift-obj5.png'),
                        name: "送客户"
                    },
                    {
                        id: 6,
                        img: require('../assets/img/classify/cls-gift-obj6.png'),
                        name: "送老师"
                    },
                    {
                        id: 7,
                        img: require('../assets/img/classify/cls-gift-obj7.png'),
                        name: "送小孩"
                    },
                    {
                        id: 8,
                        img: require('../assets/img/classify/cls-gift-obj8.png'),
                        name: "送领导"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "礼篮",
        bigimg: require('../assets/img/classify/top6.png'),
        list: [{
            id: 1,
            titletxt: "礼篮",
            descp: "",
            type: 0,
            classifylist: [{
                id: 1,
                img: require('../assets/img/classify/li-lan.png'),
                name: "礼篮"
            }]
        }]
    },
    {
        id: 7,
        title: "绿植花卉",
        bigimg: require('../assets/img/classify/top7.png'),
        list: [{
            id: 1,
            titletxt: "绿植花卉",
            descp: "",
            type: 0,
            classifylist: [{
                    id: 1,
                    img: require('../assets/img/classify/cls-obj1.png'),
                    name: "全部"
                },
                {
                    id: 2,
                    img: require('../assets/img/classify/tree1.png'),
                    name: "绿色植物"
                },
                {
                    id: 3,
                    img: require('../assets/img/classify/tree2.png'),
                    name: "盆栽花卉"
                },
                {
                    id: 4,
                    img: require('../assets/img/classify/tree3.png'),
                    name: "多肉盆栽"
                },
            ]
        }]
    },
];
//花现
let huaxianData = [{
        id: 1,
        title: "晒单",
        listone: [{
                id: 1,
                img: require('../assets/img/huaxian/pic-01.jpg'),
                descp: "喜欢到爆。支持！",
                userimg: require('../assets/img/huaxian/user-c1.jpg'),
                username: "Deep i*sights"
            },
            {
                id: 2,
                img: require('../assets/img/huaxian/pic-02.jpg'),
                descp: "女朋友很喜欢，花也很新鲜",
                userimg: require('../assets/img/huaxian/user-c2.jpg'),
                username: "李*茜"
            },
            {
                id: 3,
                img: require('../assets/img/huaxian/pic-03.jpg'),
                descp: "花很新鲜，送货也很及时",
                userimg: require('../assets/img/huaxian/user-c3.jpg'),
                username: "郭*"
            },
            {
                id: 4,
                img: require('../assets/img/huaxian/pic-04.jpg'),
                descp: "配送速度很快，满意，花儿也是美美的",
                userimg: require('../assets/img/huaxian/user-c4.jpg'),
                username: "陈*霞"
            },
            {
                id: 5,
                img: require('../assets/img/huaxian/pic-05.jpg'),
                descp: "自己加了橙，变得更加好看了",
                userimg: require('../assets/img/huaxian/user-c5.jpg'),
                username: "DI*t0"
            },
            {
                id: 6,
                img: require('../assets/img/huaxian/pic-06.jpg'),
                descp: "朋友喜欢便是好物",
                userimg: require('../assets/img/huaxian/user-c6.jpg'),
                username: "朱*"
            },
            {
                id: 7,
                img: require('../assets/img/huaxian/pic-07.jpg'),
                descp: "很喜欢，哈哈",
                userimg: require('../assets/img/huaxian/user-c7.jpg'),
                username: "鱼*生"
            },
            {
                id: 8,
                img: require('../assets/img/huaxian/pic-08.jpg'),
                descp: "送的很及时，很好，很满意",
                userimg: require('../assets/img/huaxian/user-c8.png'),
                username: "Mr*hao"
            },
            {
                id: 9,
                img: require('../assets/img/huaxian/pic-09.jpg'),
                descp: "愿每个生命都被温柔以待",
                userimg: require('../assets/img/huaxian/user-d1.jpg'),
                username: "驴*"
            },
            {
                id: 10,
                img: require('../assets/img/huaxian/pic-10.jpg'),
                descp: "很美，花也很新鲜",
                userimg: require('../assets/img/huaxian/user-d2.jpg'),
                username: "啊*"
            },
        ],
        listtwo: [{
                id: 1,
                img: require('../assets/img/huaxian/pic-11.jpg'),
                descp: "女朋友很喜欢，花也很新鲜",
                userimg: require('../assets/img/huaxian/user-d3.jpg'),
                username: "李*茜"
            },
            {
                id: 2,
                img: require('../assets/img/huaxian/pic-12.jpg'),
                descp: "花花很漂亮，送给姐姐，姐姐很喜欢",
                userimg: require('../assets/img/huaxian/user-d4.jpg'),
                username: "方*"
            },
            {
                id: 3,
                img: require('../assets/img/huaxian/pic-13.jpg'),
                descp: "媳妇很喜欢，送花速度很快",
                userimg: require('../assets/img/huaxian/user-d5.jpg'),
                username: "NE*0"
            },
            {
                id: 4,
                img: require('../assets/img/huaxian/pic-14.jpg'),
                descp: "花比图片更漂亮，老婆很喜欢",
                userimg: require('../assets/img/huaxian/user-d6.jpg'),
                username: "军*"
            },
            {
                id: 5,
                img: require('../assets/img/huaxian/pic-15.jpg'),
                descp: "非常好，很好看，很成功",
                userimg: require('../assets/img/huaxian/user-b1.png'),
                username: "沐*"
            },
            {
                id: 6,
                img: require('../assets/img/huaxian/pic-16.jpg'),
                descp: "相机拍出来真的很好看，实物也很精致",
                userimg: require('../assets/img/huaxian/user-b2.jpg'),
                username: "Gi*ny"
            },
            {
                id: 7,
                img: require('../assets/img/huaxian/pic-17.jpg'),
                descp: "异地女友很喜欢",
                userimg: require('../assets/img/huaxian/user-b3.jpg'),
                username: "R*D"
            },
            {
                id: 8,
                img: require('../assets/img/huaxian/pic-18.jpg'),
                descp: "很喜欢这个礼物，特别满意",
                userimg: require('../assets/img/huaxian/user-b4.png'),
                username: "张*豪"
            },
            {
                id: 9,
                img: require('../assets/img/huaxian/pic-19.jpg'),
                descp: "女朋友超级喜欢",
                userimg: require('../assets/img/huaxian/user-b5.jpg'),
                username: "洗*豪"
            }
        ]

    },
    {
        id: 2,
        title: "精选推荐",
        list: [{
                id: 1,
                img: require('../assets/img/huaxian/spe-01.jpg'),
                descp: "地表最强，生日纪念日礼物清单请收好!"
            },
            {
                id: 2,
                img: require('../assets/img/huaxian/spe-02.jpg'),
                descp: "年终盘花 | 花礼网销量Top榜单 (鲜花篇)"
            },
            {
                id: 3,
                img: require('../assets/img/huaxian/spe-03.jpg'),
                descp: "女朋友生日快到了，这份生日礼物清单请Mark..."
            },
            {
                id: 4,
                img: require('../assets/img/huaxian/spe-04.jpg'),
                descp: "买花可以看出你是哪一种类型的人？"
            },
            {
                id: 5,
                img: require('../assets/img/huaxian/spe-05.jpg'),
                descp: "给喜欢的人送花，到底该送白玫瑰or红玫瑰还是其他类型的花"
            },
            {
                id: 6,
                img: require('../assets/img/huaxian/spe-06.jpg'),
                descp: "玫瑰、非洲菊、洋桔梗等常见花材的瓶插建议！"
            },
            {
                id: 7,
                img: require('../assets/img/huaxian/spe-07.jpg'),
                descp: "送红玫瑰代表什么？男生首选红玫瑰花束推荐"
            },
            {
                id: 8,
                img: require('../assets/img/huaxian/spe-08.jpg'),
                descp: "解锁12星座爱情密码~超全，收好不谢！"
            },
            {
                id: 9,
                img: require('../assets/img/huaxian/spe-09.jpg'),
                descp: "收到鲜花花束、花盒或者永生花后跟别如何处置"
            },
            {
                id: 10,
                img: require('../assets/img/huaxian/spe-10.jpg'),
                descp: "永生花是真花吗？为什么送永生花如此流行？"
            },
            {
                id: 11,
                img: require('../assets/img/huaxian/spe-11.jpg'),
                descp: "这里有一份超详细的2020年送花攻略！"
            },
        ]
    },
    {
        id: 3,
        title: "花语大全",
        list: [
            "玫瑰", "百合", "太阳花", "康乃馨", "扶郎",
            "向日葵", "满天星", "郁金香", "马蹄莲", "薰衣草"
        ]
    },
    {
        id: 4,
        title: "漫画选花",
        list: [
            require('../assets/img/huaxian/man-hua.jpg'),
            require('../assets/img/huaxian/man-hua-01.jpg'),
            require('../assets/img/huaxian/man-hua-02.jpg'),
            require('../assets/img/huaxian/man-hua-03.jpg'),
            require('../assets/img/huaxian/man-hua-04.jpg'),
            require('../assets/img/huaxian/man-hua.jpg'),
        ]
    }
];
//相似商品
let similarGoods = [{
        id: 1,
        list: [{
                id: 1,
                img: require('../assets/img/shopcar/similar1.jpg'),
                title: "花好月圆永生花台灯",
                price: 298
            },
            {
                id: 2,
                img: require('../assets/img/shopcar/similar2.jpg'),
                title: "一生一世",
                price: 198
            },
            {
                id: 3,
                img: require('../assets/img/shopcar/similar3.jpg'),
                title: "守护初心口红款礼盒",
                price: 999
            },
            {
                id: 4,
                img: require('../assets/img/shopcar/similar4.jpg'),
                title: "花好月圆永生花台灯",
                price: 298
            },
            {
                id: 5,
                img: require('../assets/img/shopcar/similar5.jpg'),
                title: "Honey",
                price: 699
            },
            {
                id: 6,
                img: require('../assets/img/shopcar/similar6.jpg'),
                title: "永生花带灯+蓝牙音箱/浪漫粉",
                price: 398
            },
            {
                id: 7,
                img: require('../assets/img/shopcar/similar7.jpg'),
                title: "星期耳钉礼盒",
                price: 239
            },
            {
                id: 8,
                img: require('../assets/img/shopcar/similar8.jpg'),
                title: "十八音水晶钢琴",
                price: 239
            }
        ]
    },
    {
        id: 2,
        list: [{
                id: 1,
                img: require('../assets/img/shopcar/qkl01.jpg'),
                title: "费列罗榛果威化糖果巧克力礼盒8粒心形装",
                price: 68
            },
            {
                id: 2,
                img: require('../assets/img/shopcar/qkl02.jpg'),
                title: "费列罗榛果威化糖果巧克力礼盒16粒",
                price: 98
            },
            {
                id: 3,
                img: require('../assets/img/shopcar/qkl03.jpg'),
                title: "巧克巧蔻定制16粒装手工夹心巧克力",
                price: 288
            },
            {
                id: 4,
                img: require('../assets/img/shopcar/qkl04.jpg'),
                title: "精美玻璃花瓶",
                price: 38
            },
            {
                id: 5,
                img: require('../assets/img/shopcar/qkl05.jpg'),
                title: "德芙心语98克铁盒或109克礼盒",
                price: 68
            },
            {
                id: 6,
                img: require('../assets/img/shopcar/qkl06.jpg'),
                title: "德芙精心之选140克或恋语150g（随机发货）",
                price: 105
            }

        ]
    }
];

//显示轮播图信息信息
Mock.mock("/indexswiper", swiperData);
//显示所有送恋人/爱情鲜花
Mock.mock("/deliverlove", LoveFlowerData);
//显示一朵花
Mock.mock(RegExp("/oneflower" + ".*"), "get", (options) => {
    //options变量名 里面包含url type body
    let id1 = options.url.split("?")[1].split("=")[1];
    //[0]将数组转为对象
    return LoveFlowerData.filter(item => item.id == id1)[0];
});
//显示所有送长辈鲜花
Mock.mock("/deliverparent", parentFlowerData);
//显示所有推荐中的花信息
Mock.mock("/recommendflower", recommentFlowerData);
//显示所有分类信息
Mock.mock("/categoryinfo", categoryData);
//根据id显示所有花现信息
Mock.mock(RegExp("/huaxianinfo" + ".*"), "get", (options) => {
    let id1 = options.url.split("?")[1].split("=")[1];
    return huaxianData.filter(item => item.id == id1)[0];
});
//根据id显示不同相似商品
Mock.mock(RegExp("/similiargoods" + ".*"), "get", (options) => {
    let id1 = options.url.split("?")[1].split("=")[1];
    return similarGoods.filter(item => item.id == id1)[0];
});
//综合，销量，价格，最新
Mock.mock(RegExp("/showlist" + ".*"), "get", (options) => {
    let id = options.url.split("?")[1].split("=")[1];
    console.log("id", id);
    //综合直接显示商品
    if (id == 1) {
        for (let i = 0; i < LoveFlowerData.length - 1; i++) {
            for (let j = 0; j < LoveFlowerData.length - 1 - i; j++) {
                if (LoveFlowerData[j].fallprice > LoveFlowerData[j + 1].fallprice) {
                    let temp = LoveFlowerData[j];
                    LoveFlowerData[j] = LoveFlowerData[j + 1];
                    LoveFlowerData[j + 1] = temp;
                }
            }
        }
        return LoveFlowerData;

    };
    //根据销量显示商品
    if (id == 2) {
        for (let i = 0; i < LoveFlowerData.length - 1; i++) {
            for (let j = 0; j < LoveFlowerData.length - 1 - i; j++) {
                if (LoveFlowerData[j].sell < LoveFlowerData[j + 1].sell) {
                    let temp = LoveFlowerData[j];
                    LoveFlowerData[j] = LoveFlowerData[j + 1];
                    LoveFlowerData[j + 1] = temp;
                }
            }
        }
        return LoveFlowerData;

    };
    //根据价格上升显示商品
    if (id == 3) {
        for (let i = 0; i < LoveFlowerData.length - 1; i++) {
            for (let j = 0; j < LoveFlowerData.length - 1 - i; j++) {
                if (LoveFlowerData[j].price < LoveFlowerData[j + 1].price) {
                    let temp = LoveFlowerData[j];
                    LoveFlowerData[j] = LoveFlowerData[j + 1];
                    LoveFlowerData[j + 1] = temp;
                }
            }
        }
        return LoveFlowerData;
    }
    //根据价格下降显示商品
    if (id == 5) {
        for (let i = 0; i < LoveFlowerData.length - 1; i++) {
            for (let j = 0; j < LoveFlowerData.length - 1 - i; j++) {
                if (LoveFlowerData[j].price > LoveFlowerData[j + 1].price) {
                    let temp = LoveFlowerData[j];
                    LoveFlowerData[j] = LoveFlowerData[j + 1];
                    LoveFlowerData[j + 1] = temp;
                }
            }
        }
        return LoveFlowerData;
    }
    //根据最新显示商品
    if (id == 4) {
        for (let i = 0; i < LoveFlowerData.length - 1; i++) {
            for (let j = 0; j < LoveFlowerData.length - 1 - i; j++) {
                if (LoveFlowerData[j].id < LoveFlowerData[j + 1].id) {
                    let temp = LoveFlowerData[j];
                    LoveFlowerData[j] = LoveFlowerData[j + 1];
                    LoveFlowerData[j + 1] = temp;
                }
            }
        }
        return LoveFlowerData;
    }
})