<template>
    <Layout>
        <div class="pt-8 md:pt-16">
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center text-ui-primary mb-4">
                    <FullLogo :height="40"/>
                </div>
                <h1 class="text-xl lg:text-xl2 text-center">
                    Documentation &amp; Developer Portal
                </h1>
                <p class="text-lg mt-2 mb-10 lg:mb-4 font-medium text-center max-w-screen-lg text-fade">
                    How can we help you use Qualified?
                </p>
            </div>

            <div class="index-primary-links">
                <div v-for="link in primaryLinks"
                     :key="link.id">
                    <g-link :to="link.path">
                        <div class="link-icon">
                            <component v-bind:is="link.icon"></component>
                        </div>
                        <div class="link-details">
                            <h4 class="font-bold">{{ link.title }}</h4>
                            <p>{{ link.description }}</p>
                        </div>
                    </g-link>
                </div>
            </div>

            <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 lg:mt-0 lg:pt-12 border-top border-ui-border max-w-screen-sm"></div>

            <ul class="index-secondary-links">
                <li v-for="link in secondaryLinks"
                    :key="link.id">
                    <g-link :to="link.path"
                            :title="link.description"
                            class="flex items-center justify-center px-3 py-2 ml-auto font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform">
                        {{ link.title }}
                    </g-link>
                </li>
            </ul>

        </div>
    </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import FullLogo from '@/components/FullLogo';
import CreatingContentSectionGraphic from '@/components/section-graphics/CreatingContent';
import ForCandidatesSectionGraphic from '@/components/section-graphics/ForCandidates';
import ForTeamsSectionGraphic from '@/components/section-graphics/ForTeams';
import IntegrationsSectionGraphic from '@/components/section-graphics/Integrations';
import {MoonIcon, SearchIcon} from 'vue-feather-icons';

export default {
    components: {
        Logo,
        FullLogo,
        MoonIcon,
        SearchIcon,
        CreatingContentSectionGraphic,
        ForCandidatesSectionGraphic,
        ForTeamsSectionGraphic,
        IntegrationsSectionGraphic,
    },

    computed: {
        primaryLinks() {
            return [
                {
                    id: 'teams',
                    path: '/for-teams',
                    title: `I'm an Employer or Educator`,
                    description: 'If you are hiring or training developers, click here to learn more about how to use Qualified',
                    icon: ForTeamsSectionGraphic,
                },
                {
                    id: 'candidates',
                    path: '/for-candidates',
                    title: `I'm a Candidate or Student`,
                    description: 'If you are taking an assessment on Qualified, click here to learn about the platform',
                    icon: ForCandidatesSectionGraphic,
                },
                {
                    id: 'integrations',
                    path: '/integrations',
                    title: `I'm Integrating with Qualified`,
                    description: 'If you are integrating Qualified into another application, click here',
                    icon: IntegrationsSectionGraphic,
                },
                {
                    id: 'content',
                    path: '/creating-content',
                    title: `I'm Developing Assessments`,
                    description: 'If you are creating assessments with Qualified, click here to learn more',
                    icon: CreatingContentSectionGraphic,
                },
            ];
        },
        secondaryLinks() {
            return [
                {
                    id: 'languages',
                    path: '/reference/languages',
                    title: 'Language Reference',
                    description: 'Learn more about the supported languages and frameworks on Qualified',
                },
                // {
                //     id: 'changes',
                //     path: '/changes',
                //     title: 'Product Updates',
                //     description: 'Learn about new features, fixes, and other improvements',
                // },
                // {
                //     id: 'legal',
                //     path: '/legal',
                //     title: 'Legal Docs',
                //     description: 'Learn more about our privacy policy, terms of service, and GDPR',
                // },
            ];
        },
    },

    metaInfo() {
        const title = 'Qualified.io Documentation & Developer Portal';
        const description = `Complete documentation for Qualified.io's application, content development, API integration, and embedding.`;

        return {
            title: title,
            titleTemplate: '%s',
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
.home-links a {
    margin-right: 1rem;
}

.index-primary-links {
    text-align: center;
}

.index-primary-links > div a:hover h4,
.index-primary-links > div a:hover p {
    color: var(--color-ui-primary);
}

.index-primary-links > div + div {
    @apply mt-4;
}

.index-primary-links > div svg {
    max-width: 60vw;
    height: auto;
    margin: 0 auto;
}

@media (min-width: 500px) {
    .index-primary-links > div svg {
        max-width: 300px;
    }
}

.index-primary-links > div p {
    margin-bottom: 0;
}


.index-secondary-links {
    text-align: center;
}

.index-secondary-links > li > a:hover {
    @apply shadow-xl -translate-y-1;
}

.index-secondary-links > li + li {
    @apply mt-2;
}


@media (min-width: 768px) {
    .index-secondary-links {
        display: flex;
        justify-content: center;
    }

    .index-secondary-links > li {
        flex: 0 1 auto;
    }

    .index-secondary-links > li + li {
        @apply mt-0 ml-3;
    }

    .index-secondary-links > li > a {
        min-width: 10em;
    }
}

@media (min-width: 1024px) {
    .index-primary-links {
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        @apply mt-4 mx-auto;
    }

    .index-primary-links > div {
        flex: 1 1 50%;
        width: 50%;
    }

    .index-primary-links > div + div {
        @apply mt-0;
    }

    .index-primary-links > div a {
        display: flex;
        align-items: center;
        text-align: right;
        @apply mt-4 mb-4;
    }

    .index-primary-links > div a .link-details {
        flex: 1 1 60%;
    }

    .index-primary-links > div a .link-icon {
        flex: 1 1 40%;
    }

    .index-primary-links > div a .link-icon svg {
        width: 100%;
    }

    .index-primary-links > div:nth-child(odd) {
        @apply pr-8 border-r border-ui-border;
    }

    .index-primary-links > div:nth-child(even) {
        @apply pl-8;
    }

    .index-primary-links > div:nth-child(odd) a {
    }

    .index-primary-links > div:nth-child(even) a {
        text-align: left;
    }

    .index-primary-links > div:nth-child(odd) a .link-details {
        order: 1;
        @apply pr-6;
    }

    .index-primary-links > div:nth-child(even) a .link-details {
        order: 2;
        @apply pl-6;
    }

    .index-primary-links > div:nth-child(odd) a .link-icon {
        order: 2;
    }

    .index-primary-links > div:nth-child(even) a .link-icon {
        order: 1;
    }

    .index-secondary-links > li + li {
        @apply ml-6;
    }

    .index-secondary-links > li > a {
        min-width: 14em;
    }
}

</style>
