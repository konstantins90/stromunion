import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Banner from '../components/banner.js';
import Steps from '../components/steps.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faCircleArrowRight,
    faPhone,
    faAt,
    faLocationDot
} from "@fortawesome/free-solid-svg-icons"

const KontaktPage = ({ data }) => {
    return (
        <Layout>
            <Banner />
            <section className="p-4" data-aos="fade-up">
                <div className="px-5 xl:px-20 py-5 md:py-10">
                    <div className="md:flex items-center gap-10 text-left">
                        <div>
                            <div className="text-3xl md:text-6xl xl:text-8xl mb-4 line">
                                Kontaktieren Sie uns
                            </div>
                            <div className="text-2xl md:text-3xl xl:text-5xl font-light">
                                Wir sind für Sie da
                            </div>
                            <div className='text-xl md:text-3xl font-light mt-10 xl:max-w-[70%]'>
                                Sie haben Fragen oder möchten mehr über unsere Leistungen erfahren? Wir stehen Ihnen mit unserem Know-how zur Seite. Kontaktieren Sie uns für eine persönliche Beratung – gemeinsam finden wir die beste Lösung für Ihre individuellen Anforderungen. Wir freuen uns auf Ihre Nachricht!
                            </div>
                            <div className="">
                                <div className='text-lg md:text-2xl mt-10 font-light flex flex-col md:flex-row wrap gap-4 overflow-x-scroll md:overflow-hidden'>
                                    <div className='bg-black text-white p-10 rounded-xl flex flex-col justify-center gap-4'>
                                        <div>
                                            <FontAwesomeIcon icon={faPhone} size="1x" className="w-4 h-4 md:w-6 md:h-6 mr-2 text-stromRed" /> <a href="tel:+491728333397">+49 (0) 172 8333397</a>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faAt} size="1x" className="w-4 h-4 md:w-6 md:h-6 mr-2 text-stromRed" /> <a href="mailto:info@stromunion.com">info@stromunion.com</a>
                                        </div>
                                    </div>
                                    <a href="https://maps.app.goo.gl/avgT6KUM7tVKBTHd8" target='_blank' className='flex items-center bg-black text-white p-10 rounded-xl'>
                                        <div>
                                            <FontAwesomeIcon icon={faLocationDot} size="1x" className="w-4 h-4 md:w-6 md:h-6 pr-4 text-stromRed" />
                                        </div>
                                        <div>
                                            Stromunion AG<br/>
                                            Hohe Bleichen 18<br/>
                                            20354 Hamburg
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="bg">
                    <div className="bg parallax h-[70vh] md:h-screen relative" style={{ "background-image": "url('https://ik.imagekit.io/smetana/Stromunion%20AG/6001.jpg?updatedAt=1737811086864')" }}>
                        <div class="w-full h-full absolute inset-0 img-overlay"></div>
                        <div className="container text-center h-full flex flex-col justify-center relative">
                            <div className="text-4xl md:text-6xl lg:text-14xl font-bold text-[#FEBD2F]">Energie von oben</div>
                            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FEBD2F]">Nachhaltig und zukunftssicher</div>
                            <p className="text-lg lg:text-2xl mt-10 text-white">Mit unseren Anlagen setzen Sie auf umweltfreundliche Energiegewinnung, reduzieren Ihren CO2-Fußabdruck und investieren in eine nachhaltige Zukunft.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="step-by-step" className="py-10 bg-black">
                <div className="container py-20 text-zinc-200" data-aos="fade-up">
                    <h3 className='text-4xl xl:text-6xl font-light line'>Schritt für Schritt zur Solaranlage</h3>
                    <p className='mt-8 text-xl font-light'>Von der ersten Beratung bis zur langfristigen Betreuung – wir begleiten Sie bei jedem Schritt auf dem Weg zu Ihrer eigenen Solaranlage. Mit unserem strukturierten und professionellen Prozess sorgen wir dafür, dass Ihre Anlage nicht nur umweltfreundlich, sondern auch maximal effizient und zuverlässig ist.</p>
                    <Steps />
                </div>
                <div className="container md:max-w-[40%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                    <h3 className='text-3xl md:text-4xl font-light line inline-block mx-auto'>
                        Jetzt aktiv werden!
                    </h3>
                    <p className='text-xl font-light mt-10'>
                        Starten Sie Ihren Weg zu nachhaltiger Energie noch heute. Vereinbaren Sie ein unverbindliches Beratungsgespräch und entdecken Sie die Vorteile Ihrer eigenen Solaranlage.
                    </p>
                    <div className='mt-10'>
                    <a href="tel:+491728333397" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-xl md:text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                        Ruffen Sie uns an <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-5 h-5 md:w-8 md:h-8 ml-5 text-zinc-200 relative" />
                    </a>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default KontaktPage
