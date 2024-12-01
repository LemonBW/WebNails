const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Очищает папку dist перед каждой сборкой
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Для обработки JavaScript файлов
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Для обработки CSS файлов
        use: [
          'style-loader', // Добавляет CSS в DOM
          'css-loader',   // Интерпретирует @import и url() как import/require()
          'postcss-loader', // Обрабатывает CSS с помощью PostCSS
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Путь к статическим файлам
    },
    port: 8080, // Порт, на котором будет запущен сервер
    open: true, // Открывает браузер автоматически
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Укажите путь к вашему index.html
      filename: 'index.html', // Имя выходного файла
    }),
  ],
};
