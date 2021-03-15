<script>
// @ is an alias to /src
import axios from "axios"
import CruiseCard from '@/components/CruiseCard.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: "CruiseList",
  components: {
    CruiseCard, Counter
  },
  data() {
    return {
      cruises: []
    }
  },
  async created() {
    const cruisesRequest = await axios.get('/api/cruises')

    this.cruises = cruisesRequest.data
  }

}
</script>

<template lang="pug">
  .home
    h1 Sea Of Choices
    h2 Cruises:
    div(v-for="cruise in cruises" :cruise="cruise")
      router-link(:to="`/cruises/${cruise._id}`") {{ cruise.route }}
    Counter
</template>


