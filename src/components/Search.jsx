const Search = ({ setSearchValue }) => {
	const handleSubmit = (e) => e.preventDefault()

	// input box that stores the current value of search
	const handleSearchChange = (e) => {
		const searchValue = e.target.value
		setSearchValue(searchValue.trim())
	}

	return (
		<>
			<form className='flex justify-center' onSubmit={handleSubmit}>
				<input
					className='flex border-b border-blue-950 m-2 w-72 pl-2 text-lg focus:outline-4 focus:outline-nmhNavy'
					placeholder='Type to Search...'
					onChange={handleSearchChange}
				/>
			</form>
		</>
	)
}

export default Search
