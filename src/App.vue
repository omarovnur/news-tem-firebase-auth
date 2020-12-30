<template>
  <div id="app">
    <my-nav v-if="isAuth" v-show="keep"></my-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import myNav from "./components/Navigation.vue";
// import firebase from 'firebase';

export default {
  name: "app",
  components: {
    myNav
  },
  data() {
    return {
      isAuth: null
    };
  },
  methods: {
    keep(){
      alert("Please Login to continue!")
    },

    isAuthFunc() {
      this.isAuth = false;
      if (
        this.$router.currentRoute.path != "/login" &&
        this.$router.currentRoute.path != "/signup"
      ) {
        this.isAuth = true;
      }
    },
  },
  watch: {
    $route: {
      handler: "isAuthFunc",
      immediate: true
      // Put your logic here...
    }
  }
};
</script>
<style>
#app {
  margin: 0 auto;
  max-width: 1040px;
  padding: 20px;
}
</style>
