<!--  -->
<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./index";
export default {
  name: "",
  components: {
    Contact
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
  position: relative;
  width: 250px;
  height: 500px;
  background: black;
}
</style>
