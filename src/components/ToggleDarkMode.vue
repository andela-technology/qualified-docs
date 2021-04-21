<template>
    <a @click="handleClick" aria-label="Toggle Darkmode" title="Toggle Darkmode" class="toggle-dark-mode">
        <slot :dark="isDarkMode"/>
    </a>
</template>

<script>
export const LIGHTS_OUT = 'lights-out';

export const getThemeFromURL = () => {
    const match = (window.location.search || '').match(/\btheme=(light|dark)\b/);
    return match && match[1];
}

export const setThemeFromURL = () => {
    const theme = getThemeFromURL();
    if(theme) {
        document.documentElement.toggleAttribute(LIGHTS_OUT,  theme === 'dark');
    }
}

export default {
    data() {
        return {
            isDarkMode: false,
        };
    },

    methods: {
        handleClick() {
            const hasDarkMode = document.documentElement.hasAttribute(LIGHTS_OUT);

            // Toggle dark mode on click.
            return this.toggleDarkMode(!hasDarkMode);
        },

        toggleDarkMode(shouldBeDark) {
            document.documentElement.toggleAttribute(LIGHTS_OUT, shouldBeDark);

            this.isDarkMode = shouldBeDark;

            this.writeToStorage(shouldBeDark);

            return shouldBeDark;
        },

        detectPreferred() {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        },

        hasInStorage() {
            const check = localStorage.getItem(LIGHTS_OUT);

            return check !== null;
        },

        writeToStorage(prefersDark) {
            localStorage.setItem(LIGHTS_OUT, prefersDark ? 'true' : 'false');
        },

        getFromStorage() {
            return localStorage.getItem(LIGHTS_OUT) === 'true' ? true : false;
        },
    },

    mounted() {
        let darkMode = false;
        const urlTheme = getThemeFromURL();
        if(urlTheme) {
            darkMode = urlTheme === 'dark';
        } else if(this.hasInStorage()) {
            darkMode = this.getFromStorage();
        } else if(process.isClient && window.matchMedia) {
            darkMode = this.detectPreferred();
        }
        this.toggleDarkMode(darkMode)
    },
};
</script>

<style>
    .toggle-dark-mode {
        cursor: pointer;
        &:focus { outline: none; }
    }
</style>
