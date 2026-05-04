

export default function Hero() {
    return (
        <section className='w-full h-full gap-4 pb-24'>
            <p className='title text-9xl lg:text-[440px] ml-6 lg:ml-0 mt-6 lg:mt-0'>pure</p>
            <h1 className='subtitle text-6xl lg:text-8xl text-end mr-6 lg:mr-32 tracking-widest mt-6 lg:mt-0'>we build<br className='lg:hidden' /> brands</h1>
            {/* <video
                className='w-1/3 h-75 object-cover pointer-events-none select-none bg-black'
                loop
                autoPlay
                muted
                playsInline
                controls={false}
                preload='auto'
                width='100%'
                height='100%'
                poster=''>
                <source
                    src='/videos/arrow-2.mp4'
                    type='video/mp4'
                ></source>
            </video> */}

            <h2 className='blue text-5xl lg:text-9xl mt-16 lg:mt-48 ml-8 lg:ml-12'>we make it faster!</h2>
            <h3 className='blue_dark text-5xl lg:text-9xl text-end mr-8 lg:mr-24 mt-8 lg:mt-24'>we make it better!!</h3>
            <h4 className='cyan text-5xl lg:text-9xl mt-8 lg:mt-24 lg:text-center ml-8 lg:ml-0'>we make it perfect!!!</h4>

            {/* <picture>
                <source
                    media='(min-width: 768px)'
                    srcSet={'/images/hotDesk.avif'}
                />
                <img
                    src={'/images/hotMob.avif'}
                    className='object-cover w-full h-full brightness-150'
                    alt={'Hero image'}
                    width={400}
                    height={400}
                    loading='eager'
                    fetchPriority='high'
                />
            </picture> */}

        </section>
    )
}
