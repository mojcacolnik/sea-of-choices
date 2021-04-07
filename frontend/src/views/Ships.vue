<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'Ships',
  components,
  data() {
    return {
      ships: [],
    }
  },
  async created() {
    this.ships = await this.fetchShips()
  },
  methods: {
    ...mapActions(['fetchShips'])
  },
  computed: {
      ...mapState([ships])
  }
}
</script>

<template lang="pug">
  .container
		h2 Meet the ships:
		.row
			.col(v-for="ship in ships")
				ShipCard(:ship="ship" v-if="ship")
</template>
