import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Project = ({ block }) => {
    const data = useStaticQuery(graphql`
        query GetProjects {
            allStrapiProject (
                sort: {
                publishedAt: DESC
                }
            ) {
                nodes {
                    id
                    Name
                    Capacity
                    Commissioning
                    Category
                    Image {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(
                                    width: 600
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                    aspectRatio: 1.5
                                )
                            }
                        }
                    }
                }
            }
        }
    `);

    const projects = data.allStrapiProject.nodes;

    const projectList = projects
    .filter((item) => item.Image && item.Image.localFile);

    const Image = ({ image, name }) => (
        <GatsbyImage
            image={getImage(image)}
            alt={name}
            placeholder="blurred"
            layout="constrained"
            width={700}
            imgStyle={{ 'object-position': 'right center' }}
            objectFit="cover"
            className="rounded-xl"
        />
    );

    return (
        <section id="projects" className="py-28 bg-black text-white">
            <div className="headline text-center md:max-w-[60%] mx-auto mb-10">
                <h3 className="text-2xl md:text-4xl font-light">
                    <ReactMarkdown children={block.projectHeadline.data.headline} rehypePlugins={[rehypeRaw]} />
                </h3>
            </div>
            <div className="projects pt-10 px-4 md:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {projectList.map((project, index) => (
                        project.Image?.localFile ? (
                            <div data-aos="fade-up">
                                <Image image={project.Image.localFile} name={project.Name} />
                                <div className="mt-4 text-lg font-light text-white md:flex justify-between">
                                    <div className="uppercase">
                                        {project.Name}
                                    </div>
                                    <div>
                                        {project.Capacity} kWp
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
