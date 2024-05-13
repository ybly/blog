import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
	return (
		<nav>
			<h1>Yin Bo ly</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
				<a target="_blank" href="https://github.com/ybly">
					Github
				</a>
			</div>
		</nav>
	);
}
