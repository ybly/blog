import React from 'react';
import Layout from '../../components/Layout';

import * as styles from '../../styles/project.module.css';

export default function Projects() {
	return (
		<Layout>
			<section className={styles.portfolio}>
				<h2>Projects</h2>
				<h3>My personal projects.</h3>
			</section>
		</Layout>
	);
}
