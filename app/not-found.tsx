import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <p className="text-emerald-400 text-sm font-mono mb-3">
                <span aria-hidden="true">❯</span> 404: page not found
            </p>
            <h1 className="text-4xl font-bold text-white name-glow mb-4">
                Nothing here
            </h1>
            <p className="text-slate-500 text-sm mb-8 max-w-sm">
                The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <Link
                href="/"
                className="px-4 py-2.5 rounded border border-emerald-800 text-emerald-400 text-sm hover:bg-emerald-950 hover:border-emerald-600 transition-colors duration-200"
            >
                Back home
            </Link>
        </main>
    )
}
