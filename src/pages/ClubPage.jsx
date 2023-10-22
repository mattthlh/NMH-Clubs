import React, { useState, useEffect } from 'react'

const ClubPage = () => {
	const CardContainer = (props) => {
		return (
			<div className='flex flex-row bg-clip-border rounded-md border mt-4 py-2 pl-2 pr-1'>
				{props.children}
			</div>
		)
	}

	const FiltersComponent = ({ clubFilters }) => {
		return (
			<div className='flex flex-row flex-wrap'>
				This needs to be fixed*
				{clubFilters.map((filter) => {
					return (
						<div className='border rounded-full bg-cyan-50 text-slate-700 text-center text-sm pl-2 pr-2 mr-1'>
							{filter}
						</div>
					)
				})}
			</div>
		)
	}

	return (
		<div className='h-screen w-screen relative'>
			<div className='flex flex-row gap-8 m-4'>
				<div className='flex-grow'>
					<CardContainer>
						<div>
							<h2 className='text-xl font-bold'>Put clubID here? Titell?</h2>
							{/* <FiltersComponent clubFilters={exampleClub.tags} /> */}
						</div>
					</CardContainer>
					<CardContainer>
						<h3 className='text-lg'> Description here </h3>
					</CardContainer>
				</div>
				<div>
					<CardContainer>{'Basic info \n and some other stuff'}</CardContainer>
					<CardContainer>{'About us \n and some other stuff'}</CardContainer>
				</div>
			</div>
		</div>
	)
}

export default ClubPage
