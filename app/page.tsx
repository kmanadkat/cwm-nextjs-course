import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { authOptions } from './api/auth/[...nextauth]/route';
import { ProductCard } from './components/ProductCard';

export default async function Home() {
	// Server Side Session Access
	const session = await getServerSession(authOptions);

	return (
		<main>
			<h1>Hello {session && <span>{session.user?.name}</span>}</h1>
			<Link href='/users'>Users</Link>
			<ProductCard />
		</main>
	);
}
