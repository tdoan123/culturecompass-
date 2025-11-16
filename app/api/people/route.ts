import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('people')
      .select('*')
      .order('createdAt', { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Error fetching people:', error)
    return NextResponse.json(
      { error: 'Failed to fetch people' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from('people')
      .insert([
        {
          firstName: body.firstName,
          lastName: body.lastName,
          pronouns: body.pronouns,
          heritageLocation: body.heritageLocation,
          latitude: body.latitude,
          longitude: body.longitude,
          userDescription: body.userDescription,
          contactInfo: body.contactInfo || null,
        },
      ])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('Error creating person:', error)
    return NextResponse.json(
      { error: 'Failed to create person' },
      { status: 500 }
    )
  }
}
