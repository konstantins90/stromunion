/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Stromunion – Maßgeschneiderte Lösungen für nachhaltige Energieprojekte`,
	description: `Willkommen bei Stromunion! Wir bieten innovative Lösungen für erneuerbare Energien, Elektrotechnik und nachhaltige Projekte. Entdecken Sie unsere Expertise und profitieren Sie von unserer Erfahrung.`,
    siteUrl: `https://www.juliadancestudio.de/`,
    email: `juliavernucciodance@gmail.com`,
    fon: `+49 162 751 69 59`,
    name: `Julia Vernuccio`,
    address: `Lehmkuhle 1`,
    city: `33039 Nieheim`,
  },
  plugins: [
	"gatsby-plugin-postcss",
	"gatsby-plugin-image",
	"gatsby-plugin-sitemap", 
	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			"icon": "src/images/icon.png"
		}
  	},
	{
		resolve: `gatsby-plugin-mdx`,
		options: {
			extensions: [`.mdx`, `.md`],
		},
    },
	"gatsby-plugin-sharp",
	"gatsby-transformer-sharp",
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			"name": "images",
			"path": "./src/images/"
		},
		__key: "images"
  	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			"name": "pages",
			"path": "./src/pages/"
		},
		__key: "pages"
  	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			"name": "content",
			"path": "./src/content/"
		},
		__key: "content"
  	},
	{
		resolve: "gatsby-plugin-react-svg",
		options: {
			rule: {
				include: /assets/
			}
		}
	},
	{
		resolve: 'gatsby-plugin-react-leaflet',
		options: {
		  linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
		}
	}
	]
};