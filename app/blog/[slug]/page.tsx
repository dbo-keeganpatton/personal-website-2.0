import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPost } from '@/utils/posts'
import CursorGlow from '@/components/CursorGlow'

export async function generateStaticParams() {
    return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const posts = getAllPosts()
    const meta = posts.find(p => p.slug === slug)
    if (!meta) return {}
    return { title: `${meta.title} | Keegan Patton` }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const posts = getAllPosts()
    if (!posts.find(p => p.slug === slug)) notFound()

    const post = await getPost(slug)

    return (
        <>
            <CursorGlow />
            <div className="max-w-2xl mx-auto px-6 py-16 lg:py-24">

                <Link
                    href="/blog"
                    className="text-[11px] font-mono tracking-[0.15em] uppercase text-slate-600 hover:text-slate-300 transition-colors duration-200 flex items-center gap-2 mb-10"
                >
                    <span aria-hidden="true">←</span> All posts
                </Link>

                <header className="mb-10 pl-5 border-l border-emerald-800/60">
                    <time
                        dateTime={post.date}
                        className="text-[11px] text-slate-600 font-mono tracking-wide"
                    >
                        {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
                        })}
                    </time>
                    <h1 className="text-3xl font-bold text-white name-glow mt-2 mb-3">{post.title}</h1>
                    {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-emerald-950/60 border border-emerald-900/50 text-emerald-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div
                    className="prose-blog"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

            </div>
        </>
    )
}
