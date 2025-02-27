import React, { useEffect } from "react";
import { Link } from "gatsby"
import Logo from "../assets/logo.svg"
import AOS from "aos"

import Navigation from "./navigation";

const Header = () => {
    useEffect(() => {
      AOS.init();
    });

    return (
        <header id="header" className={`absolute top-0 left-0 right-0 z-50 font-light`}>
            <div className="mx-auto flex justify-center md:justify-between items-center px-10 py-14 xl:py-16 xl:px-24">
                <hgroup id="logo" className="drop-shadow-lg relative z-[100]" data-aos="fade-up" data-aos-delay="300">
                    <div className="wrap text-white text-opacity-85">
                        <Link to="/" className="text-3xl font-bold flex gap-4 items-end">
                            <div className="relative">
                                <div className="absolute inset-0 logo-overlay"></div>
                                <Logo className="logo w-[50px] xl:w-[60px] h-auto relative z-10 mb-5" />
                            </div>
                            <div>Stromunion AG</div>
                        </Link>
                    </div>
                </hgroup>
                <Navigation />
            </div>
        </header>
    )
}

export default Header
