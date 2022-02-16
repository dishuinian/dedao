<template>
  <div class="search">
        <input type="search" id="miSearch" name="indexsearch" placeholder="搜索商品名称">
        <i class="searchimg iconfont icon-sousuo"></i>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search{
    width: 7.04rem;
    height: .78rem;
    margin: .14rem .28rem .24rem;
    
    position: relative;
    color: #a0a2a1;
    input{
        border: 1px solid #e8e8e8;
        margin-top: .12rem;
        width: 7.04rem;
        height: .78rem;
        border-radius: .1rem;
        font-family: "microsoft yahei";
    }
    input::placeholder{
        text-indent: .65rem;
        color: #a0a2a1;
        font-family: "microsoft yahei";

    }
}
.searchimg{
    position: absolute;
    width: .3rem;
    height: .3rem;
    left: .17rem;
    top:0.31rem;
}
</style>