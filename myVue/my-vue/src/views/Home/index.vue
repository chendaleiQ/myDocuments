<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="isLoading"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: index == i }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from '@/api/banner'
import Icon from '@/components/Icon'
import CarouselItem from './CarouselItem.vue'
import fetchData from '@/mixins/fetchData.js'

export default {
  mixins: [fetchData({})],
  components: {
    Icon,
    CarouselItem,
  },
  props: {},
  data() {
    return {
      index: 0, //容器下标
      clientHeight: 0, //容器高度
      switching: false, //是否正在滚动
    }
  },
  mounted() {
    this.clientHeight = this.$refs.container.clientHeight
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    marginTop() {
      return -this.index * this.clientHeight + 'px'
    },
  },
  methods: {
    async fetchData() {
      return await getBanners()
    },
    switchTo(i) {
      return (this.index = i)
    },
    handleWheel(e) {
      // console.log(e)
      if (this.switching) {
        return
      }
      if (e.deltaY <= -125 && this.index > 0) {
        this.switching = true
        this.index--
      } else if (e.deltaY >= 125 && this.index < this.data.length - 1) {
        this.switching = true
        this.index++
      }
    },
    handleTransitionend() {
      this.switching = false
    },
    handleResize() {
      this.clientHeight = this.$refs.container.clientHeight
    },
  },
  watch: {},
}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';

.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  // background: #000;
  overflow: hidden;

  // 测试
  // width: 300px;
  // height: 200px;
  // // overflow: visible;
  // border: 1px solid honeydew;
  // margin: 100px auto;
}
.carousel-container {
  height: 100%;
  width: 100%;
  transition: 0.5s;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  // position: relative;
  cursor: pointer;
  .self-center();
  font-size: 30px;
  color: @gray;
  .iconfont {
    font-size: 40px;
    opacity: 0.7;
  }
  @gap: 25px;
  &.icon-up {
    top: @gap;
    bottom: auto;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 25px;
  cursor: pointer;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    margin-bottom: 10px;
    border: #fff solid 1px;
    box-sizing: border-box;
    list-style: none;
    &.active {
      background: #fff;
    }
  }
}
</style>
