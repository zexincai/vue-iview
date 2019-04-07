<template>
  <div class="home">
    <button @click="handleClick('push')">返回上一页</button>
    <button @click="handleClick('replace')">返回上一页</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type, e) {
      if (type === "back") {
        this.$router.back();
      } else if (type === "push") {
        this.$router.push({
          // name: "argu",
          // query: {
          //   name: 'lison'
          // }
          // params: {
          //   name: "lison"
          // }
          path: '/argu/caicai'
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      }
      console.log(type, e);
    }
  }
};
</script>
