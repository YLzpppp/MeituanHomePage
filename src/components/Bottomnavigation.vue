<template>
    <div class="w botnav">
        <div class="botnavtitle">美团导航</div>
        <dl>
            <Bottomnavsingle :botnavs="popularcities"/>
            <Bottomnavsingle :botnavs="popularclassfy"/>
            <Bottomnavsingle :botnavs="nearbypopular"/>
        </dl>
    </div>
</template>

<script>
    import '../css/common.css';
    import Bottomnavsingle from '../components/Bottomnavsingle.vue';
    export default {
        name: "Bottomnavigation",
        components:{
            Bottomnavsingle,
        },
        data:function () {
            return {
                popularcities:{
                    title:'热门城市',
                    contents:[
                        '昆明','石家庄','武汉','厦门','北京','广州','合肥','南宁','佛山','上海',
                        '温州','西安','南京','深圳','长沙','大连','东莞','哈尔滨','常州','宁波',
                    ]
                },
                popularclassfy:{
                    title: '热门分类',
                    contents:[
                        '酒店','美食','休闲娱乐','运动健身','生活服务','上门服务','购物','时尚购','本地购物','结婚',
                        '摄影写真','宴会','丽人','母婴亲子','学习培训','家装','汽车服务','医疗','宠物'
                    ]
                },
                nearbypopular:{
                    title: '周边热门',
                    contents:[
                        '太仓酒店','太仓美食','彰化休闲娱乐','彰化运动健身','彰化生活服务','彰化上门服务','彰化购物','太仓时尚购','太仓本地购物','彰化结婚',
                        '宜兰摄影写真','太仓宴会','彰化丽人','彰化母婴亲子','太仓学习培训','太仓家装','宜兰汽车服务','彰化医疗','彰化宠物'
                    ]
                }
            }
        }
    }
</script>

<style scoped>

    .botnavtitle{
        width: auto;
        font-size: 16px;
        font-weight: 500;
        height: 44px;
        line-height: 44px;
        padding:6px 0 0 20px ;
        color: #222;
        text-align: left;
    }

    .botnav{
        background: white;
        border-radius: 4px;
        margin: 40px auto;
        border: 1px solid #E7E7E7;
    }
</style>