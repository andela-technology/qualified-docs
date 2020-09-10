module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
                serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
                mono: ['Menlo', 'Monaco', 'Consolas', "Courier New", 'monospace'],
            },
            colors: {
                brand: {
                    primary: '#6ABE79',
                    primaryDark: '#4BB05D',
                    primaryDarker: '#448844',
                    primaryLight: '#86CA91',
                    primaryLighter: '#BDE1C4',

                    // Main complement/accent color
                    complement: '#28A27A',
                    complementBg: '#F2F6F7',
                    complementBgDark: '#E6ECEE',
                    complementBgDarker: '#E0E7EA',
                    complementXlight: '#dae2e5',
                    complementMlight: '#90a2aa',
                    complementLight: '#71828A',
                    complementMedium: '#535F72',
                    complementDark: '#262F34',

                    // Pop color, only used on landing, USE SPARINGLY
                    popLight: '#f7824e',
                    popMedium: '#ee622d',
                    popDark: '#d73c38',

                    // alert colors
                    info: '#498DB1',
                    success: '#4BB05D',
                    warning: '#EEB854',
                    danger: '#B63D4C',

                    // grays & UI colors
                    // Note: Most of this has been replaced with @brandComplement colors for new work
                    lighter: '#fcfcfc',
                    light: '#f9f9f9',
                    lightMed: '#f0f0f0',
                    lightDark: '#ebebeb',
                    lightDarker: '#e8e8e8',
                    dark: '#353536',
                    darkText: '#DEDEDE',
                    darker: '#29292a', // used for complementing a darkened UI
                    black: '#262626',
                    lightAccent: '#CCC',
                    accent: '#AAAAAA',
                    gray: '#8E8E8E',
                    grayDark: '#6A6A6A',
                },
                ui: {
                    textBackground: 'var(--color-ui-text-background)',
                    background: 'var(--color-ui-background)',
                    sidebar: 'var(--color-ui-sidebar)',
                    typo: 'var(--color-ui-typo)',
                    primary: 'var(--color-ui-primary)',
                    border: 'var(--color-ui-border)',
                },
            },
            spacing: {
                sm: '24rem',
            },
            screens: {
                xxl: '1400px',
            },
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
    variants: {},
    plugins: [],
};
