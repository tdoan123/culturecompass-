'use client'

import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

interface WorldMapProps {
  onSelectPeople: (id: string) => void
  onOpenStoryForm: () => void
  onOpenEventForm: () => void
  onOpenContactForm: () => void
}

const indigenousPeoples = [
  {
    id: 'ainu',
    name: 'Ainu People',
    region: 'Hokkaido, Japan',
    position: { x: 85, y: 35 },
  },
  {
    id: 'maori',
    name: 'Māori People',
    region: 'New Zealand',
    position: { x: 95, y: 85 },
  },
  {
    id: 'navajo',
    name: 'Navajo Nation',
    region: 'Southwestern United States',
    position: { x: 15, y: 35 },
  },
  {
    id: 'sami',
    name: 'Sámi People',
    region: 'Northern Europe',
    position: { x: 52, y: 15 },
  },
  {
    id: 'aboriginal',
    name: 'Aboriginal Australians',
    region: 'Australia',
    position: { x: 88, y: 75 },
  },
  {
    id: 'inuit',
    name: 'Inuit',
    region: 'Arctic Region',
    position: { x: 25, y: 10 },
  },
  {
    id: 'maya',
    name: 'Maya People',
    region: 'Mexico & Central America',
    position: { x: 18, y: 45 },
  },
  {
    id: 'masai',
    name: 'Maasai People',
    region: 'East Africa',
    position: { x: 58, y: 60 },
  },
  {
    id: 'karen',
    name: 'Karen People',
    region: 'Thailand & Myanmar',
    position: { x: 75, y: 48 },
  },
  {
    id: 'quechua',
    name: 'Quechua People',
    region: 'Andes Mountains',
    position: { x: 25, y: 65 },
  },
]

export function WorldMap({ onSelectPeople, onOpenStoryForm, onOpenEventForm, onOpenContactForm }: WorldMapProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/world-map-silhouette-dark-minimalist.jpg"
            alt="World Map"
            className="h-full w-full object-cover mix-blend-soft-light"
          />
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Indigenous peoples markers */}
      <div className="absolute inset-0">
        {indigenousPeoples.map((people) => (
          <div
            key={people.id}
            className="absolute group"
            style={{
              left: `${people.position.x}%`,
              top: `${people.position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Pulse effect */}
            <div className="absolute inset-0 animate-ping">
              <div className="h-8 w-8 rounded-full bg-primary/30" />
            </div>

            {/* Marker button */}
            <Button
              onClick={() => onSelectPeople(people.id)}
              size="sm"
              className="relative h-8 w-8 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-primary-foreground/20"
            >
              <span className="sr-only">{people.name}</span>
              <div className="h-2 w-2 rounded-full bg-primary-foreground" />
            </Button>

            <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-card text-card-foreground px-4 py-2 rounded-lg shadow-xl border border-border whitespace-nowrap">
                <p className="font-semibold text-sm">{people.name}</p>
                <p className="text-xs text-muted-foreground">{people.region}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        <Button
          onClick={onOpenStoryForm}
          size="lg"
          className="bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 min-w-[240px]"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Share Your Story
        </Button>
        <Button
          onClick={onOpenEventForm}
          size="lg"
          variant="secondary"
          className="shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 min-w-[240px]"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Post Cultural Event
        </Button>
        <Button
          onClick={onOpenContactForm}
          size="lg"
          variant="outline"
          className="shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 min-w-[240px] bg-card/95 backdrop-blur-sm"
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Create Profile
        </Button>
      </div>

      <div className="absolute bottom-8 left-8 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 shadow-2xl max-w-xs">
        <h3 className="font-bold text-lg mb-3 text-card-foreground">How to Explore</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
            </div>
            <p>Click markers to view details</p>
          </div>
          <p className="text-xs leading-relaxed">
            Each point contains videos, photos, audio, and rich cultural stories of indigenous peoples.
          </p>
        </div>
      </div>
    </div>
  )
}
