<template>
  <div class="hello">
    <nav>
      <ul class="navigation">
        <li>
          <router-link :to="{ name: 'Home' }">{{ home }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Blog' }">{{ blog }}</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Profile' }">{{ profile }}</router-link>
        </li>
        <!-- <li >
          <router-link :to="{ name: 'Login' }">{{ login }}</router-link>
        </li> -->
        <li>
          <a @click="logout">{{logt}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "my-nav",
  data() {
    return {
      home: "Home",
      blog: "Blog",
      profile: "Profile",
      logt: "Logout"
    };
  },
  methods: {
    logout: function () {
      if (this.$router.currentRoute.path == "/login") {
        console.log(this.$router.currentRoute.path);
        return;
      }
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
          alert("You are log out !");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li {
  list-style: none;
}
ul {
  padding-left: 0px;
}
li {
  width: 25%;
}
a {
  text-decoration: none;
  cursor: pointer;
}
.navigation {
  display: flex;
  background-color: darkgray;
  border-radius: 5px;
  justify-content: space-around;
  flex-flow: row wrap;
}
.navigation a {
  text-align: center;
  display: block;
  color: white;
  padding: 1em;
  font-family: "ABeeZee";
  font-size: 20px;
}
.navigation a:hover,
.navigation a:active {
  background-color: dimgray;
  border-radius: 5px;
  color: lightgreen;
}

@media screen and (max-width: 500px) {
  .navigation {
    flex-flow: column wrap;
    padding: 0;
    border-radius: 3px;
  }
  .navigation a {
    font-size: inherit;
    text-align: center;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  li {
    width: 100%;
  }
}
</style>
