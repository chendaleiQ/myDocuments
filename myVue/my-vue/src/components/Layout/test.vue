<!--  -->
<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">zuobian</div>
      </template>
      <template #default>
        <div class="main">
          zhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjianzhongjian
        </div>
      </template>
      <template #right>
        <div class="right">youbian</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index";
export default {
  name: "",
  components: {
    Layout
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
  width: 70%;
  height: 600px;
  margin: 0 auto;
  border: 2px solid;
  .left {
    width: 250px;
    height: 100%;
    background: lightblue;
  }
  .main {
    width: 100%;
    height: 100%;
    background: lightgreen;
  }
  .right {
    width: 150px;
    height: 100%;
    background: lightcoral;
  }
}
</style>
