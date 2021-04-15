<script>
import { mapActions } from 'vuex'

export default {
  name: 'ShipDetail',
  components: {},
  data() {
    return {
        ship: null
    }
  },
  async created() {
    this.ship = await this.fetchShip(this.$route.params.id)
  },
  methods: {
    ...mapActions(['fetchShip'])
  }
}
</script>

<template lang='pug'>
.about(:ship='ship' v-if='ship')
	h2 {{ ship.name }}
	table.table.table-info
		tbody
			tr
				th CruiseLine
				th Built
				th Capacity
			tr
				td {{ ship.cruiseline }}
				td {{ ship.year }}
				td {{ ship.capacity }}
	router-link.btn.btn-primary(to='/ships') BACK

</template>

<style lang='scss' scoped>
.about {
	margin-top: 100px;
}
table {
	width: 100%;
}
</style>