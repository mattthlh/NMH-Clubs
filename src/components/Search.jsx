const Search = ({ setSearchValue }) => {
	const handleSubmit = (e) => e.preventDefault()

	const handleSearchChange = (e) => {
		const searchValue = e.target.value
		setSearchValue(searchValue.trim())
	}

	return (
		<>
			<form className='flex justify-center' onSubmit={handleSubmit}>
				<input
					className='flex border-2 rounded-md m-2 w-80
           border-gray-400 placeholder-shown:text-center pl-2'
					placeholder='Search Clubs Here!'
					onChange={handleSearchChange}
				/>
			</form>
		</>
	)
}

export default Search
