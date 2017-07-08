module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-custom-media': {
      extensions: {
        '--phone': '(min-width: 544px)',
        '--tablet': '(min-width: 768px)',
        '--desktop': '(min-width: 992px)',
        '--large-desktop': '(min-width: 1200px)',
      }
    },
    'postcss-nested': {},
  }
};