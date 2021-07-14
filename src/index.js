import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from "./store/store"


const GlobalStyle = createGlobalStyle`
    html, body {
      padding : 0;
      margin : 0;
      scroll-behavior: smooth;
      font-family : 'Noto Sans KR';
      background-color: rgb(248, 249, 250);
      @media (max-width: 1200px) {
        font-size: 14px
      }
      @media (max-width: 1024px) {
        font-size: 10px
      }
      @media (max-width: 768px) {
        font-size: 8px
      }
    }
    
`



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
