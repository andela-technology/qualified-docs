<template>
    <a @click="handleClick" aria-label="Toggle Darkmode" title="Toggle Darkmode" class="toggle-dark-mode">
        <slot :dark="isDarkMode"/>
    </a>
</template>

<script>
export const LIGHTS_OUT = 'lights-out';

export const getThemeFromURL = () => {
    const match = process.isClient && (window.location.search || '').match(/\btheme=(light|dark)\b/);
    return match && match[1];
}


// try to set theme before loading to avoid content flash
const _hasInStorage = () => localStorage.getItem(LIGHTS_OUT) !== null;
const _getFromStorage = () => localStorage.getItem(LIGHTS_OUT) === 'true' ? true : false;
const _detectPreferred = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

let darkMode = false;
if(process.isClient) {
    const urlTheme = getThemeFromURL();
    if(urlTheme) {
        darkMode = urlTheme === 'dark';
    } else if(_hasInStorage()) {
        darkMode = _getFromStorage();
    } else if(process.isClient && window.matchMedia) {
        darkMode = _detectPreferred();
    }
    document.documentElement.toggleAttribute(LIGHTS_OUT, darkMode);
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

        writeToStorage(prefersDark) {
            localStorage.setItem(LIGHTS_OUT, prefersDark ? 'true' : 'false');
        },
    },

    mounted() {
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
