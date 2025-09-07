import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'



export const metadata = {
    title: 'Keegan Patton | Personal Site',
    description: 'Personal Site for Keegan Patton',
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
    
        <html lang="en">
            <body className="bg-white text-gray-900">
                <CursorGlow />
                <Navbar />
                <main className="container mx-auto px-4">{children}</main>
                <Footer />
            </body>
        </html>
  
    )
}

