<template>
  <div class="indexNav">
        <ul>
            <router-link to="/hotRecommend">
                <li>
                    <img src="../../assets/img/icon1.jpg" alt="">
                    <p>爆款推荐</p>
                </li>
            </router-link>
            <router-link to="/paperBook">
                <li>
                    <img src="../../assets/img/icon2.jpg" alt="">
                    <p>得到图书</p>
                </li>
            </router-link>
            <router-link to="/reader">
                <li>
                    <img src="../../assets/img/icon3.jpg" alt="">
                    <p>得到阅读器</p>
                </li>
            </router-link>
            <router-link to="/wonderfulGoods">
                <li>
                    <img src="../../assets/img/icon4.jpg" alt="">
                    <p>得到好物</p>
                </li>
            </router-link>
            <router-link to="/allGoods">
                <li>
                    <img src="../../assets/img/icon5.jpg" alt="">
                    <p>全部分类</p>
                </li>
            </router-link>
            
        </ul>
 </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.indexNav{
    width: 7.5rem;
    height: 1.96rem;
    background-color: #fff;
    ul,li{
        list-style: none;
    }
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center; 
      li{
        height: 1.5rem;
        width: 1.5rem;
        text-align: center;
        color: #2a2a2a;
        img{
            width: 100%;
        }
        p{
            font-size: .22rem;
        }
      } 
    }
}
</style>