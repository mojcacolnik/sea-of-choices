<script>
import axios from 'axios'
import CruiseCard from '@/components/CruiseCard.vue'
import Counter from '@/components/Counter.vue'

export default {
   name: 'CruiseDetail',
   components: { CruiseCard, Counter },
   data() {
     return {
       cruise: null
     }
   },
   async created() {
     const cruisesRequest = await axios.get(`/api/cruises/${this.$route.params.id}`)
     this.cruise = cruisesRequest.data
   }
}
</script>

<template lang="pug">
  .about
    h1 These are the cruise details
    CruiseCard(v-if="cruise" :cruise="cruise")
    Counter
</template>
