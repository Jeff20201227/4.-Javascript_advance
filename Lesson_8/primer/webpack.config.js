module.exports = {
    entry: './public/js/comp.js',
    output: {
        path: 'D:\Geekbrains_homework\4.Javascript_advance\Lesson_8\primer\public\js',
        filename: './components.js'
    },
    module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  }
}