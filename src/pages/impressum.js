import React from 'react'
import Layout from "../components/layout.js"
import Logo from "../assets/logo.svg"
import BannerVideo from "../video/banner.mp4"

const ImpressumPage = ({ data }) => {
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
                <div className="wrap px-5 xl:px-20 py-5 md:py-10 xl:w-1/2">
                    <div className="text-3xl xl:text-8xl mb-10 line">
                        Impressum
                    </div>
                    <div class="flex flex-col lg:flex-row gap-10 text-lg font-light">
                        <div class="lg:w-2/4">
                            <dl class="contact contact_fields">
                                <dt><strong>Firmenname</strong></dt>
                                <dd>Stromunion AG</dd>
                                <dt><strong>Anschrift</strong></dt>
                                <dd>Hohe Bleichen 18, 20354 Hamburg</dd>
                                <dt><strong>Telefon</strong></dt>
                                <dd>
                                    <a href="tel:+491728333397" title="Jetzt telefonisch Kontakt mit Stromunion AG in 20354 Hamburg aufnehmen" target="_blank">
                                    <p>+49 (0) 172 8333397</p>
                                    </a>
                                </dd>
                                <dt><strong>Telefax</strong></dt>
                                <dd>+49 (0)40 226 321 574</dd>
                                <dt><strong>E-Mail</strong></dt>
                                <dd>
                                    <a href="mailto:info@stromunion.com" title="Schreiben Sie Stromunion AG in 20354 Hamburg eine E-Mail.">
                                    <p>info@stromunion.com</p>
                                    </a>
                                </dd>
                                <dt><strong>Internet</strong></dt>
                                <dd>
                                    <a href="https://stromunion.com/">
                                    <p>www.stromunion.com</p>
                                    </a>
                                </dd>
                            </dl>
                        </div>
                        <div class="lg:w-2/4">
                            <dl class="contact contact_fields">
                                <dt><strong>Vorstand</strong></dt>
                                <dd>Herr Joerg Walberer</dd>
                                <dt><strong>Rechtsform</strong></dt>
                                <dd>AG</dd>
                                <dt><strong>Registerort</strong></dt>
                                <dd>Amtsgericht Hamburg</dd>
                                <dt><strong>Registernummer</strong></dt>
                                <dd>HRB 150001</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default ImpressumPage
