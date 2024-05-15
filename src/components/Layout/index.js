import React from 'react';
import Navbar from '../Navbar';

import * as style from './layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={style.layout}>
			<div className="container">
				<Navbar />
			</div>

			<div className="container">
				<div>{children}</div>
			</div>

			<footer />
		</div>
	);
}
