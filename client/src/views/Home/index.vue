<template>
    <div class="home-container">
        <Banner />
        <div class="home-body">
            <div class="home-inner">
                <div class="home-page-nav-container">
                    <div class="nav-menu">
                        <Menu />
                    </div>
                    <div class="carousel">
                        <div class="home-carousel">
                            <Carousel :data="state.mainCarouselData" />
                        </div>
                        <div class="side-carousel">
                            <Carousel :data="state.attachcarouselData" />
                        </div>
                    </div>
                    <div class="personal">
                        <Personal />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import Banner from "./components/Banner.vue";
import Menu from "./components/Menu.vue";
import Personal from "./components/Personal/PersonalPage.vue";
import Carousel from "../../components/Carousel/Carousel.vue";
import {reactive} from "vue";
import {getHomeMainCarousel, getAttachCarousel} from "../../api/carousel";
import {EachData} from "../../components/Carousel/types/Carousel"


const state = reactive({
    mainCarouselData:[] as EachData[],
    attachcarouselData:[] as EachData[]
});


(async function() {
    state.mainCarouselData = await getHomeMainCarousel() as unknown as EachData[];
    state.attachcarouselData = await getAttachCarousel() as unknown as EachData[];
    console.log("data：",state.attachcarouselData);
    
})()

</script>


<style scope lang="less">
    .home-body {
        width: 100%;
        padding:10px;
        background-color: @bgColor;
        display:flex;
        justify-content: center;
        box-sizing: border-box;
        .home-inner {
            width:90%;
            height:100%;
            background:100%;
            .home-page-nav-container {
                width:100%;
                display:flex;
                .nav-menu {
                    flex: 0 0 200px;
                    // background-color:aquamarine
                }
                .carousel {
                    flex:1 1 auto;
                    // background-color: #fd1212;
                    margin:0 10px;
                    display:flex;
                    .home-carousel {
                        flex:1 1 auto;
                        // background-color:#6eec07;
                    }
                    .side-carousel {
                        flex: 0 0 200px;
                        // background-color: #fd1212;
                        margin-left:10px;
                    }
                }
                .personal {
                    flex:0 0 180px;
                    // background-color: #0df8d1;
                }

            }
        }
    }
</style>