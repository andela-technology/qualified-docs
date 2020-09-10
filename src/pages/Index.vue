<template>
    <Layout>
        <div class="pt-8 md:pt-16">
            <div class="flex flex-col items-center">
                <div class="flex flex-col items-center mb-2 text-ui-primary">
                    <FullLogo :height="40"/>
                </div>
                <h1 class="text-2xl text-center">
                    Documentation &amp; Developer Portal
                </h1>
                <p class="text-xl font-medium text-center max-w-screen-lg">
                    Find help and support for all aspects of Qualified.io, including the main application,
                    content development, integrating with the API, and embedding Qualified in your site.
                </p>

                <div class="flex justify-center mt-8">
                    <g-link to="/docs/"
                        class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
                        Get started
                        <ArrowRightCircleIcon class="ml-4" size="1x"/>
                    </g-link>
                </div>
            </div>

            <div class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"></div>

        </div>
    </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import FullLogo from '@/components/FullLogo';
import { ArrowRightCircleIcon, CodeIcon, MoonIcon, SearchIcon, ZapIcon } from 'vue-feather-icons';

export default {
    components: {
        Logo,
        FullLogo,
        ArrowRightCircleIcon,
        ZapIcon,
        CodeIcon,
        MoonIcon,
        SearchIcon,
    },

    metaInfo() {
        const title = 'Qualified.io Documentation & Developer Portal';
        const description = `Complete documentation for Qualified.io's application, content development, API integration, and embedding.`;

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
.home-links a {
    margin-right: 1rem;
}
</style>
