<script>
export default {
    name: 'CruiseCarousel',
    props: ['cruise'],
    data() {
        return {
            price: '749$'
        }
    }
}
</script>

<template lang="pug">
    .box
        #carouselExampleCaptions.carousel.slide(data-bs-ride='carousel')
            .carousel-indicators
                button.active(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2')
                button(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3')
            .carousel-inner
                .carousel-item.active
                    img.d-block.w-100(src='https://source.unsplash.com/random/400x150' alt='Ocean image')
                    .carousel-caption.d-none.d-md-block
                        h5 CRUISES
                        p Some representative placeholder content for the first slide.
                .carousel-item
                    img.d-block.w-100(src='https://source.unsplash.com/random/400x151' alt='Ocean image')
                    .carousel-caption.d-none.d-md-block
                        h5 CONTACT US!
                        p Some representative placeholder content for the second slide.
                .carousel-item
                    img.d-block.w-100(src='https://source.unsplash.com/random/400x152' alt='Ocean image')
                    .carousel-caption.d-none.d-md-block
                        h5 EVENTS
                        p Some representative placeholder content for the third slide.
            button.carousel-control-prev(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev')
                span.carousel-control-prev-icon(aria-hidden='true')
                span.visually-hidden Previous
            button.carousel-control-next(type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next')
                span.carousel-control-next-icon(aria-hidden='true')
                span.visually-hidden Next



</template>

<style lang="scss" scoped>


</style>