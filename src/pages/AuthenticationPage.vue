<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 350px">
      <q-option-group
        v-model="panel"
        inline
        :options="[
          { label: 'Login', value: 'login' },
          { label: 'Register', value: 'register' }
        ]"
      />

      <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
        <q-tab-panel name="login">
          <div class="text-h6">Login</div>
          <app-loginpage />
        </q-tab-panel>

        <q-tab-panel name="register">
          <div class="text-h6">Register</div>
          <app-registerpage />
        </q-tab-panel>

      </q-tab-panels>
    </div>
  </div>
</template>

<script>
import LoginPage from 'pages/LoginPage'
import RegisterPage from 'pages/RegistrationPage'

export default {
  components: {
    'app-loginpage': LoginPage,
    'app-registerpage': RegisterPage
  },

  data () {
    return {
      panel: 'mails'
    }
  }
}
</script>
