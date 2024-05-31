import React from 'react';
import Layout from '../components/Layout';

import { graphql } from 'gatsby';

import 'prismjs/themes/prism-okaidia.css';

import * as style from './template.module.css';

import { Button } from '../components/Button';

function getOrdinalSuffix(day) {
	if (day >= 11 && day <= 13) {
		return 'th';
	}
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}

const formatDateString = (dateString) => {
	const date = new Date(dateString);

	const day = date.getDate();
	const suffix = getOrdinalSuffix(day);

	const monthAndYearString = date.toLocaleDateString('en-GB', {
		month: 'long',
		year: 'numeric',
	});

	return `${day}${suffix} ${monthAndYearString}`;
};

export default function projectDetails({ data }) {
	const { html, frontmatter } = data.markdownRemark;

	const techStack = frontmatter.stack.split(',');

	return (
		<Layout>
			<div className={style.template}>
				<section>
					<div>
						<h1>{frontmatter.title}</h1>
						<div className={style.about}>
							{techStack.map((tech) => {
								return (
									<span key={`stack-${tech}`} className="tag">
										{String(tech).trim()}
									</span>
								);
							})}
							<span className="date-format">
								{formatDateString(frontmatter.date)}
							</span>
						</div>
					</div>
					{frontmatter.githubRepo && (
						<Button
							onClick={() => {
								window.open(`${frontmatter.githubRepo}`, '_blank');
							}}
						>
							source code
						</Button>
					)}
				</section>

				<section
					className={style.content}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	);
}

export const postDetailQuery = graphql`
	query postDetails($slug: String) {
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
