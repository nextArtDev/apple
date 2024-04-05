import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import HowItWorks from '@/components/HowItWorks'
import Model from '@/components/Model'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}
