import React from 'react';
import { Container, Form, BackgroundImg, Fields } from '../../styles/pages/CreateUser';
import newUserImage from '../../assets/new-user.png'
import {FiGithub, FiMail} from 'react-icons/fi'
import {BsPerson, BsCardText, BsWallet} from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

const CreateUser: React.FC = () => {

    return(
        <Container>
            <Form>
                <BackgroundImg src={newUserImage}/>
                <Fields>
                    <h1>Add new user</h1>
                    <div id="line"></div>

                    <form action="">
                        <div>
                            <BsPerson size={39} fill="#783bd3" />
                            <input type="text" name="name" placeholder="Name"/>
                        </div>
                        <div>
                            <GoMail size={38} color="#783bd3" />
                            <input type="text" name="email" placeholder="Mail"/>
                        </div>
                        <div>
                            <BsWallet size={39} fill="#783bd3"/>
                            <input type="text" name="cpf" placeholder="CPF"/>
                        </div>
                        <div>
                            <FiGithub size={39} color="#783bd3"/>
                            <input type="text" name="github" placeholder="GitHub"/>
                        </div>
                        <div>
                            <BsCardText size={39} fill="#783bd3"/>
                            <input type="text" name="about" placeholder="About you"/>
                        </div>

                        <button type="submit">Create</button>
                    </form>
                </Fields>
            </Form>
        </Container>
    )
}

export default CreateUser


// const Img = styled.img`
//     src: url(${props => props.src});
// `

// <Img src="http://some url to a picture.jpg" />