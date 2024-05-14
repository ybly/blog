import * as React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'gatsby';

import * as styles from '../styles/home.module.css';

export default function Home() {
	return (
		<PageLayout>
			<section className={styles.header}>
				<div>
					<h2>Hey, I'm Bo</h2>
					<p>
						Welcome to my digital playground! I'm a UK-based software developer,
						and this is where I share my projects and what I've learnt.
					</p>
				</div>

				<img
					src="coding-bro-yellow.svg"
					alt="logo"
					style={{ maxWidth: '100%' }}
				/>
			</section>

			<section>
				<div className={styles.heading}>
					<h2>Latest Posts</h2>
					<Link to="/projects" className="button">
						View All
					</Link>
				</div>
			</section>

			<section>
				<div className={styles.heading}>
					<h2>Projects</h2>
					<Link to="/projects" className="button">
						View All
					</Link>
				</div>
			</section>
		</PageLayout>
	);
}
