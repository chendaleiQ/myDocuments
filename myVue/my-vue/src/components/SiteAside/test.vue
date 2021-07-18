<!--  -->
<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./index";
export default {
  name: "",
  components: {
    SiteAside
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
.test-container {
  width: 250px;
  height: 100vh;
  background: black;
  position: fixed;
}
</style>
