<template>
  <div>
    <a-input :value="inputValue" @input="handleInput"/>
    {{inputValue}}
    <a-show :content="inputValue"></a-show>
  </div>
</template>


<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    handleInput(value) {
      this.inputValue = value;
    }
  },
  components: {
    AShow,
    AInput
  }
};
</script>

<style lang="less">
</style>

