<template>
  <div class="index">
    <top-header></top-header>
    <search></search>
    <swiper></swiper>
    <index-nav></index-nav>
    <new-goods></new-goods>
    <hot-recommend></hot-recommend>
    <reader-column></reader-column>
    <book-column></book-column>
    <vfooter></vfooter>
    <copy-right></copy-right>
  </div>

  

</template>

<script>
// @ is an alias to /src
import vfooter from '@/components/common/vfooter.vue'
import Search from '@/components/common/search.vue'
import TopHeader from '@/components/common/topHeader.vue'
import Swiper from '@/components/index/swiper.vue'
import IndexNav from '@/components/index/indexNav.vue'
import NewGoods from '@/components/index/newGoods.vue'
import HotRecommend from '@/components/index/hotRecommend.vue'
import readerColumn from '@/components/index/readerColumn.vue'
import BookColumn from '@/components/index/bookColumn.vue'
import CopyRight from '../components/common/copyRight.vue'


export default {
  components: {
    vfooter,
    Search,
    TopHeader,
    Swiper,
    IndexNav,
    NewGoods,
    HotRecommend,
    readerColumn,
    BookColumn,
    CopyRight
    }
  
}
</script>
<style>
html{
    font-size: 7.5rem;
    background-color: #f9f9f9;
    font-family: tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important;
}
.index{
    background-color: #f9f9f9;
}
ul,li{
    list-style: none;
}
</style>
