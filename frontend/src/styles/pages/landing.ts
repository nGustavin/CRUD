import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

export const CardContainer = styled.div`
    
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows:  349px;
    grid-gap: 10px;
    padding: 0px 15px;

    
`