import styled from 'styled-components'
import {CgMenuLeft} from 'react-icons/cg'
import {AiOutlinePlus} from 'react-icons/ai'

export const Container = styled.div`
    height: 134px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    > div{
        width: 474px;
        height: 53px;
        border-radius: 14px;
        background: ${props => props.theme.colors.gradient2};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;

        >input{
            background:  ${props => props.theme.colors.background};
            width: 100%;
            height: 100%;
            border-radius: 14px;
            border: none;
            outline: none;
            color: white;
            text-align: center;
            font-size: 21px;
            font: ${props => props.theme.layout.primaryFont};

            ::placeholder{
                color: rgba(255, 255, 255, 0.56);
                text-align: center;
                font-size: 21px;
                font: ${props => props.theme.layout.primaryFont};
                
            
            }

           
            :focus{
                
                ::placeholder{
                    transition: 0.2s;
                    opacity: 0
                }
            }
        }
    }
`

export const MenuBar = styled(CgMenuLeft)`
    width: 35px;
    color: white;
    background: linear-gradient(113.04deg, #C3562C -0.7%, #D42FA2 107.71%);
    border-radius: 3px;
`

export const AddUser = styled(AiOutlinePlus)`
    width: 35px;
    color: white;
    background: linear-gradient(113.04deg, #C3562C -0.7%, #D42FA2 107.71%);
    border-radius: 3px;
`