<template>
    <div class="row">
            <form @submit.prevent="pressed">
            <h3>Login</h3>
            <div class="login">
            <input type="text" placeholder="login" v-model="email" />
            </div>
            <div class="password">
            <input type="password" placeholder="password" v-model="password" />
            </div>
            <button>Login</button>
            </form>
            <div class="error" v-if="error">{{error.message}}</div>
    </div>
</template>

<script>
import regeneratorRuntime from "regenerator-runtime";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data () {
    return {
      email: "",
      password: "",
      error: ""
    }
  },
      methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "home" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
  };
</script>