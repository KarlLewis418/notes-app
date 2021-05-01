<template>
  <q-page>
    <app-notespage />
  </q-page>
</template>

<script>
import db from "src/boot/firebase";

import NotesPage from "pages/NotesPage";

export default {
  components: { "app-notespage": NotesPage },
  name: "PageHome",
  mounted() {
    db.collection("notes").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New city: ", change.doc.data());
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data());
        }
      });
    });
  },
};
</script>
