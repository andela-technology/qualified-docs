<template>
  <Layout>
    <div class="flex flex-wrap items-start justify-start">
      <div
        class="markdown-page__side order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
      >
        <OnThisPage />
      </div>

      <div class="order-1 w-full md:w-2/3 markdown-page__content-wrapper">
        <div
          class="markdown-page__content"
          v-html="$page.markdownPage.content"
          on-this-page
        />

        <api-ref
          v-if="$page.markdownPage.apiRef"
          class="markdown-page__content"
          on-this-page
        />

        <div class="markdown-page__end" v-if="!private">
          <NextPrevLinks />
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
        private
        featured
      }
    }
  }
}
</page-query>

<script>
import OnThisPage from "@/components/OnThisPage.vue";
import NextPrevLinks from "@/components/NextPrevLinks.vue";
import ApiRef from "../components/ApiRef";

export default {
  components: {
    ApiRef,
    OnThisPage,
    NextPrevLinks,
  },

  computed: {
    private() {
      const page = this.$page;
      const edge = page.allMarkdownPage.edges.find(
        (e) => e.node.path === page.markdownPage.path,
      );
      return (edge && edge.node && edge.node.private) || false;
    },
  },

  metaInfo() {
    const title = this.$page.markdownPage.title;
    const description =
      this.$page.markdownPage.description ||
      this.$page.markdownPage.excerpt ||
      `${title} - Qualified.io Docs`;

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: title,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
};
</script>

<style>
@import "prism-themes/themes/prism-material-oceanic.css";
@import "gridsome-plugin-remark-container/themes/classic.css";

.markdown-page__end {
  @apply mt-8 pt-8 border-t border-ui-border;
  min-height: 80vh;

  @media lg {
    @apply mt-12 pt-12;
  }
}

.markdown-page__side {
  top: 4rem;
  height: calc(100vh - 65px);
  overflow-y: auto;
}
.markdown-page__content {
  @apply pt-1;

  > {
    h1 {
      @apply text-3xl;
    }

    h2 {
      @apply text-2xl;
    }

    h3 {
      @apply text-xl;
    }

    h4 {
      @apply text-lg;
    }

    p,
    ol,
    ul,
    pre,
    strong,
    blockquote {
      @apply mb-4 text-base text-ui-typo;
    }

    /* if a paragraph is the first child, then give some extra top page margin, since the page expects a header */
    p:first-child {
      @apply mt-8;
    }
  }

  a {
    @apply text-ui-primary underline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply -mt-12 pt-20;
  }

  h2 + h3,
  h2 + h2,
  h3 + h3 {
    @apply border-none -mt-20;
  }
  p + h5,
  h3 + h4 {
    @apply -mt-16;
  }

  h2,
  h3 {
    @apply border-b border-ui-border pb-1 mb-3;
  }

  h4 {
    @apply font-bold mb-2;
    color: var(--color-ui-fade);
  }

  h5 {
    @apply font-bold mb-1;
  }

  ul {
    @apply list-disc;

    ul {
      list-style: circle;
    }
  }

  ol {
    @apply list-decimal;
  }

  ol + p {
    @apply mt-4;
  }

  ol,
  ul {
    @apply pl-5 py-1;

    li {
      @apply mb-1;

      p {
        @apply mb-0;
      }

      &:last-child {
        @apply mb-0;
      }

      p + figure {
        @apply mt-4;
      }
    }
  }
  hr {
    @apply border-dashed;
  }

  hr + p {
    @apply mt-4;
  }

  figure {
    @apply mb-6;
    img {
      margin: 30px auto 0;
    }
    figcaption {
      @apply text-xs mt-4;
      color: var(--color-ui-fade);
      text-align: center;
    }

    &.middle-align {
      text-align: center;
      svg,
      img {
        margin: 0 auto;
      }
    }
  }

  blockquote {
    @apply border-l-4 border-ui-border py-2 pl-4;

    p:last-child {
      @apply mb-0;
    }

    h4:first-child {
      @apply mt-0 pt-0;
    }
  }

  code {
    @apply px-1 py-1 font-mono border-b border-r border-ui-border rounded;
    background-color: var(--color-ui-fade-alt-bg);
  }

  pre[class*="language-"],
  pre > code {
    background-color: theme("colors.gray.800");
    color: theme("colors.gray.200");
  }

  p > code,
  li > code,
  ol > code {
    @apply text-sm;
    color: var(--color-ui-fade);
  }

  pre {
    @apply max-w-full overflow-x-auto rounded p-0;

    & + p {
      @apply mt-4;
    }

    & > code {
      @apply border-none leading-relaxed px-4 py-3;
      display: block;
      font-size: 13px;
      line-height: 20px;
    }
  }

  p + pre > code {
    @apply mt-2;
  }

  p + ul {
    margin-top: 15px;
  }

  code.language-bash {
    white-space: pre-wrap;
    word-break: break-all;
  }

  table {
    @apply text-left mb-6;

    td,
    th {
      @apply py-3 px-4;
      &:first-child {
        @apply pl-0;
      }

      &:last-child {
        @apply pr-0;
      }
    }

    tr {
      @apply border-b border-ui-border;
      &:last-child {
        @apply border-b-0;
      }
    }
  }
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

html[embedded-docs] {
  .markdown-page__side,
  .markdown-page__end {
    display: none !important;
  }
  .markdown-page__content-wrapper {
    @apply w-full max-w-full mx-auto;
  }
  .markdown-page__content {
    @apply py-5;
    position: relative;

    svg,
    img {
      max-width: 100% !important;
    }
  }
  .markdown-page__content > *:first-child {
    @apply mt-0 pt-0;
  }
}

html[lights-out] {
  .markdown-page__content {
    code {
      @apply border-none shadow-none;
      background-color: var(--color-ui-fade-alt-bg);
    }

    pre[class*="language-"],
    code[class*="language-"] {
      @apply bg-ui-border;
      background-color: var(--color-ui-fade-alt-bg);
    }

    .border-dashed,
    .border-solid,
    .border-ui-border,
    h2 {
      border-color: var(--color-ui-border);
    }
  }
}
</style>
