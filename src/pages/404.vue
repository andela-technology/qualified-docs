<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <h1 class="text-center font-bold text-4xl text-ui-primary">
        Oh no! There is nothing here.
      </h1>
    </div>
    <div class="mb-10 flex items-center justify-center">
      <button
        @click="back()"
        class="font-bold border-b border-ui-primary text-xl m-3"
      >
        Back
      </button>
      <g-link to="/" class="font-bold border-b border-ui-primary text-xl m-3"
        >Home</g-link
      >
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404 - Nothing here",
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
