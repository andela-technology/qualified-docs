<template>
    <div
        v-if="page.title"
        :class="{
            'sidebar-item': true,
            [`sidebar-item--depth-${page.depth || 1}`]: true,
            'sidebar-item--current': page.current,
            'sidebar-item--active': page.active,
            'sidebar-item--children': hasChildren,
        }"
    >
        <g-link
            :to="treatAsArticle ? page.path : sortedChildren[0].path"
            :class="{
                'sidebar--item__link': true,
                'sidebar--item__link--disabled': !treatAsArticle
            }"
            @mousedown.native="$emit('navigate', page)"
        >
            <span>
                <chevron-down-icon v-if="page.depth === 1 && page.active && hasChildren" />
                <chevron-right-icon v-if="page.depth === 1 && (!page.active || !hasChildren)" />
                {{ page.title }}
            </span>
        </g-link>
        <div class="sidebar-item__pages" v-if="hasChildren">
            <sidebar-item
                v-for="page in sortedChildren"
                :key="page.path"
                :page="page"
                @navigate="$emit('navigate', $event)"
            />
        </div>
    </div>
</template>

<script>
import { ChevronRightIcon, ChevronDownIcon } from 'vue-feather-icons';
import { sortBy, sortValue } from '../utils/array-utils';

export default {
  name: 'SidebarItem',
  props: {
      page: Object,
  },
  data () {
    return {}
  },
  computed: {
      // 2nd level items with children will simply be treated as a heading, not an article
      treatAsArticle () {
          return this.page.depth !== 2 || !this.hasChildren
      },
      hasChildren () {
          return this.page.pages.length && this.page.depth < 3
      },
      sortedChildren () {
          // for top level items, they are already sorted alphabetically, we now want
          // to make sure that any items that don't have children are shown first
          if (this.page.depth === 1) {
              return sortBy(this.page.pages, p => !!p.pages.length)
          }
          if (this.page.depth > 1) {
              return [...this.page.pages].sort((a, b) => {
                  const aNum = a.order || 0;
                  const bNum = b.order || 0;
                  return (aNum - bNum) || sortValue(a.path, b.path);
              });
          }
          return this.page.pages
      },
  },
  methods: {},
  components: { ChevronRightIcon, ChevronDownIcon }
}
</script>

<style>
    .sidebar-item {
        @apply py-2;
        > a {
            display: block;
            svg {
                @apply mr-1;
                display: inline-block;
                width: 14px;
                opacity: 0.5;
            }
        }
    }
    /* not selected */
    .sidebar-item:not(.sidebar-item--current) {
        > a:not(.sidebar--item__link--disabled) {
            &:hover {
                @apply text-ui-primary;
            }
        }

        > a.sidebar--item__link--disabled {
            cursor: default;
        }
    }

    .sidebar-item--children {
        @apply py-1;
    }

    .sidebar-item--depth-1 {
        &.sidebar-item--active:not(:last-child) {
            @apply mb-6 border-b border-solid;
            border-color: var(--color-ui-border);
        }
        /* section header */
        > a {
            @apply font-bold uppercase border-none;
        }
        .sidebar-item__pages {
            @apply mt-2;
        }
    }
    .sidebar-item--depth-2 {
        @apply ml-6;
        &.sidebar-item--children {
            @apply my-6;
            > a {
                @apply font-semibold uppercase;
                color: var(--color-ui-fade);
                letter-spacing: 0.3px;
                font-size: 14px;
            }
        }

        &:not(.sidebar-item--active) {
            display: none;
        }

        &:not(:last-child) {
            /*@apply border-ui-border border-b border-solid;*/
        }
        .sidebar-item__pages {
            @apply mt-1;
        }
    }

    /* HACK: TODO, light theme shows dark links, need to fix underlying issue */
    .sidebar-item--depth-1, .sidebar-item--depth-3 {
        @media (max-width: 1023px) {
            > a {
                color: white;
            }
        }
    }

    .sidebar-item--depth-2:last-child {

    }

    .sidebar-item--current {
        /*@apply px-3 py-2;*/
        /*background-color: var(--color-ui-fade-bg);*/
        > a {
            color: var(--color-ui-primary);
        }

        &.sidebar-item--depth-3:first-child {
            @apply mt-2;
        }
    }

</style>
