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
    fontFamily: {
      myFont: ["AAsianHiro-2O17X.otf"],
    },
    extend: {
      backgroundImage: (theme) => ({}),
      dropShadow: ["hover", "focus"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
      borderWidth: ["hover"],
    },
    display: ["responsive", "group-hover", "group-focus"],
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
