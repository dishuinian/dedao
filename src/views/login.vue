<template>
  <div class="login">
    <!-- 顶部 -->
    <top-header></top-header>

    <!-- 登录框 -->
    <div class="handleLogin">
      <van-form @submit="onSubmit">
        <van-field
          v-model="user.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>

    <!-- 底部导航 -->
    <vfooter></vfooter>
  </div>
</template>

<script>
import topHeader from "../components/common/topHeader.vue";
import Vfooter from "../components/common/vfooter.vue";
import {login} from "../api/http"
export default {
  components: { topHeader, Vfooter },
  data() {
    return {
      user:{
        username: "",
        password: "",
      }
      
    };
  },
  methods: {
    onSubmit() {
      login(this.user)
      .then(res=>{
        console.log(res);
      })
      .catch(err=>{

      })
    },
  },
};
</script>

<style lang="scss">
.handleLogin {
  position: relative;
  width: 100%;
  .loginForm {
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
}
</style>