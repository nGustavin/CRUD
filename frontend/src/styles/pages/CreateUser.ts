import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.colors.gradient3} blur(10px);
  
`

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 85%;
  overflow: hidden;
  background: rgb(255,255,255);
  background: linear-gradient(144deg, rgba(255,255,255,1) 60%, rgba(230,230,230,1) 100%);
  border-radius: ${props => props.theme.layout.radius};
  /* padding: 20px; */
`

export const BackgroundImg = styled.img`
  src: url(${props => props.src});
  width: 50%;
  /* margin: 0px 0px 0px -20px; */
`

export const Fields = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;


  >h1{
    color: #783bd3;
    font-weight: 600;
    font-size: 45px;
    font-family: 'Raleway', sans-serif;
    margin: 120px 0px 80px 0px;
  }

  #line{
    position: absolute;
    width: 130px;
    height: 3px;
    background: ${props => props.theme.colors.gradient1};
    top: 245px;
    left: 1180px;
  }

  > form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;


    >div{
      border-radius: ${props => props.theme.layout.radius};
      padding: 0px 0px 0px 10px;
      background: white;
      background: #eae5ea;
      width: 350px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      

      > input{
        background: #eae5ea;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        transition: 0.2s;
        color: rgba(0, 0, 0, 0.6);
        font-size: 16px;
        padding: 0px 0px 0px 10px;
        border-left: 4px solid rgba(255, 255, 255, 1);
        margin: 0px 0px 0px 10px;
        border-radius: 0px 14px 14px 0px;
        /* border-radius: 14px; */
        

        
        

        ::placeholder{
          color: rgba(0, 0, 0, 0.3);
        }

        :focus{
        box-shadow: inset 0px 0px 0px 2px #783bd3;
      }


        
      }
    }
    > button{
          width: 320px;
          height:45px;
          background: ${props => props.theme.colors.gradient3};
          border: none;
          border-radius: 14px;
          color: white;
          font-size: 20px;
          font-family: 'Raleway', sans-serif;
          transition: 0.4s;
          :hover{
            box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.3);
            cursor: pointer;
          }

      }

  }
`


export const GoBack = styled.button`
  background: none;
  position: absolute;
  left: 40px;
  top: 40px;
  height: 40px;
  width: 70px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  cursor: pointer;
`

/* position: "absolute", width:"40px", left:"20px", top: "20px", height:"20px"/*  */ 