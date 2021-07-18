<!-- 菜单组件 -->
<template>
  <nav class="menu-container">
    <router-link
      :exact="menu.exact"
      :to="{ name: menu.name }"
      v-for="menu in menuArr"
      :key="menu.name"
      active-class="selected"
    >
      <Icon :type="menu.type" />
      {{ menu.title }}
    </router-link>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  name: '',
  components: {
    Icon,
  },
  props: {},
  data() {
    return {
      menuArr: [
        {
          name: 'Home',
          title: '首页',
          type: 'home',
          link: '/',
          exact: true,
        },
        {
          name: 'Blog',
          title: '文章',
          type: 'article',
          link: 'blog',
          exact: false,
        },
        {
          name: 'About',
          title: '关于我',
          type: 'about',
          link: 'about',
          exact: true,
        },
        {
          name: 'Project',
          title: '项目&效果',
          type: 'project',
          link: 'project',
          exact: true,
        },
        {
          name: 'Message',
          title: '留言板',
          type: 'message',
          link: 'message',
          exact: true,
        },
      ],
    }
  },
}
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.menu-container {
  text-align: center;
  width: 250px;
  a {
    &.selected {
      background: #2f2f2f;
    }
    display: block;
    color: @lightWords;
    text-decoration: none;
    text-align: left;
    padding: 15px 55px;
    &:hover {
      color: white;
    }
  }
}
</style>
