const path = require('path');

module.exports = {
  mode: 'development', // Режим сборки
  entry: './src/index.js', // Точка входа приложения
  output: { // Настройка выходного файла
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devtool: 'source-map', // Подключаем карту исходников
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true
  },
};