<template>
    <header>
        <nav>
            <div class="w topnav">
                <div class="leftbox">
                    <p class="city"><i class="fa fa-map-marker"></i>上海</p>
                    <div class="city-switcher">切换城市</div>
                    <p class="place">
                        <span style="font-size: 12px;color: #999999;">&nbsp;[</span>
                        <a href="#">彰化</a>
                        <a href="#">宜兰</a>
                        <a href="#">太仓</a>
                        <span style="font-size: 12px;color: #999999;">]&nbsp;</span>
                    </p>
                    <ul class="loginregister">
                        <li><a href="#" style="color:#FE8C00">立即登录</a></li>
                        <li><a href="#">注册</a></li>
                    </ul>
                </div>
                <ul class="rightbox">
                    <li><a href="#">我的美团</a></li>
                    <li><a href="#">手机APP</a></li>
                    <li><a href="#">商家中心</a></li>
                    <li><a href="#">美团规则</a></li>
                    <li><a href="#">网站导航</a></li>
                </ul>
            </div>
            <div class="w searchpart clearfix">

                <div class="head-title-container">
                    <div class="head-title">
                        <a href="#">
                            <img src="headtitle.png" alt="美团">
                        </a>
                    </div>
                </div>

                <div class="mid-search-container">
                    <div class="searchbox clearfix">
                        <input type="text" placeholder="搜索商家或地点">
                        <button><span class="fa fa-search" style="font-size: 1.25rem"></span></button>
                    </div>
                    <div class="search-keywords">
                        <a href="#">上海玛雅海滩水公园</a>
                        <a href="#">上海迪士尼度假区</a>
                        <a href="#">上海欢乐谷</a>
                        <a href="#">上海海昌海洋公园</a>
                        <a href="#">上海科技馆</a>
                    </div>
                </div>
            </div>

        </nav>
    </header>
</template>

<script>
    import '../css/common.css';
    import 'font-awesome/css/font-awesome.min.css';
    export default {
        name: "Header"
    }
</script>

<style scoped>
    header{
        width: 100%;
        background: white;
        box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
    }
    nav{
        width: 100%;
        background: #ffffff;
        color: #999999;
    }
    .topnav{
        height: 40px;
    }
    .leftbox{
        padding: 12px 0 0 0;
        float: left;
    }
    .city{
        display: inline-block;
        font-size: 12px;
        color: #666666;
    }
    .w p i{
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0 0.25rem;
    }
    .city-switcher{
        display: inline-block;
        color: #666666;
        padding: 0 2px;
        background: #F8F8F8;
        margin-left: 6px;
        font-size: 12px;
        border: 1px solid #E8E8E8;
    }
    .place{
        display: inline-block;
    }
    .place a{
        text-decoration: none;
        font-size: 12px;
        color: #999999;
        margin: 0 4px;
    }
    .loginregister{
        display: inline-block;
        margin-left: 15px;
    }
    .loginregister li{
        list-style: none;
        display: inline-block;
    }
    .loginregister li a{
        text-decoration: none;
        font-size: 12px;
        color: #999999;
        margin-left: 10px;
    }
    .rightbox{
        float:right;
        height: 40px;
        font-size: 12px;
    }
    .rightbox li{
        list-style: none;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        border: 1px solid transparent;
    }
    .rightbox li a{
        color: #999999;
        text-decoration: none;
        padding: 12px 14px;
    }
    .rightbox li a:hover{
        color: #FE8C00;
    }
    .searchpart{
        position: relative;
        padding-bottom: 35px;
    }
    .head-title-container{
        float: left;
        padding: 28px 60px 40px 0;
        font-size: 16px;
        min-width: 220px;
        height: 54px;
        box-sizing: content-box;
        vertical-align: sub;
    }
    .head-title a img{
        height: 46px;
        object-fit: contain;
    }
    .mid-search-container{
        position: absolute;
        top: 0;
        padding-top: 28px;
        left: 50%;
        transform: translateX(-50%);
    }
    .searchbox {
        width: 550px;
        height: 40px;
        background: #ffffff;
    }
    .searchbox input{
        float: left;
        box-sizing: border-box;
        width: 85.45%;
        height: 100%;
        font-size: 14px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top: 1px solid #E8E8E8;
        border-left: 1px solid #E8E8E8;
        border-bottom: 1px solid #E8E8E8;
        border-right: none;
        outline: none;
        background: #ffffff;
        padding-left: 1rem;
    }
    .searchbox input::-webkit-input-placeholder{
        color: #999999;
        font-size: 14px;
    }
    .searchbox input::-moz-placeholder{
        color: #999999;
        font-size: 14px;
    }
    .searchbox button{
        float: left;
        box-sizing: border-box;
        width: 14.45%;
        height: 40px;
        outline: none;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: #FFC300;
        border: none;
    }
    .search-keywords{
        padding: 8px 0 0 12px;
        width: 550px;
    }
    .search-keywords a {
        margin: 0 10px 3px 0;
        text-decoration: none;
        font-size: 12px;
        color: #999999;
    }
    .search-keywords a:hover{
        color: #FE8C00;
    }

</style>