<template>
  <div class="login">
    <div class="main-login">
      <div class="container">
        <h2>Sign In</h2>
        <div class="login-item">
          <form @submit.prevent class="form form-login">
            <div class="form-field">
              <label class="user" for="login-username"
                ><span class="hidden">Email</span></label
              >
              <input
                id="login-username"
                type="text"
                v-model="email"
                class="form-input"
                placeholder="Email"
                required
              />
            </div>

            <div class="form-field">
              <label class="lock" for="login-password"
                ><span class="hidden">Password</span></label
              >
              <input
                id="login-password"
                type="password"
                v-model="password"
                class="form-input"
                placeholder="Password"
                required
              />
            </div>

            <div class="form-field">
              <input @click="login" type="submit" value="Log in" />
            </div>
            <div class="form-field">
              <p>or Sign In with Google</p>
            </div>
            <div class="form-field">
              <button @click="socialLogin" class="social-button">
                <img src="../assets/google-icon.png" alt="Google Logo" />
              </button>
            </div>
            <div class="form-field">
              <p>
                If you don't have an account? You can
                <router-link :to="{ name: 'Signup' }">create one</router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            alert(`Well done ! You are connected ${user}`);
            this.$router.push("home");
          },
          (err) => {
            alert("Oops. " + err.message);
          }
        );
    },
    socialLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {
        this.$router.replace('home');
        console.log(result)
      }).catch((err) => {
        alert("Oops. " + err.message);
      });
    }
  }
}
</script>
<style scoped>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css");
@import url("https://fonts.googleapis.com/css?family=Lato:400,300,700");
.main-login {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "lato", sans-serif;
}
.container {
  background: rgb(169 169 169);
  border-radius: 5px;
  box-shadow: 00 1.5px 0 0 rgb(169 169 169);
  width: 450px;
  display: flex;
  flex-direction: column;
}
h2 {
  text-align: center;
  color: white;
}
.login-item {
  color: #ffff;
  padding: 25px 25px 0;
  margin: 20px 20px 0;
  border-radius: 3px;
}
.form-field {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
}
input {
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.user:before {
  content: "\f007";
  font: 14px fontawesome;
  color: #5b5b5b;
}

.lock:before {
  content: "\f023";
  font: 14px fontawesome;
  color: #5b5b5b;
}

.form input[type="password"],
.form input[type="text"],
.form input[type="submit"] {
  width: 100%;
}

.form-login label,
.form-login input[type="text"],
.form-login input[type="password"],
.form-login input[type="submit"] {
  border-radius: 0.25rem;
  padding: 1rem;
  color: #3a3f44;
}

.form-login label {
  background-color: #222222;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.form-login input[type="text"],
.form-login input[type="password"] {
  background-color: #ffffff;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.form-login input[type="text"]:focus,
.form-login input[type="text"]:hover,
.form-login input[type="password"]:focus,
.form-login input[type="password"]:hover {
  background-color: #eeeeee;
}
.form-login input[type="submit"] {
  background-color: #00b9bc;
  color: #eee;
  font-weight: bold;
  text-transform: uppercase;
}
.form-login input[type="submit"]:focus,
.form-login input[type="submit"]:hover {
  background-color: #197071;
}
.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.text--center {
  text-align: center;
}
/* input {
    margin: 10px;
    width: 50%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 50%;
    cursor: pointer;
  }
  p {
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  } */
.social-button {
  width: 75px;
  background: white;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
}

.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.social-button img {
  width: 100%;
}
</style>