import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export async function GET() {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    const allContentData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title || slug,
          order: data.order || 0,
        }
      })

    const sortedContent = allContentData.sort((a, b) => a.order - b.order)
    return NextResponse.json(sortedContent)
  } catch (error) {
    console.error('Error reading content files:', error)
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 })
  }
}
