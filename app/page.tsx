'use client'

import { useState } from 'react'
import { WorldMap } from '@/components/world-map'
import { InfoModal } from '@/components/info-modal'
import { StoryForm } from '@/components/story-form'
import { EventForm } from '@/components/event-form'
import { ContactForm } from '@/components/contact-form'
import { CultureCompassHeader } from '@/components/culture-compass-header'
import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [selectedPeople, setSelectedPeople] = useState<string | null>(null)
  const [storyFormOpen, setStoryFormOpen] = useState(false)
  const [eventFormOpen, setEventFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <CultureCompassHeader />
      <HeroSection />
      
      <header className="bg-gradient-to-b from-background/95 to-background/0 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            WorldMap
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={() => setStoryFormOpen(true)}
              variant="default"
              size="default"
            >
              Stories
            </Button>
            <Button
              onClick={() => setEventFormOpen(true)}
              variant="default"
              size="default"
            >
              Events
            </Button>
            <Button
              onClick={() => setContactFormOpen(true)}
              variant="default"
              size="default"
            >
              People
            </Button>
          </div>
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
