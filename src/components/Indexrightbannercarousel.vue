<template>
    <div class="index-carousel">
        <img v-for="item in imglists" class="backbg" v-if="item.id == bgkey" :src="item.src" alt="">
        <div class="guideline">
            <span v-for="item in imglists" :class="linecls(item.id)"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Indexrightbannercarousel",
        mounted(){
          setInterval(this.switchbg,5000);
        },
        data:function () {
            return {
                bgkey: '1',
                imglists: [
                    {id:'1',src:'carousel1.jpg'},
                    {id:'2',src:'carousel2.jpg'},
                    {id:'3',src:'carousel3.jpg'},
                    {id:'4',src:'carousel4.jpg'},
                    {id:'5',src:'carousel5.png'}
                ]
            }
        },
        computed:{

        },
        methods:{
            switchbg(){
                var n = Number.parseInt(this.bgkey);
                n++;
                if(n == 6){
                    n = 1
                }
                this.bgkey = n+'';
            },
            linecls(key){
                if(key == this.bgkey){
                    return 'lineActive'+'  line'
                }else{
                    return 'lineUnActive'+'  line'
                }
            }
        }
    }
</script>

<style scoped>
    .index-carousel{
        float: left;
        width: 550px;
        height: 240px;
        position: relative;
    }
    .backbg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .guideline{
        position: absolute;
        bottom: 10px;
        width: 100px;
        left: 50%;
        transform: translateX(-50%);
    }
    .line{
        display: inline-block;
        width: 10px;
        height: 2px;
        margin-right: 10px;
    }
    .lineUnActive{
        background: rgba(255,255,255,0.2);
    }
    .lineActive{
        background: rgba(255,255,255,0.9);
    }
</style>