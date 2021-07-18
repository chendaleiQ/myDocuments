<!--  -->
<template>
  <div
    class="carouselItem-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseout="handleMouseOut"
  >
    <div class="carousel-img" :style="this.imagePositon" ref="inner">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="this.switchWidth"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/imageLoader'
export default {
  props: ['carousel'],
  components: {
    ImageLoader,
  },
  // props: {},
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null,
      innerSize: null,
      mouseX: 0,
      mouseY: 0,
    }
  },
  computed: {
    imagePositon() {
      if (!this.containerSize || !this.innerSize) {
        return
      } else {
        let left = (-this.mouseX / this.containerSize.width) * 10 + '%'
        let top = (-this.mouseY / this.containerSize.height) * 10 + '%'
        return {
          left,
          top,
        }
      }
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth
    this.setSize()
    window.addEventListener('resize', this.setSize)
  },
  destroyed() {
    window.removeEventListener('resize', this.setSize)
  },
  methods: {
    switchWidth() {
      // 标题
      this.$refs.title.style.width = 0
      this.$refs.title.style.opacity = 1
      this.$refs.title.clientWidth
      this.$refs.title.style.transition = '1s'
      this.$refs.title.style.width = this.titleWidth + 'px'
      // 描述
      this.$refs.desc.style.width = 0
      this.$refs.desc.style.opacity = 1
      this.$refs.desc.clientWidth
      this.$refs.desc.style.transition = '2s 1s'
      this.$refs.desc.style.width = this.descWidth + 'px'
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      }
      this.innerSize = {
        width: this.$refs.inner.clientWidth,
        height: this.$refs.inner.clientHeight,
      }
      // console.log(this.containerSize, this.innerSize)
    },
    handleMouseMove(e) {
      this.mouseX = e.layerX
      this.mouseY = e.layerY

      // console.log(e.layerX, e.layerY)
    },
    handleMouseOut() {
      this.$refs.inner.style.top = '0'
      this.$refs.inner.style.left = '0'
    },
  },
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.carouselItem-container {
  width: 100%;
  height: 100%;
  // background: @dark;
  color: #fff;
  position: relative;
}
.carousel-img {
  width: 100%;
  height: 100%;
  position: absolute;
  // z-index: 2;
  left: 0;
  top: 0;
  transition: 0.3s;
  &:hover {
    width: 110%;
    height: 110%;
    left: -5%;
    top: -5%;
  }
}
.title {
  top: calc(50% - 30px);
  font-size: 2em;
  // transition: all 1s ease 0s;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
}
.title,
.desc {
  position: absolute;
  letter-spacing: 3px;
  opacity: 0;
  left: 5%;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
}
</style>
