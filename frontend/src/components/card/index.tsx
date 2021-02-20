import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
	Container,
	Top,
	GitHub,
	Email,
	ProfilePhoto,
	Info,
	Edit,
	Delete } from './styles'


interface User {
	id: string;
	name: string;
	email: string;
	cpf: number;
	about: string;
	github: string
}

const Card: Function = (): JSX.Element[] => {

	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		api.get('users').then(response => {
			setUsers(response.data)
		})
	}, [])


	function deleteUser(id: string) {
		api.delete(`users/${id}`)
		setUsers(users.filter(note => note.id !== id))
	
	}
		
	

	return users.map(user => { 
		return(
		<Container key={user.id}>
			<Top>
				<a href={`https://github.com/${user.github}`}>
					<GitHub size="32"/>
				</a>
				<a href={`https://${user.email}`}>
					<Email size="32"/>
				</a>
			</Top>
		<ProfilePhoto>
			<img src={`https://github.com/${user.github}.png`}/>
		</ProfilePhoto>
		<Info>
			<h1>{user.name}</h1>
			<span>Software Engineer</span>
			<div>
				<Edit size="20" />
				<p>
					{user.about}
				</p>
				<Delete size="20" onClick={() => {deleteUser(user.id)}}/>
			</div>
		</Info>
		</Container>
		)
	})
	}
	

	export default Card