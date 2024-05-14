import { Link } from 'gatsby';
import React from 'react';

export default function Navbar() {
	return (
		<nav>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
				<a target="_blank" rel="noreferrer" href="https://github.com/ybly">
					Github
				</a>
			</div>
		</nav>
	);
}
