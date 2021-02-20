import React from 'react';

import {Container, CardContainer} from '../../styles/pages/home'
import Card from '../../components/card'
import Header from '../../components/header'

function Home(){
    return(
        <Container>
          <Header/>
          <CardContainer>
            <Card/>
          </CardContainer>
        </Container>
    )
}

export default Home