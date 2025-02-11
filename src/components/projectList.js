import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectList = () => {
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
          Address {
            Street
            Postcode
            City
          }
          Location {
            Lat
            Long
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
    <>
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
    </>
  );
};

export default ProjectList;
