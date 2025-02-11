import React, { useEffect, useRef } from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Map from "../components/map.js"
import Services from '../components/services.js';
import Vision from '../components/vision.js';
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

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

const LeistungenPage = ({ data }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 120);
    const y2 = useParallax(scrollYProgress, 230);

    const performance = [
        { year: 2009, kWp: 1200 },
        // { year: 2010, kWp: 2530 },
        { year: 2011, kWp: 6548 },
        // { year: 2012, kWp: 11044 },
        { year: 2013, kWp: 13694 },
        // { year: 2015, kWp: 14564 },
        { year: 2016, kWp: 19161 },
        // { year: 2017, kWp: 22530 },
        { year: 2018, kWp: 23330 },
        // { year: 2019, kWp: 24500 },
        { year: 2020, kWp: 26000 },
        // { year: 2021, kWp: 27500 },
        { year: 2022, kWp: 28540 },
        // { year: 2023, kWp: 31045 },
        { year: 2024, kWp: 33105 },
    ];
    const maxKwp = Math.max(...performance.map((item) => item.kWp));

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
                <div className="wrap px-5 xl:px-20 py-5 md:py-10 flex justify-between">
                    <div className="flex items-center gap-10 text-center md:text-left">
                        <div>
                            <div className="text-3xl xl:text-8xl mb-4 line">
                                Unsere Leistungen
                            </div>
                            <div className="text-3xl xl:text-5xl font-light">
                                Maßgeschneiderte Energielösungen für Sie
                            </div>
                            <div className='text-xl md:text-3xl font-light mt-10 md:max-w-[70%]'>
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
                <div className="container md:max-w-[40%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                    <h3 className='text-4xl font-light line inline-block mx-auto'>Erfolgreiche Projekte, nachhaltige Lösungen</h3>
                    <p className='text-xl font-light mt-10'>
                        Unsere Leistungen sprechen für sich – überzeugen Sie sich selbst von unseren erfolgreich umgesetzten Projekten. Erfahren Sie, wie wir innovative Energiekonzepte in die Praxis umsetzen und nachhaltige Ergebnisse erzielen.
                    </p>
                    <div className='mt-10'>
                        <Link to="/projekte" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                            Zu unseren Referenzen <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-8 h-8 ml-5 text-zinc-200 relative" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default LeistungenPage
