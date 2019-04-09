<template>
  <div>
    <button @click="hanleClick">按我</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    hanleClick() {
      this.$bus.$emit("on-click", "hello")
    }
  },
  mounted() {
    console.log(this.$bus);
  }
};
</script>

<style lang="less">
</style>

