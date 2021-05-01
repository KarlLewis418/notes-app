<template>
  <form @submit.prevent="simulateSubmit" class="q-pa-md">
    <!-- a simple text field watching for the enter key release -->
    <!-- <q-input v-model="name" filled type="name" hint="Name" /> -->

    <q-input v-model="email" filled type="email" hint="Email" />
    <q-input v-model="password" filled type="password" hint="Password" />

    <!--
      A button with v-model set to submit.
      v-model scope variable must be a strict Boolean
    -->
    <div class="row justify-end">
      <q-btn
        type="submit"
        :loading="submitting"
        label="Save"
        class="q-mt-md"
        color="teal"
        :disable="!(password && email)"
      >
        <template v-slot:loading>
          <q-spinner-facebook />
        </template>
      </q-btn>
    </div>
  </form>
</template>

<script>
import db from "src/boot/firebase";
// import "firebase/auth";
require("firebase/auth");

export default {
  data() {
    return {
      // name: "",
      password: "",
      email: "",
      submitting: false,
    };
  },

  methods: {
    simulateSubmit() {
      this.submitting = true;

      // console.log(this.name);
      console.log(this.email);
      console.log(this.password);

      // Simulating a delay here.
      // When we are done, we reset "submitting"
      // Boolean to false to restore the
      // initial state.
      let email = this.email;
      let password = this.password;
      db.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log("Signed Up Successfully");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });

      setTimeout(() => {
        // delay simulated, we are done,
        // now restoring submit to its initial state
        this.submitting = false;
      }, 3000);
    },
  },
};
</script>
