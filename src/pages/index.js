import * as React from 'react';
import PageLayout from '../components/PageLayout';
import { Link, graphql } from 'gatsby';

import * as styles from '../styles/home.module.css';

const formatDates = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long' });
};

export default function Home({ data }) {
	console.log(data);

	const projects = data.allMarkdownRemark.nodes;

	return (
		<PageLayout>
			<section className={styles.header}>
				<div>
					<h1>Hey, I'm Bo</h1>
					<p className={styles.header}>
						Welcome to my digital playground! I'm a UK-based software developer,
						and this is where I share my projects and what I've learnt.
					</p>
				</div>

				<img src="/header-image.svg" alt="logo" style={{ maxWidth: '100%' }} />
			</section>

			<section>
				<div className={styles.homeHeading}>
					<h2 className="title">Latest Projects</h2>
					<Link to="/projects" className="button">
						View All
					</Link>
				</div>
				<div className={styles.projectList}>
					{projects.map((project) => (
						<Link
							className={styles.projectItem}
							key={project.id}
							to={'/projects/' + project.frontmatter.path}
						>
							<h3>{project.frontmatter.description}</h3>
							<span className={styles.date}>
								{formatDates(project.frontmatter.date)}
							</span>
						</Link>
					))}
				</div>
			</section>
		</PageLayout>
	);
}

export const getProjects = graphql`
	query projectsQuery {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 6) {
			nodes {
				frontmatter {
					title
					stack
					path
					githubRepo
					description
					date
				}
				id
			}
		}
	}
`;
