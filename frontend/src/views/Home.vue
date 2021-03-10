<script>
// @ is an alias to /src
import axios from "axios"
import UserCard from '@/components/UserCard.vue'

export default {
  name: "Home",
  components: {
    UserCard
  },
  data() {
    return {
      cruises: []
    }
  },
  async created() {
    const cruisesRequest = await axios.get('/api/cruises')

    this.cruises = cruisesRequest.data.cruises
  }

}
</script>

<template lang="pug">
  .home
    h1 Sea Of Choices
    UserCard(v-for="cruise in cruises" :cruise="cruise")
</template>


