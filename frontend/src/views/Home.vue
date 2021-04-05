<script>
import CruiseCard from '@/components/CruiseCard'
import { mapActions } from 'vuex'

export default {
    name: "Home",
    components:  { CruiseCard },
    data() {
        return {
            cruises: []
        }
    },
    async created() {
        this.cruises = await this.fetchCruises()
    },
    methods: {
        ...mapActions(['fetchCruises'])
    }
}
</script>

<template lang="pug">
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
              router-link(to="/") Home
            li.nav-item
              router-link(to="/ships") Ships
            li.nav-item
              router-link(to="/about-us") About Us
            li.nav-item
              router-link(to="/store") Store
            li.nav-item
              button.btn.btn-primary(to="/login") Login
            li.nav-item
              button.btn.btn-success(to="/register") Sign Up
    h2 Cruises:
    div(v-for="cruise in cruises")
        CruiseCard(:cruise="cruise" v-if="cruise")
        router-link(:to="`/cruises/${cruise._id}`") {{ cruise.route }}

</template>
