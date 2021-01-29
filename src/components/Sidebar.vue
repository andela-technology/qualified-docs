<template>
    <div class="sidebar">
        <sidebar-item
            v-for="page in nestedPages"
            :key="page.path"
            :page="page"
            @navigate="$emit('navigate', $event)"
        />
    </div>
</template>
<script>
import { sortBy } from '../utils/array-utils';
import { getRelatedPages, getNestedPages } from '../utils/page-utils';
import SidebarItem from './SidebarItem';

export default {
    components: { SidebarItem },
    data() {
        return {
            expanded: [],
            private: process.isClient && window.location.search.indexOf('private') > 0
        };
    },
    computed: {
        pages() {
            return this.$page.allMarkdownPage.edges.map(edge => edge.node)
                .filter(page => !page.private || this.private);
        },
        currentPage() {
            return this.$page.markdownPage;
        },
        nestedPages () {
            // filter nested pages so that we only show those with children
            return getNestedPages(this.currentPage, this.pages)
                .filter(page => page.directory === '/' && !!page.pages.length)
        },
    },
    methods: {

    },
};
</script>
<style>
    .sidebar {
        
    }
</style>
