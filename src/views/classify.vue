<template>
    <div id="all-goods">
        <topHeader></topHeader>
        <search></search>
        <div class="goodsNav">
            <ul class="content">
                <li 
                v-for="(item,index) in navList"
                :class="activeIndex===index?'active':''"
                :key="index"
                @click="getData(item.name,index)"
                >
                {{item.title}}</li>
            </ul>
            
        </div>
        <div class="content">
            <ul>
                <li v-for="(goodsItem,index) in goodsData" 
                :key="index"
                >
                    <!-- <img src="../assets/img/book1.jpg" alt=""> -->
                    <img :src="goodsItem.picUrl" alt="">
                    <p class="bookName">{{goodsItem.name}}</p>
                    <p class="price"><span class="sellPrice">${{goodsItem.price}}</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
            </ul>
        </div>
        <vfooter></vfooter>
        <copy-right></copy-right>
    </div>
</template>

<script>
import CopyRight from '../components/common/copyRight.vue';
import Search from '../components/common/search.vue';
import TopHeader from '../components/common/topHeader.vue';
import Vfooter from "../components/common/vfooter.vue"
export default {
    components:
    {Vfooter, TopHeader, Search, CopyRight},
    data(){
        return{
            navList:[],
            goodsData:[],
            bookData:[],
            readerData:[],
            aroundData:[],
            allData:[],
            activeIndex:0
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/navList')
        .then(res=>{
            this.navList = res.data
        }).catch(err=>{
            console.log(err);
        });
        this.getData('all',1)
    },
    mounted(){

    },
    methods:{
        toggle(index){
            this.activeIndex = index
        },
        getData(name,index){
            //Resources
            //http://localhost:3000/reader
            //http://localhost:3000/paperBook
            //http://localhost:3000/aroundGoods
            this.activeIndex = index;
            this.$axios
            .get(`http://localhost:3000/${name}`)
            .then((res)=>{
                this.goodsData = res.data;
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    
    
}
</script>

<style lang="scss" scoped>
#all-goods{
    background-color: #f9f9f9;
}
.goodsNav ul{
    width: 7.5rem;
    height: 0.74rem;
    margin: 0.12rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #fff;
    color: #787878;
    li{
        font-size: 0.3rem;
        font-weight: 500;
        
    }
    .active{
        color:#ff6621;
    }

}
.content{
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
                height: .67rem;
                line-height: .335rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
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