<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
import ShipCard from '@/components/ShipCard.vue'

export default {
  name: 'Ships',
  components: { ShipCard },
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
  // computed: {
  //     ...mapState([ships])
  // }
}
</script>

<template lang="pug">
	.ships
		.container
			h2 Meet the ships:
			.row
				.col(v-for="ship in ships")
					ShipCard(:ships="ships" v-if="ship")
</template>

<style lang="scss" scoped>
h2 {
	margin-top: 100px;
	margin-bottom: 70px;
}

</style>
