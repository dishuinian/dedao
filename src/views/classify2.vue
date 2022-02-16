<template>
  <div class="classify">
     <vsearch></vsearch>
     <backscroll></backscroll>
      <vfooter></vfooter>
  </div>
</template>

<script>
import Backscroll from '../components/classify/betterscroll.vue'
import vfooter from '../components/common/vfooter.vue'
import Vsearch from '../components/common/vsearch.vue'
export default {
  components: { vfooter, Vsearch, Backscroll },

}
</script>

<style lang="scss" scoped>

</style>