import React from 'react';

interface Props {
	params: { slug: string[] };
}

const ProductPage = ({ params: { slug } }: Props) => {
	return (
		<div>
			ProductPage
			<p>{slug}</p>
		</div>
	);
};

export default ProductPage;
