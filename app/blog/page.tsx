import Link from 'next/link'
import { getAllPosts } from '@/utils/posts'
import CursorGlow from '@/components/CursorGlow'

export const metadata = { title: 'Blog | Keegan Patton' }

export default function BlogIndex() {
    const posts = getAllPosts()

    return (
        <>
            <CursorGlow />
            <div className="max-w-2xl mx-auto px-6 py-16 lg:py-24">

                <div className="mb-12">
                    <Link
                        href="/"
                        className="text-[11px] font-mono tracking-[0.15em] uppercase text-slate-600 hover:text-slate-300 transition-colors duration-200 flex items-center gap-2 mb-8"
                    >
                        <span aria-hidden="true">←</span> Back
                    </Link>
                    <h1 className="text-4xl font-bold text-white name-glow mb-2">Blog</h1>
                    <p className="text-slate-500 text-sm">Occasional writing on things I build or find interesting.</p>
                </div>

                {posts.length === 0 ? (
                    <p className="text-slate-600 text-sm font-mono">No posts yet.</p>
                ) : (
                    <ul className="space-y-10">
                        {posts.map(post => (
                            <li key={post.slug}>
                                <Link href={`/blog/${post.slug}`} className="group block">
                                    <article className="pl-5 border-l border-white/5 group-hover:border-emerald-800/60 transition-colors duration-300">
                                        <time
                                            dateTime={post.date}
                                            className="text-[11px] text-slate-600 font-mono tracking-wide"
                                        >
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
                                            })}
                                        </time>
                                        <h2 className="text-sm font-semibold text-slate-200 group-hover:text-white mt-1 mb-2 transition-colors duration-200">
                                            {post.title}
                                        </h2>
                                        {post.description && (
                                            <p className="text-sm text-slate-500 leading-relaxed mb-3">
                                                {post.description}
                                            </p>
                                        )}
                                        {post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
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
                                    </article>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}
