<template>
 <div class="api-ref-container" :class="{
     'api-ref-container--collapsible': !!defaultClosed,
     'api-ref-container--nested': !!nested,
 }">
     <div class="api-ref-container__header" @click="toggle()">
         <slot name="title">
             <template v-if="defaultClosed">
                 <chevron-down-icon v-if="open" />
                 <chevron-right-icon v-else />
             </template>
             <span class="api-ref-container__title">
                {{ title }}
             </span>
         </slot>
     </div>
     <div class="api-ref-container__content" v-if="open && $slots.default">
         <slot />
     </div>
 </div>
</template>

<script>
import { ChevronDownIcon, ChevronRightIcon } from 'vue-feather-icons';

export default {
  name: 'ApiRefContainer',
  props: {
      title: String,
      defaultClosed: Boolean,
      nested: Boolean
  },
  data () {
    return {
        open: !this.defaultClosed
    }
  },
  computed: {},
  methods: {
      toggle () {
          if (this.defaultClosed) {
              this.open = !this.open;
          }
      }
  },
  components: { ChevronDownIcon, ChevronRightIcon }
}
</script>

<style>
    .api-ref-container {
        @apply my-4;

        pre[class*="language-"] {
            @apply m-0 p-2;
        }

        h6 {
            @apply uppercase mb-1 text-sm tracking-wide;
            margin-top: 0 !important;
            padding-top: 0 !important;
            color: var(--color-ui-fade);
        }
    }

    .api-ref-container__header {
        @apply px-3 py-2 rounded-t;
        background-color: var(--color-ui-fade-bg);

        svg {
            display: inline-block;
            width: 16px;
        }
    }

    .api-ref-container--collapsible {
        .api-ref-container__header {
            cursor: pointer;
            &:hover {
                background-color: var(--color-ui-background);
            }
        }
    }

    .api-ref-container--nested {
        .api-ref-container__header {
            @apply p-0 rounded;
            background-color: transparent;

            &:hover {
                background-color: var(--color-ui-fade-bg);
            }
        }

        .api-ref-container__title {
            @apply text-xs;
        }
    }


    .api-ref-container__title {
        @apply uppercase text-sm tracking-wide subpixel-antialiased;
        color: var(--color-ui-fade);
    }

    .api-ref-container__content {
        @apply px-3 py-2 rounded-b;
        background-color: var(--color-ui-fade-alt-bg);
        overflow-y: auto;
    }
</style>
