import React from 'react'; // Импортируем React
import ReactDOM from 'react-dom'; // Импортируем ReactDOM
import App from './App'; // Импортируем главный компонент вашего приложения
import './styles.css'; // Импортируем CSS стили

// Рендерим компонент App в корневой элемент HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Предполагается, что в index.html есть элемент с id="root"
);
