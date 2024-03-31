import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Model from '@/components/Model'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Highlights />
      <Model />
    </main>
  )
}
