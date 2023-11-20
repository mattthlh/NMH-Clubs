import React, { useState, useEffect } from 'react'

// import Filters from '../components/Filters'
import Search from '../components/Search'
import ClubList from '../components/ClubList'

import { getAllClubData } from '../hooks/fetchData'

const SearchPage = () => {
	const [searchValue, setSearchValue] = useState('')
	const [activeFilters, setActiveFilters] = useState([])
	const [isLoading, setLoading] = useState(true)

	// Currently the data is retrieved from simple function, but when doing api calls later, will need a useEffect below
	// const data = getAllClubData()
	const [data, setData] = useState(getAllClubData())

	useEffect(() => {
		setLoading(true)

		const clubData = getAllClubData()
		setData((data) => clubData)
		setLoading(false)
	}, [])

	return (
		// This essentially divides it into 3 sections: Search bar, Filters drop-down, and the display of clubs
		<div className='w-screen h-screen relative top-5'>
			<div className='m-4'>
				<Search setSearchValue={setSearchValue} />
			</div>
			{/* <Filters activeFilters={activeFilters} setActiveFilters={setActiveFilters} /> */}

			{/* The function below waits for data to be retrieved before displaying the list of club cards. Plan to implement a limit to amount of cards displayed initially (~10 cards first, then can load more) */}
			<div className='flex flex-row md:m-10 rounded'>
				{isLoading && data.length < 1 ? (
					<div> Loading... </div>
				) : (
					// ClubList takes in three components: all data, current search and filters
					<ClubList
						clubInfo={data}
						searchValue={searchValue}
						activeFilters={activeFilters}
					/>
				)}
			</div>
		</div>
	)
}

export default SearchPage

// 2. Add comments around code to make it readable
// 3. Comment out the filter bar, and then add it back in later when it's finalized
// 3. Down the road, a page to add a club, trigger email
