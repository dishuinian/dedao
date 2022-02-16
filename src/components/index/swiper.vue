<template>

    <div class="wrapper swiper" v-if="7">
        <swiper class="swiper-wrapper" ref="mySwiper" v-bind:options="swiperOptions">
            <!-- <swiper-slide v-for="(item, index) in 5" v-bind:key="index">
                {{item}}
            </swiper-slide> -->
            <div class="swiper-slide">
                <img src="../../assets/img/banner1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/banner2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/banner3.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/banner4.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/banner5.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/banner6.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/img/banner7.jpg"/>
            </div>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  // import Swiper styles
  /* import 'swiper/css'; */
  import 'swiper/swiper-bundle.css'

export default {
    data() {
        return {
        swiperOptions: {
            loop: true,
            speed: 1000,
            autoplay: {
            delay: 800,

            stopOnLastSlide: false,
            disableOnInteraction: false,
            },
            // 显示分页
            pagination: {
            el: ".swiper-pagination",
            clickable: true, //允许分页点击跳转
            }
        },
        };
    },
    mounted(){
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
    
}
</script>

<style scoped lang="scss">
.swiper {
  width: 7.5rem;
  height: 2.43rem;
  margin: 0 auto;
  .swiper-wrapper{
        width: 7.3rem;
        height: 2.43rem;
        border-radius: .12rem;
        .swiper-slide{
            width: 100%;
            border-radius: .12rem;
            img{
                width: 100%;
                border-radius: .12rem;
            }
        }
    } 
}


</style>