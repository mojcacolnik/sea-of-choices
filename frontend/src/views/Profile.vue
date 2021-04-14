<script>
import CruiseCard from '@/components/CruiseCard.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: { CruiseCard },
  data() {
    return {
      users: [],
      time: new Date(),
      message: '',
      cruises: [],
    }
  },
  async created() {
    // this.users = await this.fetchUsers()
    this.cruises = await this.fetchCruises()
  },
  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream', 'fetchCruises', 'logout']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    },
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages']),
  },
}

</script>

<template lang='pug'>
  .home(v-if='user' :user='user')
    h1 Hello, {{ user.name }}!
    h2 Welcome aboard!
    p Today is: {{ time }}
    .container
      h2 Availiable cruises:
      .row
        .col(v-for='cruise in cruises')
          CruiseCard(:cruise='cruise' v-if='cruise')
    .container
      h2 Booked cruises:
      .row
        .col(v-for='cruise in user.cruises')
          h3.text-primary {{ cruise.title }} cruise:
          table.table.table-primary
            tbody
              tr
                th Route
                th Starts
                th Ends
              tr
                td {{ cruise.route | formatArray }}
                td {{ cruise.startDate }}
                td {{ cruise.endDate }}
    h2 Users
    div(v-for='user in users')
      router-link(:to='`/users/${user._id}`') {{ user.name }}
    div(v-if='liveStreams.length')
      h2 Live streams
      div(v-for='stream in liveStreams')
        p {{ stream }}
        button(@click='joinStream(stream)') Join stream
    button.btn.btn-info(@click='goLive') Go live
    div(v-if='currentLiveStream')
      h3 Live stream
      .messages
        .message(v-for='message in liveStreamMessages')
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit='sendMessage')
        input(type='text' v-model='message')
        input(type='submit' value='Send message')

</template>

<style lang='scss' scoped>
h1 {
  margin-top: 100px;
}

h2 {
  padding: 30px;
}
</style>