<template>
    <Layout>
        <div class="flex flex-wrap items-start justify-start">

            <div class="markdown-page__side order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky">
                <OnThisPage/>
            </div>

            <div class="markdown-page__content order-1 w-full md:w-2/3">
                <div class="content" v-html="$page.markdownPage.content"/>

                <api-ref v-if="$page.markdownPage.apiRef" class="content" />

                <div class="markdown-page__end">
                    <NextPrevLinks/>
                </div>
            </div>

        </div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  markdownPage(id: $id) {
    id
    title
    description
    path
    content
    apiRef
    headings {
      depth
      value
      anchor
    }
  }
  allMarkdownPage(sort: [{by: "order"}, {by: "path"}], order: ASC) {
    edges {
      node {
        path
        title
        order
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from '@/components/OnThisPage.vue';
import NextPrevLinks from '@/components/NextPrevLinks.vue';
import ApiRef from '../components/ApiRef';

export default {
    components: {
        ApiRef,
        OnThisPage,
        NextPrevLinks,
    },
    metaInfo() {
        const title = this.$page.markdownPage.title;
        const description = this.$page.markdownPage.description || this.$page.markdownPage.excerpt;

        return {
            title: title,
            meta: [
                {
                    name: 'description',
                    content: description,
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: title,
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: title,
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: description,
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: description,
                },
            ],
        };
    },
};
</script>

<style>
@import 'prism-themes/themes/prism-material-oceanic.css';
@import 'gridsome-plugin-remark-container/themes/classic.css';

.markdown-page__end {
    @apply mt-8 pt-8 border-t border-ui-border ;
    min-height: 80vh;

    @media lg {
        @apply mt-12 pt-12;
    }
}

.markdown-page__content {
    /*height: calc(100vh - 62px);*/
    /*overflow-y: auto;*/
}

.markdown-page__side {
    top: 4rem;
    height: calc(100vh - 65px);
    overflow-y: auto;
}

.content {
    .admonition {
        h5 {
            @apply mt-0 pt-0;
            line-height: 14px;
        }

        p + p {
            @apply mt-4;
        }

        summary {
            outline-width: 0;
            cursor: pointer;
        }
        &[open] {
            summary {
                @apply mb-3;
            }
        }

        &.admonition-info {
            border-left: 8px solid var(--color-ui-fade);
            background-color: var(--color-ui-fade-bg);

            path {
                fill: var(--color-ui-fade);
            }
        }

        .admonition-icon {
            @apply mr-1;
            position: relative;
            top: -1px;
        }

        &.admonition-details {
            background-color: var(--color-ui-fade-bg);
            @apply rounded;
        }
    }

    p + .admonition {
        @apply mt-6;
    }
}

</style>
