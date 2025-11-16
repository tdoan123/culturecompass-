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
    position: { x: 82, y: 32 },
  },
  {
    id: 'maori',
    name: 'Māori People',
    region: 'New Zealand',
    position: { x: 92, y: 82 },
  },
  {
    id: 'navajo',
    name: 'Navajo Nation',
    region: 'Southwestern United States',
    position: { x: 18, y: 33 },
  },
  {
    id: 'sami',
    name: 'Sámi People',
    region: 'Northern Europe',
    position: { x: 52, y: 18 },
  },
  {
    id: 'aboriginal',
    name: 'Aboriginal Australians',
    region: 'Australia',
    position: { x: 84, y: 72 },
  },
  {
    id: 'inuit',
    name: 'Inuit',
    region: 'Arctic Region',
    position: { x: 28, y: 12 },
  },
  {
    id: 'maya',
    name: 'Maya People',
    region: 'Mexico & Central America',
    position: { x: 20, y: 42 },
  },
  {
    id: 'masai',
    name: 'Maasai People',
    region: 'East Africa',
    position: { x: 56, y: 58 },
  },
  {
    id: 'karen',
    name: 'Karen People',
    region: 'Thailand & Myanmar',
    position: { x: 74, y: 44 },
  },
  {
    id: 'quechua',
    name: 'Quechua People',
    region: 'Andes Mountains',
    position: { x: 26, y: 62 },
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
    </div>
  )
}
