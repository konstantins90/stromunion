import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as runtime from "react/jsx-runtime"
import { compileSync, runSync } from "@mdx-js/mdx"



function compileMDX(mdx) {
    const code = String(
        compileSync(mdx, {
            outputFormat: "function-body",
            development: false,
        })
    );

    return code;
}

const Gallery = ({ id, text, image}) => {
    const [content, setContent] = useState();

    useEffect(() => {
        const code = compileMDX(text);

        const { default: Content } = runSync(code, runtime);
        setContent(Content());
    }, []);

    const galleryImages = useStaticQuery(graphql`
        query {
            allFile(filter: {
                extension: {regex: "/(jpg)|(jpeg)|(png)/"},
                dir: {regex: ".*/images/momente/"}
            }) {
                edges {
                    node {
                        id
                        childImageSharp {
                            gatsbyImageData(
                                layout: CONSTRAINED
                                width: 400
                                height: 400
                                formats: AUTO
                                placeholder: BLURRED
                            )
                        }
                    }
                }
            }
        }
    `)

    return (
        <section id={id}>
            <div className="wrap bg-black text-white py-20">
                <div className="container mx-auto">
                    <div data-aos="fade-up">
                        {content && content}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
                        {galleryImages.allFile.edges.map(({ node }) => {
                            const image = getImage(node.childImageSharp.gatsbyImageData);
                            return (
                                <div key={node.id}>
                                    <div className="shadow-gold">
                                        <GatsbyImage image={image} alt="Julia Dance Studio" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
