import React from 'react';
import PageLayout from '../components/PageLayout';

export default function NotFound() {
	return (
		<PageLayout>
			<div>
				<img
					src="404-error-bro-yellow.svg"
					alt="404 Error"
					style={{ maxWidth: '100%' }}
				/>
			</div>
		</PageLayout>
	);
}
