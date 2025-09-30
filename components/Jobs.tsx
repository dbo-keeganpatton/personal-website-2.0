import Job1 from "./Job1"
import Job2 from "./Job2"
import Job3 from "./Job3"
import JobsLine from "./JobLine"
import SkillBar from "./SkillBar"

export default function Jobs () {
  
    return (
   
        <section className="py-16">
      
            <h2 className="text-3xl font-semibold text-center mb-10 "> History </h2>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-visible">
     

                {/* Begin Jobs List */} 
                 
                <Job1 />
                <JobsLine />
                <Job2 />
                <SkillBar />
                <Job3 />
                {/* End Jobs List */} 
            
            </div>
        </section>
  
    )
}
