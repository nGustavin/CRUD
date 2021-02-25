import React, { useState } from 'react';
import { BsArrowLeft, BsCardText, BsPerson, BsWallet } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
import newUserImage from '../../assets/new-user.png';
import api from '../../services/api';
import { BackgroundImg, Container, Fields, Form, GoBack } from '../../styles/pages/CreateUser';


const CreateUser: React.FC = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [github, setGithub] = useState('')
    const [about, setAbout] = useState('')
    const goBack = useHistory().goBack
    
    async function handleSubmit(){
        const data = new FormData()

        data.append('name', name)
        data.append('email', email)
        data.append('cpf', cpf)
        data.append('github', github)
        data.append('about', about)

        
        console.log({ name, email, cpf, github, about});
        
        await api.post('/users', {name, email, cpf, github, about})

        
    }
    

    return(
        <Container>
            <GoBack onClick={goBack}>
                <BsArrowLeft size={49} fill="white"/>
            </GoBack>

            <Form>
                <BackgroundImg src={newUserImage}/>
                <Fields>
                    <h1>Add new user</h1>
                    <div id="line"></div>

                    <form onSubmit={handleSubmit}>
                        <div>

                            <BsPerson size={39} fill="#783bd3" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                autoComplete="off"
                            />

                        </div>
                        <div>

                            <GoMail size={38} color="#783bd3" />
                            <input
                                type="text"
                                name="email"
                                placeholder="Mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoComplete="off"  
                            />

                        </div>
                        <div>

                            <BsWallet size={39} fill="#783bd3"/>
                            <input
                                type="text"
                                name="cpf"
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                                autoComplete="off"   
                            />

                        </div>
                        <div>

                            <FiGithub size={39} color="#783bd3"/>
                            <input
                                type="text"
                                name="github"
                                placeholder="GitHub"
                                value={github}
                                onChange={e => setGithub(e.target.value)}
                                autoComplete="off"
                            />

                        </div>
                        <div>

                            <BsCardText size={39} fill="#783bd3"/>
                            <input
                                type="text"
                                name="about"
                                placeholder="About you"
                                value={about}
                                onChange={e => setAbout(e.target.value)}
                                autoComplete="off"
                            />

                        </div>

                        <button type="submit" onClick={goBack}>Create</button>
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