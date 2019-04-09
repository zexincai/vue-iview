<template>
  <div>
    <a-input :value="inputValue" @input="handleInput"/>
    {{inputValue}}-> last is {{inputValueLastLetter}}
    <!-- <a-show :content="inputValue"></a-show> -->
    <p>{{appName}}</p>
    <p>{{userName}}</p>
    <!-- <p>appNameWithVersion:{{appNameWithVersion}}</p> -->
    <p>firstLetter:{{firstLetter}}</p>
    <button @click="handleChangeAppName">修改Appname</button>
    <button @click="handleChangeuserName">修改userName</button>
    <p>{{appVersion}}</p>
    <button @click="registerModule">注册模块</button>
    <p v-for="(li,index) in todoList" :key="index">{{li}}</p>
  </div>
</template>


<script>
import AInput from "_c/AInput.vue";
import AShow from "_c/AShow.vue";
import {
  createNamespacedHelpers,
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from "vuex";
// const { mapState } = createNamespacedHelpers("user");
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    ...mapActions(["updateAppName"]),
    ...mapMutations(["SET_APP_NAME", "SET_USER_NAME"]),
    handleInput(value) {
      this.inputValue = value;
    },
    handleChangeAppName() {
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppname'
      // })
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   appName: "newApp"
      // });
      // this.SET_APP_NAME({ appName: "hello" });
      // this.$store.commit("SET_APP_VERSION");
      this.updateAppName();
    },
    handleChangeuserName() {
      this.SET_USER_NAME("vue-cource");
    },
    registerModule() {
      this.$store.registerModule(["user", "todo"], {
        state: {
          todoList: ["学习mutations", "学习actions"]
        }
      });
    }
  },
  components: {
    AShow,
    AInput
  },
  computed: {
    appName() {
      return this.$store.state.appName;
    },
    // userName() {
    //   return this.$store.state.user.userName;
    // },
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => (state.user.todo ? state.user.todo.todoList : [])
    }),
    inputValueLastLetter() {
      return this.inputValue.substr(-1, 1);
    },
    ...mapGetters("user", ["firstLetter"])
  }
};
</script>

<style lang="less">
</style>

