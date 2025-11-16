'use client'

import { useState, useEffect } from 'react'
import { WorldMapWrapper } from '@/components/world-map-wrapper'
import { InfoModal } from '@/components/info-modal'
import { StoryForm } from '@/components/story-form'
import { EventForm } from '@/components/event-form'
import { ContactForm } from '@/components/contact-form'
import { CultureCompassHeader } from '@/components/culture-compass-header'
import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { BookOpen, Calendar, Users } from 'lucide-react'

export interface Story {
  id: string
  firstName: string
  lastName: string
  location: string
  latitude: number
  longitude: number
  title: string
  shortDescription: string
  story: string
  videoUrl?: string
  createdAt: Date
}

export interface Event {
  id: string
  eventName: string
  hostName: string
  eventDate: string
  eventLocation: string
  latitude: number
  longitude: number
  shortDescription: string
  eventUrl: string
  createdAt: Date
}

export interface Person {
  id: string
  firstName: string
  lastName: string
  pronouns: string
  heritageLocation: string
  latitude: number
  longitude: number
  userDescription: string
  contactInfo?: string
  createdAt: Date
}

export default function Home() {
  const [selectedPeople, setSelectedPeople] = useState<string | null>(null)
  const [storyFormOpen, setStoryFormOpen] = useState(false)
  const [eventFormOpen, setEventFormOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [stories, setStories] = useState<Story[]>([])
  const [showStoryPins, setShowStoryPins] = useState(false)
  const [events, setEvents] = useState<Event[]>([])
  const [showEventPins, setShowEventPins] = useState(false)
  const [people, setPeople] = useState<Person[]>([])
  const [showPeoplePins, setShowPeoplePins] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storiesRes, eventsRes, peopleRes] = await Promise.all([
          fetch('/api/stories'),
          fetch('/api/events'),
          fetch('/api/people'),
        ])

        const [storiesData, eventsData, peopleData] = await Promise.all([
          storiesRes.json(),
          eventsRes.json(),
          peopleRes.json(),
        ])

        setStories(storiesData)
        setEvents(eventsData)
        setPeople(peopleData)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleAddStory = async (story: Omit<Story, 'id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(story),
      })

      if (!response.ok) throw new Error('Failed to create story')

      const newStory = await response.json()
      setStories([newStory, ...stories])
      console.log('New story added:', newStory)
    } catch (error) {
      console.error('Failed to add story:', error)
      alert('Failed to add story. Please try again.')
    }
  }

  const handleAddEvent = async (event: Omit<Event, 'id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      })

      if (!response.ok) throw new Error('Failed to create event')

      const newEvent = await response.json()
      setEvents([newEvent, ...events])
      console.log('New event added:', newEvent)
    } catch (error) {
      console.error('Failed to add event:', error)
      alert('Failed to add event. Please try again.')
    }
  }

  const handleAddPerson = async (person: Omit<Person, 'id' | 'createdAt'>) => {
    try {
      const response = await fetch('/api/people', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(person),
      })

      if (!response.ok) throw new Error('Failed to create person')

      const newPerson = await response.json()
      setPeople([newPerson, ...people])
      console.log('New person added:', newPerson)
    } catch (error) {
      console.error('Failed to add person:', error)
      alert('Failed to add person. Please try again.')
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <CultureCompassHeader />
      <HeroSection />
      
      <header className="bg-gradient-to-b from-background/95 to-background/0 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            WorldMap
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={() => setStoryFormOpen(true)}
              variant="default"
              size="default"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Stories
            </Button>
            <Button
              onClick={() => setEventFormOpen(true)}
              variant="default"
              size="default"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Events
            </Button>
            <Button
              onClick={() => setContactFormOpen(true)}
              variant="default"
              size="default"
            >
              <Users className="mr-2 h-4 w-4" />
              People
            </Button>
          </div>
        </div>
      </header>

      <div style={{ marginTop: '32px' }}>
        <WorldMapWrapper
          onSelectPeople={setSelectedPeople}
          onOpenStoryForm={() => setStoryFormOpen(true)}
          onOpenEventForm={() => setEventFormOpen(true)}
          onOpenContactForm={() => setContactFormOpen(true)}
          stories={stories}
          showStoryPins={showStoryPins}
          onToggleStoryPins={() => setShowStoryPins(!showStoryPins)}
          events={events}
          showEventPins={showEventPins}
          onToggleEventPins={() => setShowEventPins(!showEventPins)}
          people={people}
          showPeoplePins={showPeoplePins}
          onTogglePeoplePins={() => setShowPeoplePins(!showPeoplePins)}
        />
      </div>

      {/* About Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            OUR MISSION
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              Compasses have helped explorers adventure the world for centuries, but it's peoples cultural compasses that guide them through their lives.
            </p>

            <p>
              The world has so much to share, but cultural stories and connections can get lost in the noise of everything else. People need a platform focused on connecting users who want to learn about the world and the cultures within it. <span className="font-semibold text-gray-900">CultureCompass is here to guide you!</span>
            </p>

            <p>
              CultureCompass is a community-driven platform with a mission to help people build their knowledge of the Indigenous cultures in their area and around the world. Our interactive maps allow people to explore stories through video or text, discover events to attend in their area, and find people who want to form connections through cultural conversations.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <p className="text-gray-800">
                <span className="font-semibold">Our Commitment:</span> Our team reviews and approves all submitted content before it's uploaded to the maps. We strive to maintain authenticity and respect for all cultures and their knowledge. CultureCompass is a platform for educational purposes, and all content should be treated as such with the utmost respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <InfoModal
        peopleId={selectedPeople}
        open={!!selectedPeople}
        onOpenChange={(open) => !open && setSelectedPeople(null)}
      />

      <StoryForm 
        open={storyFormOpen} 
        onOpenChange={setStoryFormOpen}
        onSubmit={handleAddStory}
      />
      <EventForm 
        open={eventFormOpen} 
        onOpenChange={setEventFormOpen}
        onSubmit={handleAddEvent}
      />
      <ContactForm
        open={contactFormOpen}
        onOpenChange={setContactFormOpen}
        onSubmit={handleAddPerson}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 mt-auto">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Left Column - Branding */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-2">CultureCompass</h3>
              <p className="text-sm text-gray-400">Connecting Cultures, Sharing Stories</p>
            </div>

            {/* Middle and Right columns can be used for additional content */}
            <div className="md:col-span-2">
              {/* Hackathon Disclaimer */}
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-200 text-center">
                  <span className="font-semibold">Hackathon Demo Notice:</span> For our hackathon purpose, all events, people, and stories are AI-generated to illustrate the content and interactive features of the platform.
                </p>
              </div>

              <div className="text-sm leading-relaxed text-gray-400 space-y-4">
                <p>
                  CultureCompass is a platform for people around the world to connect and share their cultures digitally. CultureCompass does not create content. All rights to the content on CultureCompass belong to its creators and communities, and are to be used for educational purposes only.
                </p>

                <p>
                  Users are responsible for how they engage on CultureCompass. All submitted content is reviewed and approved by the CultureCompass team before being uploaded to the platform.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} CultureCompass. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
