<template>
  <div class="nologin">
    <span>登陆后享受更多优惠</span>
    <button @click="login">去登陆></button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.nologin {
  width: 100%;
  height: 0.618rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  background-color: #fff;
  border-top: 0.01rem solid #f2f2f2;
  color: #606060;
}
.nologin span {
  height: 0.618rem;
  line-height: 0.618rem;
}
.nologin button {
  width: 2rem;
}
</style>