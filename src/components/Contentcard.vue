<template>
    <div class="content-card-container w">
        <div class="content-nav">
            <div class="content-nav-title">推荐民宿</div>
            <ul>
                <li ref="liflag" v-for="item in cities" :key="item.id"
                    :class="{active: citykey == item.id}" v-text="item.name"
                    @mouseover="citykey = item.id">
                </li>
            </ul>
        </div>
        <div class="content-card-content clearfix">
            <Homestaycard v-if="citykey == 'nj'" v-for="item in nanjinglists" :cardcontents="item"/>
            <Homestaycard v-if="citykey == 'hz'" v-for="item in hangzhoulists" :cardcontents="item"/>
        </div>
    </div>
</template>

<script>
    import '../css/common.css';
    import Homestaycard from './Homestaycard.vue';
    import hm0 from '@/assets/img/download-0.jpg';
    import hd0 from '@/assets/img/download-1.jpg';
    import hm1 from '@/assets/img/download-2.jpg';
    import hd1 from '@/assets/img/download-3.jpg';
    import hm2 from '@/assets/img/download-4.jpg';
    import hd2 from '@/assets/img/download-5.jpg';
    import hm3 from '@/assets/img/download-6.jpg';
    import hd3 from '@/assets/img/download-7.jpg';
    import hm4 from '@/assets/img/download-8.jpg';
    import hd4 from '@/assets/img/download-9.jpg';
    import hm5 from '@/assets/img/download-10.jpg';
    import hd5 from '@/assets/img/download-11.jpg';
    import hm6 from '@/assets/img/download-12.jpg';
    import hd6 from '@/assets/img/download-13.jpg';
    import hm7 from '@/assets/img/download-14.jpg';
    import hd7 from '@/assets/img/download-15.jpg';
    import hm8 from '@/assets/img/download-16.jpg';
    import hd8 from '@/assets/img/download-17.jpg';
    import hm9 from '@/assets/img/download-18.jpg';
    import hd9 from '@/assets/img/download-19.jpg';
    import hm10 from '@/assets/img/download-20.jpg';
    import hd10 from '@/assets/img/download-21.jpg';
    import hm11 from '@/assets/img/download-22.jpg';
    import hd11 from '@/assets/img/download-23.jpg';

    export default {
        name: "Contentcard",
        components: {Homestaycard},

        computed:{

        },
        data:function(){
            return {
                citykey: 'nj',
                cities:[{id:'nj',name:'南京'},{id:'hz',name:'杭州'}],
                nanjinglists:[
                    {
                        homepic: hm0,
                        headpic: hd0,
                        maintitle:'摩登日式 精致榻榻米 靠南京南站 毗邻夫子庙 地铁沿线 温馨舒适 干净整饬',
                        subtitle:'整套1居室·可住2人|南京南站/明发',
                        price:'138'
                    },
                    {
                        homepic:hm1,
                        headpic:hd1,
                        maintitle:'【2-1】夫子庙秦淮河地铁口老门东近在咫尺，南京南、南京站、鸡鸣寺等一站式直达',
                        subtitle:'整套可住2人|夫子庙/水游城',
                        price:'126'
                    },

                    {
                        homepic:hm2,
                        headpic:hd2,
                        maintitle:'南京南站、江宁大学城、龙眠大道地铁站夜未央日式公寓',
                        subtitle:'整套1居室·可住2人|东山镇',
                        price:'139'
                    },
                    {
                        homepic:hm3,
                        headpic:hd3,
                        maintitle:'【云途】苏宁紫金嘉悦温馨大床房，紧邻徐庄软件园，仙林大学城，苏宁总部。地铁四号线',
                        subtitle:'整套1居室·可住2人|徐庄软件园',
                        price:'158'
                    },
                    {
                        homepic:hm4,
                        headpic:hd4,
                        maintitle:'地铁房 直达新街口 夫子庙 南京站 南京南站',
                        subtitle:'整套2居室·可住5人|',
                        price:'208'
                    },
                    {
                        homepic:hm5,
                        headpic:hd5,
                        maintitle:'机场附近地中海1米8大床房（免费接机/地铁）十分钟到机场 临大学城 三分钟到地铁站',
                        subtitle:'整套1居室·可住3人|铜山镇',
                        price:'128'
                    },
                ],
                hangzhoulists:[
                    {
                        homepic:hm6,
                        headpic:hd6,
                        maintitle:'南栀公寓*复式北欧风房屋',
                        subtitle:'整套3居室·可住6人|黄龙/高新文教区',
                        price:'328'
                    },
                    {
                        homepic:hm7,
                        headpic:hd7,
                        maintitle:'杭州C位出门西湖河坊街吴山广场银泰 楼下地铁直达火车东站大三房可做饭',
                        subtitle:'整套3居室·可住6人|西湖湖滨商圈',
                        price:'658'
                    },
                    {
                        homepic:hm8,
                        headpic:hd8,
                        maintitle:'暖舍1下沙大学城龙湖天街地铁站大床房',
                        subtitle:'整套1居室·可住2人|下沙开发区/高教区',
                        price:'148'
                    },
                    {
                        homepic:hm9,
                        headpic:hd9,
                        maintitle:'钱塘江大桥联庄地铁口 飘窗公寓 亚科中心旁',
                        subtitle:'整套1居室·可住2人|滨江地区',
                        price:'288'
                    },
                    {
                        homepic:hm10,
                        headpic:hd10,
                        maintitle:'【火烈鸟】火车东站地铁口直达西湖/loft公寓火车东站旁可住4人',
                        subtitle:'整套2居室·可住4人|杭州东站',
                        price:'298'
                    },
                    {
                        homepic:hm11,
                        headpic:hd11,
                        maintitle:'【云端小屋】超大LOFT,地铁2号线直达西湖,轻奢装修,小区两面环水风景优美,晚上超安静',
                        subtitle:'整套3居室·可住3人|萧山国际机场及周边',
                        price:'115'
                    }
                ]
            }
        },
        props: ['navcolor']
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
        background-color: orange;
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

