import React from 'react';
import PageLayout from '../../components/PageLayout';

import * as styles from '../../styles/project.module.css';
import { graphql } from 'gatsby';

export default function Projects({ data }) {
	console.log(data);

	const projects = data.allMarkdownRemark.nodes;

	return (
		<PageLayout>
			<section className={styles.projects}>
				<h2>Projects</h2>
			</section>
			<div>
				{projects.map((project) => (
					<div>
						<a
							key={project.id}
							href={project.frontmatter.githubRepo}
							target="_blank"
							rel="noreferrer"
						>
							{project.frontmatter.title}
						</a>
					</div>
				))}
			</div>
		</PageLayout>
	);
}

export const getProjectsMarkdown = graphql`
	query projectsQuery {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					title
					stack
					githubRepo
					description
					date
				}
				id
			}
		}
	}
`;
