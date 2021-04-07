<script>
import CruiseCarousel from '@/components/CruiseCarousel.vue'
import { mapActions } from 'vuex'

export default {
    name: "Home",
    components:  { CruiseCarousel },
    data() {
        return {
            cruises: []
        }
    },
    async created() {
        this.cruises = await this.fetchCruises()
    },
    methods: {
        ...mapActions(['fetchCruises'])
    },
}
</script>

<template lang="pug">
    .home
        h2 Wanna feel free? Cruise with me!
        CruiseCarousel


</template>
