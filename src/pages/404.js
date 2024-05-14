import React from 'react';
import Layout from '../components/Layout';

export default function NotFound() {
	return (
		<Layout>
			<div>
				<img
					src="404-error-bro-yellow.svg"
					alt="404 Error"
					style={{ maxWidth: '100%' }}
				/>
			</div>
		</Layout>
	);
}
