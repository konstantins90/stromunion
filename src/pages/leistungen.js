import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Services from '../components/services.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons"
import Logo from "../assets/logo.svg"

import BannerVideo from "../video/banner.mp4"

const LeistungenPage = ({ data }) => {
    return (
        <Layout>
            <section id="banner" className="p-4">
                <div className="relative h-full rounded-3xl overflow-hidden bg-zinc-900">
                    <video
                        autoplay="autoPlay" 
                        loop="loop" 
                        muted="muted" 
                        playsinline="playsinline"
                        className="video w-full h-full object-cover absolute"
                    >
                        <source src={ BannerVideo } type="video/mp4" />
                    </video>
                    <hgroup className="py-10 px-5 lg:px-10 xl:px-20 drop-shadow-lg relative z-10" data-aos="fade-up" data-aos-delay="300">
                        <div className="wrap text-white text-opacity-85">
                            <h2 className="text-3xl font-bold flex gap-4 items-end">
                                <div className="relative">
                                    <div className="absolute inset-0 logo-overlay"></div>
                                    <Logo className="logo w-[50px] xl:w-[60px] h-auto relative z-10 mb-5" />
                                </div>
                                <div>Stromunion AG</div>
                            </h2>
                        </div>
                    </hgroup>
                </div>
            </section>
            <section className="p-4" data-aos="fade-up">
                <div className="wrap px-5 xl:px-20 py-5 md:py-10 flex justify-between">
                    <div className="flex items-center gap-10 text-left">
                        <div>
                            <div className="text-3xl md:text-6xl xl:text-8xl mb-4 line">
                                Unsere Leistungen
                            </div>
                            <div className="text-2xl md:text-3xl xl:text-5xl font-light">
                                Maßgeschneiderte Energielösungen für Sie
                            </div>
                            <div className='text-xl md:text-3xl font-light mt-10 xl:max-w-[70%]'>
                                Wir bieten <strong>maßgeschneiderte Energielösungen</strong>, die auf modernster Technologie und nachhaltiger Effizienz basieren. Von der Planung über die Installation bis hin zur Wartung – unser erfahrenes Team entwickelt innovative Konzepte für <strong>Photovoltaikanlagen, Energiespeicher, Ladeinfrastrukturen</strong> und mehr. Wir begleiten Sie auf dem Weg zu einer zukunftssicheren und wirtschaftlich rentablen Energieversorgung.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" className="pt-4">
                <Services />
            </section>
            <section id="step-by-step" className="py-10 bg-black">
                <div className="container md:max-w-[40%] lg:max-w-[60%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                    <h3 className='text-3xl md:text-4xl font-light line inline-block mx-auto'>
                        Erfolgreiche Projekte, nachhaltige Lösungen
                    </h3>
                    <p className='text-xl font-light mt-10'>
                        Unsere Leistungen sprechen für sich – überzeugen Sie sich selbst von unseren erfolgreich umgesetzten Projekten. Erfahren Sie, wie wir innovative Energiekonzepte in die Praxis umsetzen und nachhaltige Ergebnisse erzielen.
                    </p>
                    <div className='mt-10'>
                        <Link to="/projekte" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-xl md:text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                            Zu unseren Referenzen <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-5 h-5 md:w-8 md:h-8 ml-5 text-zinc-200 relative" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default LeistungenPage
