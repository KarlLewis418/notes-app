<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 1200px">
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Add Notes', value: 'addnotes' },
          { label: 'View Notes', value: 'viewnotes' },
          { label: 'Edit Notes', value: 'editnotes' },
        ]"
      />

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="addnotes">
          <div class="text-h6">Add Notes</div>
          <app-addnotespage />
        </q-tab-panel>

        <q-tab-panel name="viewnotes">
          <div class="text-h6">View Notes</div>
          <app-notestable />
        </q-tab-panel>

        <q-tab-panel name="editnotes">
          <div class="text-h6">Edit Notes</div>
          <app-editnotestable />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import NotesTable from "pages/ViewNotesPage";
import AddNotePage from "pages/AddNotePage";
import EditNotePage from "pages/EditNotesPage";

export default {
  components: {
    "app-addnotespage": AddNotePage,
    "app-notestable": NotesTable,
    "app-editnotestable": EditNotePage,
  },
  data() {
    return {
      panel: "mails",
    };
  },
};
</script>
