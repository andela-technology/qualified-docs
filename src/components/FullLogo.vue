<template>
    <img :src="require('../assets/qualified-logo-white.svg')" :width="getWidth" :height="getHeight" class="qualified-full-logo-svg" />
</template>

<script>
export default {
    props: {
        height: {
            type: Number,
            default: 40,
        },
    },

    computed: {
        getWidth() {
            return Math.ceil((this.getHeight / 95) * 539);
        },

        getHeight() {
            return this.height;
        },
    },
};
</script>

<style>
html[lights-out] .qualified-full-logo-svg path {
    fill: #FFF !important;
}
</style>
