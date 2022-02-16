<template>
  <div class="back-scroll">
    <div class="left" ref="left">
      <div v-for="item in list" :key="item.itemId">{{ item.classify }}</div>
    </div>
    <div class="right wrapper" ref="right">
      <div class="content">
        <div
          class="right-list"
          v-for="item in list"
          :key="item.itemId"
          ref="foodItem"
        >
          <img :src="item.imgUrl" alt="" />
          <div>
            <p>{{ item.itemId }}</p>
            <p>{{ item.itemName }}</p>
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
new BS("wrapper");
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/scroll").then((res) => {
        this.list = res.data;
        this.$nextTick(() => {
          this.left = new BScroll(this.$refs.left, { click: true });
          this.right = new BScroll(this.$refs.right, { probeType: 2 });
          console.log("aaaaaaaaaaa", this.$refs.right);
          window.addEventListener("scroll", function () {
            console.log("滚动了");
          });
        });
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.back-scroll {
  position: absolute;
  top: 1.12rem;
  left: 0;
  bottom: 1.12rem;
  right: 0;
  padding: 0.2rem 0.4rem;
  display: flex;
  justify-content: space-between;
  overflow-y: hidden;
  .left {
    width: 2rem;
    height: 100%;
    overflow-y: hidden;
    background-color: #fafafa;
    div {
      height: 0.9rem;
      line-height: 0.9rem;
      // height: 0.48rem;
      // line-height: 0.48rem;
      color: #666;
      text-align: center;
    }
  }
  .right {
    width: 4.5rem;
    // flex: 1;
    overflow-y: hidden;
    height: 3rem;
    .conten {
      pointer-events: auto;
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      transition-duration: 0ms;
      transform: translate(0px, 0px) translateZ(0px);
    }
    .right-list {
      display: flex;
      justify-content: left;
      background-color: #eee;
      padding: 0.2rem 0.2rem;
      margin-bottom: 0.4rem;
      border-radius: 0.4rem;
      div {
        margin-left: 0.4rem;
      }
      img {
        width: 2rem;
        background-color: #fafafa;
      }
    }
  }
}
</style>