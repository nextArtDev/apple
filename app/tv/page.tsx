import { Header } from '@/components/tv/header'
import { Hero } from '@/components/tv/Hero'
import { Usps } from '@/components/tv/Usps'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <>
      <Header />
      <main>
        <div className="bg-background relative z-10">
          <Hero />
          <Usps />
        </div>
        {/* <VideoCarousel /> */}
        <div className="h-[300vh]" />
      </main>
    </>
  )
}

export default page
