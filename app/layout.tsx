import './globals.css'
import CursorGlow from '@/components/CursorGlow'

export const metadata = {
    title: 'Keegan Patton | Personal Site',
    description: 'Personal Site for Keegan Patton',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <a
                    href="#experience"
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
