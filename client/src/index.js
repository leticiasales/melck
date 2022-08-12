import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ptBR } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#053856' },
      secondary: { main: '#013859' },
      tertiary: { main: '#F7931E' },
    },
  },
  ptBR,
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>;
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
