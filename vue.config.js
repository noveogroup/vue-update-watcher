module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/scss/element-variables.scss";
        `
      }
    }
  },
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: './src/background/'
        }
      }
    }
  }
}
