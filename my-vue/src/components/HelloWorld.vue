<template>
  <div>
    <input ref="input" :value="this.arr" />
    <button @click="handleClick">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ['a', 'b'],
      arr1: ['更新了'],
    }
  },
  methods: {
    handleClick() {
      this.arr.push('d')
    },
  },
  updated() {
    this.$refs.input.value == this.arr1.toString()
      ? (this.$refs.input.value = this.$refs.input.value.toString() + '!')
      : (this.$refs.input.value = this.arr1)
    console.log(this.$store.state.testStore.count)
    this.$store.commit('changeCount')
  },
}
</script>
