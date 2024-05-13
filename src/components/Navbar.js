import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
	return (
		<nav>
			<h1>Yin Bo ly</h1>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
			</div>
		</nav>
	);
}
