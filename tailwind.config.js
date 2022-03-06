const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ["./src/App.svelte"],
    enabled: production, // disable purge in dev
  },

  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      white: "#ffffff",
      "dark-gray": "#27272a",
      primary: "#123f69",
      orange: "#f3a511",
    },
  },
};
