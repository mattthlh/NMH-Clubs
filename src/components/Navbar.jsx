import React from 'react'

const Navbar = () => {
	return (
		<div className='flex sticky top-0 w-full justify-between items-stretch px-4 bg-slate-400 text-slate-100 text-2xl z-10'>
			<div className='py-2 text-5xl'> NMH Clubs </div>
			<ul className='flex items-center p-2 m-0 hover:bg-slate-500 active: bg-slate-300'>
				{/* This should be a button below, but currently not set up */}
				<div className='font-semibold'> About Us</div>
			</ul>
		</div>
	)
}

export default Navbar
