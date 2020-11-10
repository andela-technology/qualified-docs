// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Qualified.io Docs',
    icon: {
        favicon: './src/assets/favicon.png',
        touchicon: './src/assets/favicon.png',
    },
    siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://docs.qualified.io'),
    settings: {
        web: process.env.URL_WEB || 'https://www.qualified.io',
        github: process.env.URL_GITHUB || 'https://github.com/qualified/qualified-docs'
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-import'),
                    require('tailwindcss'),
                    require('postcss-nested'), // or require('postcss-nesting')
                    require('autoprefixer'),
                ]
            }
        }
    },
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                baseDir: './content',
                path: '**/*.md',
                typeName: 'MarkdownPage',
                template: './src/templates/MarkdownPage.vue',
                remark: {
                    externalLinksTarget: "_blank",
                    externalLinksRel: ["nofollow", "noopener", "noreferrer"],
                    anchorClassName: "icon icon-link",
                    plugins: [
                        "gridsome-plugin-remark-container",
                        "@gridsome/remark-prismjs",
                        "gridsome-remark-figure-caption"
                    ]
                }
            },
        },
        {
            use: 'gridsome-plugin-tailwindcss',
            options: {
                tailwindConfig: './tailwind.config.js',
                purgeConfig: {
                    // Prevent purging of prism classes.
                    whitelistPatternsChildren: [
                        /token$/,
                    ],
                },
            },
        },

        {
            use: '@gridsome/plugin-google-analytics',
            options: {
                id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9'),
            },
        },

        {
            use: '@gridsome/plugin-sitemap',
            options: {},
        },

    ],
};
