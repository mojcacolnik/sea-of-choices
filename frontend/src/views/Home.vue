<template lang="pug">
  .home
    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
    div(v-for="cruise in cruises") {{ cruise._id }} leaves on {{ cruise.startDate}}
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios"

export default {
  name: "Home",
  components: {
    HelloWorld
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
