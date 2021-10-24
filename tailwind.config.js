module.exports = {
  important: true,
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  // purge: {
  //   content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  //   // These options are passed through directly to PurgeCSS
  // },
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({}),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
