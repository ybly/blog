import React from 'react';
import Layout from '../../components/Layout';

// import * as styles from '../../styles/project.module.css';
import { graphql } from 'gatsby';

import List from '../../components/List';

export default function Projects({ data }) {
	console.log(data);

	const projects = data.allMarkdownRemark.nodes;

	return (
		<Layout>
			<section>
				<h1>Projects</h1>
			</section>
			<div>
				{/* {projects.map((project) => (
					<a
						key={project.id}
						href={project.frontmatter.githubRepo}
						target="_blank"
						rel="noreferrer"
					>
						{project.frontmatter.title}
					</a>
				))} */}

				<List listItems={projects} />
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
