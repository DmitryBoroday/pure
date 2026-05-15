'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, } from 'swiper/modules'

const data = [
    {
        video: '/videos/city_fast.mp4',
        tag: 'TO MUCH NOISE',
        poster: '/videos/city_fast.avif'
    },
    {
        video: '/videos/oil.mp4',
        tag: 'brain is boiling',
        poster: '/videos/oil.avif'
    },
    {
        video: '/videos/blood.mp4',
        tag: 'still hard to',
        poster: '/videos/blood.avif'
    },
    {
        video: '/videos/cartoon.mp4',
        tag: 'make decision',
        poster: '/videos/cartoon.avif'
    },
    {
        video: '/videos/bamboo-shake.mp4',
        tag: 'be patient',
        poster: '/videos/bamboo-shake.avif'
    },
    {
        video: '/videos/lava.mp4',
        tag: 'keep searching',
        poster: '/videos/lava.avif'
    },
    {
        video: '/videos/wave.mp4',
        tag: 'stay calm',
        poster: '/videos/wave.avif'
    },
    {
        video: '/videos/wasp-2.mp4',
        tag: 'work harder',
        poster: '/videos/wasp-2.avif'
    },
    {
        video: '/videos/horses.mp4',
        tag: 'keep pushing',
        poster: '/videos/horses.avif'
    },
    {
        video: '/videos/samurai.mp4',
        tag: 'pursue the goal',
        poster: '/videos/samurai.avif'
    },
    {
        video: '/videos/lips.mp4',
        tag: 'you will succeed',
        poster: '/videos/lips.avif'
    },
    {
        video: '/videos/plane.mp4',
        tag: 'you will win',
        poster: '/videos/plane.avif'
    },
]

export default function Sycho() {
    return (
        <Swiper
            loop={true}
            spaceBetween={0}

            effect={'fade'}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className='bg-black w-full h-full lg:h-140'
        >
            {data?.map((item, idx) => (
                <SwiperSlide key={idx} className='relative w-full h-full'>
                    <video src={item.video} className='w-full h-full object-cover pointer-events-none select-none bg-black'
                        loop
                        autoPlay
                        muted
                        playsInline
                        controls={false}
                        preload='auto'
                        width='100%'
                        height='100%'
                        poster={item.poster} />
                    <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <p className='sycho text-white text-5xl lg:text-[140px] uppercase bg-white/10 backdrop-blur-lg text-center font-bold lg:px-12 w-fit lg:py-8'>{item.tag}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
