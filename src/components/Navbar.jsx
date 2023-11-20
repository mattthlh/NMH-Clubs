import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
	return (
		<div className='flex sticky top-0 w-full justify-between items-stretch px-4 bg-nmhNavy text-slate-100 text-2xl z-10'>
			<Link to={'/'}>
				<h1 className='py-2 text-5xl'> NMH Clubs </h1>
			</Link>
			<ul className='flex items-center p-2 m-0 hover:bg-red-700 active: bg-NMHRed'>
				{/* This should be a button below, but currently not set up */}
				{/* <div className='font-semibold'> About Us</div> */}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://forms.gle/opLoY9uxkra6kJkb7'
					className='font-semibold'>
					Add Club
				</a>
			</ul>
		</div>
	)
}

export default Navbar
