import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Jobs from '@/components/Jobs'
import EmailButton from '@/components/EmailButton'


export default function Home() {
  
    return (
   
        <div>
            <div className="flex flex-col lg:flex-row lg:gap-28"> 
                <div className="lg:flex-1">
                    <div className="lg:fixed">
                        <div className="lg:fixed"> <Hero /> </div>
                        <div className="lg:fixed lg:max-w-lg lg:pt-52"> <About /> </div>
                        <div className="lg:fixed lg:pt-120 lg:pl-40"> <EmailButton /> </div> 
                    </div>
                </div>
                <div className="lg:flex-1 lg:pt-20">
                    <Jobs />
                    <Projects />
                </div>
            </div>
            <Contact />

        </div>
    )
}

