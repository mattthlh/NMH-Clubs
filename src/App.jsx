import { Route, Routes } from 'react-router-dom'

import SearchPage from './pages/SearchPage'
import ClubPage from './pages/ClubPage'
import Navbar from './components/Navbar.jsx'
// import NewClubPage from './components/NewClubPage.jsx'
// import NotFound from './components/NotFound.jsx'

const App = () => {
	return (
		// Using React Router to navigate around the pages. Plan to feature a page for adding new clubs as well as a not found page
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<SearchPage />} />
				<Route path='/clubs/:id' element={<ClubPage />} />
				{/* <Route path='/clubs/new' element={<NewClubPage />} /> */}
				{/* <Route path='*' element={<NotFound />} /> */}
			</Routes>
		</>
	)
}

export default App
