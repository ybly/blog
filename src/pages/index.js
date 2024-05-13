import * as React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

import * as styles from '../styles/home.module.css';

export default function Home() {
	return (
		<Layout>
			<section className={styles.header}>
				<div>
					<h2>Home</h2>
					<h3>Web Developer</h3>
					<p>Hey! I'm Bo a Web Developer based in the West Midlands, UK.</p>

					<Link to="/projects" className={styles.btn}>
						My Projects
					</Link>
				</div>
			</section>
		</Layout>
	);
}
