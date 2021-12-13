import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ContainerButtons from '../../Components/ContainerButtons/ContainerButtons'

import StateContext from '../../Context/AppContext'

import scrollTop from '../../helpers/scrollTop'

import {
	Container,
	Image,
	Item,
	TitleItem
} from '../../shared/utils'
import {
	ContainerTechnologies,
	ContentDetails,
	TextDetails
} from './PortfolioDetails.styles'

const PortfolioDetails = () => {

	const { state } = useContext(StateContext)
	const { projectDetail } = useParams()

	const project = state.projects.find((project) => project.nameProject === projectDetail)

	useEffect(() => {
		scrollTop()
	}, [])

	return (
		<Container className="fadeIn">
			<ContentDetails>
				<TitleItem>
					<p><u>{project.nameProject}</u></p>
				</TitleItem>
				<Image src={project.preview} alt="image_preview" /> 
				<ContainerButtons 
					nameProject={project.nameProject}
					liveUrl={project.liveUrl}
					repository={project.repository}
					isDetails
				/>
				<TextDetails>
					<p><u>Description</u></p>
					<p>{project.description}</p>
					<p><u>Technologies</u></p>
					<ContainerTechnologies>
						{project.technologiesProject?.map((technology) =>  (
							<Item key={technology.tag}>
								<img
									src={technology.icon}
									alt={technology.tag}
								/>
								<p>{technology.tag}</p>
							</Item>	
						))}
					</ContainerTechnologies>	
					<p><u>About</u></p>
					<p>{project.specifications}</p>	
				</TextDetails>
			</ContentDetails>
		</Container>
	)
}

export default PortfolioDetails
