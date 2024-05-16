import React from 'react';

import Layout from '../components/Layout';
import { GatsbyLinkButton } from '../components/Button';

export default function NotFound() {
	return (
		<Layout>
			<h1>404 - Page not found!</h1>
			<div>
				<p>The following page is not available.</p>
				<p style={{ textDecoration: 'underline', fontWeight: 600 }}>
					{`${window.location}`}
				</p>
				<GatsbyLinkButton to="/" className="button">
					Home
				</GatsbyLinkButton>
			</div>
			<div>
				<img
					src="/404-error.svg"
					alt="404 Error"
					style={{ maxWidth: '100%' }}
				/>
			</div>
		</Layout>
	);
}
