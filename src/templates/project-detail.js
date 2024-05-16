import React from 'react';
import Layout from '../components/Layout';

import { graphql } from 'gatsby';

import 'prismjs/themes/prism-tomorrow.css';
import * as style from './project-detail.module.css';

import { Button } from '../components/Button';

export default function projectDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	return (
		<Layout>
			<div className={style.projectDetail}>
				<section>
					<h1>{frontmatter.title}</h1>
				</section>

				<section>
					<div>{frontmatter.stack}</div>
					<Button
						onClick={() => {
							window.open('https://github.com/ybly', '_blank');
						}}
					>
						Source
						<img src="/icons8-external-link.svg" alt="icon-external-link" />
					</Button>
				</section>

				<section
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
