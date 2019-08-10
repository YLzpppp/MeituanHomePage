<template>
    <div class="botsinglecontainer clearfix">
        <dt v-text="botnavs.title"></dt>
        <div class="botnavsinglecontents ">
            <dd v-for="item in botnavs.contents">
                <a href="#" v-text="item"></a>
            </dd>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bottomnavsingle",
        props:['botnavs']
    }
</script>
<style scoped>
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
        overflow: hidden;
    }
    .botsinglecontainer{
        width: 100%;
        height: auto;
    }
    dt{
        width: 100px;
        float: left;
        text-align: center;
        font-size: 14px;
        color: #222;
        font-weight: 500;
        padding: 11px 0;
    }
    .botnavsinglecontents{
        float: left;
        width:1000px;
        border-bottom: 1px solid #E7E7E7;
        padding-top: 12px;
        transform: translateY(1px);
    }
    dd{
        margin-bottom: 13px;
        height: 17px;
        font-size: 12px;
        text-align: left;
        width: 100px;
        float: left;
    }
    a{
        font-size: inherit;
    }

</style>