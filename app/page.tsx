import CatchAttention from './components/CatchAttention'
import Hero from './components/Hero'
import StoryTell from './components/StoryTell'
import Sycho from './components/Sycho'


export default function Home() {
  return (
    <main className='relative flex flex-col justify-center items-center w-full h-full overflow-hidden'>
      <Hero />
      <Sycho />
      <CatchAttention />
      <StoryTell />
    </main>
  )
}
