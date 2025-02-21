import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Banner from '../components/banner.js'
import ProjectList from '../components/projectList.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons"

const ProjektePage = ({ data }) => {
    return (
        <Layout>
            <Banner />
            <section className="p-4" data-aos="fade-up">
                <div className="wrap px-5 xl:px-20 py-5 md:py-10 flex justify-between">
                    <div className="flex items-center gap-10 text-left">
                        <div>
                            <div className="text-3xl md:text-6xl xl:text-8xl mb-4 line">
                                Unsere Projekte
                            </div>
                            <div className="text-2xl md:text-3xl xl:text-5xl font-light">
                                Energie in Aktion
                            </div>
                            <div className='text-xl md:text-3xl font-light mt-10 xl:max-w-[70%]'>
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
                <div className="container md:max-w-[40%] lg:max-w-[60%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                    <h3 className='text-3xl md:text-4xl font-light line inline-block mx-auto'>
                        Ihr Projekt beginnt hier!
                    </h3>
                    <p className='text-xl font-light mt-10'>
                        Lassen Sie uns gemeinsam Ihre Vision in die Realität umsetzen. Egal, ob Planung, Umsetzung oder Optimierung – wir begleiten Sie auf dem Weg zu einer nachhaltigen Energielösung. Kontaktieren Sie uns für eine unverbindliche Beratung!
                    </p>
                    <div className='mt-10'>
                        <Link to="/kontakt" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-xl md:text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                            Jetzt Kontakt aufnehmen <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-5 h-5 md:w-8 md:h-8 ml-5 text-zinc-200 relative" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default ProjektePage
