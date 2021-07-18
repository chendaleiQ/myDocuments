<template>
  <i class="iconfont icon-container" :class="icon"></i>
</template>

<script>
const classMap = {
  home: 'icon-Homehomepagemenu',
  message: 'icon-icon-test',
  arrowUp: 'icon-shang-',
  arrowDown: 'icon-chevron-down-outline',
  blog: 'icon-gangbi',
  noData: 'icon-wushuju1',
  weixin: 'icon-weixin',
  qq: 'icon-qq',
  article: 'icon-wenzhang',
  about: 'icon-guanyuwomen',
  project: 'icon-xiangmu',
  github: 'icon-huaban88',
  email: 'icon-emailFilled',
  info: 'icon-foundationinfo',
  success: 'icon-chenggong',
  warn: 'icon-warn',
  error: 'icon-deletorerror',
}
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return classMap[this.type]
    },
  },
}
</script>

<style scoped lang="less">
@import '//at.alicdn.com/t/font_2581087_ji6y764aza.css';
</style>
