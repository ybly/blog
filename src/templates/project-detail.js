import React from 'react';
import Layout from '../components/Layout';

import 'prismjs/themes/prism-tomorrow.css';
import * as style from './project-detail.module.css';

import { graphql } from 'gatsby';

export default function projectDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<div className={style.projectDetail}>
				<div>
					<h1>{frontmatter.title}</h1>
				</div>

				<div
					className={style.content}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query ProjectsPage($slug: String) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				slug
				stack
				description
				githubRepo
			}
		}
	}
`;
