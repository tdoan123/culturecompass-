'use client'

import { useState } from 'react'
import { WorldMap } from '@/components/world-map'
import { InfoModal } from '@/components/info-modal'
import { StoryForm } from '@/components/story-form'
import { EventForm } from '@/components/event-form'
import { ContactForm } from '@/components/contact-form'
import { CultureCompassHeader } from '@/components/culture-compass-header'
import { HeroSection } from '@/components/hero-section'

export default function Home() {
  const [selectedPeople, setSelectedPeople] = useState<string | null>(null)
  const [storyFormOpen, setStoryFormOpen] = useState(false)
  const [eventFormOpen, setEventFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      // Added CultureCompass header and hero section at the top
      <CultureCompassHeader />
      <HeroSection />
      
      // Updated header to be non-absolute and repositioned
      <header className="bg-gradient-to-b from-background/95 to-background/0 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Indigenous Peoples World Map
          </h1>
          <p className="text-muted-foreground mt-2 text-balance">
            Click on the map points to explore cultures and stories of indigenous peoples around the world
          </p>
        </div>
      </header>

      <WorldMap
        onSelectPeople={setSelectedPeople}
        onOpenStoryForm={() => setStoryFormOpen(true)}
        onOpenEventForm={() => setEventFormOpen(true)}
        onOpenContactForm={() => setContactFormOpen(true)}
      />


      <InfoModal
        peopleId={selectedPeople}
        open={!!selectedPeople}
        onOpenChange={(open) => !open && setSelectedPeople(null)}
      />

      <StoryForm open={storyFormOpen} onOpenChange={setStoryFormOpen} />
      <EventForm open={eventFormOpen} onOpenChange={setEventFormOpen} />
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </main>
  )
}
