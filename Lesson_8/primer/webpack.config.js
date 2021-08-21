module.exports = {
    entry: './public/js/comp.js',
    output: {
        path: 'D:\/Geekbrains_homework\/4_javascript_advance\/Lesson_8\/primer\/public\/js',
        filename: './components.js'
  },
    watchOptions: {
            aggregateTimeout: 500,
            poll: 1000 // порверяем изменения раз в секунду
        },
    module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
}