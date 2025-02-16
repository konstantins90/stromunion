import React, { useRef, useEffect } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import L from 'leaflet';

let customIcon = '';
if(typeof window !== 'undefined'){
  customIcon = new L.icon({
    iconUrl: '/rb_25530.png',
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [12, 55], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -55] // Point from which the popup should open relative to the iconAnchor
  });
}

const AddressMap = () => {
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
  .filter((item) => item.Image && item.Image.localFile)
  .slice(0, 7);

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
    <MapContainer center={[52.52, 13.405]} zoom={7} scrollWheelZoom={false} className="w-full h-[70vh]">
      <TileLayer
        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      />
      {projects.map((project, index) => (
        project.Location?.Lat && project.Location?.Long ? (
          <Marker
            key={index}
            position={[project.Location.Lat, project.Location.Long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3>{project.Name}</h3>
                <p>{project.Address.Street}</p>
                <p>{project.Address.Postcode} {project.Address.City}</p>
              </div>
            </Popup>
          </Marker>
        ) : null
      ))}
    </MapContainer>
    <div className="projects pt-24 px-4 md:px-20" data-aos="fade-up">
      <div className="text-white flex flex-col md:flex-row justify-between items-end mb-4">
        <div className="mb-6">
          <h3 className="text-4xl font-light line">Unsere letzten Projekte</h3>
        </div>
        <div className="text-xl font-light underline underline-offset-4">
          Alle Projekte sehen
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
        {projectList.map((project, index) => (
          project.Image?.localFile ? (
            <div>
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
        <div className="flex flex-col">
          <Link to="/projekte" className="image h-full bg-zinc-900 rounded-xl flex justify-center items-center text-base xl:text-2xl font-light p-6">
            Weitere 95 Projekte ansehen <FontAwesomeIcon icon={faArrowRight} size="2x" className="w-6 h-6 ml-2" />
          </Link>
          <div className="mt-4 text-lg font-light text-white md:flex justify-between">&nbsp;</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddressMap;
