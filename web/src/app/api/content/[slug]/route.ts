import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 })
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const contentData = {
      slug,
      title: data.title || slug,
      order: data.order || 0,
      content
    }

    return NextResponse.json(contentData)
  } catch (error) {
    console.error(`Error reading content for slug ${params.slug}:`, error)
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 })
  }
}
