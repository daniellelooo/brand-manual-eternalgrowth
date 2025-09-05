export interface ContentData {
  title: string
  slug: string
  order: number
  content: string
}

export async function getContentFiles(): Promise<ContentData[]> {
  try {
    const response = await fetch('/api/content')
    if (!response.ok) {
      throw new Error('Failed to fetch content files')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching content files:', error)
    return []
  }
}

export async function getContentBySlug(slug: string): Promise<ContentData> {
  try {
    const response = await fetch(`/api/content/${slug}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch content for ${slug}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Error fetching content for slug ${slug}:`, error)
    throw new Error(`Content not found: ${slug}`)
  }
}
