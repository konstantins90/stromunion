import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const MetroHome = ({ block }) => {
    const metro = block;
    console.log(block);
    return (
        <section id="service" className="pt-4">
            <div className="wrap pb-10 md:py-10 grid grid-cols-12 grid-rows-4 md:grid-rows-7 gap-4 h-[150vh] md:h-auto">
                <div data-aos="fade-right" className="col-start-1 col-span-3 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-span-4 rounded-tr-3xl rounded-br-3xl overflow-hidden border-l-0 border-4 border-[#000000]"></div>
                <div data-aos="fade-right" className="col-start-11 col-span-3 row-start-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-3 rounded-tl-3xl rounded-bl-3xl md:rounded-none md:rounded-tr-3xl md:rounded-br-3xl overflow-hidden bg-[#FF0201] "></div>
                <div data-aos="fade-right" className="block md:hidden col-start-1 col-span-1 row-start-2 row-span-1 rounded-tr-3xl rounded-br-3xl overflow-hidden bg-black "></div>
                <div data-aos="fade-right" className="col-start-4 col-span-9 row-start-1 row-span-1 md:col-start-2 md:col-span-2 md:row-span-7 rounded-3xl overflow-hidden">
                    <StaticImage
                        src="../../images/banner16.jpg"
                        height={750}
                        className="h-full animation grayscale hover:grayscale-0"
                    />
                </div>
                <div data-aos="fade-down" className="overtext col-start-7 col-span-6 row-start-3 row-span-1 md:col-start-4 md:col-span-4 md:row-span-5 rounded-3xl overflow-hidden animation grayscale hover:grayscale-0">
                    <StaticImage
                        src="../../images/banner11.jpg"
                        height={750}
                        className="h-full"
                    />
                    <div className="text">
                        <ReactMarkdown children={metro.box_1.data.box_1} rehypePlugins={[rehypeRaw]} />
                    </div>
                </div>
                <div data-aos="fade-down" className="col-start-2 col-span-9 row-start-2 row-span-1 md:col-span-4 md:row-span-3 bg-black text-white rounded-3xl p-8 xl:p-16 flex flex-col justify-between shadow-md">
                    <div className="text-3xl">
                        <div>
                            Leistung über
                        </div>
                        <span className="text-5xl md:text-7xl xl:text-9xl">
                            <VisibilitySensor partialVisibility offset={{ top: 10 }}>
                                {({ isVisible }) => (
                                <span>
                                    {isVisible ? (
                                    <CountUp start={0.0} end={35.76} duration={2} decimals={2} decimal="," />
                                    ) : (
                                    "35.76"
                                    )}
                                </span>
                                )}
                            </VisibilitySensor>
                        </span>{" "}
                        MW
                    </div>
                    <div className="xl:text-xl">
                        in Deutschland und Europa seit Jahr 2017
                    </div>
                </div>
                <div data-aos="fade-left" className="hidden md:block md:col-start-12 md:col-span-1 md:row-span-7 rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-black "></div>
                <div data-aos="fade-up" className="overtext col-start-1 col-span-6 row-start-3 row-span-1 md:col-span-4 md:row-span-4 relative animation grayscale hover:grayscale-0 rounded-tr-3xl rounded-br-3xl md:rounded-3xl overflow-hidden">
                    <StaticImage
                        src="../../images/banner17.jpg"
                        height={750}
                        className="h-full"
                    />
                    <div className="text">
                        <ReactMarkdown children={metro.box_3.data.box_3} rehypePlugins={[rehypeRaw]} />
                    </div>
                </div>
                <div data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:ml-0 row-start-4 row-span-1 md:col-start-4 md:col-span-4 md:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 md:p-10 font-light">
                    <ReactMarkdown children={metro.box_4.data.box_4} rehypePlugins={[rehypeRaw]} />
                </div>
                <div data-aos="fade-up" className="col-start-2 col-span-8">
                    <div className="pt-8">
                        <Link to="/leistungen" className="text-3xl text-black line font">
                            Alle unsere Leistungen
                            <FontAwesomeIcon icon={faArrowRight} size="2x" className="w-8 h-8 ml-5 text-black" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MetroHome;