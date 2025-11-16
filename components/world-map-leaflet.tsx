'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import type { Story, Event, Person } from '@/app/page'
import { BookOpen, Calendar, Users } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

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

// Custom icons for different pin types
const createCustomIcon = (color: string, IconComponent: React.ComponentType<any>) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${color === '#3b82f6' ? '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>' : ''}
          ${color === '#10b981' ? '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>' : ''}
          ${color === '#f59e0b' ? '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' : ''}
        </svg>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  })
}

const storyIcon = createCustomIcon('#3b82f6', BookOpen)
const eventIcon = createCustomIcon('#10b981', Calendar)
const personIcon = createCustomIcon('#f59e0b', Users)

export function WorldMapLeaflet({
  onSelectPeople,
  onOpenStoryForm,
  onOpenEventForm,
  onOpenContactForm,
  stories,
  showStoryPins,
  onToggleStoryPins,
  events,
  showEventPins,
  onToggleEventPins,
  people,
  showPeoplePins,
  onTogglePeoplePins,
}: WorldMapProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[80vh] w-[80%] mx-auto flex items-center justify-center bg-muted/20">
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    )
  }

  return (
    <div className="relative h-[80vh] w-[80%] mx-auto">
      {/* Control buttons */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border">
        <button
          onClick={onToggleStoryPins}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            showStoryPins
              ? 'bg-blue-500 text-white'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          Stories ({stories.length})
        </button>
        <button
          onClick={onToggleEventPins}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            showEventPins
              ? 'bg-green-500 text-white'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <Calendar className="w-4 h-4" />
          Events ({events.length})
        </button>
        <button
          onClick={onTogglePeoplePins}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            showPeoplePins
              ? 'bg-amber-500 text-white'
              : 'bg-muted text-muted-foreground hover:bg-muted/80'
          }`}
        >
          <Users className="w-4 h-4" />
          People ({people.length})
        </button>
      </div>

      <MapContainer
        center={[20, 0]}
        zoom={3}
        minZoom={2}
        maxBounds={[[-90, -180], [90, 180]]}
        maxBoundsViscosity={1.0}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Story Markers */}
        {showStoryPins &&
          stories.map((story) => (
            <Marker
              key={story.id}
              position={[story.latitude, story.longitude]}
              icon={storyIcon}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-sm mb-1">{story.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {story.shortDescription}
                  </p>
                  <p className="text-xs">
                    <strong>By:</strong> {story.firstName} {story.lastName}
                  </p>
                  <p className="text-xs">
                    <strong>Location:</strong> {story.location}
                  </p>
                  {story.videoUrl && (
                    <a
                      href={story.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-500 hover:underline mt-1 block"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}

        {/* Event Markers */}
        {showEventPins &&
          events.map((event) => (
            <Marker
              key={event.id}
              position={[event.latitude, event.longitude]}
              icon={eventIcon}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-sm mb-1">{event.eventName}</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    {event.shortDescription}
                  </p>
                  <p className="text-xs">
                    <strong>Host:</strong> {event.hostName}
                  </p>
                  <p className="text-xs">
                    <strong>Date:</strong> {event.eventDate}
                  </p>
                  <p className="text-xs">
                    <strong>Location:</strong> {event.eventLocation}
                  </p>
                  <a
                    href={event.eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:underline mt-1 block"
                  >
                    Event Info
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}

        {/* People Markers */}
        {showPeoplePins &&
          people.map((person) => (
            <Marker
              key={person.id}
              position={[person.latitude, person.longitude]}
              icon={personIcon}
            >
              <Popup maxWidth={300}>
                <div className="p-2 max-h-96 overflow-y-auto">
                  <h3 className="font-bold text-sm mb-1">
                    {person.firstName} {person.lastName}
                  </h3>
                  <p className="text-xs mb-1">
                    <strong>Pronouns:</strong> {person.pronouns}
                  </p>
                  <p className="text-xs mb-2">
                    <strong>Heritage:</strong> {person.heritageLocation}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">
                    {person.userDescription}
                  </p>
                  {person.contactInfo && (
                    <p className="text-xs mt-1">
                      <strong>Contact:</strong> {person.contactInfo}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}
