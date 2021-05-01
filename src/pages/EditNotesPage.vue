<template>
  <form @submit.prevent="simulateUpdate" class="q-pa-md">
    <!-- a simple text field watching for the enter key release -->
    <q-input
      v-model="title"
      filled
      type="title"
      hint="Title"
      maxlength="280"
      autogrow
    />

    <q-input
      v-model="description"
      filled
      type="description"
      hint="Description"
      maxlength="280"
      autogrow
    />

    <q-input
      v-model="status"
      filled
      type="status"
      hint="Status"
      maxlength="280"
      autogrow
    />

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
        :disable="!title"
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

export default {
  data() {
    return {
      title: "",
      description: "",
      status: "",
      submitting: false,
    };
  },

  methods: {
    simulateSearch() {},
    simulateUpdate() {
      this.submitting = true;

      // console.log("happy");
      var washingtonRef = db.collection("Notes").doc(this.title);

      // Set the "capital" field of the city 'DC'
      return washingtonRef
        .update({
          title: this.title,
          description: this.description,
          status: this.status,
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          // The document probably doesn't exist.
          console.error(
            "Error updating document: The document probably doesn't exist.",
            error
          );
          // Simulating a delay here.
          // When we are done, we reset "submitting"
          // Boolean to false to restore the
          // initial state.
          setTimeout(() => {
            // delay simulated, we are done,
            // now restoring submit to its initial state
            this.submitting = false;
          }, 3000);
        });
    },
  },
};
</script>
