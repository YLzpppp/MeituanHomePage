<template>
    <div class="card">
        <a href="#">
            <div class="cardtoppic">
                <img :src="cardcontents.src" alt="lost">
            </div>
            <div class="card-description">
                <h3 v-text="cardcontents.title"></h3>
                <p v-text="cardcontents.subtitle">使徒行者2</p>
                <span class="price" v-cloak><i>￥</i>{{cardcontents.price}}</span>
                <del v-cloak style="font-size: 12px;color: #999999;">&nbsp;门市价￥{{cardcontents.marketprice}}</del>
            </div>
        </a>
    </div>
</template>

<script>

    export default {
        name: "Concessionalcard",
        data:function(){
          return {

          }
        },
        props:['cardcontents']
    }
</script>

<style scoped>

    .card{
        float: left;
        width: 213px;
        height: 270px;
        padding: 10px;
        transition: background-color 500ms;
    }
    .cardtoppic{
        width: 100%;
        position: relative;
    }
    .cardtoppic img:first-child{
        object-fit: contain;
        width: 100%;
        margin-bottom: 11px;
        border-radius: 4px;
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
        font-weight: 600;
    }
    .card-description p{
        font-size: 12px;
        color: #999999;
        text-align: left;
        margin-bottom: 30px;
    }
    .price{
        display: inline-block;
        font-size: 22px;
        color: #FF6600;
        font-weight: 500;
        letter-spacing: -0.8px;
        padding: 4px 0;
        margin-right: 5px;
    }
    .price i{
        font-size: 13px;
        font-style: normal;
    }

</style>