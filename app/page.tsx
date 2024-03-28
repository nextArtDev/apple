import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Highlights />
    </main>
  )
}
