<template>
  <div class="my">
      <top-header></top-header>
      <!-- 会员卡面信息 -->
      <div class="card">
        <p class="memberCode">
          <i class="iconfont icon-erweima1"></i>会员码
        </p>
        <div class="userName">
          <div class="avatar">
            <img src="../assets/img/avatar.jpg">
          </div>
          <p>岁寒</p>
        </div>
        <div class="vip">
          <i class="iconfont icon-huiyuan"></i>
          <p><span>得到</span><span>></span></p>
        </div>
      </div>

      <!-- 余额栏 -->
      <div class="money">
        <ul>
          <li>
            <!-- residue剩余 -->
            <div class="residue">0.00</div>
            <span>余额</span>
          </li>
          <li>
            <!-- integral积分 -->
            <div class="integral">0</div>
            <span>积分</span>
          </li>
          <li>
            <!--  -->
            <div class="mycard">0</div>
            <span>卡</span>
          </li>
          <li>
            <!-- coupon优惠券 -->
            <div class="coupon">0</div>
            <span>优惠券/码</span>
          </li>
          <li>
            <!-- change零钱 -->
            <div><i class="change iconfont icon-qian"></i></div>
            <span>零钱</span>
          </li>
        </ul>
      </div>

      <!-- 我的订单栏 -->
      <div class="myorder">
        <div class="orderHeader">
          <h1>我的订单</h1>
          <span>查看全部订单 &nbsp;&nbsp;></span>
        </div>
        <div class="orderDetail">
          <ul>
            <li>
              <i class="change iconfont icon-daifukuan"></i>
              <span>待付款</span>
            </li>
            <li>
              <i class="change iconfont icon-icon2"></i>
              <span>待发货</span>
            </li>
            <li>
              <i class="change iconfont icon-daishouhuo"></i>
              <span>待收货</span>
            </li>
            <li>
              <i class="change iconfont icon-daipingjia"></i>
              <span>评价</span>
            </li>
            <li>
              <i class="change iconfont icon-shouhoutuikuan"></i>
              <span>退款/售后</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 其他列表 -->
      <div class="otherList">
        <ul>
          <li>
            <i class="change iconfont icon-gouwuche"></i>
            <span>购物车</span>
          </li>
          <li>
            <i class="change iconfont icon-icon-test"></i>
            <span>任务中心</span>
          </li>
          <li>
            <i class="change iconfont icon-tuikuan"></i>
            <span>返现</span>
          </li>
          <li>
            <i class="change iconfont icon-zengpinguizeguanli"></i>
            <span>赠品</span>
          </li>
        </ul>
      </div>
      <div class="adress">
        <ul>
          <li>
            <i class="change iconfont icon-shinshopshouhuodizhi"></i>
            <span>收货地址</span>
          </li>
        </ul>
      </div>
      <vfooter></vfooter>
      <copy-right></copy-right>
  </div>
</template>

<script>
import CopyRight from '../components/common/copyRight.vue'
import TopHeader from '../components/common/topHeader.vue'
import vfooter from '../components/common/vfooter.vue'
export default {
  components: { vfooter, TopHeader, CopyRight },

}
</script>

<style lang="scss" scoped>
.my{
  background-color: #f8f8f8;
  margin-bottom: 12rem;
}
.card{
  background: url('../assets/img/cardbg.jpg');
  background-size: 100%;
  width: 7.5rem;
  height: 4.17rem;
  position: relative;
  left: 0;
  top: .2rem;
  .memberCode{
    width: 1.9rem;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    background-color: #555;
    border-radius: .3rem;
    color: #fff;
    position: absolute;
    top: .4rem;
    right: .26rem ;
    p{
      color: #fff;
      font-size: .2rem;
    }
  }
  .userName{
    position: absolute;
    left: .28rem;
    top: 1.78rem;
    .avatar{
      width: 1.1rem;
      height: 1.1rem;
      border-radius: 0.55rem;
      overflow: hidden;
      display: inline-block;
      img{
        width: 100%;
      }
    }
    p{
      color: #fff;
      font-size: 0.46rem;
      height: 0.55rem;
      line-height: 0.55rem;
      display: inline-block;
      position: relative;
      left: 0.3rem;
      top: -0.36rem;
    }
  }
  .vip{
    position: absolute;
    left: .25rem;
    bottom: 0;
    width: 7rem;
    height: .72rem;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
    background-color: #555;
    i{
      width: .38rem;
      height: .38rem;
      color: #ffd058;
      position: absolute;
      top: .26rem;
      left: .2rem;
    }
    p{
        height: 0.38rem;
        line-height: 0.38rem;
        color: #ffe6a6;
        position: relative;
        left: 0.6rem;
        top: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 6.2rem;
      span{
        font-size: .24rem;
      }
    }
  }
}
.money ul{
    border-radius: .1rem;
    list-style: none;
    width: 7rem;
    height: 1.3rem;
    margin: 0.4rem auto;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
  li{
    list-style: none;
    text-align: center;
  }
  li{
    div,i{
       font-weight: 600;
       color: #000;
       font-size: .24rem;
       margin: .28rem auto;
     }
  }
  li{
    span{
      color: #c5c5c5; 
      font-size: .22rem;
      margin: .28rem auto;
    }
  }
}

.myorder{
    width: 7rem;
    margin: 0.2rem auto;
    background-color: #fff;
    border-radius: .1rem;
    
    .orderHeader{
      width: 6.6rem;
      height: .78rem;
      line-height: .78rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f6f7f8;
      span{
        padding: .2rem;
        color: #acacae;
        font-size: .22rem ;
      }
    }
    .orderDetail{
      ul{
        width: 6.6rem;
        padding: .2rem;
        list-style: none;
        height: 1.3rem;
        margin: 0.2rem auto;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li{
          list-style: none;
          text-align: center;
          i{
            display: block;
            font-weight: 600;
            color: #000;
            font-size: .38rem;
          }
          span{
            display: block;
            color: #000; 
            font-size: .22rem;
            margin: .28rem auto;
          }
        }
      }
    }
}
.otherList{
    width: 7rem;
    margin: 0.2rem auto;
    background-color: #fff;
    border-radius: .1rem;
    ul{
      list-style: none;
      li{
        width: 6.6rem;
        margin: 0 auto;
        list-style: none;
        color: #707070;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #f6f7f8;
        i{
          padding: .2rem;
          font-size: .36rem;
        }
        span{
          font-size: .26rem;
          margin-left: .24rem;
        }
      }
    }
}
.adress{
  width: 7rem;
  margin: 0.2rem auto;
  background-color: #fff;
  border-radius: .1rem;
  ul{
      list-style: none;
      li{
        width: 6.6rem;
        margin: 0 auto;
        list-style: none;
        color: #707070;
        height: .8rem;
        line-height: .8rem;
        border-bottom: 1px solid #f6f7f8;
        i{
          padding: .2rem;
          font-size: .36rem;
        }
        span{
          font-size: .26rem;
          margin-left: .24rem;
        }
      }
  }
}
</style>