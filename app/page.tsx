import Greeting from '@/components/Greeting'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Jobs from '@/components/Jobs'
import EmailButton from '@/components/EmailButton'


export default function Home() {
  
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:gap-28"> 
                <div className="lg:flex-1">
                    <div className="lg:fixed lg:pt-20">
                        <div className="lg:fixed lg:pl-20"> <Greeting /> </div>
                        <div className="lg:fixed lg:max-w-lg lg:pt-52"> <About /> </div>
                        <div className="lg:fixed lg:pt-110 lg:pl-45"> <EmailButton /> </div> 
                    </div>
                </div>
                <div className="lg:flex-1">
                    <Jobs />
                    <Projects />
                </div>
            </div>
        </div>
    )
}

