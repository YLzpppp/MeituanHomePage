<template>
    <footer class="w">
        <div class="content">
            <div class="eachcolumn">
                <FooterTable :tablevalues="userhelp"/>
                <FooterTable :tablevalues="meituanservice"/>
            </div>
            <div class="eachcolumn">
                <FooterTable :tablevalues="cooperation"/>
            </div>
            <div class="eachcolumn">
                <FooterTable :tablevalues="joinagency"/>
                <FooterTable :tablevalues="meituanrules"/>
            </div>
            <div class="eachcolumn">
                <FooterTable :tablevalues="subscribemeituan"/>
                <FooterTable :tablevalues="companyinfo"/>
                <FooterTable :tablevalues="report"/>
            </div>
            <div class="eachcolumn">
                <FooterTable :tablevalues="customerhotline"/>
                <FooterTable :tablevalues="storehotline"/>
                <FooterTable :tablevalues="reporthotline"/>
                <FooterTable :tablevalues="storehelphotline"/>
            </div>
        </div>
    </footer>
</template>

<script>
    import '../css/common.css';
    import FooterTable from "./FooterTable.vue";

    export default {
        name: "Footer",
        components: {FooterTable},
        data:function () {
            return {
                userhelp: {
                    'dt': '用户帮助',
                    'dd': [
                        '申请退款','查看美团劵密码','常见问题','用户协议','隐私政策','反诈骗公告','消费者权益保障'
                    ]
                },
                meituanservice:{
                    'dt': '美团服务',
                    'dd': [
                        '美团外卖','美团酒店','猫眼电影','美团配送','美团云','大众点评','榛果民宿','无人配送'
                    ]
                },
                cooperation:{
                    'dt': '商家合作',
                    'dd': [
                        '美食商家入驻(非外卖)','美团外卖开店申请','美团收银官网','外卖配送加盟申请','美团点评餐饮学院','酒店商家入驻','境内度假商家入驻','综合商家入驻',
                        '榛果民宿房东商家入驻','商家开票申请','美团点评智能收银机','聚宝盆餐饮开放平台','美团点评收单','免费使用美团排队','快驴进货商家合作','美团闪购商家入驻'
                    ]
                },
                joinagency:{
                    'dt': '代理商加盟',
                    'dd': [
                        '美团外卖代理商招募','到店餐饮代理商招募','非餐饮代理商招募','美团联盟','美团收银招募线上分销商','美团点评5S服务商招募','美团收单渠道代理商招募'
                    ]
                },
                meituanrules:{
                    'dt': '美团规则',
                    'dd': [
                        '规则中心','规则目录','规则评议院'
                    ]
                },
                subscribemeituan:{
                    'dt': '关注美团',
                    'dd': [
                        '美团新浪微博'
                    ]
                },
                companyinfo:{
                    'dt': '公司信息',
                    'dd': [
                        '关于我们','投资者关系','加入我们','商户诚信公约及管理办法','保险经纪资质'
                    ]
                },
                report:{
                    'dt': '廉正举报',
                    'dd': [
                        '廉正邮箱'
                    ]
                },
                customerhotline:{
                    'dt': '消费者服务热线',
                    'dd': [
                        '外卖消费者：10109777','猫眼消费者：10105335','其他消费者：10107888'
                    ]
                },
                storehotline:{
                    'dt': '商家服务热线',
                    'dd': [
                        '外卖&餐饮商家：10105557','休闲娱乐、丽人、ktv、教育、结婚、亲','子、家装等商家：10100107'
                    ]
                },
                reporthotline:{
                    'dt': '投诉举报热线',
                    'dd': [
                        '违法和不良信息举报电话：4006018900','举报邮箱：tousujubao@meituan.com'
                    ]
                },
                storehelphotline:{
                    'dt': '商家自助入驻美团入口',
                    'dd':[]
                }

            }
        }
    }
</script>

<style scoped>

    .content{
        padding: 40px 45px;
        border-top: 1px solid #E5E5E5;
        display: flex;
        flex-flow: row wrap;
        flex-shrink: 1;
        align-items: start;
    }
    .eachcolumn{
        display: inline-block;
        width: 220px;
        text-align: left;
    }
</style>