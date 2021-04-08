<script>
import HomeCarousel from '@/components/HomeCarousel.vue'
import { mapActions } from 'vuex'

export default {
    name: "Home",
    components:  { HomeCarousel },
    data() {
        return {
            cruises: []
        }
    },
    async created() {
        this.cruises = await this.fetchCruises()
    },
    methods: {
        ...mapActions(['fetchCruises']),
		},
}
</script>

<template lang="pug">
.home
	h2.text-primary Wanna feel free? Cruise with me!
		HomeCarousel
</template>

<style lang="scss" scoped>
h2 {
	margin-top: 100px;
}
</style>