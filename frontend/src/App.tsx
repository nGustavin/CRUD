import React from 'react';
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'


import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Routes/>
      </ThemeProvider>
    </div>
  );
}

export default App;
