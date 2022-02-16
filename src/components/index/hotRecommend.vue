<template>
  <div class="hotRecommend">
        <h1>热销推荐</h1>
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
        this.$axios.get('http://localhost:3000/hotRecommend?_page=1&_limit=6')
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
.hotRecommend{
    background-color: #f8f8f8;
    h1{
        color: #535353;
        font-size: .3rem;
        padding-top: .4rem;
        padding-bottom: .4rem;
        padding-left: .25rem;
        font-weight: 600;
        background-color: #fff;
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