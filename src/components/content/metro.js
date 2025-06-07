import React from "react";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Metro = ({ block }) => {
    const metro = block;
    const performance = metro.metroBox_2.strapi_json_value;
    const maxKwp = Math.max(...performance.map((item) => item.kWp));
    return (
        <section id="metro" className="pt-4">
            <div className="wrap pb-10 lg:py-10 grid grid-cols-12 grid-rows-4 xl:grid-rows-7 gap-4 h-[150vh] xl:h-auto">
                <div id="box-1" data-aos="fade-right" className="col-start-1 col-span-3 row-start-1 row-span-1 xl:col-start-1 xl:col-span-1 xl:row-span-4 rounded-tr-3xl rounded-br-3xl overflow-hidden border-l-0 border-4 border-[#000000]"></div>
                <div id="box-2" data-aos="fade-right" className="col-start-11 col-span-3 row-start-2 row-span-1 xl:col-start-1 xl:col-span-1 xl:row-start-5 xl:row-span-3 rounded-tl-3xl rounded-bl-3xl xl:rounded-none xl:rounded-tr-3xl xl:rounded-br-3xl overflow-hidden bg-[#FF0201]"></div>
                <div id="box-3" data-aos="fade-right" className="block xl:hidden col-start-1 col-span-1 row-start-2 row-span-1 rounded-tr-3xl rounded-br-3xl overflow-hidden bg-black "></div>
                <div id="box-4" data-aos="fade-right" className="col-start-4 col-span-9 row-start-1 row-span-1 xl:col-start-2 xl:col-span-2 xl:row-span-7 overflow-hidden border-0 rounded-3xl border-[#FF0201] relative">
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 md:rotate-0 xl:-rotate-90 flex flex-col leading-none text-[#FF0201]'>
                        <ReactMarkdown children={metro.metroBox_1.data.box_1} rehypePlugins={[rehypeRaw]} />
                    </div>
                </div>
                <div id="box-5" data-aos="fade-down" className="col-start-2 col-span-9 row-start-2 row-span-1 xl:col-span-8 xl:row-span-5 bg-zinc-500 text-black border-0 border-zinc-500 rounded-3xl p-8 xl:p-16 flex flex-col justify-between shadow-md overflow-hidden max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:text-center">
                    <div className="hidden xl:block">
                        <div className='text-lg md:text-2xl xl:text-6xl text-white xl:text-white mb-2'>Leistungsentwicklung</div>
                        <div className='text-xl md:text-2xl xl:text-4xl text-white xl:text-white mb-4 font-light'>im Überblick</div>
                    </div>
                    <div class="hidden xl:grid grafik grid-flow-col items-end gap-2 xl:gap-4 absolute bottom-0 left-0 w-full h-3/6 aos-init aos-animate">
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
                                    <div className="text-center text-white text-xs xl:text-lg mt-4">{item.kWp} kWp</div>
                                    <div className="text-center text-zinc-400 text-xs xl:text-2xl mb-4">{item.year}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="xl:hidden">
                        <div className="text-3xl text-white mb-4">
                            Leistung
                        </div>
                        <div className="text-3xl">
                            { maxKwp } kWp
                        </div>
                    </div>
                </div>
                <div id="box-6" data-aos="fade-left" className="hidden xl:block xl:col-start-12 xl:col-span-1 xl:row-span-7 rounded-tl-3xl rounded-bl-3xl overflow-hidden bg-black "></div>
                <div id="box-7" data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:ml-10 md:col-span-6 xl:ml-0 row-start-3 row-span-1 xl:col-start-4 xl:col-span-3 xl:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 xl:p-10 max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:text-center">
                    <ReactMarkdown children={metro.metroBox_3.data.box_3} rehypePlugins={[rehypeRaw]} />
                </div>
                <div id="box-8" data-aos="fade-up" className="col-start-1 col-span-12 ml-4 md:col-start-7 md:col-span-6 xl:ml-0 row-start-4 md:row-start-3 row-span-1 xl:col-start-7 xl:col-span-5 xl:row-span-2 xl:text-xl bg-black text-white rounded-3xl p-4 xl:p-10 font-light max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:text-center">
                    <ReactMarkdown children={metro.metroBox_4.data.box_4} rehypePlugins={[rehypeRaw]} />
                </div>
            </div>
        </section>
    );
};

export default Metro;