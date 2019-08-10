<template>
    <div class="content-card-container w">
        <div class="content-nav">
            <div class="content-nav-title">狠优惠</div>
            <ul>
                <li v-for="item in kinds" :key="item.id"
                    :class="{active: kindkey == item.id}" v-text="item.name"
                    @mouseover="kindkey = item.id">
                </li>
            </ul>
        </div>
        <div class="content-card-content clearfix">
            <Concessionalcard v-for="item in cardlists" :cardcontents="item" />
        </div>
    </div>
</template>

<script>
    import '../css/common.css';
    import Concessionalcard from './Concessionalcard.vue';
    import c1 from '@/assets/img/con1.jpg';
    import c2 from '@/assets/img/con2.jpg';
    import c3 from '@/assets/img/con3.jpg';
    import c4 from '@/assets/img/con4.jpg';
    import c5 from '@/assets/img/con5.jpg';
    import c6 from '@/assets/img/con6.jpg';
    import c7 from '@/assets/img/con7.jpg';

    export default {
        components: {
          Concessionalcard
        },
        name: "Personalrecommend",
        data:function () {
            return {
                kindkey:'all',
                kinds:[{id:'all',name:'全部'}],
                cardlists:[
                    {
                        src:c1,
                        title:'DFC影城（宝山店）',
                        subtitle:'使徒行者2：谍影行动',
                        price:'35',
                        marketprice:'200'
                    },
                    {
                        src:c2,
                        title:'高视设计装饰',
                        subtitle:'[陆家嘴]高视设计总裁亲自监督',
                        price:'1',
                        marketprice:'2999997'
                    },
                    {
                        src:c3,
                        title:'井格重庆火锅',
                        subtitle:'[19店通用]井格夏日畅饮券1张',
                        price:'38',
                        marketprice:'4000'
                    },
                    {
                        src:c4,
                        title:'功夫汪宠物寄养训练乐园',
                        subtitle:'[新桥]狗狗行为纠正',
                        price:'9.9',
                        marketprice:'1100000'
                    },
                    {
                        src:c5,
                        title:'小肥羊',
                        subtitle:'[多城市]50元代金券1张',
                        price:'1',
                        marketprice:'50'
                    },
                    {
                        src:c1,
                        title:'DFC影城（宝山店）',
                        subtitle:'哪吒之魔童降世',
                        price:'35',
                        marketprice:'200'
                    },
                    {
                        src:c6,
                        title:'新小玩国GO户外拓展俱乐部',
                        subtitle:'两天一夜旅游团建',
                        price:'1',
                        marketprice:'999999'
                    },
                    {
                        src:c1,
                        title:'DFC影城（宝山店）',
                        subtitle:'烈火英雄',
                        price:'35',
                        marketprice:'200'
                    },
                    {
                        src:c7,
                        title:'马家刺青',
                        subtitle:'免费咨询',
                        price:'1',
                        marketprice:'99999'
                    },
                    {
                        src:c7,
                        title:'马家刺青',
                        subtitle:'免费吸猫',
                        price:'1',
                        marketprice:'99999'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .content-card-container{
        height: auto;
        margin-top: 40px;
        border-radius: 4px;
        background: white;
    }
    .content-nav{

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        height: 45px;
        line-height: 45px;
        background: linear-gradient(to right ,#ff714a, #fc4242);
        /*#ff714a #fc4242*/
    }
    .content-card-content{
        padding: 20px 0 0 20px;
        border-left: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
        border-right: 1px solid #E7E7E7;
    }
    .content-nav-title {
        float: left;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        margin: 0 10px 0 13px;
        padding: 0 5px;
        font-size: 18px;
        color: #ffffff;
    }
    ul{
        float: left;
    }
    li{
        display: block;
        float: left;
        line-height: 45px;
        height: 45px;
        position: relative;
        color: white;
        font-size: 14px;
        padding: 0 5px;
    }
    .active::after{
        content: '';
        display: block;
        position: absolute;
        top:38px;
        width: 2px;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid white;
        margin: 0 8px;
    }
</style>