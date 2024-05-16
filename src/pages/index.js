import * as React from 'react';
import { graphql } from 'gatsby';

import '../styles/global.css';
import * as styles from '../styles/home.module.css';

import Layout from '../components/Layout';
import List from '../components/List';
import { GatsbyLinkButton } from '../components/Button';

export default function Home({ data }) {
	console.log(data);

	const projects = data.allMarkdownRemark.nodes;

	return (
		<Layout>
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
					<GatsbyLinkButton to={'/projects'}>View All</GatsbyLinkButton>
				</div>

				<List listItems={projects} />
			</section>
		</Layout>
	);
}

export const getProjects = graphql`
	query projectsQuery {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 6) {
			nodes {
				frontmatter {
					title
					date
					slug
					stack
					description
					githubRepo
				}
				id
			}
		}
	}
`;
