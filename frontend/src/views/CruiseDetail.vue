<script>
import { mapActions } from "vuex";

export default {
  name: "CruiseDetail",
  components: {},
  data() {
    return {
      cruise: null,
      backendError: null,
    };
  },
  async created() {
    this.cruise = await this.fetchCruise(this.$route.params.id)
  },
  methods: {
    ...mapActions(["fetchCruise", "book", "fetchUser"]),
    async submitBooking(e) {
      e.preventDefault();

      try {
        await this.book(this.cruise);
        window.alert('Succesfully booked. Start packing!')
        this.$router.push("/profile");
      } catch (err) {
		  console.log(err)
        this.backendError = err.response.data.message;
      }
    },
  },
};
</script>

<template lang="pug">
.about(:cruise="cruise" v-if="cruise")
	h2 {{ cruise.title }}
	table.table.table-primary
		tbody
			tr
				th Route
				th Starts
				th Ends
			tr
				td {{ cruise.route | formatArray }}
				td {{ cruise.startDate }}
				td {{ cruise.endDate }}
	router-link.btn.btn-primary(to="/profile") BACK
	//- router-link.btn.btn-info(@click="book") BOOK
	button.btn.btn-primary(@click="submitBooking") BOOK

</template>

<style lang="scss" scoped>
.about {
  margin-top: 100px;
}
table {
  width: 100%;
}
</style>
