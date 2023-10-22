import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ClubPage = () => {
	const clubInfo = useLocation().state
	const title = clubInfo.name
	const description = clubInfo.description
	const contactEmails = clubInfo.contactEmails

	const CardContainer = (props) => {
		return (
			<div className='flex flex-col bg-clip-border rounded-md border mt-4 py-2 pl-2 pr-1'>
				{props.children}
			</div>
		)
	}

	// const FiltersComponent = ({ clubFilters }) => {
	// 	return (
	// 		<div className='flex flex-row flex-wrap'>
	// 			This needs to be fixed*
	// 			{clubFilters.map((filter) => {
	// 				return (
	// 					<div className='border rounded-full bg-cyan-50 text-slate-700 text-center text-sm pl-2 pr-2 mr-1'>
	// 						{filter}
	// 					</div>
	// 				)
	// 			})}
	// 		</div>
	// 	)
	// }

	return (
		<div className='h-screen w-screen relative'>
			<div className='flex flex-row gap-8 m-4 mx-10'>
				<div className='flex-grow'>
					<CardContainer>
						<h2 className='text-4xl font-bold mb-4'> {title}</h2>
						{/* <FiltersComponent clubFilters={exampleClub.tags} /> */}
						<p> {description} </p>
					</CardContainer>
				</div>
				<CardContainer>
					<h3 className='text-2xl font-bold mb-2'> Contacts </h3>
					{contactEmails.map((email, index) => {
						return (
							<p className='underline text-sky-300' key={index}>
								{' '}
								{email}{' '}
							</p>
						)
					})}
				</CardContainer>
			</div>
		</div>
	)
}

export default ClubPage
