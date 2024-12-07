import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Map from "../components/map.js"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Logo from "../assets/logo.svg"

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
            <section className="p-4">
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
            <section className="p-4">
                <div className="wrap px-10 xl:px-20 py-10 grid grid-cols-10 grid-rows-7 gap-8">
                    <div className="col-start-3 col-span-4 row-span-5 rounded-3xl overflow-hidden">
                        <StaticImage
                            src="../images/banner2.jpg"
                            height={750}
                            className="h-full overlay"
                        />
                    </div>
                    <div className="col-span-4 row-span-3 bg-gray-50 rounded-3xl p-8 flex flex-col justify-between shadow-md">
                        <div className="text-3xl">
                            <div>
                                Leistung über
                            </div>
                            <span className="text-7xl text-[#a30000]">
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
                        <div>
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
                    <div className="col-start-3 col-span-4 row-span-2">
                        Mit unserer langjährigen Erfahrung im Bereich Solarenergie begleiten wir Sie von der Planung bis zur Umsetzung effizienter Energielösungen für Ihr Zuhause oder Unternehmen. Lassen Sie uns gemeinsam die Energiewende vorantreiben!
                    </div>
                </div>
            </section>
            <section id="map" className="px-4 py-16">
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
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default IndexPage
