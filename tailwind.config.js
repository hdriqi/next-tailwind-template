module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    content: ["./components/**/*.js", "./pages/**/*.js"],
  },
  corePlugins: {
    fontFamily: false
  },
  theme: {}
}