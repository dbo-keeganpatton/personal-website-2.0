import { getAllPosts } from '@/utils/posts'

const BASE = 'https://keeganpatton.dev'

function escapeXml(s: string) {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
}

export function GET() {
    const posts = getAllPosts()

    const items = posts
        .map(
            post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid>${BASE}/blog/${post.slug}</guid>
      ${post.date ? `<pubDate>${new Date(post.date).toUTCString()}</pubDate>` : ''}
      ${post.description ? `<description>${escapeXml(post.description)}</description>` : ''}
    </item>`
        )
        .join('')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Keegan Patton</title>
    <link>${BASE}/blog</link>
    <description>Occasional writing on things I build or find interesting.</description>
    <language>en-us</language>${items}
  </channel>
</rss>`

    return new Response(xml, {
        headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
    })
}
