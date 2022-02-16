<template>
    <div id="all-goods">
        <topHeader></topHeader>
        <search></search>
        <div class="goodsNav">
            <ul>
                <li class="active">综合</li>
                <li>图书</li>
                <li>阅读器</li>
                <li>周边</li>
            </ul>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in readerData" 
                :key="index" 
                :class="activeIndex===index?'active':''"
                @click="toggle(index)"
                >
                    <!-- <img src="../assets/img/book1.jpg" alt=""> -->
                    <img :src="item.picUrl" alt="">
                    <p class="bookName">{{item.name}}</p>
                    <p class="price"><span class="sellPrice">${{item.price}}</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <!-- 
                <li>
                    <img src="../assets/img/book2.jpg" alt="">
                    <p class="bookName">得到阅读器Mini x kinbor旅行套装 新品上市</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book3.jpg" alt="">
                    <p class="bookName">得到阅读器Pro（升级版）黑白双色 7.8英寸电子墨水屏 安卓10.0系</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book4.jpg" alt="">
                    <p class="bookName">多功能可调节阅读器/手机支架 7.8英寸得到阅读器适用罗辑思维</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book5.jpg" alt="">
                    <p class="bookName">得到阅读器Max保护套 材质轻巧便捷 阅读器平板保护壳</p>
                    <p class="price"><span class="sellPrice">$99</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book6.jpg" alt="">
                    <p class="bookName">得到阅读器Mini新品上市5.2英寸屏</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book7.jpg" alt="">
                    <p class="bookName">得到阅读器Mini x kinbor旅行套装 新品上市</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book8.jpg" alt="">
                    <p class="bookName">得到阅读器Pro（升级版）黑白双色 7.8英寸电子墨水屏 安卓10.0系</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book9.jpg" alt="">
                    <p class="bookName">多功能可调节阅读器/手机支架 7.8英寸得到阅读器适用罗辑思维</p>
                    <p class="price"><span class="sellPrice">$648</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                <li>
                    <img src="../assets/img/book10.jpg" alt="">
                    <p class="bookName">得到阅读器Max保护套 材质轻巧便捷 阅读器平板保护壳</p>
                    <p class="price"><span class="sellPrice">$99</span><i class="iconfont icon-jiarugouwuche"></i></p>
                </li>
                 -->
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
            bookData:[],
            readerData:[],
            aroundData:[],
            allData:[],
            activeIndex:0
        }
    },
    created(){
        this.getData()
    },
    mounted(){

    },
    methods:{
        toggle(index){
            this.activeIndex = index
        }
    },
    methods:{
        getData(){
            this.$axios
            //Resources
            //http://localhost:3000/reader
            //http://localhost:3000/paperBook
            //http://localhost:3000/aroundGoods
            .get('http://localhost:3000/reader')
            .then((res)=>{
                this.readerData = res.data
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