import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import * as style from './layout.module.css';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

export default function Layout({ children }) {
	const [theme, setTheme] = useState(DARK_THEME);

	function toggleTheme() {
		setTheme((currentTheme) => {
			const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
			localStorage.setItem('theme', newTheme);

			return newTheme;
		});
	}

	useEffect(() => {
		setTheme(localStorage.getItem('theme') || DARK_THEME);
	}, [theme]);

	return (
		<div className={style.layout} data-theme={theme}>
			<div className="container">
				{/* <Navbar /> */}
				<nav className={style.navbar}>
					<div className="links">
						<Link to="/">Home</Link>
						{/* <Link to="/about">About</Link> */}
						<Link to="/projects">Projects</Link>
						<a target="_blank" rel="noreferrer" href="https://github.com/ybly">
							Github
						</a>
					</div>
					<button
						title="toggle theme"
						type="button"
						className={style.themeButton}
						onClick={toggleTheme}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
						</svg>
					</button>
				</nav>
			</div>

			<div className={style.content}>
				<div>{children}</div>
			</div>

			<footer>
				<div className={style.socials}>
					<a
						href="https://www.linkedin.com/in/yinboly"
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							className="social-icon"
							src="/icons8-linkedin.svg"
							alt="icon-linkedin"
						/>
					</a>
					<a
						href="https://github.com/ybly"
						target="_blank"
						rel="noreferrer noopener"
					>
						<img
							className="social-icon"
							src="/icons8-github.svg"
							alt="icon-github"
						/>
					</a>
				</div>
				<div>
					<div className={style.disclaimer}>
						<p>© 2024 Yin Bo Ly</p>
						<p>
							Illustrations by{' '}
							<a
								href="https://storyset.com/people"
								target="_blank"
								rel="noreferrer noopener"
							>
								Storyset
							</a>
						</p>
						<p>
							Icons by{' '}
							<a
								href="https://icons8.com"
								target="_blank"
								rel="noreferrer noopener"
							>
								Icons8
							</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
