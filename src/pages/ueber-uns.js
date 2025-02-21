import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout.js"
import Banner from "../components/banner.js"
import Vision from '../components/vision.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { 
    faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons"


const IndexPage = ({ data }) => {
    const performance = [
        { year: 2009, kWp: 1200 },
        { year: 2011, kWp: 6548 },
        { year: 2013, kWp: 13694 },
        { year: 2016, kWp: 19161 },
        { year: 2018, kWp: 23330 },
        { year: 2020, kWp: 26000 },
        { year: 2022, kWp: 28540 },
        { year: 2024, kWp: 33105 },
    ];
    const maxKwp = Math.max(...performance.map((item) => item.kWp));

    return (
        <Layout>
            <Banner />
            <section className="p-4" data-aos="fade-up">
                <div className="wrap px-5 xl:px-20 py-5 md:py-10 flex justify-between">
                    <div className="flex items-center gap-10 text-left">
                        <div>
                            <div className="text-3xl md:text-6xl xl:text-8xl mb-4 line">
                                Über uns
                            </div>
                            <div className="text-2xl md:text-3xl xl:text-5xl font-light">
                                Innovativ. Engagiert. Nachhaltig
                            </div>
                            <div className='text-xl md:text-3xl font-light mt-10 xl:max-w-[70%]'>
                                Seit unserer Gründung im Jahr 2009 in Hamburg setzen wir uns leidenschaftlich für die Energiewende ein. Unser Ziel ist es, durch innovative Solarenergielösungen eine nachhaltige und wirtschaftlich erfolgreiche Zukunft zu gestalten.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service" className="pt-4">
                <div className="wrap pb-10 md:py-10 grid grid-cols-12 grid-rows-4 md:grid-rows-7 gap-4 h-[150vh] md:h-auto">
                    <div data-aos="fade-right" className="col-start-1 col-span-3 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-span-4 rounded-tr-3xl rounded-br-3xl overflow-hidden border-l-0 border-4 border-[#000000]"></div>
                    <div data-aos="fade-right" className="col-start-11 col-span-3 row-start-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-3 rounded-tl-3xl rounded-bl-3xl md:rounded-none md:rounded-tr-3xl md:rounded-br-3xl overflow-hidden bg-[#FF0201]"></div>
                    <div data-aos="fade-right" className="block md:hidden col-start-1 col-span-1 row-start-2 row-span-1 rounded-tr-3xl rounded-br-3xl overflow-hidden bg-black "></div>
                    <div data-aos="fade-right" className="col-start-4 col-span-9 row-start-1 row-span-1 md:col-start-2 md:col-span-2 md:row-span-7 rounded-3xl overflow-hidden bg-[#FF0201] relative">
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 flex flex-col leading-none text-white'>
                            <div className='text-7xl xl:text-9xl 2xl:text-[13rem] font-bold'>2009</div>
                            <div className='text-xl xl:text-3xl text-center text-nowrap'>Gründung der GmbH</div>
                        </div>
                    </div>
                    <div data-aos="fade-down" className="col-start-2 col-span-9 row-start-2 row-span-1 md:col-span-8 md:row-span-5 bg-black text-white rounded-3xl p-8 xl:p-16 flex flex-col justify-between shadow-md overflow-hidden max-md:flex max-md:flex-col max-md:justify-center max-md:text-center">
                        <div className='text-xl md:text-2xl xl:text-4xl text-white md:text-zinc-700 mb-4'>Leistungsentwicklung im Überblick</div>
                        <div class="hidden md:grid grafik grid-flow-col items-end gap-2 xl:gap-4 absolute bottom-0 left-0 w-full h-3/6 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            {performance.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`bg-zinc-900 opacity-100 transition-all duration-500 rounded-t-xl flex flex-col justify-between`}
                                        style={{
                                        height: `${((item.kWp / maxKwp) * 100)+30}%`,
                                        opacity: `${(((item.kWp / maxKwp) * 100) + 60) / 100}`,
                                        }}
                                    >
                                        <div className="text-center text-white text-xs md:text-sm mt-4">{item.kWp} kWp</div>
                                        <div className="text-center text-zinc-700 text-xs md:text-base mb-4">{item.year}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="md:hidden text-4xl">
                            { maxKwp } kWp
                        </div>
                    </div>
                    <div data-aos="fade-left" className="hidden md:block md:col-start-12 md:col-span-1 md:row-span-7 rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-black "></div>
                    {/* <div className="col-start-12 col-span-1 row-start-3 row-span-2 rounded-tl-3xl rounded-bl-3xl overflow-hidden border-r-0 border-4 border-black "></div>
                    <div className="col-start-12 col-span-1 row-start-5 row-span-3 rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-[#000000] "></div> */}
                    <div data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:ml-0 row-start-3 row-span-1 md:col-start-4 md:col-span-3 md:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 md:p-10 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:text-center">
                        <h3 className="text-7xl sm:text-4xl lg:text-7xl xl:text-8xl mb-2">2012</h3>
                        <p className="font-light">Umwandlung in Stromunion AG</p>
                    </div>
                    <div data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:ml-0 row-start-4 row-span-1 md:col-start-7 md:col-span-5 md:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 md:p-10 font-light max-md:flex max-md:flex-col max-md:justify-center max-md:text-center">
                        <h3 className="text-2xl mb-2">Unsere Mission</h3>
                        <p>Mit fundierter Expertise, innovativen Projekten und individueller Beratung setzen wir Impulse für eine grünere Welt – für private Haushalte, Unternehmen und Gemeinden gleichermaßen.</p>
                    </div>
                </div>
            </section>
            <section id="step-by-step" className="py-10 bg-black">
                <div className="container py-20 text-zinc-200" data-aos="fade-up">
                    <h3 className='text-4xl md:text-6xl font-light line'>Unsere Vision</h3>
                    <p className='mt-8 text-xl font-light'>Wir glauben an eine Zukunft, in der saubere Energie die Grundlage für wirtschaftlichen Erfolg und Umweltschutz bildet. Unsere Vision ist es, durch den Einsatz modernster Technologien und nachhaltiger Konzepte den Weg für eine grüne und lebenswerte Zukunft zu ebnen.</p>
                    <Vision />
                </div>
                <div className="container md:max-w-[40%] py-10 text-zinc-200 text-center" data-aos="fade-up">
                    <h3 className='text-3xl md:text-4xl font-light line inline-block mx-auto'>
                        Haben wir Ihr Interesse geweckt?
                    </h3>
                    <p className='text-xl font-light mt-10'>
                        Entdecken Sie unser Portfolio an innovativen Projekten und Erfolgsgeschichten – der erste Schritt zu Ihrer nachhaltigen Energiezukunft.
                    </p>
                    <div className='mt-10'>
                        <Link to="/leistungen" id="call-to-action" className="border-[#FF0201] bg-black border-4 transition duration-800 ease-in-out hover:bg-[#FF0201] text-xl md:text-2xl text-zinc-200 py-4 px-8 rounded-full align-middle">
                            Jetzt entdecken <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="w-5 h-5 md:w-8 md:h-8 ml-5 text-zinc-200 relative" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className="font-medium text-3xl"></div>
        </Layout>
    )
}

export default IndexPage
