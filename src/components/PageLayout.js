import React from 'react';
import Navbar from './Navbar';

import '../styles/global.css';

export default function PageLayout({ children }) {
	return (
		<div className="page-layout">
			<Navbar />
			<div className="container">
				<div>{children}</div>
			</div>
			<footer>
				<p>Copyright 2024</p>
			</footer>
		</div>
	);
}
