<template>
  <div class="readerColumn">
        <img class="columImg" src="../../assets/img/column1.jpg" alt="">
        <ul>
            <li v-for="(goodsItem,index) in goodsData" 
                :key="index"
            >
                <img :src="goodsItem.picUrl" alt="">
                <p class="bookName">{{goodsItem.name}}</p>
                <p class="price"><span class="sellPrice">${{goodsItem.price}}</span><i class="iconfont icon-jiarugouwuche"></i></p>
            </li>
            
        </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            goodsData:[]
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/reader?_page=1&_limit=5')
        .then(res=>{
            this.goodsData = res.data;
        }).catch(err=>{
            console.log(err);
        });
       
    },
    mounted(){

    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.readerColumn{
    background-color: #f8f8f8;
    .columImg{
        padding-top: .4rem;
        padding-bottom: .4rem;
        padding-left: .25rem;
        background-color: #fff;
        width: 7.5rem;
        height: 1.7rem;
    }
    ul{
        width: 7.26rem;
        margin: .1rem auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        background-color: #f8f8f8;
        padding: .15rem;
        li{
            width: 3rem;
            margin-left: 0.1rem;
            margin-right: 0.1rem;
            background-color: #fff;
            margin-top: 0.14rem;
            padding: 0.2rem;
            img{
                width: 100%;
            }
            .bookName{
                margin: .28rem auto .28rem;
                font-size: .24rem;
            }
            .price{
                margin: .21rem auto;
                display: flex;
                justify-content:space-between;
                align-items: center;
            }
            .sellPrice{
                font-size: .26rem;
                color: #ff5e15;
            }
            i{
                font-size: .35rem;
                color: #ff5e15;
            }
        }
    }
}
</style>