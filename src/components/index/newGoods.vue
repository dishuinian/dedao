<template>
  <div class="newGoods">
        <h1>新品上市</h1>
        <ul>
            <li>
                <img src="../../assets/img/book1.jpg" alt="">
                <p class="bookName">[预售]得到日历2022一日一课</p>
                <span class="sell">限时折扣</span>
                <p class="price"><span class="sellPrice">$98</span><span class="oldPrice">￥120-256</span></p>
            </li>
            <li>
                    <img src="../../assets/img/book2.jpg" alt="">
                    <p class="bookName">[预售]得到日历2022一日一课</p>
                    <span class="sell">限时折扣</span>
                    <p class="price"><span class="sellPrice">$98</span><span class="oldPrice">￥120-256</span></p>
            </li>
            <li>
                <img src="../../assets/img/book3.jpg" alt="">
                <p class="bookName">[预售]得到日历2022一日一课</p>
                <span class="sell">限时折扣</span>
                <p class="price"><span class="sellPrice">$98</span><span class="oldPrice">￥120-256</span></p>
            </li>
            <li>
                    <img src="../../assets/img/book4.jpg" alt="">
                    <p class="bookName">[预售]得到日历2022一日一课</p>
                    <span class="sell">限时折扣</span>
                    <p class="price"><span class="sellPrice">$98</span><span class="oldPrice">￥120-256</span></p>
            </li>
            <li>
                <img src="../../assets/img/book5.jpg" alt="">
                <p class="bookName">[预售]得到日历2022一日一课</p>
                <span class="sell">限时折扣</span>
                <p class="price"><span class="sellPrice">$98</span><span class="oldPrice">￥120-256</span></p>
            </li>
            <li>
                    <img src="../../assets/img/book6.jpg" alt="">
                    <p class="bookName">[预售]得到日历2022一日一课</p>
                    <span class="sell">限时折扣</span>
                    <p class="price"><span class="sellPrice">$98</span><span class="oldPrice">￥120-256</span></p>
            </li>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.newGoods{
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
         width: 7.2rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: flex-start;
        background-color: #f8f8f8;
        padding: .15rem;
        li{
            width: 2.2rem;
            margin-left: 0.1rem;
            margin-right: 0.1rem;
            background-color: #fff;
            img{
                width: 100%;
            }
            .bookName{
                margin: .22rem auto .2rem;
                font-size: .25rem;
            }
            .sell{
                width: 1.05rem;
                height: .5rem;
                line-height: .5rem;
                color: #fff;
                background-color: #ff5e15;
                font-size: .22rem;
                padding: .06rem;
                border-radius: .06rem;
            }
            .price{
                margin: .21rem auto;
            }
            .sellPrice{
                font-size: .26rem;
                color: #ff5e15;
            }
            .oldPrice{
                font-size: .18rem;
                color: #cdced0;
            }
        }
    }
}
</style>