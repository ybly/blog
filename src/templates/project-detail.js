import React from 'react';
import Layout from '../components/Layout';

import 'prismjs/themes/prism-tomorrow.css';
import * as styles from './project-detail.module.css';

import { graphql } from 'gatsby';

export default function projectDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;
	const { title, stack, path, githubRepo, description, date } = frontmatter;

	return (
		<Layout>
			<div>
				<h2>{title}</h2>
				<h3>{stack}</h3>
			</div>

			<div dangerouslySetInnerHTML={{ __html: html }} />
		</Layout>
	);
}

export const query = graphql`
	query ProjectsPage($path: String) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				title
				stack
				path
				githubRepo
				description
				date
			}
		}
	}
`;
