<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      birthDate: null,
      email: '',
      password: '',

      backendError: null
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          birthDate: this.birthDate,
          email: this.email,
          password: this.password
        })

        this.$router.push('/login')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
.register
    form( @submit="submitLogin")
      h1 Create a new account
      label(for="name") Name:&nbsp;
        input(v-model="name" id="name" type="text" placeholder="Your name" required)
      label(for="age") Birth Date:&nbsp;
        input(v-model="birthDate" id="birthDate" type="date" required)
      label(for="email") Email:&nbsp;
        input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
        input(v-model="password" id="password" type="password" placeholder="Your password" required)
      input(type="submit" value="Register")
    div(v-if="backendError") {{ backendError }}
    div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}

.register {
  padding: 100px;
}
</style>
