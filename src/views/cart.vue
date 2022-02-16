<template>
  <div class="cart">
    <top-header></top-header>
    <!-- 没有添加商品时显示 -->
    <div class="empty" v-if="isEmpty">
      <img src="../assets/img/cart.jpg" />
      <div class="msg">
        购物车还是空的
        <span>赶紧买点宝贝慰劳下自己吧</span>
      </div>
      <router-link to="/allGoods"></router-link>
      <div class="shopping">
        <a>去逛逛</a>
      </div>
    </div>
    <!-- 没有添加商品时显示 结束-->
    <!-- 添加商品后显示 -->
    <div class="cartlist" v-else>
      <ul>
        <li class="cartitem">
          <div class="checkBox">
            <input type="checkBox" />
          </div>
          <div class="left">
            <img src="../assets/img/book1.jpg" />
          </div>
          <div class="goodsInfor right">
            <p class="goodName">《吴军阅读与写作讲义+数学通识讲义》套装</p>
            <span class="refund">7天无理由退货</span>
            <div class="oneprice">
              <p class="price">￥129</p>
              <div class="count">
                <span class="del"><i class="iconfont icon-shanchu"></i></span>
                <span class="reduce">-</span>
                <span class="num">2</span>
                <span class="add">+</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 添加商品后显示 结束-->
    <vfooter></vfooter>
    <copy-right></copy-right>
  </div>
</template>

<script>
import CopyRight from "../components/common/copyRight.vue";
import TopHeader from "../components/common/topHeader.vue";
import vfooter from "../components/common/vfooter.vue";
export default {
  components: { vfooter, CopyRight, TopHeader },
  data() {
    return {
      isEmpty: true,
      ShopingList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  background-color: #f9f9f9;
  text-align: center;
  img {
    margin-top: 0.5rem;
  }
  .msg {
    font-size: 0.32rem;
    color: rgb(20, 20, 20);
    span {
      font-size: 0.3rem;
      color: #9f9f9f;
      display: block;
      margin-top: 0.2rem;
    }
  }
  .shopping {
    width: 1.3rem;
    height: 0.58rem;
    line-height: 0.58rem;
    margin: 0.5rem auto;

    text-align: center;
    border-radius: 1rem;
    border: 1px solid #ff6621;
    a {
      color: #ff6621;
    }
  }
  .cartlist{
    .cartitem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.1rem;
      list-style: none;
      width: 7rem;
      margin: 0.4rem auto;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .checkBox input {
        width: 0.34rem;
        height: 0.34rem;
        border-radius: 0.17rem;
        border: 2px solid #ff5e18;
      }
      .left {
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .right {
        width: 4rem;
        height: 2rem;
        p {
          font-size: 0.3rem;
          color: #303030;
          width: 4rem;
          height: 0.68rem;
          line-height: 0.34rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .refund {
          height: 0.2rem;
          line-height: 0.2rem;
          color: #ff6621;
          font-size: 0.24rem;
        }
        .oneprice {
          width: 4rem;
          .price {
            color: #ff6621;
            font-size: 0.3rem;
          }
          .count {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 1.8rem;
            height: 0.5rem;
            span {
              width: 0.5rem;
              height: 0.5rem;
              font-size: 0.22rem;
            }
          }
        }
      }
    }
  }
}
</style>