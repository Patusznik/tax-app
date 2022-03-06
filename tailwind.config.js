const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: false, // disable purge in dev
  },

  theme: {
    extend: {
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        // white: "#ffffff",
        // darkGray: "#27272a",
        // primary: "#123f69",
        // orange: "#f3a511",
        // blue: "#1d4ed8",
        blue: {
          30: "#123f69",
        },
      },
    },
  },
};
