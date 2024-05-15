/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `static/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// Add your gatsby-remark-* plugins here
				plugins: [
					// Markdown code highlighting
					`gatsby-remark-prismjs`,
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects/`,
			},
		},
	],
	siteMetadata: {
		title: "Bo's personal portfolio",
		description: 'Software developer portfolio',
		author: 'Yin Bo Ly',
	},
	trailingSlash: 'never',
};
