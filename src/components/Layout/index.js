import React from 'react';
import Navbar from '../Navbar';

import * as style from './layout.module.css';

export default function Layout({ children }) {
	return (
		<div className={style.layout}>
			<div className="container">
				<Navbar />
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
