<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from '@/components/SiteAside'
import Layout from '@/components/Layout'

export default {
  name: 'App',
  components: {
    SiteAside,
    Layout,
    // Empty
  },

  methods: {},
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';
@import '~@/styles/global.less';

.app-container {
  .self-fill(fixed);
}
.aside {
  background-color: #000;
  width: 250px;
  height: 100%;
}
</style>
