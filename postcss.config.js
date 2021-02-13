module.exports = {
  plugins: {
    // ...
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList:['ignore','tar-bar','bar-item'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude:[/TarBar/]
    }
  }
}