---
title: 'Gatsby blog and projects portfolio'
date: '2024-05-14'
slug: '/projects/gatsby-blog'
stack: 'React, Gatsby, Graphql'
description: 'Gatsby blog and projects portfolio.'
githubRepo: 'https://github.com/ybly/gatsby-blog'
display: true
---

My personal blog and project portfolio! This site uses Gatsby and React to ensure a lightning-fast, seamless user experience. By leveraging Gatsby’s static site generation and React’s component-based architecture.


## ⚙️ What's inside?

A quick look at the top-level files and directories in this project.

    .
    ├── src/
    │   ├── components/
    │   │    └── ...
    │   ├──images/
    │   │   └── image.png
    │   │    └── ...
    │   ├──pages/
    │   │   └── index.js
    │   │   └── 404.js
    │   │   └── ...
    │   ├── posts/
    │   │   └── ...
    │   ├── styles/
    │   │   └── global.css
    │   │   └── ...
    │   └── templates/
    │       └── ...
    │
    ├──static/
    │   └── ...
    │
    ├── .gitignore
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package.json
    ├── package-lock.json
    └── README.md

- **_`/src`_**: This directory will contain all of the code related to what you see on the site's front end.

- **_`/src/components`_**: This directory will contain all the react components used in the front end.

- **_`/src/images`_**: This directory will contain all images the site requires.

  > We use the `gatsby-plugin-image` with the `gatsby-plugin-sharp` and `gatsby-transformer-sharp` plugins to optimize image loading based on device and viewport requirements.

- **_`/src/pages`_**: This directory contains all the individual pages for the website.

- **_`/src/pages/index.js`_**: Homepage and main entry point of the website.

- **_`/src/pages/404.js`_**: Customised 404 not found page when an invalid route is attempted.

- **_`/src/posts`_**: This directory contains all the project/post markdown files, which will be used to construct the content for the template pages.

- **_`/src/styles`_**: This directory contains global and page specific css modules.

- **_`/src/templates`_**: This directory contains page-specific template styles for generating static pages.

- **_`/static`_**: This directory contains static images and icons used in the front end.

- **_`gatsby-config.js`_**: This is the main configuration file for a Gatsby site. This is where specific information about the site (metadata) like title, description and which Gatsby plugins are included, etc... Check out the [Gatsby Config Docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail.

- **_`gatsby-node.js`_**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  > We use the `gatsby-transformer-filesystem` and `gatsby-transformer-remark` plugins to parse project markdown files and create static project detail pages during the build process using a page template set up in `src/template`.

- **_`package.json`_**: A manifest file for Node.js projects, including metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.


## ⚡Gatsby Plugins Used

- **`gatsby-source-filesystem`**: Plugin used for sourcing data into your Gatsby application from your local filesystem.

- **`gatsby-transformer-remark`**: Parses Markdown files using [remark](https://remark.js.org/).

- **`gatsby-remark-prismjs`**: Adds syntax highlighting to code blocks in markdown files using [PrismJS](https://prismjs.com/).

- **`gatsby-plugin-manifest`**: The manifest provides configuration and icons.

- **`gatsby-plugin-image`**: The Gatsby Image plugin handles the hard parts of producing images in multiple sizes and formats to optimize image loading and performance.
