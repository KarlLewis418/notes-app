<template>
  <q-page>
    <app-authpage />
  </q-page>
</template>

<script>
import AuthPage from "pages/AuthenticationPage";

export default {
  components: { "app-authpage": AuthPage },
  name: "PageHome",
};
</script>
