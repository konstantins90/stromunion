import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Map from "../components/map.js"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faChevronLeft, faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import Logo from "../assets/logo.svg"
import BatteryIcon from "../assets/icons/battery_3383711.svg"
import PanelIcon from "../assets/icons/electric-panel_2960650.svg"
import SolarIcon from "../assets/icons/solar-energy_4275788.svg"

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <section id="banner" className="p-4">
                <div className="relative h-full rounded-3xl overflow-hidden">
                    {/* <StaticImage
                        src="../images/banner2.jpg"
                        width={1920}
                        className="flip-image"
                    /> */}
                    <video
                        autoplay="autoPlay" 
                        loop="loop" 
                        muted="muted" 
                        playsinline="playsinline"
                        className="video w-full h-full object-cover"
                    >
                        <source src="https://ik.imagekit.io/smetana/stromunion.mp4?updatedAt=1732393969822" type="video/mp4" />
                    </video>
                    <div className="overlay absolute left-0 top-0 right-0 bottom-0 bg-stromRed"></div>
                    <hgroup className="absolute top-40 xl:top-64 px-10 xl:px-20">
                        <div className="wrap text-white text-opacity-85">
                            <h2 className="text-3xl lg:text-6xl xl:text-8xl font-bold flex gap-4 items-center">
                                <div className="relative">
                                    <div className="absolute inset-0 logo-overlay"></div>
                                    <Logo className="logo w-[60px] xl:w-[80px] h-auto relative z-10" />
                                </div>
                                <div>Stromunion AG</div>
                            </h2>
                            <h1 className="text-xl xl:text-3xl mt-4">Nachhaltig, ökonomisch, erfolgreich – Ihre Experten für Solarenergie</h1>
                            <p className="max-w-[50%] mt-10 text-lg font-light">
                                Mit maßgeschneiderten Solar- und Energielösungen sorgen wir dafür, dass nachhaltige Energie für jeden zugänglich wird – effizient, kostensparend und zukunftsorientiert.
                            </p>
                        </div>
                    </hgroup>
                    <div className="absolute bottom-0 left-0 right-0 px-10 xl:px-20 pb-10">
                        <div className="flex justify-between items-end">
                            <div className="social flex gap-2">
                                <div className="bg-white bg-opacity-35 rounded-full w-12 h-12 p-3">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x" className="w-full h-full text-white" />
                                </div>
                                <div className="bg-white bg-opacity-35 rounded-full w-12 h-12 p-3">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="w-full h-full text-white" />
                                </div>
                                <div className="bg-white bg-opacity-35 rounded-full w-12 h-12 p-3">
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
                <div className="wrap px-10 xl:px-20 py-10 flex justify-between">
                    <div className="basis-3/5">
                        <div className="text-lg">
                            Willkommen bei Stromunion AG
                        </div>
                        <div className="text-3xl">
                            Ihrem Partner für innovative Energielösungen!<br /> Wir setzen auf nachhaltige Technologien, um eine grünere Zukunft zu schaffen.
                        </div>
                    </div>
                    <div className="basis-2/5">
                        
                    </div>
                </div>
            </section>
            <section className="p-4" data-aos="fade-up">
                <div className="wrap px-10 xl:px-20 py-10 grid grid-cols-10 grid-rows-7 gap-8">
                    <div className="col-start-3 col-span-4 row-span-5 rounded-3xl overflow-hidden">
                        <StaticImage
                            src="../images/banner2.jpg"
                            height={750}
                            className="h-full overlay"
                        />
                    </div>
                    <div className="col-span-4 row-span-3 bg-gray-50 rounded-3xl p-8 xl:p-16 flex flex-col justify-between shadow-md">
                        <div className="text-3xl">
                            <div>
                                Leistung über
                            </div>
                            <span className="text-7xl xl:text-9xl text-[#a30000]">
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
                    <div className="col-span-4 row-span-4">
                        <StaticImage
                            src="../images/banner3.jpg"
                            height={750}
                            className="rounded-3xl overlay"
                        />
                    </div>
                    <div className="col-start-3 col-span-4 row-span-2 xl:text-xl">
                        Mit unserer langjährigen Erfahrung im Bereich Solarenergie begleiten wir Sie von der Planung bis zur Umsetzung effizienter Energielösungen für Ihr Zuhause oder Unternehmen. Lassen Sie uns gemeinsam die Energiewende vorantreiben!
                    </div>
                </div>
            </section>
            <section id="map" className="px-4 py-16" data-aos="fade-up">
                <div className="headline text-center max-w-[60%] mx-auto">
                    <h3 className="text-4xl font-light">
                        Photovoltaikanlagen in Deutschland und Europa mit über 22,5 MW Leistung
                    </h3>
                </div>
                <div className="btns flex justify-center gap-4 pt-6">
                    <div>
                        <a className="bg-black hover:bg-gray-900 text-white py-2 px-4 rounded-full font-light">Alle Projekte</a>
                    </div>
                    <div>
                        <a className="bg-white hover:bg-gray-200 text-black py-2 px-4 border border-black rounded-full font-light">Kontaktieren Sie uns</a>
                    </div>
                </div>
                <div className="map-wrap -mx-4 my-14">
                    <Map />
                </div>
            </section>
            <section id="team" className="px-4 py-16" data-aos="fade-up">
                <div className="container max-w-[60%] relative">
                    <StaticImage
                        src="../images/banner.jpg"
                        width={150}
                        height={150}
                        className="absolut rounded-xl left-0 top-0 -translate-x-11 -translate-y-16"
                    />
                    <StaticImage
                        src="../images/banner2.jpg"
                        width={150}
                        height={150}
                        className="absolut rounded-xl right-0 top-full -translate-x-11 -translate-y-16"
                    />
                    <div className="icon absolute right-1/4 top-full -translate-y-10 p-2 bg-red-600 rounded-full">
                        <BatteryIcon className="w-10 h-10 xl:w-20 xl:h-20 fill-black" />
                    </div>
                    <div className="icon absolute right-1/3 bottom-full p-2 bg-gray-100 border rounded-full">
                        <PanelIcon className="w-10 h-10 xl:w-20 xl:h-20 fill-black" />
                    </div>
                    <div className="icon absolute left-0 top-full p-2 bg-gray-100 rounded-full">
                        <SolarIcon className="w-10 h-10 xl:w-20 xl:h-20 fill-black" />
                    </div>
                    <h3 className="relative z-10 text-center text-black lg:text-7xl xl:text-9xl">Für jedes Projekt das richtige Team.</h3>
                </div>
            </section>
            <section id="projects" className="py-24" data-aos="fade-up">
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
            </section>
            <section id="partners" className="py-14 my-24 bg-gray-100" data-aos="fade-up">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 px-10 xl:px-20">
                    <div>
                        <StaticImage
                            src="../images/partners/demo-logo.svg"
                            width={250}
                            className="grayscale opacity-55"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/partners/demo-logo.svg"
                            width={250}
                            className="grayscale opacity-55"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/partners/demo-logo.svg"
                            width={250}
                            className="grayscale opacity-55"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/partners/demo-logo.svg"
                            width={250}
                            className="grayscale opacity-55"
                        />
                    </div>
                    <div>
                        <StaticImage
                            src="../images/partners/demo-logo.svg"
                            width={250}
                            className="grayscale opacity-55"
                        />
                    </div>
                </div>
            </section>
            <section id="qa" className="px-4 py-16" data-aos="fade-up">
                <div className="headline text-center max-w-[60%] mx-auto">
                    <h3 className="text-4xl mb-6">
                        Häufige Fragen zu unseren Projekten und Leistungen
                    </h3>
                    Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen, Projekten und unserem Unternehmen. Sollten Sie weitere Fragen haben, stehen wir Ihnen gerne zur Verfügung.
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default IndexPage
