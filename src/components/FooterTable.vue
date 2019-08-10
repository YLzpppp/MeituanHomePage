<template>
    <dl>
        <dt>{{tablevalues.dt}}</dt>
        <dd v-for="item in tablevalues.dd">
            <a href="#" v-text="item"></a>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: "FooterTable",
        props: [ 'tablevalues' ],
    }
</script>

<style scoped>

    dl{
        width: 100%;
        padding-bottom: 20px;
    }
    dt{
        color: #333;
        font-size: 14px;
        font-weight: 500;
        line-height: 2;
    }
    dd a{
        text-decoration: none;
        color: #666;
        font-size: 12px;
        line-height:2;
    }
</style>