import React from 'react';
import Layout from '../components/Layout';

import { graphql } from 'gatsby';

import 'prismjs/themes/prism-tomorrow.css';
import * as style from './project-detail.module.css';

import { Button } from '../components/Button';

export default function projectDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	const techStack = frontmatter.stack.split(',');

	return (
		<Layout>
			<div className={style.projectDetail}>
				<section>
					<div>
						<h1>{frontmatter.title}</h1>
						<div className={style.technologyStackContainer}>
							{techStack.map((tech) => {
								return (
									<span key={`stack-${tech}`} className="tag">
										{String(tech).trim()}
									</span>
								);
							})}
						</div>
					</div>
					<Button
						onClick={() => {
							window.open(`${frontmatter.githubRepo}`, '_blank');
						}}
					>
						source
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
