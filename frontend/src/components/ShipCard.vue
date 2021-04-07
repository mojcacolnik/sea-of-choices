<script>
export default {
    name: 'ShipCard',
    props: ['ships'],
    }

</script>

<template lang="pug">
	.container
		.card(style='width: 18rem;')
			img.card-img-top(src='https://source.unsplash.com/random/200x150' alt='ship image')
			.card-body
				p.card-text
					| Some quick example text to build on the card title and make up the bulk of the card's content.

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