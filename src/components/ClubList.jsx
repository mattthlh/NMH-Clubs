import React from 'react'
import { Link } from 'react-router-dom'

const ClubList = ({ clubInfo, searchValue, activeFilters }) => {
	// Individual card component
	const ClubCard = ({ info }) => {
		return (
			<div
				className='border-t-2 border-NMHBlue
				rounded m-3 p-3 pb-2 shadow-lg hover:scale-105 hover:rotate-1'>
				{/* Link is a React Router element that navigates to a different url when clicked. So this one is going to clubs/[id]  */}
				<Link to={'/clubs/' + info.name} state={info}>
					<h1 className='font-bold text-lg'> {info.name} </h1>
					<p className='text-slate-600 text-base mb-2'> {info.description} </p>
					{/* <div className="flex flex-row justify-start gap-2">
            {info.filters.map((ele, index) => (
              <p className="rounded-full bg-cyan-300 pl-2 pr-2 text-xs" key={index}>
                {ele}
              </p>
            ))}
          </div> */}
				</Link>
			</div>
		)
	}

	return (
		<div className='max-w-screen-lg mx-auto w-full h-full grid md:grid-cols-2 m-6'>
			{clubInfo.map((card, index) => {
				const title = card.name.toLowerCase()
				const value = searchValue.toLowerCase()

				// Bit confusing logic, but essentially checks whether the searchValue is contained in the title of a club, then checks the active filters to see whether they match as well (are no active filters, then it displays all)
				if (title.match(value)) {
					if (activeFilters === undefined || activeFilters.length == 0) {
						return <ClubCard info={card} key={index} />
					} else {
						card.filters.map((filter) => {
							if (activeFilters.some((item) => item === filter))
								return <ClubCard info={card} key={index} />
						})
					}
				}
			})}
		</div>
	)
}

export default ClubList
