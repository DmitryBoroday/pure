'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, } from 'swiper/modules'

const data = [
    {
        video: '/videos/city_fast.mp4',
        tag: 'to much noise'
    },
    {
        video: '/videos/oil.mp4',
        tag: 'tag number 2'
    },
    {
        video: '/videos/blood.mp4',
        tag: 'tag number 3'
    },
    {
        video: '/videos/cartoon.mp4',
        tag: 'tag number 4 '
    },
    {
        video: '/videos/bamboo-shake.mp4',
        tag: 'tag number 5'
    },
    {
        video: '/videos/lava.mp4',
        tag: 'tag number 6'
    },
    {
        video: '/videos/wave.mp4',
        tag: 'tag number 7'
    },
    {
        video: '/videos/wasp-2.mp4',
        tag: 'tag number 8'
    },
    {
        video: '/videos/horses.mp4',
        tag: 'tag number 10'
    },
    {
        video: '/videos/samurai.mp4',
        tag: 'tag number 11'
    },
    {
        video: '/videos/lips.mp4',
        tag: 'tag number 12'
    },
    {
        video: '/videos/plane.mp4',
        tag: 'tag number 13'
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
            className='bg-black w-full h-full lg:h-150'
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
                        <p className='text-white text-5xl lg:text-[200px] bg-white/10 backdrop-blur-lg text-center font-bold lg:px-12'>{item.tag}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
