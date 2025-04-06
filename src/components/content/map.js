import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import L from 'leaflet';

let customIcon = '';
if (typeof window !== 'undefined') {
    customIcon = new L.icon({
        iconUrl: '/rb_25530.png',
        iconSize: [50, 50],
        iconAnchor: [12, 55],
        popupAnchor: [0, -55]
    });
}

const ZoomOnVisible = ({ center = [52.52, 13.405], zoom = 7, duration = 2 }) => {
    const map = useMap();
    const [hasZoomed, setHasZoomed] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && map && !hasZoomed) {
            const timeout = setTimeout(() => {
                setHasZoomed(true);
                map.flyTo(center, zoom, {
                    animate: true,
                    duration,
                });
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [inView, map, hasZoomed, center, zoom, duration]);

    useEffect(() => {
        if (map) {
            // Loggt die Zoom- und Position jedes Mal, wenn sich die Karte bewegt
            const logMapDetails = () => {
                const center = map.getCenter(); // Holt die aktuelle Position der Karte
                const zoomLevel = map.getZoom(); // Holt den aktuellen Zoom-Level
                console.log(`Map Center: ${center.lat}, ${center.lng}`);
                console.log(`Zoom Level: ${zoomLevel}`);
            };

            map.on('moveend', logMapDetails); // Hört auf das 'moveend'-Event, wenn die Bewegung beendet ist

            // Bereinigt den Event-Listener, wenn die Komponente unmontiert wird
            return () => {
                map.off('moveend', logMapDetails);
            };
        }
    }, [map]);

    return <div ref={ref} />;
};

const MapComponent = ({ block }) => {
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
    .slice(0, parseInt(block.project_max));

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
        <section id="map" className="px-4 pt-28 pb-10 md:py-28 bg-black text-white" data-aos="fade-up">
            <div className="headline text-center md:max-w-[60%] mx-auto">
                <h3 className="text-2xl md:text-4xl font-light">
                    { block.headline }
                </h3>
            </div>
            <div className="btns flex justify-center gap-4 pt-14">
                <div>
                    <Link to={block.button_1.link} className="bg-white hover:bg-zinc-100 text-black py-2 px-4 rounded-full font-light">{block.button_1.name}</Link>
                </div>
                <div>
                    <Link to={block.button_2.link} className="bg-black hover:bg-zinc-900 text-white py-2 px-4 border border-white rounded-full font-light">{block.button_2.name}</Link>
                </div>
            </div>
            <div className="map-wrap -mx-4 mt-20 mb-0">
                <MapContainer center={[48.8038565205725, 19.753417968750004]} zoom={5} scrollWheelZoom={false} className="w-full h-[70vh] bg-black">
                    <ZoomOnVisible center={[52.52, 13.405]} zoom={7} duration={1.5} />
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
                            <Link to={block.link_to_projects.link} className="text-xl font-light underline underline-offset-4">
                                Alle Projekte sehen
                            </Link>
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
                            <Link to={block.link_to_projects.link} className="image h-full bg-zinc-900 rounded-xl flex justify-center items-center text-base xl:text-2xl font-light p-6">
                                {block.link_to_projects.name} <FontAwesomeIcon icon={faArrowRight} size="2x" className="w-6 h-6 ml-2" />
                            </Link>
                            <div className="mt-4 text-lg font-light text-white md:flex justify-between">&nbsp;</div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default MapComponent;