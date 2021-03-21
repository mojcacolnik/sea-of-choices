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
  },
  methods: {
    ...mapActions(['fetchUser'])
  }
}
</script>

<template lang="pug">
  .about
    h1 This is cruise detail
    CruiseCard(:cruise="cruise" v-if="cruise")
    Counter
    h2 This is user detail:
      div(v-if="user")
      div(v-for="user in users")
        p {{ user.name }}

</template>
