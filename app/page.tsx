import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Jobs from '@/components/Jobs'


export default function Home() {
  
    return (
   
        <div>
            <div className="flex flex-col lg:flex-row lg:gap-28"> 
                <div className="flex-1">
                    <div className="fixed">
                       <div className="fixed"> <Hero /> </div>
                       <div className="fixed max-w-lg pt-64"> <About /> </div>
                    </div>
                </div>
                <div className="flex-1 lg:pt-20">
                    <Jobs />
                    <Projects />
                </div>
            </div>
            <Contact />

        </div>
    )
}

