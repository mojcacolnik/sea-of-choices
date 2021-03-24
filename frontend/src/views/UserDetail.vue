<script>
import Counter from '@/components/Counter.vue'
import CruiseCard from '@/components/CruiseCard.vue'
import { mapActions } from 'vuex'

export default {
  name: 'UserDetail',
  components: { CruiseCard, Counter },
  data() {
    return {
      cruise: null,
      user: null
    }
  },
  async created() {
    this.user = await this.fetchUser(this.$route.params.id)
    this.cruise = await this.fetchCruise(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchCruise', 'fetchUser'])
  }
}
</script>

<template lang="pug">
  .about
    h1 This is user detail:
      div(v-if="user")
      div(v-for="user in users")
        p {{ user.name }}
    h2 This is your cruise detail
        CruiseCard(:cruise="cruise" v-if="cruise")
          p {{ cruise.title }}
        Counter
</template>
