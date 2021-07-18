<template>
  <div class="filter-Container">
    <input type="number" v-model="money" />
    <div>{{ money | moneyFilter(0.15) }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 0,
    }
  },
  filters: {
    moneyFilter(val, ratio) {
      console.log(val, ratio)
      return Number(val * ratio)
    },
  },
}
</script>

<style></style>
