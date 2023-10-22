import React from 'react'
import { Link } from 'react-router-dom'

const ClubList = ({ clubInfo, searchValue, activeFilters }) => {
	// Individual card component
	const ClubCard = ({ info }) => {
		console.log(info)
		return (
			<div
				className='border border-rose-300
				rounded bg-sky-50 m-3 p-3 pb-2'>
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
		<div className='w-full h-full grid grid-cols-2 m-6'>
			{clubInfo.map((card, index) => {
				const title = card.name.toLowerCase()
				const value = searchValue.toLowerCase()

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
