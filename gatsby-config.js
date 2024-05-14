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
				icon: `src/images/icons8-dev.svg`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// Footnotes mode (default: true)
				footnotes: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Add your gatsby-remark-* plugins here
				plugins: [],
				// Enable JS for https://github.com/jonschlinkert/gray-matter#optionsengines (default: false)
				// It's not advised to set this to "true" and this option will likely be removed in the future
				jsFrontmatterEngine: false,
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
