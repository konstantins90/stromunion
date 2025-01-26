import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Map from "../components/map.js"
import Steps from '../components/steps.js';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faChevronLeft, faChevronRight, faQuoteLeft, faArrowRight, faArrowDown, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons"
import Logo from "../assets/logo.svg"

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
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
                <div className="relative h-full rounded-3xl overflow-hidden">
                    <video
                        autoplay="autoPlay" 
                        loop="loop" 
                        muted="muted" 
                        playsinline="playsinline"
                        className="video w-full h-full object-cover"
                    >
                        <source src={ BannerVideo } type="video/mp4" />
                    </video>
                    {/* <div className="overlay absolute left-0 top-0 right-0 bottom-0 bg-stromRed"></div> */}
                    <hgroup className="absolute bottom-5 md:top-40 xl:top-64 px-5 lg:px-10 xl:px-20 drop-shadow-lg" data-aos="fade-up" data-aos-delay="300">
                        <div className="wrap text-white text-opacity-85">
                            <h2 className="text-3xl lg:text-6xl xl:text-8xl font-bold flex gap-4 items-center">
                                <div className="relative">
                                    <div className="absolute inset-0 logo-overlay"></div>
                                    <Logo className="logo w-[60px] xl:w-[80px] h-auto relative z-10" />
                                </div>
                                <div>Stromunion AG</div>
                            </h2>
                            <h1 className="text-xl xl:text-3xl mt-4">Nachhaltig, ökonomisch, erfolgreich – Ihre Experten für Solarenergie</h1>
                            <p className="lg:max-w-[50%] mt-10 text-lg font-light hidden md:block">
                                Mit maßgeschneiderten Solar- und Energielösungen sorgen wir dafür, dass nachhaltige Energie für jeden zugänglich wird – effizient, kostensparend und zukunftsorientiert.
                            </p>
                        </div>
                    </hgroup>
                    <div className="absolute bottom-0 left-0 right-0 px-10 xl:px-20 pb-10 hidden md:block" data-aos="fade-up" data-aos-delay="500">
                        <div className="flex justify-between items-end">
                            <div className="social flex gap-2">
                                <div className="bg-[#000000] bg-opacity-65 rounded-full w-12 h-12 p-3">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x" className="w-full h-full text-white" />
                                </div>
                                <div className="bg-[#000000] bg-opacity-65 rounded-full w-12 h-12 p-3">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="w-full h-full text-white" />
                                </div>
                                <div className="bg-[#000000] bg-opacity-65 rounded-full w-12 h-12 p-3">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className="w-full h-full text-white" />
                                </div>
                            </div>
                            <div className="w-80 text-white font-light">
                                <div className="text-xl">Alle zwei Wochen realisieren wir 13&nbsp;neue Solarprojekte</div>
                                <div className="flex mt-4 gap-4">
                                    <div className="flex items-center">
                                        <div className="w-[65px] h-[65px] rounded-full overflow-hidden">
                                            <StaticImage
                                                src="../images/banner.jpg"
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                        <div className="w-[65px] h-[65px] rounded-full overflow-hidden -ml-4">
                                            <StaticImage
                                                src="../images/banner3.jpg"
                                                width={65}
                                                height={65}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-white text-sm">
                                        und tragen so aktiv zur Reduktion von CO2-Emissionen bei.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-4" data-aos="fade-up">
                <div className="wrap px-5 xl:px-20 py-5 md:py-10 flex justify-between">
                    <div className="basis-5/5 md:basis-2/5 flex items-center gap-10 text-center md:text-left">
                        <div>
                            <div className="text-3xl mb-4 line">
                                Willkommen bei Stromunion AG
                            </div>
                            <div className="text-md font-light md:font-normal md:text-2xl">
                                Ihrem Partner für innovative Energielösungen!<br /> Wir setzen auf nachhaltige Technologien, um eine grünere Zukunft zu schaffen.
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/5 hidden md:block">
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
                            <h3>Freiflächenanlagen</h3>
                            <p>
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
                    {/* <div className="col-start-12 col-span-1 row-start-3 row-span-2 rounded-tl-3xl rounded-bl-3xl overflow-hidden border-r-0 border-4 border-black "></div>
                    <div className="col-start-12 col-span-1 row-start-5 row-span-3 rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-[#000000] "></div> */}
                    <div data-aos="fade-up" className="overtext col-start-1 col-span-6 row-start-3 row-span-1 md:col-span-4 md:row-span-4 relative animation grayscale hover:grayscale-0 rounded-tr-3xl rounded-br-3xl md:rounded-3xl overflow-hidden">
                        <StaticImage
                            src="../images/banner17.jpg"
                            height={750}
                            className="h-full"
                        />
                        <div className="text">
                            <h3>Dachanlagen</h3>
                            <p>
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
                            <a href="#" className="text-3xl text-black line font">
                                Alle unsere Leistungen
                                <FontAwesomeIcon icon={faArrowRight} size="2x" className="w-8 h-8 ml-5 text-black" />
                            </a>
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
                        <a className="bg-white hover:bg-gray-100 text-black py-2 px-4 rounded-full font-light">Alle Projekte</a>
                    </div>
                    <div>
                        <a className="bg-black hover:bg-gray-900 text-white py-2 px-4 border border-white rounded-full font-light">Kontaktieren Sie uns</a>
                    </div>
                </div>
                <div className="map-wrap -mx-4 mt-20 mb-0">
                    <Map /> 
                </div>
            </section>
            <section id="team" className="px-4 pt-32 pb-10" data-aos="fade-up">
                <div ref={ref} className="container md:max-w-[60%] relative">
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
                <div className="container md:max-w-[60%] py-10 text-2xl text-left md:pr-40 font-light relative z-10">
                    <div>
                        <strong>Erfolg ist Teamsache.</strong> Und Teamarbeit wird bei uns ganz besonders groß geschrieben. Hinter jedem Projekt, dass die Stromunion entwickelt, steht <strong>ein Team von Experten</strong>, deren Fähigkeiten genau auf die Erfordernisse des jeweiligen Projekts abgestimmt sind. Der Vorteil dabei: Wir sind ganz besonders stark, wenn es um die Umsetzung von individuellen Projekten und Lösungen geht.
                    </div>
                    <div className='mt-10'>
                        Gemeinsam mit unseren <strong>erfahrenen Partnern</strong> realisieren wir nachhaltige und innovative Energielösungen auf höchstem Niveau. <FontAwesomeIcon icon={faArrowDown} size="2x" className="w-5 h-5 ml-4 text-black" />
                    </div>
                </div>
            </section>
            <section id="partners" className="py-10 bg-gray-100" data-aos="fade-up">
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
            <section>
                <div className="bg">
                    <div className="bg parallax h-screen relative" style={{ "background-image": "url('https://ik.imagekit.io/smetana/Stromunion%20AG/6001.jpg?updatedAt=1737811086864')" }}>
                        <div class="w-full h-full absolute inset-0 img-overlay"></div>
                        <div className="container text-center h-full flex flex-col justify-center relative">
                            <div className="text-6xl lg:text-14xl font-bold text-[#FEBD2F]">Energie von oben</div>
                            <div className="text-6xl lg:text-7xl font-bold text-[#FEBD2F]">Nachhaltig und zukunftssicher</div>
                            <p className="text-lg lg:text-2xl mt-10 text-white">Mit unseren Anlagen setzen Sie auf umweltfreundliche Energiegewinnung, reduzieren Ihren CO2-Fußabdruck und investieren in eine nachhaltige Zukunft.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="step-by-step" className="py-10 bg-black">
                <div className="container py-20 text-gray-200" data-aos="fade-up">
                    <h3 className='text-6xl font-light line'>Schritt für Schritt zur Solaranlage</h3>
                    <p className='mt-8 text-xl font-light'>Von der ersten Beratung bis zur langfristigen Betreuung – wir begleiten Sie bei jedem Schritt auf dem Weg zu Ihrer eigenen Solaranlage. Mit unserem strukturierten und professionellen Prozess sorgen wir dafür, dass Ihre Anlage nicht nur umweltfreundlich, sondern auch maximal effizient und zuverlässig ist.</p>
                    <Steps />
                </div>
                <div className="container md:max-w-[40%] py-10 text-gray-200 text-center" data-aos="fade-up">
                    <h3 className='text-4xl font-light line inline-block mx-auto'>Jetzt aktiv werden!</h3>
                    <p className='text-xl font-light mt-10'>
                        Starten Sie Ihren Weg zu nachhaltiger Energie noch heute. Vereinbaren Sie ein unverbindliches Beratungsgespräch und entdecken Sie die Vorteile Ihrer eigenen Solaranlage.
                    </p>
                    <div className='mt-10'>
                    <a href="#" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-2xl text-gray-200 py-4 px-8 rounded-full align-middle">
                        Ruffen Sie uns an <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-8 h-8 ml-5 text-gray-200 relative" />
                    </a>
                    </div>
                </div>
            </section>
            {/* <section id="projects" className="py-24" data-aos="fade-up">
                <div className="wrap px-10 xl:px-20 flex justify-between items-end">
                    <div className="basis-2/5">
                        <div className="text-3xl">
                            Unsere Expertise und erfolgreiche Projekte zeigen unsere Fähigkeit, individuelle Lösungen zuverlässig umzusetzen.
                        </div>
                    </div>
                    <div className="basis-2/5">
                        <div className="flex gap-4 justify-end">
                            <div>
                                <FontAwesomeIcon icon={faChevronLeft} size="2x" className="w-8 h-8 text-black p-3 bg-gray-100 rounded-full border border-gray-300" />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChevronRight} size="2x" className="w-8 h-8 text-black p-3 bg-gray-100 rounded-full border border-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 px-10 xl:px-20 mt-10">
                    <div>
                        <StaticImage
                            src="../images/banner2.jpg"
                            height={750}
                            aspectRatio={1}
                            className="h-full overlay rounded-xl"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/banner.jpg"
                            height={750}
                            aspectRatio={1}
                            className="h-full overlay rounded-xl"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/banner3.jpg"
                            height={750}
                            aspectRatio={1}
                            className="h-full overlay rounded-xl"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/banner2.jpg"
                            height={750}
                            aspectRatio={1}
                            className="h-full overlay rounded-xl"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/banner.jpg"
                            height={750}
                            aspectRatio={1}
                            className="h-full overlay rounded-xl"
                        />
                    </div>
                </div>
            </section>
            <section id="reviews" className="pt-0 pb-24" data-aos="fade-up">
                <div className="wrap px-10 xl:px-20 flex justify-between">
                    <div className="basis-2/5">
                        <div className="text-2xl xl:text-3xl">
                            Unsere Expertise und Zuverlässigkeit machen uns zu einem vertrauenswürdigen Partner – das bestätigen zahlreiche positive Bewertungen unserer zufriedenen Kunden.
                        </div>
                    </div>
                    <div className="basis-2/5 relative">
                        <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="w-16 h-16 text-red-600 absolute z-0 right-full bottom-full rotate-12 translate-y-10 translate-x-5" />
                        <div className="text-xl xl:text-2xl font-light text-gray-800 relative z-10">
                            Die Zusammenarbeit mit Stromunion war hervorragend! Das Team hat unsere Anforderungen schnell verstanden und mit höchster Professionalität umgesetzt. Besonders beeindruckt hat uns die Zuverlässigkeit, die innovativen Lösungsansätze und die offene Kommunikation während des gesamten Projekts. Wir sind äußerst zufrieden und empfehlen Stromunion gerne weiter.
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="flex gap-4 items-center">
                                <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                                    <StaticImage
                                        src="../images/person.jpg"
                                        width={75}
                                        height={75}
                                    />
                                </div>
                                <div>
                                    <p className="">Alexander Berger</p>
                                    <p className="text-sm font-light">Projektleiter Erneuerbare Energien</p>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-end">
                                <div>
                                    <FontAwesomeIcon icon={faChevronLeft} size="2x" className="w-8 h-8 text-black p-3 bg-gray-100 rounded-full border border-gray-300" />
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} size="2x" className="w-8 h-8 text-black p-3 bg-gray-100 rounded-full border border-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            
            {/* <section id="qa" className="px-4 py-16" data-aos="fade-up">
                <div className="headline text-center max-w-[60%] mx-auto">
                    <h3 className="text-4xl mb-6">
                        Häufige Fragen zu unseren Projekten und Leistungen
                    </h3>
                    Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen, Projekten und unserem Unternehmen. Sollten Sie weitere Fragen haben, stehen wir Ihnen gerne zur Verfügung.
                </div>
            </section> */}
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default IndexPage
