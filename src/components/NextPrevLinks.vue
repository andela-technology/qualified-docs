<template>
  <div>
    <div class="flex flex-col sm:flex-row justify-between items-center">
      <g-link
        v-if="prev"
        :to="prev.path"
        class="mb-4 sm:mb-0 flex items-center mr-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
      >
        <ArrowLeftIcon class="mr-2" size="1x" />
        {{ prev.title }}
      </g-link>

      <g-link
        v-if="next"
        :to="next.path"
        class="flex items-center ml-auto text-ui-primary font-bold px-4 py-2 border border-ui-border rounded-lg hover:bg-ui-primary hover:text-white transition-colors"
      >
        {{ next.title }}
        <ArrowRightIcon class="ml-2" size="1x" />
      </g-link>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from 'vue-feather-icons';
import { getNextPrev } from '../utils/page-utils';

export default {
  components: {
    ArrowLeftIcon,
    ArrowRightIcon,
  },

  computed: {
    page() {
      return this.$page.markdownPage;
    },
    pages() {
      return this.$page.allMarkdownPage.edges.map(edge => edge.node);
    },
    autoPrevNext() {
      return getNextPrev(this.page, this.pages);
    },
    next() {
      if (this.pages && !this.page.next) {
        if (this.autoPrevNext.next) {
          return this.autoPrevNext.next;
        }
        let current = this.autoPrevNext.current;
        if (current && current.pages.length) {
          // skip depth 2 and go to 3
          if (current.depth === 1) {
            return current.pages[0].pages[0];
          }
          return current.pages[0];
        }
        return false;
      }
      return this.pages.find(page => page.path === this.page.next);
    },
    prev() {
      if (this.pages && !this.page.prev) {
        return this.autoPrevNext.prev || false;
      }

      return this.pages.find(page => page.path === this.page.prev);
    },
  },
};
</script>
