import React from 'react'

const Navbar = () => {
	return (
		<div className='flex sticky top-0 w-full justify-between items-stretch px-4 bg-slate-400 text-slate-100 text-2xl'>
			<div className='text-5xl'> NMH Clubs </div>
			<ul className='p-2 m-0 hover:bg-slate-500 active: bg-slate-300'>
				<div className='font-semibold'> About Us</div>
			</ul>
		</div>
	)
}

export default Navbar
