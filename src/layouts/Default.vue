<template>
    <div class="default-layout">
        <div class="default-layout__content">

            <header ref="header" @resize="setHeaderHeight">
                <LayoutHeader/>
            </header>

            <main class="container">
                <aside
                    v-if="$page"
                    class="sidebar-container"
                    :class="{ 'sidebar-container--open': sidebarOpen }"
                    :style="sidebarStyle"
                >
                    <div class="w-full pb-16" >
                        <Sidebar @navigate="sidebarOpen = false"/>
                    </div>
                </aside>

                <div
                    class="w-full pb-24"
                    :class="{'pl-0 lg:pl-12 lg:w-3/4 article-content': !!$page}"
                >
                    <slot/>
                </div>

            </main>

        </div>

        <div class="fixed bottom-0 right-0 z-50 p-8 lg:hidden mobile-menu-icon" v-if="$page">
            <button class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
                    @click="sidebarOpen = ! sidebarOpen">
                <XIcon v-if="sidebarOpen"/>
                <MenuIcon v-else/>
            </button>
        </div>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from '@/components/Sidebar';
import LayoutHeader from '@/components/LayoutHeader';
import {MenuIcon, XIcon} from 'vue-feather-icons';
import {isEmbedded} from '../utils/page-utils';

if(isEmbedded()) {
    document.documentElement.toggleAttribute('embedded-docs', true);
}

export default {
    components: {
        Sidebar,
        LayoutHeader,
        MenuIcon,
        XIcon,
    },
    data() {
        return {
            headerHeight: 0,
            sidebarOpen: false,
        };
    },
    watch: {
        sidebarOpen: function (isOpen) {
            document.body.classList.toggle('overflow-hidden', isOpen);
        },
    },
    methods: {
        setHeaderHeight() {
            this.$nextTick(() => {
                this.headerHeight = this.$refs.header.offsetHeight;
            });
        },
    },
    computed: {
        sidebarStyle() {
            return {
                top: this.headerHeight + 'px',
                height: `calc(100vh - ${this.headerHeight}px)`,
            };
        },
    },
    mounted() {
        this.setHeaderHeight();
    },
    metaInfo() {
        return {
            meta: [
                {
                    key: 'og:type',
                    name: 'og:type',
                    content: 'website',
                },
                {
                    key: 'twitter:card',
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: (process.env.SITE_URL || '') + '/images/logos/qualified.svg',
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: (process.env.SITE_URL || '') + '/images/logos/qualified-icon.png',
                },
            ],
        };
    },
};
</script>

<style>
:root {
    --color-ui-text-background: #FFF;
    --color-ui-background: theme('colors.brand.complementBg');
    --image-ui-background: url('/images/general-bg-light.svg');
    --color-ui-typo: theme('colors.brand.complementDark');
    --color-ui-sidebar: theme('colors.brand.complementBgDark');
    --color-ui-border: theme('colors.brand.complementBgDarker');
    --color-ui-primary: theme('colors.brand.primaryDark');
    --color-ui-fade: #5e6d84;
    --color-ui-fade-bg: theme('colors.gray.300');
    --color-ui-fade-alt-bg: theme('colors.gray.200');
    --color-ui-danger: theme('colors.red.600');
}

html[lights-out] {
    --color-ui-text-background: theme('colors.brand.black');
    --color-ui-background: theme('colors.brand.dark');
    --image-ui-background: url('/images/general-bg-dark.svg');
    --color-ui-typo: theme('colors.brand.darkText');
    --color-ui-sidebar: theme('colors.brand.darker');
    --color-ui-border: #444;
    --color-ui-primary: theme('colors.brand.primary');
    --color-ui-fade: theme('colors.gray.500');
    --color-ui-fade-bg: theme('colors.gray.800');
    --color-ui-fade-alt-bg: theme('colors.gray.900');
    --color-ui-danger: theme('colors.red.500');

    .default-layout {
        code {
            @apply border-none shadow-none;
            background-color: var(--color-ui-fade-alt-bg);
        }

        pre[class*="language-"],
        code[class*="language-"] {
            @apply bg-ui-border;
            background-color: var(--color-ui-fade-alt-bg);
        }

        .border-dashed, .border-solid, .border-ui-border, h2 {
            border-color: var(--color-ui-border);
        }
    }
}

* {
    transition-property: background-color, border-color;
    transition-duration: 0ms;
    transition-timing-function: ease-in-out;
}

body {
    background: var(--color-ui-background) var(--image-ui-background) repeat-y;
    background-size: 1000px auto;
    background-position: center top;
    background-attachment: fixed;

    @media (min-width: 1000px) {
        background-size: 100% auto;
    }
}

.default-layout {
    @apply font-sans antialiased text-ui-typo;

    .text-fade {
        color: var(--color-ui-fade);
    }

    .default-layout__content {
        @apply flex flex-col justify-start min-h-screen;
        > header {
            @apply sticky top-0 z-10 w-full border-b border-ui-border;
            background: theme('colors.brand.primaryDark') linear-gradient(to bottom right, theme('colors.brand.primary'), theme('colors.brand.complement'));
            color: #FFF;
        }

        > main {
            @apply relative flex flex-wrap justify-start flex-1 w-full;
            background: var(--color-ui-text-background);
            @media sm {
                background: transparent;
            }
        }
    }

    > h1,
    > h2,
    > h3,
    > h4 {
        @apply leading-snug font-black mb-4 text-ui-typo;

        &:hover {
            a::before {
                @apply opacity-100;
            }
        }

        a {
            &::before {
                content: "#";
                margin-left: -1em;
                padding-right: 1em;
                @apply text-ui-primary absolute opacity-0 float-left;
            }
        }
    }

    .sidebar-container {
        @apply fixed px-4 pt-4 bg-black inset-x-0 bottom-0 w-full border-r border-ui-border overflow-y-auto transition-all z-40;
        max-width: 320px;
        transform: translateX(-100%);
        margin-top: 11px;

        &.sidebar-container--open {
            transform: translateX(0);
        }

        @screen lg {
            @apply w-1/4 mt-0 pt-12 px-0 bg-transparent top-0 bottom-auto inset-x-auto sticky z-0;
            margin-top: 0;
            transform: translateX(0);
        }
    }

    .article-content {
        background: var(--color-ui-text-background);
    }
}

html[embedded-docs] .default-layout {
    .default-layout__content > header,
    aside.sidebar-container,
    div.mobile-menu-icon {
        display: none !important;
    }

    .container {
        @apply max-w-3xl px-8;
    }
    .article-content {
        @apply pl-0 w-full;
    }
}
</style>
