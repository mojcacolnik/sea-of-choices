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
      router-link(to="/") HOME |
      router-link(to="/register") REGISTER |&nbsp;
      router-link(to="/login") LOGIN | &nbsp;
      router-link(to="/profile") PROFILE | &nbsp;
      a(@click='doLogout') Logout
    router-view

 </template>

<style lang="scss">
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
