<template>
  <div class="home">
    <p>{{food}}</p>
    <button @click="handleClick('push')">返回上一页</button>
    <button @click="handleClick('replace')">返回上一页</button>
    <button @click="getInfo">请求数据</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import { getUserInfo } from "@/api/user";

export default {
  name: "home",
  props: {
    food: {
      type: String,
      default: "Home"
    }
  },
  components: {
    HelloWorld
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  // beforeRouteLeave(to, from, next) {
  //   if (confirm("你确定要离开吗")) {
  //     next();
  //   }
  // },
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
          path: "/argu/caicai"
        });
      } else if (type === "replace") {
        this.$router.replace({
          name: "parent"
        });
      }
      console.log(type, e);
    },
    getInfo() {
      getUserInfo({ userId:123 }).then(res => {
        console.log("res", res);
      });
    }
  }
};
</script>
