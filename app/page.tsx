import Sidebar from '@/components/Sidebar'
import Jobs from '@/components/Jobs'
import Projects from '@/components/Projects'

export default function Home() {
    return (
        <div className="max-w-6xl mx-auto lg:flex lg:gap-0">
            <header className="lg:w-[45%] lg:sticky lg:top-0 lg:h-screen lg:border-r lg:border-white/5">
                <Sidebar />
            </header>
            <main id="main-content" className="lg:w-[55%] px-6 py-16 lg:px-16 lg:py-24">
                <Jobs />
                <Projects />
            </main>
        </div>
    )
}
