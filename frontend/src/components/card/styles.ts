import styled from 'styled-components'
import { FiGithub, FiMail, FiEdit2, FiX } from 'react-icons/fi'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.layout.radius};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`
export const Top = styled.div`
    width: 100%;
    height: 101px;
    background: ${props => props.theme.colors.gradient2};
    box-shadow: ${props => props.theme.layout.boxShadow};
    border-radius: ${props => props.theme.layout.radius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
`
export const GitHub = styled(FiGithub)`
    color: white;


`
export const Email = styled(FiMail)`
    color: white;

`
export const ProfilePhoto = styled.div`
    background: #F9F9F9;
    width: 140px;
    height: 140px;
    border-radius: 70px;
    border: 12px solid #F9F9F9;
    margin-top: -120px;

    >img{
        width: 100%;
        border-radius: 70px;
        
    }
`
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* background: green; */
    margin-top: -80px;
    height: 150px;
    width: 100%;

    > h1{
        font-family: Roboto Mono;
        font-style: normal;
        font-weight: 300;
        font-size: 27px;
        line-height: 36px;
        color: ${props => props.theme.colors.title}
    }

    > span {
        font-family: Roboto Mono;
        font-style: normal;
        font-weight: normal;
        font-size: 19px;
        line-height: 25px;
        color: ${props => props.theme.colors.tertiary}
    }

    >div{
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        padding: 0px 0px 15px 0px;

        >p{
            text-align: center;
            display: flex;
            align-items: flex-end;
            width: 500px;
            height: 100%;
            /* padding: 15px 0px; */
            font-family: Roboto Mono;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 138.5%;

        }
    }
`
export const Edit = styled(FiEdit2)`
    cursor: pointer;
`
export const Delete = styled(FiX)`
    cursor: pointer;
`
