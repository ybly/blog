import React from 'react';
import Layout from '../../components/Layout';

// import * as styles from '../../styles/project.module.css';
import { graphql } from 'gatsby';

import List from '../../components/List';

const groupProjectsByYear = (projects) => {
	let datesByYear = {};

	projects.forEach((proj) => {
		let year = proj.frontmatter.date.split('-')[0];

		if (!datesByYear[year]) {
			datesByYear[year] = [];
		}

		datesByYear[year].push(proj);
	});

	return datesByYear;
};

export default function Projects({ data }) {
	const projects = data.allMarkdownRemark.nodes;

	const projectsGroupedByYear = groupProjectsByYear(projects);
	const years = Object.keys(projectsGroupedByYear).sort((a, b) => b - a);

	return (
		<Layout>
			<section>
				<h1>Projects</h1>
			</section>
			<div>
				{years.map((year) => {
					return (
						<div key={`${year}-projects`} style={{ marginTop: '4rem' }}>
							<h2>{year}</h2>
							<List listItems={projectsGroupedByYear[year]} />
						</div>
					);
				})}
			</div>
		</Layout>
	);
}

export const getProjects = graphql`
	query projectsQuery {
		allMarkdownRemark(
			filter: { frontmatter: { display: { eq: true } } }
			sort: { frontmatter: { date: DESC } }
		) {
			nodes {
				frontmatter {
					title
					stack
					slug
					githubRepo
					description
					date
				}
				id
			}
		}
	}
`;
