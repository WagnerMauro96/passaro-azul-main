module.exports = {
  defaultLocale: "pt",
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
  locales: ["pt", "en", "fr"],
  pages: {
    "*": ["components", "errors", "layout"],
    "/": ["home"],
  },
};
