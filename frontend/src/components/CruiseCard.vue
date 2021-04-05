<script>
export default {
    name: 'CruiseCard',
    props: ['cruise'],
    data() {
        return {
            defaultBio: 'This cruise is pending'
        }
    }
}
</script>

<template lang="pug">
.box
    h2 Cruise: {{ cruise.title }}
    p Departure: {{ cruise.startDate }}
    p End: {{ cruise.endDate }}
    p {{ defaultBio }}
</template>

<style lang="scss" scoped>
.box {
    padding: 2rem;
    border: 2px solid blue;
    border-radius: 0.3rem;
    background: lightskyblue;
}



</style>