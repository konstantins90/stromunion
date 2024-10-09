import * as React from "react"
import Layout from "../components/layout.js"
import TextVideo from "../components/sections/textVideo.js"
import Text2Columns from "../components/sections/text2columns.js"
import Text from "../components/sections/text.js"
import TextSection from "../components/sections/textSection.js"
import TextImage from "../components/sections/textImage.js"
import Gallery from "../components/sections/gallery.js"
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }) => {
    const mdxData = data.allFile.edges.reduce((acc, { node }) => {
        acc[node.name] = node.childMdx;
        return acc;
    }, {});

    return (
        <Layout>
            <TextVideo
                id="home"
                text={mdxData.home.body}
            />
            <div className="frame-wrap relative" >
                <div className="frame frame-2 top-0 left-0 bg-black"></div>
                <div className="frame frame-1 bg-gold"></div>
            </div>
            <Text2Columns
                id="courses"
                headline="Unsere Kurse"
                textLeft={mdxData.coursChild.body}
                textRight={mdxData.coursAdult.body}
            />
            <div className="frame-wrap relative">
                <div className="frame frame-3 bg-gold"></div>
            </div>
            <Text
                id="hours"
                text={mdxData.hours.body}
            />
            <TextImage
                id="about"
                text={mdxData.about.body}
                image={getImage(mdxData.about.frontmatter.image)}
            />
            <Gallery
                id="momente"
                text={mdxData.momente.body}
            />
            <TextSection
                id="contact"
                text={mdxData.contact.body}
            />
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default IndexPage

export const Head = ({ data }) => {  
    const { title, description } = data.site.siteMetadata;
  
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
      </>
    );
};

export const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      allFile(filter: {extension: {eq: "mdx"}}) {
        edges {
          node {
            name
            childMdx {
              frontmatter {
                title
                slug
                image {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      width: 350
                      formats: AUTO
                      placeholder: BLURRED
                    )
                  }
                }
              }
              body
            }
          }
        }
      }
    }
`;