<!--  -->
<template>
  <div class="empty-container self-center">
    <Icon type="noData" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  },
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
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
  .icon-container {
    font-size: 102px;
  }
  color: $gray;
  p {
    font-size: 40px;
    text-align: center;
  }
}
</style>
