<template>
  <tr>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="name"
        hide-header
        hide-bottom
      />
    </div>
  </tr>
</template>
<script>
import db from "src/boot/firebase";

import EditButton from "components/EditButton";
import DeleteButton from "components/DeleteButton";

export default {
  components: {
    "app-EditButton": EditButton,
    "app-DeleteButton": DeleteButton,
  },

  data() {
    return {
      selected: [],
      columns: [
        {
          name: "id",
          required: true,
          label: "id",
          align: "left",
          field: (row) => row.id,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "title",
          align: "center",
          label: "title",
          field: "title",
          sortable: true,
        },
        {
          name: "description",
          label: "description",
          field: "description",
          sortable: true,
        },
        { name: "status", label: "status", field: "status" },
      ],
      data: [
        // {
        //   id: "1",
        //   title: "Drink",
        //   description: "8 glasses",
        //   status: "done",
        // },
        // {
        //   id: "2",
        //   title: "Eat",
        //   description: "3 times",
        //   status: "done",
        // },
        // {
        //   id: "3",
        //   title: "Bath",
        //   description: "daily",
        //   status: "done",
        // },
      ],
    };
  },
  mounted() {
    db.collection("notes").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let noteChange = change.doc.data();
        if (change.type === "added") {
          console.log("New city: ", noteChange);
          this.data.unshift(noteChange);
        }
        if (change.type === "modified") {
          console.log("Modified city: ", noteChange);
        }
        if (change.type === "removed") {
          console.log("Removed city: ", noteChange);
        }
      });
    });
  },
};
</script>
