<template>
  <a
    @click="handleClick"
    aria-label="Toggle Darkmode"
    title="Toggle Darkmode"
    class="toggle-dark-mode"
  >
    <slot :dark="isDarkMode" />
  </a>
</template>

<script>
export const LIGHTS_OUT = "lights-out";

export const getThemeFromURL = () =>
  process.isClient &&
  (window.location.search || "").match(/\btheme=(light|dark)\b/)?.[1];

const _localStorageEnabled = () => {
  try {
    localStorage.getItem(LIGHTS_OUT);
    return true;
  } catch (err) {
    console.warn(err);
    return false;
  }
};

const _hasInStorage = () => localStorage.getItem(LIGHTS_OUT) !== null;

const _getFromStorage = () => localStorage.getItem(LIGHTS_OUT) === "true";

const _detectPreferred = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const _setDarkMode = () => {
  if (!process.isClient) {
    return;
  }

  const urlTheme = getThemeFromURL();

  if (urlTheme) {
    darkMode = urlTheme === "dark";
  } else if (_localStorageEnabled() && _hasInStorage()) {
    darkMode = _getFromStorage();
  } else if (window.matchMedia) {
    darkMode = _detectPreferred();
  }

  document.documentElement.toggleAttribute(LIGHTS_OUT, darkMode);
};

// try to set theme before loading to avoid content flash
let darkMode = false;
_setDarkMode();

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

      if (_localStorageEnabled()) {
        this.writeToStorage(shouldBeDark);
      }

      return shouldBeDark;
    },

    writeToStorage(prefersDark) {
      localStorage.setItem(LIGHTS_OUT, prefersDark ? "true" : "false");
    },
  },

  mounted() {
    this.toggleDarkMode(darkMode);
  },
};
</script>

<style>
.toggle-dark-mode {
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
</style>
