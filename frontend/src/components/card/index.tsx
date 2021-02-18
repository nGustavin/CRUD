import React from 'react';

import {
	Container,
	Top,
	GitHub,
	Email,
	ProfilePhoto,
	Info,
	Edit,
	Delete } from './styles'

const Card: React.FC = () => {
	return(
		<Container>
			<Top>
				<a href="https://github.com/ngustavin">
					<GitHub size="32"/>
				</a>
				<a href="https://github.com/ngustavin">
					<Email size="32"/>
				</a>
			</Top>
		<ProfilePhoto>
			<img src="https://avatars.githubusercontent.com/u/37788848?s=460&u=db8029c50f9510f7384752c7f7fee516aee2459b&v=4"/>
		</ProfilePhoto>
		<Info>
			<h1>Gustavo Fernandes</h1>
			<span>Software Engineer</span>
			<div>
				<Edit size="20" />
				<p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
				</p>
				<Delete size="20"/>
			</div>
		</Info>
		</Container>
		)
	}
	
	export default Card