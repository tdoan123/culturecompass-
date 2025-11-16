import { createClient } from '@supabase/supabase-js'

// Supabase client for client-side operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for database tables
export interface Database {
  public: {
    Tables: {
      stories: {
        Row: {
          id: string
          firstName: string
          lastName: string
          location: string
          latitude: number
          longitude: number
          title: string
          shortDescription: string
          story: string
          videoUrl: string | null
          createdAt: string
        }
        Insert: {
          id?: string
          firstName: string
          lastName: string
          location: string
          latitude: number
          longitude: number
          title: string
          shortDescription: string
          story: string
          videoUrl?: string | null
          createdAt?: string
        }
        Update: {
          id?: string
          firstName?: string
          lastName?: string
          location?: string
          latitude?: number
          longitude?: number
          title?: string
          shortDescription?: string
          story?: string
          videoUrl?: string | null
          createdAt?: string
        }
      }
      events: {
        Row: {
          id: string
          eventName: string
          hostName: string
          eventDate: string
          eventLocation: string
          latitude: number
          longitude: number
          shortDescription: string
          eventUrl: string
          createdAt: string
        }
        Insert: {
          id?: string
          eventName: string
          hostName: string
          eventDate: string
          eventLocation: string
          latitude: number
          longitude: number
          shortDescription: string
          eventUrl: string
          createdAt?: string
        }
        Update: {
          id?: string
          eventName?: string
          hostName?: string
          eventDate?: string
          eventLocation?: string
          latitude?: number
          longitude?: number
          shortDescription?: string
          eventUrl?: string
          createdAt?: string
        }
      }
      people: {
        Row: {
          id: string
          firstName: string
          lastName: string
          pronouns: string
          heritageLocation: string
          latitude: number
          longitude: number
          userDescription: string
          contactInfo: string | null
          createdAt: string
        }
        Insert: {
          id?: string
          firstName: string
          lastName: string
          pronouns: string
          heritageLocation: string
          latitude: number
          longitude: number
          userDescription: string
          contactInfo?: string | null
          createdAt?: string
        }
        Update: {
          id?: string
          firstName?: string
          lastName?: string
          pronouns?: string
          heritageLocation?: string
          latitude?: number
          longitude?: number
          userDescription?: string
          contactInfo?: string | null
          createdAt?: string
        }
      }
    }
  }
}
