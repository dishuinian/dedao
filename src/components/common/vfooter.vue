<template>
   <div class="footer">
        <ul class="footernav">
            <router-link to="/index">
                <li class="active">
                    <i class="iconfont icon-shouye-shouye"></i>
                    <p>首页</p>
                </li>
            </router-link>
            <router-link to="/classify">
                <li>
                    <i class="iconfont icon-luopancompass83"></i>
                    <p>全部商品</p>
                </li>
            </router-link>
            <router-link to="/cart">
                <li>
                    <i class="iconfont icon-gouwuche"></i>
                    <p>购物车</p>
                </li>
            </router-link>
            <router-link to="/my">   
                <li>
                    <i class="iconfont icon-wode"></i>
                    <p>我的</p>
                </li>
            </router-link>
        </ul>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    width: 7.5rem;
    height:.9rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color:#fcfcfc ;
    border-bottom: 1px solid #d0d0d0;
    ul{
        width: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        li{
            color: #555555;
            font-size: .18rem;
            text-align: center;
        }
    }
    .router-link-active li{
        color: #ff4445;
    }
}
</style>