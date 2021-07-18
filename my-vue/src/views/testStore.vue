<template>
  <div>{{ this.arr }}</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      data: 'abc',
    }
  },
  computed: mapState('testStore', {
    count: 'count',
    arr: 'arr',
  }),
  methods: {
    handlemapState() {
      console.log(arr, count)
    },
  },
}
</script>

<style></style>
