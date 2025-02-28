import React from "react"
import BannerVideo from "../video/banner.mp4"

const Banner = () => {
    return (
        <section id="banner" className="p-4">
            <div className="relative rounded-3xl overflow-hidden bg-zinc-900 h-[160px]">
                <video
                    autoplay="autoPlay"
                    loop="loop"
                    muted="muted"
                    playsinline="playsinline"
                    className="video w-full h-full object-cover absolute"
                >
                    <source src={ BannerVideo } type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Banner