'use client'

import dynamic from 'next/dynamic'
import type { Story, Event, Person } from '@/app/page'

interface WorldMapProps {
  onSelectPeople: (id: string) => void
  onOpenStoryForm: () => void
  onOpenEventForm: () => void
  onOpenContactForm: () => void
  stories: Story[]
  showStoryPins: boolean
  onToggleStoryPins: () => void
  events: Event[]
  showEventPins: boolean
  onToggleEventPins: () => void
  people: Person[]
  showPeoplePins: boolean
  onTogglePeoplePins: () => void
}

// Dynamically import the Leaflet map component with SSR disabled
const WorldMapLeaflet = dynamic(
  () => import('./world-map-leaflet').then((mod) => mod.WorldMapLeaflet),
  {
    ssr: false,
    loading: () => (
      <div className="h-[80vh] w-full flex items-center justify-center bg-muted/20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading interactive map...</p>
        </div>
      </div>
    ),
  }
)

export function WorldMapWrapper(props: WorldMapProps) {
  return <WorldMapLeaflet {...props} />
}
