import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
    headers: {
      'X-Api-Key': 'cbz9iWrhpOZb3ohLKPatVg==FQoNN8wxRV7vat5I'
  },
  })
  const data = await res.json()

  return NextResponse.json({ data })
}