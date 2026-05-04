import CatchAttention from './components/CatchAttention'
import Hero from './components/Hero'
import StoryTell from './components/StoryTell'


export default function Home() {
  return (
    <main className='relative flex flex-col justify-center items-center w-full h-full overflow-hidden'>
      <Hero />
      <CatchAttention />
      <StoryTell />
    </main>
  )
}
