<template>
    <div class="layout-header">
        <div class="container">
            <div class="layout-header__content">
                <div class="layout-header__left-links">
                    <a :href="settings.web"
                       target="_self"
                       class="flex items-center"
                       title="Qualified.io Home"
                       rel="noopener noreferrer"
                    >
                        <Logo :width="40"/>
                    </a>

                </div>

                <div class="w-full px-2 sm:px-4 max-w-screen-xs">
                    <ClientOnly>
                        <Search/>
                    </ClientOnly>
                </div>

                <div class="layout-header__right-links">
                    <g-link
                        to="/"
                        class="hidden sm:flex items-center p-1 font-medium nav-link docs-home-link text-white hover:text-brand-primaryLighter whitespace-no-wrap"
                    >
                        <BookOpenIcon size="1.5x" class="flex-initial"/>
                    </g-link>
                    <a v-if="settings.github" :href="settings.github" class="hidden ml-3 sm-block text-white"
                       target="_blank"
                       rel="noopener noreferrer" title="Github" name="Github">
                        <GithubIcon size="1.5x"/>
                    </a>

                    <ToggleDarkMode class="ml-2 sm:ml-8">
                        <template slot="default" slot-scope="{ dark }">
                            <MoonIcon v-if="dark" size="1.5x"/>
                            <SunIcon v-else size="1.5x"/>
                        </template>
                    </ToggleDarkMode>

                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from '@/components/ToggleDarkMode';
import Logo from '@/components/Logo';
import {BookOpenIcon, GithubIcon, GlobeIcon, MoonIcon, SunIcon} from 'vue-feather-icons';

const Search = () => import(/* webpackChunkName: "search" */ '@/components/Search').catch(error => console.warn(error));

export default {
    components: {
        Logo,
        Search,
        ToggleDarkMode,
        SunIcon,
        MoonIcon,
        GlobeIcon,
        GithubIcon,
        BookOpenIcon,
    },

    computed: {
        meta() {
            return this.$static.metadata;
        },
        settings() {
            return this.meta.settings;
        },
    },
};
</script>

<style>
.layout-header {
    @apply py-2;

    .layout-header__content {
        @apply flex items-center justify-between mx-2;

        @media sm {
            @apply -mx-4;
        }
    }

    .layout-header__left-links {
        @apply flex flex-row mr-2 -ml-2;

        @media sm {
            @apply ml-0;
        }
    }

    .layout-header__right-links {
        @apply flex items-center justify-end;
    }

    a,
    svg:not(.feather-search) {
        color: #FFF;

        &:hover {
            @apply text-brand-primaryLighter;
            svg {
                @apply text-brand-primaryLighter;
            }
        }
        
        :focus { outline: none; }
    }

}

html[lights-out] header {
    background: theme('colors.brand.primaryDarker') linear-gradient(to bottom right, theme('colors.brand.primaryDark'), theme('colors.brand.complement'));
}
</style>
