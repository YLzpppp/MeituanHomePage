<template>
    <div class="category-container">
        <div class="category-title">
            <span>全部分类</span>
        </div>
        <div class="category-content-wrapper">
            <ul>
                <li  @mouseleave="hidedetailhandler(item.id)" @mouseover="itemkey = item.id"
                     v-for="item in navlinklists" class="nav-link">
                    <i><img class="nav-lin-ico" :src="item.ico" alt=""></i>
                    <span class="nav-link-desc" v-text="item.value"></span>
                    <i class="right-arrow"></i>
                </li>
            </ul>
        </div>
        <div @mouseover="hideflag = true" @mouseleave="hideflag = false;itemkey='' "
             class="details-wrapper" v-if=" itemkey != '' ">
            <div class="item-area">
                <div v-if="itemkey == item.id" v-for="item in detailslists" class="item-content-wrapper">
                    <div class="item-title-wrapper">
                        <a href="#" v-text="item.title"></a>
                        <a href="#">更多 <span class="item-arrow"></span></a>
                    </div>
                    <div class="content-wrapper">
                        <a v-for="i in item.keywords" href="#" v-text="i"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Indexleftbanner",
        data:function () {
            return {
                itemkey:'',
                hideflag: false,
                detailslists:[
                    {
                        id:'food',
                        title:'美食',
                        keywords:['代金券','甜点饮品','火锅','自助餐','小吃快餐','日韩料理','西餐','聚餐宴请','烧烤烤肉',
                            '东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤/烤串','西北菜','咖啡酒吧茶馆','云贵菜','东南亚菜','海鲜','素食','台湾/客家菜','创意菜','汤/粥/炖菜','蒙菜','新疆菜',
                            '其他美食','京菜鲁菜']
                    },
                    {
                        id:'takeout',
                        title:'外卖',
                        keywords:['美团外卖']
                    },
                    {
                        id:'hotel',
                        title:'酒店星级',
                        keywords:['经济型','舒适/三星','高档/四星','豪华/五星']
                    },
                    {
                        id:'homestay',
                        title:'热门城市',
                        keywords:['上海','成都','北京','重庆','南京','杭州','广州','西安','武汉','厦门','长沙','青岛','深圳','天津','苏州']
                    },
                    {
                        id:'homestay',
                        title:'热门房源',
                        keywords:['复试Loft','别墅']
                    },
                    {
                        id:'movie',
                        title:'热映电影',
                        keywords:['哪吒之魔童降世','烈火英雄','使徒行者2：谍影行动','速度与激情：特别行动','上海堡垒','沉默的证人','全职高手之巅峰荣耀','愤怒的小鸟2','红星照耀中国','冰雪女王4：魔镜世界']
                    },
                    {
                        id:'movie',
                        title:'热门影院',
                        keywords:['SFC上影影城','万达影城','大地影院','百丽宫影城','星美国际影城','橙天嘉禾影城','横店电影城','博纳国际影城','CGV影城','大光明电影院']
                    },
                    {
                        id:'ticket',
                        title:'机票',
                        keywords:['国内机票','国际/港澳台机票']
                    },
                    {
                        id:'ticket',
                        title:'火车票',
                        keywords:['火车票']
                    },
                    {
                        id:'ktv',
                        title:'休闲娱乐',
                        keywords:['足疗按摩','洗浴/汗蒸','酒吧','密室逃脱','轰趴馆','茶馆','私人影院','DIY手工坊','采摘/农家乐','网吧网咖','游乐游艺','VR','桌面游戏','真人CS','棋牌室',
                            '其他玩乐']
                    },
                    {
                        id:'ktv',
                        title:'KTV',
                        keywords:['KTV',]
                    },
                    {
                        id:'life',
                        title:'生活服务',
                        keywords:['衣物/皮具洗护','家政','搬家运输','送水','充值缴费','服饰/鞋包养护','开锁换锁','居家维修','管道疏通','家电维修清洗','电脑维修','手机维修','证件照/肖像摄影','照片冲印/图文文印','商务服务/法律服务',]
                    },
                    {
                        id:'beauty',
                        title:'丽人',
                        keywords:['美发','美甲美睫','美容美体','医学美容','瑜伽舞蹈','瘦身纤体','韩式定妆','祛痘','纹身']
                    },
                    {
                        id:'marriage',
                        title:'结婚',
                        keywords:['婚纱摄影','旅拍','个性写真','婚宴','婚庆公司','婚纱礼服','西服定制','婚戒首饰','婚车租赁','司仪主持','彩妆造型','婚礼跟拍','婚礼小礼品','更多婚礼服务']
                    },
                    {
                        id:'family',
                        title:'儿童乐园',
                        keywords:['婴儿游泳','其它亲子游乐',]
                    },
                    {
                        id:'family',
                        title:'幼儿教育',
                        keywords:['早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育',]
                    },
                    {
                        id:'family',
                        title:'亲子摄影',
                        keywords:['儿童摄影','孕妇写真','上门拍',]
                    },
                    {
                        id:'family',
                        title:'孕产护理',
                        keywords:['月子会所','产后恢复','妇幼医院','孕产用品','开奶催乳','月嫂']
                    },
                    {
                        id:'sports',
                        title:'运动健身',
                        keywords:['健身中心','武术场馆','游泳馆','羽毛球馆','溜冰场','射箭馆','篮球场','网球馆','台球馆',]
                    },
                    {
                        id:'decoration',
                        title:'装修设计',
                        keywords:['半包装修','全包装修','清包装修',]
                    },
                    {
                        id:'decoration',
                        title:'装修建材',
                        keywords:['地板','瓷砖石材','灯饰照明','厨卫洁具','油漆涂料','集成吊顶','墙纸墙艺','家用五金',]
                    },
                    {
                        id:'decoration',
                        title:'家具家居',
                        keywords:['家具','家居饰品','厨具饰品',]
                    },
                    {
                        id:'decoration',
                        title:'家装卖场',
                        keywords:['建材卖场','家居卖场','灯饰卖场',]
                    },
                    {
                        id:'study',
                        title:'音乐培训',
                        keywords:['钢琴','吉他','小提琴','古筝','架子鼓','声乐','其他音乐培训',]
                    },
                    {
                        id:'study',
                        title:'外语培训',
                        keywords:['英语','日语','韩语','法语','德语','汉语','俄语','西班牙语','其他外语',]
                    },
                    {
                        id:'medical',
                        title:'医疗健康',
                        keywords:['医院','齿科口腔','体检中心','药店','中医','其他健康']
                    },
                    {
                        id:'medical',
                        title:'爱车',
                        keywords:['洗车','租车','加油站','维修保养','驾校','汽车美容','陪练','汽车用品','停车场','汽车保险','汽车销售','更多汽车服务',
                            '机油保养','汽车报价','二手车','广告驾校','交警队','汽车改装','汽车配件']
                    },
                    {
                        id:'medical',
                        title:'宠物',
                        keywords:['宠物店','宠物医院']
                    },
                    {
                        id:'bar',
                        title:'玩乐',
                        keywords:['KTV','酒吧','密室逃脱','游乐游艺','网吧网咖','私人影院','DIY手工坊','桌面游戏','采摘/农家乐','棋牌室',]
                    },

                ],
                navlinklists:[
                    {id:'food',ico:'banner/food.png',value:'美食'},
                    {id:'takeout' ,ico:'banner/takeout.png' ,value:'外卖'},
                    {id:'hotel' ,ico:'banner/hotel.png' ,value:'酒店'},
                    {id:'homestay' ,ico:'banner/homestay.png' ,value:'民宿'},
                    {id:'movie' ,ico:'banner/movie.png' ,value:'猫眼电影'},
                    {id:'ticket' ,ico:'banner/ticket.png' ,value:'机票 / 火车票'},
                    {id:'ktv' ,ico:'banner/ktv.png' ,value:'休闲娱乐 / KTV'},
                    {id:'life' ,ico:'banner/life.png' ,value:'生活服务'},
                    {id:'beauty' ,ico:'banner/beauty.png' ,value:'丽人 / 美发 / 医学美容'},
                    {id:'marriage' ,ico:'banner/marriage.png' ,value:'结婚 / 婚纱摄影 / 婚宴'},
                    {id:'family' ,ico:'banner/family.png' ,value:'亲子 / 儿童乐园 / 幼教'},
                    {id:'sports' ,ico:'banner/sports.png' ,value:'运动健身 / 健身中心'},
                    {id:'decoration' ,ico:'banner/deco.png' ,value:'家装 / 建材 / 家居'},
                    {id:'study' ,ico:'banner/study.png' ,value:'学习培训 / 音乐培训'},
                    {id:'medical' ,ico:'banner/medical.png' ,value:'医疗健康 / 宠物 / 爱车'},
                    {id:'bar' ,ico:'banner/bar.png' ,value:'酒吧 / 密室逃脱'},
                ]
            }
        },
        methods:{
            hidedetailhandler(key){
                setTimeout(()=>{
                    if(!this.hideflag && key == this.itemkey){
                        this.itemkey = '';
                    }
                },1)
            }
        }
    }
