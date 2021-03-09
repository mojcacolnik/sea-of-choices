<script>
export default {
    name: 'UserCard',
    props: ['cruise'],
    data() {
        return {
            defaultBio: 'This cruise blabla'
        }
    }
}
</script>

<template lang="pug">
.box
    h2 Sail to: {{ cruise.route }}
    p Departure: {{ cruise.startDate}}
    p End: {{ cruise.endDate }}
</template>

<style lang="scss" scoped>
.box {
    padding: 2rem;
    border: 2px solid blue;
    border-radius: 0.3rem;
    background: lightgray;
}



</style>