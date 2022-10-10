<template>
    <div class="container">
        <CarouselBlock >
            <CarouselSlide v-for="slide in slides" :key="slide.id" class="carousel-slider">
                <CarouselImg
                    :slide="slide"
                 />
            </CarouselSlide>
        </CarouselBlock>
    </div>    
</template>

<script>
import CarouselBlock from './Carousel/CarouselBlock.vue';
import CarouselSlide from './Carousel/CarouselSlide.vue';
import CarouselImg from './Carousel/CarouselImg.vue';

export default {

    props: {
      slides: {
        default: () => {},
        type: Object
      },
    },
    components: {
        CarouselBlock,
        CarouselSlide,
        CarouselImg,
    },
}
</script>

<style>
    .container {
        display:flex;
        justify-content: center;
        padding: 0 18px;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width: 100%;
        height: 460px;
        z-index:10;
        border-radius: 4px;
    }
    .btn {
        background-color:#FFFFFF;
        height:60px;
        width:60px;
        position:absolute;
        z-index:2;
        display: flex;
    }
    .btn img {
        margin: auto;
        opacity: 1;
        height: 20px;
        color: #FFFFFF;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn-next {
        bottom: 46px;
        right: 46px;
        opacity: 0.1;
    }
    .btn-prev {
        bottom: 46px;
        right: 106px;
        opacity: 0.05;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
</style>