</script>

<style scoped>
    .clearfix::after,
    .clearfix::before
    {
        content: '';
        display: block;
        clear: both;
        overflow: hidden;
    }
    .category-container{
        box-sizing: border-box;
        width: 230px;
        height: 475px;
        background: white;
        margin-top: -50px;
        border: 1px solid #E8E8E8;
        position: relative;
    }
    .category-title{
        height: 50px;
        padding-top: 15px;
        box-sizing: border-box;
    }
    .category-title span{
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        margin-left: 15px;
    }
    .category-content-wrapper ul{
        padding: 10px 0 8px 0;
        height: 425px;
        box-sizing: border-box;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
    }
    .category-content-wrapper ul li{
        list-style: none;
    }
    .category-content-wrapper ul li:hover {
        background: #FFF7ED;
    }
    .nav-link{
        position: relative;
        box-sizing: border-box;
        padding: 2px 12px;
        height: 26px;
    }
    .nav-link-desc{
        margin-left: 11px;
        display: inline-block;
        font-size: 13px;
        color: #646464;
    }
    .right-arrow{
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        right: 13px;
        display: block;
        width: 4px;
        height: 4px;
        border-right: 1px solid #999999;
        border-bottom: 1px solid #999999;
        transform: rotate(-45deg);
    }
    .nav-lin-ico{
        display: inline-block;
        width: 16px;
        height: 16px;
        object-fit: cover;
        transform: translateY(3px);
    }
    .details-wrapper{
        z-index: 999;
        position: absolute;
        width: 400px;
        height: 415px;
        right: -400px;
        top: 59px;
        background-color: #ffffff;
        overflow: scroll;
    }
    .item-area{
        display: block;
    }
    .item-content-wrapper{
        padding: 0 30px;
    }
    .item-title-wrapper{
        position: relative;
        margin-top: 24px;
        padding-bottom: 10px;
        height: 22px;
        border-bottom: 1px solid #E8E8E8;
    }
    .item-title-wrapper a{
        text-decoration: none;
    }
    .item-title-wrapper a:first-child{
        color: #222222;
        font-size: 16px;
        font-weight: 500;
    }
    .item-title-wrapper a:last-child{
        float: right;
        font-size: 12px;
        line-height: 22px;
        color: #999999;
        margin-right: 7px;
    }
    .item-arrow{
        position: absolute;
        top: 29%;
        right: 0;
        display: inline-block;
        width: 4px;
        height: 4px;
        border-right: 1px solid #999999;
        border-bottom: 1px solid #999999;
        transform: rotate(-45deg);
    }
    .content-wrapper a{
        display: inline-block;
        font-size: 12px;
        line-height: 15px;
        color: #999999;
        margin-right: 16px;
        margin-top: 10px;
        cursor: pointer;
    }
    .content-wrapper a:hover{
        color: #FF901E;
    }

</style>