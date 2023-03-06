<template>
  <div class="Carousel-container" ref="CarouselCotainer">
    <div class="inner">
      <Move
        :data="state.data"
        :width="state.width"
        :height="state.height"
        :direaction="props.direaction"
        :auto="props.auto"
        @toggle="toggleHandle"
      />
    </div>
    <Indicator :length="props.data.length" :active="state.active" />
    <Director />
  </div>
</template>

<script setup lang="ts">
// import CarouselProps from "./types/Props";
import { EachData } from "./types/Carousel";
import Move from "./components/Move.vue";
import { reactive, ref, onMounted, Ref,watchEffect } from "vue";
import Indicator from "./components/Indicator.vue";
import Director from "./components/Director.vue";

interface CarouselProps {
  data: EachData[];
  auto?: boolean;
  direaction?: "column" | "row";
}

const props = withDefaults(defineProps<CarouselProps>(), {
  auto: true,
  direaction: "row"
});

const state = reactive({
  width: 0,
  height: 0,
  data: [] as EachData[],
  active: 0,
});

const CarouselCotainer = ref() as Ref<HTMLElement>;

watchEffect(()=>{
  state.data = [...props.data];
  props.data.length !==0 && state.data.push(props.data[0]);
})


onMounted(() => {
  state.width = CarouselCotainer.value.offsetWidth;
  state.height = CarouselCotainer.value.offsetHeight;
});

function toggleHandle(indicator: number) {
  state.active = indicator;
}
</script>

<style scoped lang="less">
.Carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
  .inner {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
}
</style>
