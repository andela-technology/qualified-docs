<template>
    <img :src="require('../assets/qualified-logo-icon.svg')" :width="getWidth" :height="getHeight" class="qualified-logo-svg" />
</template>

<script>
export default {
    props: {
        width: {
            type: Number,
            default: 40,
        },
    },

    computed: {
        getWidth() {
            return this.width;
        },

        getHeight() {
            return Math.ceil((this.getWidth / 231) * 157);
        },
    },
};
</script>
