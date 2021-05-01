<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-dark text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            class="q-pa-md lt-md absolute-center"
            name="today"
            size="sm"
            color="black"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <q-icon class="q-pa-md" name="today" size="lg" color="black" />
      <q-list>
        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="black" name="home" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item to="/auth" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="black" name="accessibility" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >Login/Register</q-item-section
          >
        </q-item>
      </q-list>
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="black" name="accessibility" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >Logout</q-item-section
          >
        </q-item>
      </q-list>
      <q-list>
        <q-item exact to="/about" clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="black" name="help" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <!-- <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input placeholder="Search Notes-App" class="qa-ma-md" outlined rounded>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      right: false,
    };
  },
};
</script>