'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, } from 'swiper/modules'

const data = [
    {
        video: '/videos/city_fast.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/oil.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/blood.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/cartoon.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/bamboo-shake.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/lava.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/wave.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/wasp-2.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/horses.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/samurai.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/lips.mp4',
        tag: 'tag here'
    },
    {
        video: '/videos/plane.mp4',
        tag: 'tag here'
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
            className='bg-black w-full h-screen'
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
                        poster='' />
                    <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <p className='text-white text-9xl lg:text-[200px] bg-white/10 backdrop-blur-lg font-bold px-12 w-full'>{item.tag}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
