"use client"

import CoreTracks from "@/components/widgets/Home_Sections/CoreTracks"
import Hero from "@/components/widgets/Home_Sections/Hero"
import Outcome from "@/components/widgets/Home_Sections/Outcome"
import SpecializeTracks from "@/components/widgets/Home_Sections/SpecializeTracks"

export default function Home() {
  return (
    <main>
      <Hero/>
      <CoreTracks/>
      <SpecializeTracks/>
      <Outcome/>
    </main>
  )
}
