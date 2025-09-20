import { getSingleBlock } from 'features/notion/fetch'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { id } = body
    const block = await getSingleBlock(id as string)
    if (block) return Response.json(block)
    else return Response.json({ block: null })
  } catch (err) {
    console.error('route-err', err)
    return Response.json({ block: null })
  }
}
