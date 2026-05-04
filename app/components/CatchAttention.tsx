

export default function CatchAttention() {
    return (
        <section className='w-full h-full'>
            <video
                className='w-full h-full object-cover pointer-events-none select-none bg-black'
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
                    src='/videos/city_fast.mp4'
                    type='video/mp4'
                ></source>
            </video>
        </section>
    )
}
