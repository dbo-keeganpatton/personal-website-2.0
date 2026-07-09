import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/utils/posts'

const BASE = 'https://keeganpatton.dev'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts().map(post => ({
        url: `${BASE}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : undefined,
    }))

    return [
        { url: BASE },
        { url: `${BASE}/blog` },
        ...posts,
    ]
}
