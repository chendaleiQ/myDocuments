<!--  -->
<template>
  <div>
    <div class="test-container">
      <ImageLoader
        src="https://img1.baidu.com/it/u=1093888349,2542306625&fm=26&fmt=auto&gp=0.jpg"
        placeholder="https://img0.baidu.com/it/u=1986451467,394304688&fm=26&fmt=auto&gp=0.jpg"
        @load="handleloaded"
      />
    </div>
    <div class="test-container">
      <ImageLoader
        src="https://img1.baidu.com/it/u=1093888349,2542306625&fm=26&fmt=auto&gp=0.jpg"
        placeholder="https://img0.baidu.com/it/u=1986451467,394304688&fm=26&fmt=auto&gp=0.jpg"
        @load="handleloaded"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from "./index";
export default {
  name: "",
  components: {
    ImageLoader
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    handleloaded() {
      console.log("ImageLoader加载完成");
    }
  },
  watch: {}
};
</script>

<style scoped lang="less">
.test-container {
  position: relative;
  width: 500px;
  height: 400px;
  border: 1px solid;
  margin: 0 auto;
}
</style>
