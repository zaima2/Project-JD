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
        <div class="miaosha-container">
          <div class="miaosha-predicator">
            <MiaoSha
              :start-time="state.miaosha.startTime"
              :end-time="state.miaosha.endTime"
            />
          </div>
          <div class="miaosha-slider" ref="miaoContainer">
            <Slider
              :data="state.miaosha.goods ? state.miaosha.goods : []"
              :container-width="state.containerWidth"
            />
          </div>
        </div>
        <div class="playgrounds">
          <PlayGround :data="state.playground" />
        </div>
        <div class="recommondation">
          <Recommondation
            :data="state.recommondation.data"
            :total="state.recommondation.total"
          />
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
import MiaoSha from "./components/MiaoSha/index.vue";
import Slider from "./components/MiaoSha/Slider.vue";
import { reactive, ref, Ref } from "vue";
import { getHomeMainCarousel, getAttachCarousel } from "../../api/carousel";
import { EachData } from "../../components/Carousel/types/Carousel";
import { getMiaoSha } from "../../api/miaosha";
import { Miaosha } from "../../types/miaosha";
import PlayGround from "./components/PlayGround/index.vue";
import Recommondation from "./components/Recommondation/index.vue";
import { getPlayGround } from "../../api/playground";
import { PlayGround as PlayGroundType } from "../../types/playground";
import { getRecommondation } from "../../api/recommondation";
import { Recommondation as RecommondationType } from "../../types/recommondation";

const state = reactive({
  mainCarouselData: [] as EachData[],
  attachcarouselData: [] as EachData[],
  miaosha: {} as Miaosha,
  containerWidth: 0,
  playground: {} as PlayGroundType,
  recommondation: {} as RecommondationType,
});

const miaoContainer = ref() as Ref<HTMLElement>;

(async function () {
  state.mainCarouselData =
    (await getHomeMainCarousel()) as unknown as EachData[];
  state.attachcarouselData =
    (await getAttachCarousel()) as unknown as EachData[];
  state.miaosha = await getMiaoSha();
  state.containerWidth = miaoContainer.value.offsetWidth;
  state.playground = await getPlayGround();
  state.recommondation = await getRecommondation();
})();
</script>

<style scoped lang="less">
.home-body {
  width: 100%;
  padding: 10px;
  background-color: @bgColor;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .home-inner {
    width: 90%;
    height: 100%;
    background: 100%;

    .home-page-nav-container {
      width: 100%;
      display: flex;

      .nav-menu {
        flex: 0 0 200px;
        // background-color:aquamarine
      }

      .carousel {
        flex: 1 1 auto;
        // background-color: #fd1212;
        margin: 0 10px;
        display: flex;

        .home-carousel {
          flex: 1 1 auto;
          // background-color:#6eec07;
        }

        .side-carousel {
          flex: 0 0 200px;
          // background-color: #fd1212;
          margin-left: 10px;
        }
      }

      .personal {
        flex: 0 0 180px;
        // background-color: #0df8d1;
      }
    }

    .miaosha-container {
      margin-top: 30px;
      width: 100%;
      height: 300px;
      background-color: #fff;
      display: flex;

      .miaosha-predicator {
        flex: 0 0 180px;
        // background-color:aqua;
        background-image: url("../../assets/background_miaosha.png");
      }

      .miaosha-slider {
        flex: 1;
        // background-color: blueviolet;
      }
    }

    .playgrounds {
      padding: 10px;
      width: 100%;
      height: 500px;
      box-sizing: border-box;
      margin-top: 20px;
    }

    .recommondation {
      margin-top: 100px;
    }
  }
}
</style>
