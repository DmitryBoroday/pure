

export default function Hero() {
    return (
        <section className='w-full h-full flex flex-col justify-center lg:items-center  mb-6 lg:mb-24 pl-4 lg:pl-0'>
            <p className='title text-8xl lg:text-[520px] mt-2 lg:mt-0'>pure</p>
            <h1 className='subtitle text-2xl lg:text-6xl text-end pr-4 lg:pr-32 tracking-widest mt-12 lg:mt-0 w-full'>we build<br className='lg:hidden' /> brands</h1>



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
