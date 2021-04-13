<script>
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState(['user'])
  }
}

</script>



<template lang="pug">
  #app
    #nav
      .home
      nav.navbar.navbar-expand-lg.navbar-light.bg-light.navbar.fixed-top.navbar-light.bg-light
        .container-fluid
          a.navbar-brand SEA OF CHOICES
          button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbarNav.collapse.navbar-collapse
            ul.navbar-nav
              li.nav-item
                router-link(to="/") Home
              li.nav-item
                router-link(to="/ships") Ships
              li.nav-item
                router-link(to="/about-us") About Us
              li.nav-item
                router-link(to="/store") Store
            ul.nav-buttons(:user="user")
              .user-buttons(v-if="user")
                router-link.button.btn.btn-info.nav-item(to="/edit-profile") Edit profile
                a.button.btn.btn-primary.nav-item(@click="doLogout") Logout
              .user-buttons(v-else)
                router-link.button.btn.btn-primary.nav-item(to="/login") Login
                router-link.button.btn.btn-primary.nav-item(to="/register") Sign up
    router-view

 </template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a4e72;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-buttons {
    margin-left: auto;
    padding: 10px;
  }
  .nav-item {
    margin-left: 20px;
  }
}
</style>
