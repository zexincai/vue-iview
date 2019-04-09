<template>
  <input @input="handleInput" :value="value"/>
</template>

<script>
export default {
  name: 'AInput',
  props: {
    value: {
      type: [String],
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      const value = e.target.value;
      this.$emit('input', value)
    }
  }
}
</script>
