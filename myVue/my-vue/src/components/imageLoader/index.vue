<!--  -->
<template>
  <div class="image-loader-container">
    <img class="placeholder" v-if="!allLoad" :src="placeholder" />
    <img
      class="orgin"
      :src="src"
      :style="{ opacity: isLoad, transition: `${duration}ms` }"
      @load="onLoad"
    />
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      isLoad: 0,
      allLoad: 0,
    }
  },
  computed: {},
  created() {},
  methods: {
    onLoad() {
      this.isLoad = 1
      setTimeout(() => {
        this.isLoad ? (this.allLoad = 1) : (this.allLoad = 0)
        this.$emit('load')
      }, this.duration)

      // console.log(this.isLoad);
    },
  },
  watch: {},
}
</script>

<style scoped lang="less">
@import '~@/styles/mixin.less';
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  // overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>
