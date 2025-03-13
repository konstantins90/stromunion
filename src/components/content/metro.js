import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Metro = ({ block }) => {
    const metro = block;
    const performance = metro.metroBox_2.strapi_json_value;
    const maxKwp = Math.max(...performance.map((item) => item.kWp));
    return (
        <section id="metro" className="pt-4">
            <div className="wrap pb-10 md:py-10 grid grid-cols-12 grid-rows-4 md:grid-rows-7 gap-4 h-[150vh] md:h-auto">
                <div data-aos="fade-right" className="col-start-1 col-span-3 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-span-4 rounded-tr-3xl rounded-br-3xl overflow-hidden border-l-0 border-4 border-[#000000]"></div>
                <div data-aos="fade-right" className="col-start-11 col-span-3 row-start-2 row-span-1 md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-3 rounded-tl-3xl rounded-bl-3xl md:rounded-none md:rounded-tr-3xl md:rounded-br-3xl overflow-hidden bg-[#FF0201]"></div>
                <div data-aos="fade-right" className="block md:hidden col-start-1 col-span-1 row-start-2 row-span-1 rounded-tr-3xl rounded-br-3xl overflow-hidden bg-black "></div>
                <div data-aos="fade-right" className="col-start-4 col-span-9 row-start-1 row-span-1 md:col-start-2 md:col-span-2 md:row-span-7 overflow-hidden border-0 rounded-3xl border-[#FF0201] relative">
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 flex flex-col leading-none text-[#FF0201]'>
                        <ReactMarkdown children={metro.metroBox_1.data.box_1} rehypePlugins={[rehypeRaw]} />
                    </div>
                </div>
                <div data-aos="fade-down" className="col-start-2 col-span-9 row-start-2 row-span-1 md:col-span-8 md:row-span-5 bg-zinc-500 text-black border-0 border-zinc-500 rounded-3xl p-8 xl:p-16 flex flex-col justify-between shadow-md overflow-hidden max-md:flex max-md:flex-col max-md:justify-center max-md:text-center">
                    <div>
                        <div className='text-xl md:text-2xl xl:text-6xl text-white md:text-white mb-2'>Leistungsentwicklung</div>
                        <div className='text-xl md:text-2xl xl:text-4xl text-white md:text-white mb-4 font-light'>im Überblick</div>
                    </div>
                    <div class="hidden md:grid grafik grid-flow-col items-end gap-2 xl:gap-4 absolute bottom-0 left-0 w-full h-3/6 aos-init aos-animate">
                        {performance.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`bg-zinc-700 opacity-100 transition-all duration-500 rounded-t-xl flex flex-col justify-between`}
                                    data-aos="fade-up" data-aos-duration="500"
                                    data-aos-delay={200 * index}
                                    style={{
                                    height: `${((item.kWp / maxKwp) * 100)+50}%`,
                                    opacity: `${(((item.kWp / maxKwp) * 100) + 60) / 100}`,
                                    }}
                                >
                                    <div className="text-center text-white text-xs md:text-lg mt-4">{item.kWp} kWp</div>
                                    <div className="text-center text-zinc-400 text-xs md:text-2xl mb-4">{item.year}</div>
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
                    <ReactMarkdown children={metro.metroBox_3.data.box_3} rehypePlugins={[rehypeRaw]} />
                </div>
                <div data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:ml-0 row-start-4 row-span-1 md:col-start-7 md:col-span-5 md:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 md:p-10 font-light max-md:flex max-md:flex-col max-md:justify-center max-md:text-center">
                    <ReactMarkdown children={metro.metroBox_4.data.box_4} rehypePlugins={[rehypeRaw]} />
                </div>
            </div>
        </section>
    );
};

export default Metro;