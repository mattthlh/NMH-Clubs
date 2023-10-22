import React, { useState, useEffect } from 'react'

import ClubList from '../components/ClubList'
// import Filters from '../components/Filters'
import Search from '../components/Search'
import { getAllClubData } from '../hooks/fetchData'

const SearchPage = () => {
	const [searchValue, setSearchValue] = useState('')
	const [activeFilters, setActiveFilters] = useState([])
	const [data, setData] = useState(getAllClubData())
	const [isLoading, setLoading] = useState(true)

	// useEffect(() => {
	// 	// setLoading(true)
	// 	const clubData = getAllClubData()
	// 	setData((data) => clubData)
	// 	// setLoading(false)
	// }, [])

	return (
		<>
			<div className='m-4'>
				<Search setSearchValue={setSearchValue} />
			</div>
			{/* <Filters activeFilters={activeFilters} setActiveFilters={setActiveFilters} /> */}
			<div className='flex flex-row border-2 m-4 rounded'>
				<div className='rounded m-4'>
					{isLoading && data.length < 1 ? (
						<div> Loading... </div>
					) : (
						<ClubList
							clubInfo={data}
							searchValue={searchValue}
							activeFilters={activeFilters}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default SearchPage

// 2. Add comments around code to make it readable
// 3. Comment out the filter bar, and then add it back in later when it's finalized
// 3. Down the road, a page to add a club, trigger email
