import './globals.css'
import type { Metadata } from 'next'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
    metadataBase: new URL('https://keeganpatton.dev'),
    title: {
        default: 'Keegan Patton | Data Engineer',
        template: '%s | Keegan Patton',
    },
    description:
        'Keegan Patton is a data engineer at Walmart Global Tech building large-scale data infrastructure. Projects, experience, and occasional writing.',
    openGraph: {
        title: 'Keegan Patton | Data Engineer',
        description:
            'Data engineer at Walmart Global Tech building large-scale data infrastructure. Projects, experience, and occasional writing.',
        url: '/',
        siteName: 'Keegan Patton',
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Keegan Patton | Data Engineer',
        description:
            'Data engineer at Walmart Global Tech building large-scale data infrastructure.',
    },
    alternates: {
        canonical: '/',
        types: { 'application/rss+xml': '/feed.xml' },
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-900 focus:text-white focus:rounded focus:outline-none"
                >
                    Skip to content
                </a>
                <CursorGlow />
                {children}
            </body>
        </html>
    )
}
