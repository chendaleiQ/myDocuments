<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
    <Filtera />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Filtera from '@/components/Filter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Filtera,
  },
  methods: {
    handleEvent: function(data) {},
  },
}
</script>
