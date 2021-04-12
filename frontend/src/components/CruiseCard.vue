<script>
export default {
    name: 'CruiseCard',
    props: ['cruise'],
    data() {
        return {
            defaultBio: 'This cruise is pending'
        }
    },
	 filters: {
      formatArray(array) {
      let route = array.join(' => ')
      return route
    }
  }
}
</script>

<template lang="pug">
	.container
		.card(style='width: 18rem;')
				img.card-img-top(src='https://source.unsplash.com/random/150x100' alt='cruise image')
				.card-body
						h5.card-title {{ cruise.title }}
						p.card-text
								| Some quick example text to build on the card title and make up the bulk of the card's content.
				ul.list-group.list-group-flush
						li.list-group-item Departure: {{ cruise.startDate}}
						li.list-group-item End: {{ cruise.endDate }}
						li.list-group-item Route: {{ cruise.route | formatArray }}
				.card-body
						router-link.card-link(:to="`/cruises/${cruise._id}`") See more...

</template>

<style lang="scss" scoped>
.box {
    padding: 2rem;
    border: 2px solid rgb(14, 47, 89);
    border-radius: 0.3rem;
    background: rgb(52, 102, 133);
    color: lightblue;
}

</style>