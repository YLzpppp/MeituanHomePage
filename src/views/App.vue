<template>
    <div>
        <Header/>
        <Indexcontainer/>
        <Concessional/>
        <Contentcard/>
        <Bottomnavigation/>
        <Footer/>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue';
    import Bottomnavigation from '../components/Bottomnavigation.vue';
    import Contentcard from '../components/Contentcard.vue';
    import Header from '../components/Header.vue';
    import Indexcontainer from '../components/Indexcontainer.vue';
    import Concessional from '../components/Concessional.vue';

    export default {
        name: "App",
        components: {
            Indexcontainer,
            Footer,
            Bottomnavigation,
            Contentcard,
            Header,
            Concessional
        },
        data: function () {
            return {
                msg:'app view'
            }
        }
    }
</script>

<style scoped>

</style>