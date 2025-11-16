'use client'

import { useState } from 'react'
import { WorldMap } from '@/components/world-map'
import { InfoModal } from '@/components/info-modal'

export default function Home() {
  const [selectedPeople, setSelectedPeople] = useState<string | null>(null)

  return (
    <main className="relative min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background/95 to-background/0 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Indigenous Peoples World Map
          </h1>
          <p className="text-muted-foreground mt-2 text-balance">
            Click on the map points to explore cultures and stories of indigenous peoples around the world
          </p>
        </div>
      </header>

      <WorldMap onSelectPeople={setSelectedPeople} />

      <InfoModal
        peopleId={selectedPeople}
        open={!!selectedPeople}
        onOpenChange={(open) => !open && setSelectedPeople(null)}
      />
    </main>
  )
}
