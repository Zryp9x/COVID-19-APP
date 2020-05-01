<template>
    <div class="row" style="margin:auto; width: 300px;">
            <form @submit.prevent="pressed">
                <h3 class="display-4" style="text-align:center;">Sign in</h3><br>
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email"  style="width: 300px;">
                </div>
                <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" />
                 </div>
            <button type="submit" class="btn btn-primary">Submit</button><br><br>
            <div class="error" v-if="error">{{error.message}}</div>
            </form>
            
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