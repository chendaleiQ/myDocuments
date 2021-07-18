<!--  -->
<template>
  <div class="siteAside-container">
    <Avatar
      url="https://img0.baidu.com/it/u=1950846641,3729028697&fm=26&fmt=auto&gp=0.jpg"
    />
    <h1>陈大雷Q</h1>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Menu from './Menu'
import Contact from './Contact'
import Avatar from '@/components/Avatar'
export default {
  name: '',
  components: {
    Menu,
    Contact,
    Avatar,
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  methods: {},
  watch: {},
}
</script>

<style scoped lang="less">
@import '~@/styles/global.less';
.siteAside-container {
  // text-align: center;
  height: 100%;
  .avatar-container {
    margin: 0 auto;
    padding-top: 20px;
  }
  .menu-container {
    margin: 0 auto;
  }
  .contact-container {
    margin: 0 auto;
  }
}

h1 {
  color: #fff;
  text-align: center;
  margin: 20px auto;
}
</style>
