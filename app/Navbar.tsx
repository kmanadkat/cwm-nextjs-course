import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<nav className='flex bg-slate-200 py-3 px-5'>
			<Link href='/' className='mr-5 '>
				Next.Js
			</Link>
			<Link href='/users'>Users</Link>
		</nav>
	);
};

export default Navbar;
