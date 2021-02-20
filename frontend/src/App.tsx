import React from 'react';
import theme from './styles/theme'
import styled, { ThemeProvider } from 'styled-components'

import Card from './components/card'
import Header from './components/header'
import GlobalStyle from './styles/global';


import {Container, CardContainer} from './styles/pages/landing'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Container>
          <Header/>
          <CardContainer>
            <Card/>
          </CardContainer>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
