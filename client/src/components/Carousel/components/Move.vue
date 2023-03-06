<template>
  <div
    class="move-container"
    ref="moveContainer"
    @mouseenter="pased"
    @mouseleave="proceed"
    :style="{
      width:
        props.direaction === 'row'
          ? props.width * props.data.length + 'px'
          : '100%',
      height:
        props.direaction === 'row'
          ? '100%'
          : props.height * props.data.length + 'px',

      display: 'flex',
      flexDirection: props.direaction,
      left: state.offset + 'px',
    }"
  >
    <div
      class="Carousel-item"
      :style="{ width: props.width + 'px', height: props.height + 'px' }"
      v-for="item in props.data"
    >
      <img
        :src="item.url"
        :style="{ width: props.width + 'px', height: props.height + 'px' }"
        alt=""
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EachData } from "../types/Carousel";
import { onMounted, watch, ref, Ref, reactive } from "vue";

interface Props {
  auto: boolean;
  data: EachData[];
  width: number;
  height: number;
  direaction: "column" | "row";
}

const props = defineProps<Props>();
const emits = defineEmits(["toggle"]);

const state = reactive({
  current: 0,
  speed: 7,
  offset: 0,
  duration: 1000,
  lock: false,
  curPos: 0,
  totalDes: 0,
});

const moveContainer = ref() as Ref<HTMLElement>;
let timer: null | number = null;

onMounted(() => {
  state.curPos = moveContainer.value.offsetLeft;
  props.data.forEach(item => {
    console.log(item.url);
    
  })
  
});

watch(
  props,
  () => {
    if (props.auto) {
      init();
    }
  },
  {}
);

function init() {
  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(function () {
    emits("toggle", state.current);
    startMove(state.curPos, props.width, state.speed);
  }, 3000);
}

function pased() {
  timer && clearInterval(timer);
  timer = null;
}

function proceed() {
  init();
}

function startMove(curPos: number, destination: number, speed: number) {
  if (state.lock) {
    return;
  }

  state.lock = true;

  state.totalDes = destination - curPos;
  const toggleDes = 10;
  const times = Math.floor(state.totalDes / toggleDes);
  let curTimes = 0;
  console.log(state.current);

  let timer = setInterval(() => {
    curTimes++;

    state.offset -= toggleDes;

    if (curTimes >= times) {
      clearInterval(timer);
      state.lock = false;

      if (state.current === props.data.length - 1) {
        state.current = 0;
        state.offset = 0;
        emits("toggle", state.current);
      }
    }
  }, speed);
  state.current++;
}
</script>

<style scoped lang="less">
.move-container {
  position: absolute;
}
</style>
