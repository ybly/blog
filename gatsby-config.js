/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	pathPrefix: '/yinboly.com',
	flags: {
		DEV_SSR: true,
	},
	plugins: [
		`gatsby-transformer-remark`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `static/favicon.png`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// Add your gatsby-remark-* plugins here
				plugins: [
					`gatsby-remark-prismjs`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 750,
							showCaptions: false,
							linkImagesToOriginal: false,
							withWebp: true,
							tracedSVG: true,
							loading: 'lazy',
							disableBgImageOnAlpha: true,
							wrapperStyle: (fluidResult) => `flex:${fluidResult.aspectRatio}`,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts/`,
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
