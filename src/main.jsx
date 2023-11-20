import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename={
			["https://apps.nmhschool.org", "https://appstest.nmhschool.org"]
				.includes(window.location.origin) ? "/clubs" : ""
		}>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</React.StrictMode>
)

// MemoryRouter good for testing
