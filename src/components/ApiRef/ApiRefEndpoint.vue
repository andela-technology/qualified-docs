<template>
  <span class="api-ref-endpoint">
    <span class="api-ref-endpoint__method">{{ method }}</span>
    <span class="api-ref-endpoint__route">{{ route }}</span>
  </span>
</template>

<script>
export default {
  name: 'ApiRefEndpoint',
  props: {
    method: String,
    route: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>

<style>
.api-ref-endpoint__method {
  @apply uppercase text-green-500 text-sm mr-2 subpixel-antialiased;
}
.api-ref-endpoint__route {
  @apply font-mono;
  font-size: 13px;
  color: var(--color-ui-fade);
  word-break: break-all;
}
</style>
