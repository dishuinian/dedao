<template>
  <div class="footer">
    <router-link tag="p" to="/index">首页</router-link>
    <router-link tag="p" to="/classify">分类</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 7.5rem;
  height: 1rem;
  background-color: #aaa;
  left: 0;
  bottom: 0;
  .active {
    color: #f00;
  }
}
</style>