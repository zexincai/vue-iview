<template>
  <div>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: "AInput",
  props: {
    content: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
  }
};
</script>
