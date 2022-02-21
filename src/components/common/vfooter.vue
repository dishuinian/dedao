<template>
  <div class="footer">
    <ul class="footernav">
      <router-link to="/index">
        <li class="active">
          <i class="iconfont icon-store icon1"></i>
          <i class="iconfont icon-store-fill icon2"></i>
          <p>首页</p>
        </li>
      </router-link>
      <router-link to="/classify">
        <li>
          <i class="iconfont icon-all icon1"></i>
          <i class="iconfont icon-all-fill icon2"></i>
          <p>全部商品</p>
        </li>
      </router-link>
      <router-link to="/cart">
        <li>
          <i class="iconfont icon-cart-Empty icon1"></i>
          <i class="iconfont icon-cart-Empty-fill icon2"></i>
          <p>购物车</p>
        </li>
      </router-link>
      <router-link to="/my">
        <li>
          <i class="iconfont icon-account icon1"></i>
          <i class="iconfont icon-account-fill icon2"></i>
          <p>我的</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 7.5rem;
  height: 0.9rem;
  position: fixed;
  // left: 0;
  margin: 0 auto;
  bottom: 0;
  background-color: #fcfcfc;
  border-bottom: 1px solid #d0d0d0;
  ul {
    width: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      color: #555555;
      font-size: 0.18rem;
      text-align: center;
      i {
        font-size: 0.46rem;
      }
      p {
        font-size: 0.24rem;
      }
      .icon1 {
        display: inline-block;
      }
      .icon2 {
        display: none;
      }
    }
  }
  .router-link-active li {
    color: #ff4445;
    i {
      font-size: 0.46rem;
    }
    p {
      font-size: 0.24rem;
    }
    .icon1 {
      display: none;
    }
    .icon2 {
      display: inline-block;
    }
  }
}
</style>