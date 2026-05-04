

export default function Hero() {
    return (
        <section className='w-full h-screen flex flex-col justify-center lg:justify-around items-center lg:items-start'>
            <p className='title text-9xl lg:text-[480px] mt-2 lg:mt-0'>pure</p>
            <h1 className='subtitle text-4xl lg:text-7xl text-end pr-12 lg:pr-32 tracking-widest mt-12 lg:mt-0 w-full'>we build<br className='lg:hidden' /> brands</h1>



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
