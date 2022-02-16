<template>
  <div class="index">
      <p>共享城市:{{city}}</p>
      <p>共享管理员名称:{{adminName}}</p>
      <p><button @click="getScoreList">单击显示及格人员成绩</button></p>
      <p><button @click="onClickFun">单击触发fun方法</button></p>
      <p>{{goodScore}}</p>
    <vfooter/>
  </div>
</template>

<script>
import vfooter from '../components/common/vfooter.vue'
export default {
  components: { vfooter },
  computed:{
    city(){
      return this.$store.state.city;
    },
    goodScore(){
      return this.$store.getters["user/goodScore"];
    },
    adimnName(){
      return this.$store.state.user.adimnName;
    }
  },
  methods:{
    getScoreList(){
      this.$store.dispatch("user/changeScore")
    },
    onClickFun(){
      this.$store.commit("theme/fun1")
      //this.$store.commit('fun1')
    }
    
  }

}
</script>

<style>

</style>