import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import { SEO } from "../components/seo"
import Map from "../components/map.js"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faArrowRight,
    faArrowDown,
    faPhone,
    faAt
} from "@fortawesome/free-solid-svg-icons"

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import BannerVideo from "../video/banner.mp4"

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const IndexPage = ({ data }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 120);
    const y2 = useParallax(scrollYProgress, 230);

    return (
        <Layout>
            <section id="banner" className="p-4 h-[50vh] md:h-[85vh]">
                <div className="relative h-full rounded-3xl overflow-hidden bg-zinc-900">
                    <video
                        autoplay="autoPlay" 
                        loop="loop" 
                        muted="muted" 
                        playsinline="playsinline"
                        className="video w-full h-full object-cover"
                    >
                        <source src={ BannerVideo } type="video/mp4" />
                    </video>
                    <hgroup className="absolute bottom-5 md:top-40 xl:top-64 px-5 lg:px-10 xl:px-20 drop-shadow-lg" data-aos="fade-up" data-aos-delay="300">
                        <div className="wrap text-white text-opacity-85">
                            <h2 className="text-3xl lg:text-6xl xl:text-8xl font-bold flex gap-4 items-end">
                                <div className="relative">
                                    <div className="absolute inset-0 logo-overlay"></div>
                                    <Logo className="logo w-[100px] xl:w-[140px] h-auto relative z-10 mb-10 md:mb-14" />
                                </div>
                                <div className="max-md:-ml-6">Stromunion AG</div>
                            </h2>
                            <h1 className="text-xl xl:text-3xl mt-4">Nachhaltig, ökonomisch, erfolgreich – Ihre Experten für Solarenergie</h1>
                            <p className="lg:max-w-[50%] mt-10 text-lg font-light hidden md:block">
                                Mit maßgeschneiderten Solar- und Energielösungen sorgen wir dafür, dass nachhaltige Energie für jeden zugänglich wird – effizient, kostensparend und zukunftsorientiert.
                            </p>
                        </div>
                    </hgroup>
                    <div className="absolute bottom-0 xl:left-0 right-0 px-10 xl:px-20 pb-10 hidden md:block" data-aos="fade-up" data-aos-delay="500">
                        <div className="flex justify-between items-end">
                            <div className="social flex gap-2">
                                <div className="bg-[#000000] bg-opacity-65 rounded-full w-auto h-12 p-3 flex gap-x-4 text-white text-nowrap">
                                    <FontAwesomeIcon icon={faPhone} size="2x" className="w-full h-full" /> <a href="tel:+491728333397">+49 (0) 172 8333397</a>
                                </div>
                                <div className="bg-[#000000] bg-opacity-65 rounded-full w-auto h-12 p-3 flex gap-x-4 text-white">
                                    <FontAwesomeIcon icon={faAt} size="2x" className="w-full h-full" /> <a href="mailto:info@stromunion.com">info@stromunion.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4" data-aos="fade-up">
                <div className="px-5 xl:px-20 py-5 md:py-10 flex flex-col xl:flex-row wrap justify-between xl:gap-16">
                    <div className="flex basis-full xl:basis-2/5 items-center gap-10 text-left">
                        <div>
                            <div className="text-3xl mb-4 line">
                                Willkommen bei Stromunion AG
                            </div>
                            <div className="text-md font-light md:font-normal md:text-2xl">
                                Ihrem Partner für innovative Energielösungen!<br /> Wir setzen auf nachhaltige Technologien, um eine grünere Zukunft zu schaffen.
                            </div>
                        </div>
                    </div>
                    <div className="basis-full xl:basis-3/5">
                        <div className='text-lg font-light mt-4'>
                            Die Stromunion AG steht seit 2009 für nachhaltigen Erfolg durch Solarenergie. Mit einem Portfolio von über 22 Megawatt und Speicherkapazitäten von mehreren Megawatt-Stunden gestalten wir die Zukunft der Energieversorgung aktiv mit. Unser Fokus liegt nicht nur auf ökologischen, sondern auch auf wirtschaftlich attraktiven Lösungen, die hohe Erträge und Renditen sichern.
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" className="pt-4">
                <div className="wrap pb-10 md:py-10 grid grid-cols-12 grid-rows-4 md:grid-rows-7 gap-4 h-[150vh] md:h-auto">
                    <div data-aos="fade-right" className="col-start-1 col-span-3 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-span-4 rounded-tr-3xl rounded-br-3xl overflow-hidden border-l-0 border-4 border-[#000000]"></div>
                    <div data-aos="fade-right" className="col-start-11 col-span-3 row-start-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-3 rounded-tl-3xl rounded-bl-3xl md:rounded-none md:rounded-tr-3xl md:rounded-br-3xl overflow-hidden bg-[#FF0201] "></div>
                    <div data-aos="fade-right" className="block md:hidden col-start-1 col-span-1 row-start-2 row-span-1 rounded-tr-3xl rounded-br-3xl overflow-hidden bg-black "></div>
                    <div data-aos="fade-right" className="col-start-4 col-span-9 row-start-1 row-span-1 md:col-start-2 md:col-span-2 md:row-span-7 rounded-3xl overflow-hidden">
                        <StaticImage
                            src="../images/banner16.jpg"
                            height={750}
                            className="h-full animation grayscale hover:grayscale-0"
                        />
                    </div>
                    <div data-aos="fade-down" className="overtext col-start-7 col-span-6 row-start-3 row-span-1 md:col-start-4 md:col-span-4 md:row-span-5 rounded-3xl overflow-hidden animation grayscale hover:grayscale-0">
                        <StaticImage
                            src="../images/banner11.jpg"
                            height={750}
                            className="h-full"
                        />
                        <div className="text">
                            <h3 className='hidden md:block'>Freiflächenanlagen</h3>
                            <h3 className='block md:hidden'>Freiflächen<br/>anlagen</h3>
                            <p className='hidden md:block'>
                                Wir entwickeln und realisieren maßgeschneiderte Anlagen für maximale Energieausbeute.
                            </p>
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
                            src="../images/banner17.jpg"
                            height={750}
                            className="h-full"
                        />
                        <div className="text">
                            <h3>Dachanlagen</h3>
                            <p className='hidden md:block'>
                                Unsere Dachanlagen verwandeln ungenutzte Flächen in effiziente Energiequellen, senken Ihre Kosten und fördern nachhaltige Stromerzeugung.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:ml-0 row-start-4 row-span-1 md:col-start-4 md:col-span-4 md:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 md:p-10 font-light">
                        <h3 className="text-2xl mb-2">Industriespeicher</h3>
                        <p>Unsere modernen Speichersysteme gewährleisten eine stabile Stromversorgung, indem sie überschüssige Solarenergie speichern und bei Bedarf effizient verfügbar machen.</p>
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
            <section id="map" className="px-4 pt-28 pb-10 md:py-28 bg-black text-white" data-aos="fade-up">
                <div className="headline text-center md:max-w-[60%] mx-auto">
                    <h3 className="text-2xl md:text-4xl font-light">
                        Effiziente Photovoltaikanlagen für Dächer und Freiflächen – Nachhaltige Energie für Deutschland und Europa
                    </h3>
                </div>
                <div className="btns flex justify-center gap-4 pt-14">
                    <div>
                        <Link to="/projekte" className="bg-white hover:bg-zinc-100 text-black py-2 px-4 rounded-full font-light">Alle Projekte</Link>
                    </div>
                    <div>
                        <Link to="/kotankt" className="bg-black hover:bg-zinc-900 text-white py-2 px-4 border border-white rounded-full font-light">Kontaktieren Sie uns</Link>
                    </div>
                </div>
                <div className="map-wrap -mx-4 mt-20 mb-0">
                    <Map /> 
                </div>
            </section>
            <section id="team" className="px-4 pt-32 pb-10" data-aos="fade-up">
                <div ref={ref} className="container max-w-[90%] xl:max-w-[60%] relative">
                    <motion.div style={{ y: y }} className="absolute left-0 top-5 md:top-0 -translate-x-11 -translate-y-16">
                        <StaticImage
                            src="../images/banner.jpg"
                            width={150}
                            height={150}
                            className="rounded-xl"
                        />
                    </motion.div>
                    <motion.div style={{ y: y2 }} className="absolute right-0 top-24 md:top-full -translate-x-11 -translate-y-36">
                        <StaticImage
                            src="../images/banner2.jpg"
                            width={150}
                            height={150}
                            className="rounded-xl"
                        />
                    </motion.div>
                    <h3 className="relative z-10 md:text-center text-black text-5xl lg:text-7xl xl:text-9xl">Für jedes Projekt das richtige <span className='text-[#FF0201]'>Team</span>.</h3>
                </div>
                <div className="container max-w-[90%] xl:max-w-[60%] py-10 text-2xl text-left md:pr-40 font-light relative z-10">
                    <div>
                        <strong>Erfolg ist Teamsache.</strong> Und Teamarbeit wird bei uns ganz besonders groß geschrieben. Hinter jedem Projekt, dass die Stromunion entwickelt, steht <strong>ein Team von Experten</strong>, deren Fähigkeiten genau auf die Erfordernisse des jeweiligen Projekts abgestimmt sind. Der Vorteil dabei: Wir sind ganz besonders stark, wenn es um die Umsetzung von individuellen Projekten und Lösungen geht.
                    </div>
                    <div className='mt-10'>
                        Gemeinsam mit unseren <strong>erfahrenen Partnern</strong> realisieren wir nachhaltige und innovative Energielösungen auf höchstem Niveau. <FontAwesomeIcon icon={faArrowDown} size="2x" className="w-5 h-5 ml-4 text-black" />
                    </div>
                </div>
            </section>
            <section id="partners" className="py-10 bg-zinc-100" data-aos="fade-up">
                <div className="container flex flex-wrap justify-around items-center gap-10 px-10 xl:px-20">
                    <div>
                        <StaticImage
                            src="../images/partners/Huawei-Logo.svg"
                            height={60}
                            layout="fixed"
                            objectFit='contain'
                            className='!w-full'
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/partners/longi.svg"
                            height={60}
                            layout="fixed"
                            objectFit='contain'
                            className='!w-full'
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/partners/Sungrow_Power_Supply.svg"
                            height={60}
                            layout="fixed"
                            objectFit='contain'
                            className='!w-full'
                        />
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <SEO />
)