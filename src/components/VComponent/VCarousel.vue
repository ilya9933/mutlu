<template>
    <div class="containerCarousel">
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
        default: () => [],
        type: Array
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
    .containerCarousel {
        display:flex;
        width: 100%;
        justify-content: center;
        padding: 18px 18px;
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
        height:60px;
        width:60px;
        position:absolute;
        z-index:2;
        display: flex;
        cursor: pointer;
    }
    .btn img {
        margin: auto;
        opacity: 1;
        height: 20px;
        transition: all 0.3s ease-in-out;
    }
    .btn:hover img {
        height: 25px;
    }
    .btn-next {
        bottom: 46px;
        right: 46px;
        background-color: rgba(255, 255, 255, 0.1);
    }
    .btn-prev {
        bottom: 46px;
        right: 106px;
        background-color: rgba(255, 255, 255, 0.05);
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }

    @media screen and (max-width: 768px) {

        .containerCarousel {
            padding: 0;

        }

        .carousel {
            position:relative;
            overflow: hidden;
            width: 100%;
            height: 343px;
            z-index:10;
            border-radius: 0;
        } 

        .btn-next {
            bottom: 41%;
            right: -2px;
            background-color: rgba(255, 255, 255, 0.0);
        }

        .btn-prev {
            bottom: 41%;
            left: -1px;
            background-color: rgba(255, 255, 255, 0.0);
        }
    }
</style>