import Link from 'next/link';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

import { authOptions } from './api/auth/[...nextauth]/route';
import { ProductCard } from './components/ProductCard';
import ImageWork from '@/public/images/work.jpg';

export default async function Home() {
	// Server Side Session Access
	const session = await getServerSession(authOptions);

	return (
		<main>
			<h1>Hello {session && <span>{session.user?.name}</span>}</h1>
			<Link href='/users'>Users</Link>
			<ProductCard />
			<Image
				className='mt-5 rounded-md'
				src={ImageWork}
				alt='Working'
				height={320}
			/>

			<div className='h-[300px] w-[600px] relative'>
				<Image
					className='mt-5 rounded-md object-contain'
					src={'https://picsum.photos/600/300'}
					alt='network image'
					fill
				/>
			</div>
		</main>
	);
}
