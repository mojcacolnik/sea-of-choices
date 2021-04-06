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
    this.users = await this.fetchUsers()
    this.cruises = await this.fetchCruises()
  },
  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream', 'fetchCruises']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    }
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages'])
  }
}
</script>

<template lang="pug">
  .home(v-if="user" :user="user")
    h1 Hello, {{ user.name }}
    p Today is: {{ time }}
    h2 Availiable cruises:
    div(v-for="cruise in cruises")
      CruiseCard(:cruise="cruise" v-if="cruise")
    h2 Users
    div(v-for="user in users")
      router-link(to="`/users/${user.profileId}`") {{ user.name }}
    div(v-if="liveStreams.length")
      h2 Live streams
      div(v-for="stream in liveStreams")
        p {{ stream }}
        button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Go live
    div(v-if="currentLiveStream")
      h3 Live stream
      .messages
        .message(v-for="message in liveStreamMessages")
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit="sendMessage")
        input(type="text" v-model="message")
        input(type="submit" value="Send message")
</template>