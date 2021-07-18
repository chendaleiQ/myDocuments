<!--  -->
<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./index";
export default {
  name: "",
  components: {
    Menu
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {},
  watch: {}
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.test-container {
  width: 250px;
  height: 600px;
  background: $dark;
  margin: 0 auto;
}
</style>
