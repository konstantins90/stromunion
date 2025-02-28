import React from "react";
import BannerVideo from "../video/banner.mp4";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faAt } from "@fortawesome/free-solid-svg-icons";

const BannerHome = () => {
    return (
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
    )
}

export default BannerHome
