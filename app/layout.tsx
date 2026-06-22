import './globals.css'
import Navbar from '@/components/Navbar'
import CursorGlow from '@/components/CursorGlow'



export const metadata = {
    title: 'Keegan Patton | Personal Site',
    description: 'Personal Site for Keegan Patton',
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <html lang="en">
            <body className="bg-white text-gray-900">
                <a
                    href="#experience"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-800 focus:text-white focus:rounded focus:outline-none"
                >
                    Skip to content
                </a>
                <div className="bg-animation">
                    <div id='stars'></div>
                    <div id='stars2'></div>
                    <CursorGlow />
                    <Navbar />
                    <main className="container mx-auto px-4">{children}</main>
                </div>
            </body>
        </html>

    )
}
