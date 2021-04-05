<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  async created() {
    console.log((await axios.get('/api/account/session')).data)
  },
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  }
}

</script>



<template lang="pug">
  #app
    #nav
      .home
      h1 Sea Of Choices
      nav.navbar.navbar-expand-lg.navbar-light.bg-light
        .container-fluid
          a.navbar-brand SEA OF CHOICES
          button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbarNav.collapse.navbar-collapse
            ul.navbar-nav
              li.nav-item
                router-link(to="/") Home &nbsp;
              li.nav-item
                router-link(to="/ships") Ships &nbsp;
              li.nav-item
                router-link(to="/about-us") About Us &nbsp;
              li.nav-item
                router-link(to="/store") Store &nbsp;
              li.nav-item
                router-link.button.btn.btn-primary(to="/login") &nbsp; Login &nbsp;
              li.nav-item
                router-link.button.btn.btn-success(to="/register") &nbsp; Sign Up &nbsp;
      //- router-link(to="/") HOME |
      //- router-link(to="/register") REGISTER |&nbsp;
      //- router-link(to="/login") LOGIN | &nbsp;
      //- router-link(to="/profile") PROFILE | &nbsp;
      //- a(@click='doLogout') Logout
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
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
