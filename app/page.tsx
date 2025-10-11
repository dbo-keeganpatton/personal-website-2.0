import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Jobs from '@/components/Jobs'


export default function Home() {
  
    return (
    
        <div>
      
            <Hero />
            <About />
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1"> <Jobs />      </div>
                <div className="flex-1"> <Projects />  </div>
            </div>
            <Contact />

        </div>
    )
}

