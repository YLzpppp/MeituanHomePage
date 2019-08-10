<template>
    <div class="index-container clearfix">
        <div class="left-banner">
            <Indexleftbanner/>
        </div>
        <div class="right-banner clearfix">
            <div class="home-head-links clearfix">
                <a href="#">美团外卖</a>
                <a href="#">猫眼电影</a>
                <a href="#">美团酒店</a>
                <a href="#">民宿/公寓</a>
                <a href="#">商家入驻</a>
                <a href="#">美团公益</a>
            </div>
            <div>
                <Indexrightbannercarousel/>
                <div class="entertainmentcard">
                    <a href="#">
                        <img src="sing.jpg" alt="休闲生活">
                    </a>
                </div>
                <div class="logincard">
                    <div class="logincard-main-content">
                        <div class="logincard-head">
                            <img src="headpicdefault.jpg" alt="请登录">
                        </div>
                        <p class="logincard-title">Hi!&nbsp;&nbsp;你好</p>
                        <div class="logincard-btn-wrapper">
                            <button>注册</button>
                        </div>
                        <div class="logincard-btn-wrapper">
                            <button>立即登录</button>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div class="othercard">
                    <a href="#">
                        <img src="hotel.png" alt="住酒店">
                    </a>
                </div>
                <div class="othercard">
                    <a href="#">
                        <img src="fkboring.jpg" alt="涨姿势">
                    </a>
                </div>
                <div class="iamstore">
                    <a href="#">
                        <img src="store.jpg" alt="我是商家">
                    </a>
                </div>
                <div class="download-app">
                    <div class="download-qr-container">
                        <img src="qr.png" alt="二维码">
                    </div>
                    <p>美团APP手机版</p>
                    <p><span style="color: #F24C4C;margin: 0 0.2rem;">1元起</span>吃喝玩乐</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Indexleftbanner from './Indexleftbanner.vue';
    import Indexrightbannercarousel from './Indexrightbannercarousel.vue';

    export default {
        name: "Indexcontainer",
        components:{
            Indexleftbanner,
            Indexrightbannercarousel,
        }
    }
</script>

<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
        overflow: hidden;
    }
    .index-container{
        width: 1190px;
        margin: 0 auto;
    }
    .left-banner{
        float: left;
        position: relative;
    }
    .right-banner{
        float: left;
        margin: 10px 0 0 10px ;
        position: relative;

    }
    .home-head-links{
        position: absolute;
        top: -45px;
        left: 20px;
        width: 640px;
        display: block;
    }
    .home-head-links a{
        text-decoration: none;
        color: #222222;
        font-size: 16px;
        font-weight: 700;
        margin: 0 20px;
        position: relative;
    }
    .home-head-links a:nth-child(1):hover,
    .home-head-links a:nth-child(4):hover
    {
        color: #FED050;
    }
    .home-head-links a:nth-child(2):hover,
    .home-head-links a:nth-child(3):hover,
    .home-head-links a:last-child:hover{
        color: #F24C4C;
    }
    .home-head-links a:nth-child(5):hover{
        color: #FF901E;
    }
    .entertainmentcard{
        float: left;
        width: 150px;
        height: 240px;
        margin: 0 10px;
    }
    .logincard{
        float: left;
        width: 230px;
        height: 240px;
        background: #ffffff;
        border: 1px solid #E8E8E8;
        box-sizing: border-box;
    }
    .logincard-head img{
        height: 47px;
        width: 47px;
        border-radius: 50%;
        margin: 0 auto 5px auto;
    }
    .logincard-main-content{
        padding-top: 30px;
        width: 100%;
    }
    .logincard-title{
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        letter-spacing: 0.15rem;
    }
    .logincard-btn-wrapper{
        width: 100%;

    }
    .logincard-btn-wrapper button{
        margin: 10px auto 15px auto;
        width: 118px;
        color: #333333;
        font-size: 14px;
        background: #ffffff;
        border: 1px solid #E5E5E5;
        border-radius: 40px;
        text-align: center;
        display: block;
        line-height: 38px;
        transition: background-color 0.5s;
    }
    .logincard-btn-wrapper button:hover{
        background-color: #E5E5E5;
    }
    .othercard{
        float: left;
        width: 270px;
        height: 165px;
        margin: 10px 10px 0 0;
    }
    .iamstore{
        float: left;
        width: 150px;
        height: 165px;
        margin: 10px 10px 0 0;
        background: tomato;
    }
    .download-app{
        box-sizing: border-box;
        margin-top: 10px;
        float: left;
        width: 230px;
        height: 165px;
        border: 1px solid #E8E8E8;
        background: #ffffff;
    }
    .download-app p{
        text-align: center;
    }
    .download-app p:first-child{
        font-weight: 500;
    }
    .download-app p:last-child{
        font-size: 12px;
    }
    .download-qr-container{
        margin-top: 10px;
    }
    .download-qr-container img{
        margin: 0 auto;
        width: 95px;
        height: 95px;
    }
    .othercard a,
    .iamstore a,
    .entertainmentcard a
    {
        display: block;
        width: 100%;
        height: 100%;
    }
    .othercard a img,
    .iamstore a img,
    .entertainmentcard a img
    {
        display: block;
        object-fit: contain;
        width: 100%;
    }
</style>
























