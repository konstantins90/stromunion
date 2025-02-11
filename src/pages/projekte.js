import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import ProjectList from '../components/projectList.js';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faChevronLeft,
    faChevronRight,
    faQuoteLeft,
    faArrowRight,
    faArrowDown,
    faCircleArrowRight,
    faPhone,
    faAt
} from "@fortawesome/free-solid-svg-icons"
import Logo from "../assets/logo.svg"

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
  } from "framer-motion";

import BannerVideo from "../video/banner.mp4"

const ProjektePage = ({ data }) => {
    return (
        <Layout>
            <section id="banner" className="p-4">
                <div className="relative h-full rounded-3xl overflow-hidden">
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
                <div className="wrap px-5 xl:px-20 py-5 md:pt-10 md:pb-20 flex justify-between">
                    <div className="flex items-center gap-10 text-center md:text-left">
                        <div>
                            <div className="text-3xl xl:text-8xl mb-4 line">
                                Unsere Projekte
                            </div>
                            <div className="text-3xl xl:text-5xl font-light">
                                Energie in Aktion
                            </div>
                            <div className='text-xl md:text-3xl font-light mt-10 md:max-w-[70%]'>
                                Jedes unserer Projekte ist ein Beweis für unser Engagement in Sachen Innovation und Nachhaltigkeit. Ob großflächige Solaranlagen, intelligente Speichersysteme oder maßgeschneiderte Energielösungen für Unternehmen – wir setzen Maßstäbe in der Branche. Lassen Sie sich von unseren erfolgreich realisierten Projekten inspirieren und entdecken Sie, wie wir nachhaltige Energiekonzepte in die Praxis umsetzen.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" className="py-28 bg-black text-white">
                <div className="headline text-center md:max-w-[60%] mx-auto mb-10">
                    <h3 className="text-2xl md:text-4xl font-light">
                        Effiziente Photovoltaikanlagen für Dächer und Freiflächen – Nachhaltige Energie für Deutschland und Europa
                    </h3>
                </div>
                <ProjectList />
            </section>
            <section id="step-by-step" className="py-10 bg-black">
                <div className="container md:max-w-[40%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                    <h3 className='text-4xl font-light line inline-block mx-auto'>Ihr Projekt beginnt hier!</h3>
                    <p className='text-xl font-light mt-10'>
                        Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. Egal, ob Planung, Umsetzung oder Optimierung – wir begleiten Sie auf dem Weg zu einer nachhaltigen Energielösung. Kontaktieren Sie uns für eine unverbindliche Beratung!
                    </p>
                    <div className='mt-10'>
                        <Link to="/kontakt" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                            Jetzt Kontakt aufnehmen <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-8 h-8 ml-5 text-zinc-200 relative" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default ProjektePage
