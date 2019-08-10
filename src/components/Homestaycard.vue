<template>
    <div class="card">
        <a href="#">
            <div class="cardtoppic">
                <img :src="cardcontents.homepic" alt="lost">
                <img :src="cardcontents.headpic" alt="lost">
            </div>
            <div class="card-description">
                <h3 v-text="cardcontents.maintitle"></h3>
                <p v-text="cardcontents.subtitle"></p>
                <span v-cloak ><i>￥</i>{{cardcontents.price}}</span>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Homestaycard",
        props:['cardcontents']
    }
</script>

<style scoped>
    .card{
        margin-right: 18px;
        float: left;
    }
    .cardtoppic{
        width: 370px;
        height: 222px;
        position: relative;
    }
    .cardtoppic img:first-child{
        object-fit: contain;
        width: 100%;
        height: 208px;
        margin-bottom: 11px;
        border-radius: 4px;
    }
    .cardtoppic img:last-child{
        border: 2px solid white;
        height: 48px;
        width: 48px;
        position: absolute;
        bottom: -12px;
        right: 15px;
        z-index: 99;
        border-radius: 40px;


        background-size: 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }
    .card-description{
        padding-bottom: 25px;
        text-align: left;
    }
    .card-description h3{
        width:297px;
        font-size: 16px;
        color: #222222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 7px 0;
        font-weight: 400;
    }
    .card-description p{
        font-size: 12px;
        color: #999999;
        text-align: left;
    }
    .card-description span{
        display: block;
        font-size: 22px;
        color: #FF6600;
        font-weight: 500;
        letter-spacing: -0.8px;
        padding: 4px 0;
    }
    .card-description span i{
        font-size: 13px;
        font-style: normal;
    }

</style>