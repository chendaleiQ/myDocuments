<!--  -->
<template>
  <ul class="contact-container">
    <li>
      <a href="https://github.com/"
        ><Icon type="github" /><span>Github</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/"
        ><Icon type="email" /><span>1994267747@qq.com</span>
      </a>
    </li>
    <li>
      <div class="pop">
        <img src="../../../../public/img/weixin.png" alt="" />
      </div>
      <a href="https://github.com/"
        ><Icon type="qq" /><span>1994267747</span></a
      >
    </li>
    <li>
      <div class="pop">
        <img src="../../../../public/img/weixin.png" alt="" />
      </div>
      <a href="https://github.com/"
        ><Icon type="weixin" /><span>18103781621</span></a
      >
    </li>
  </ul>
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
@import '~@/styles/var.less';

.contact-container {
  width: 250px;
  list-style: none;
  margin: 0;
  padding: 20px;
  color: @lightWords;
  li {
    position: relative;
    height: 50px;
    line-height: 50px;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    a {
      font-size: 14px;
      display: flex;
      .icon-container {
        font-size: 24px;
        margin-right: 10px;
      }
    }
    .pop {
      width: 80%;
      position: absolute;
      left: 0;
      bottom: 25px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;

      img {
        width: 100%;
        // padding: 20px;
        border-radius: 5px;
      }
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: 16px;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
</style>
